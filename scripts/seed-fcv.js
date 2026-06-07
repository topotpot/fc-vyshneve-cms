'use strict';

/*
 * FC Vyshneve — development seed.
 *
 *   npm run seed:fcv          → populate Teams, Players, Matches, News, Site Settings
 *   npm run seed:fcv:reset    → undo (reverses everything this script created)
 *
 * Identification strategy:
 *   Every documentId created is recorded in scripts/.fcv-seed-state.json.
 *   The reset script only deletes what's in that file — manually-created
 *   content is never touched.
 */

const fs = require('fs');
const path = require('path');
const DATA = require('./seed-fcv.data');

const STATE_FILE = path.join(__dirname, '.fcv-seed-state.json');

const PUBLIC_PERMISSIONS = [
  'api::team.team.find',
  'api::team.team.findOne',
  'api::player.player.find',
  'api::player.player.findOne',
  'api::match.match.find',
  'api::match.match.findOne',
  'api::news-article.news-article.find',
  'api::news-article.news-article.findOne',
  'api::site-setting.site-setting.find',
];

async function ensurePublicPermissions() {
  const role = await strapi.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });
  if (!role) {
    console.warn('  ! public role not found — skipping permissions setup');
    return;
  }
  for (const action of PUBLIC_PERMISSIONS) {
    const existing = await strapi.query('plugin::users-permissions.permission').findOne({
      where: { action, role: role.id },
    });
    if (!existing) {
      await strapi.query('plugin::users-permissions.permission').create({
        data: { action, role: role.id },
      });
    }
  }
}

function persistState(state) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

async function createDoc(uid, data) {
  return strapi.documents(uid).create({
    data: { ...data, publishedAt: new Date() },
    status: 'published',
  });
}

async function seedTeams(state) {
  console.log('[FCV seed] Teams…');
  const slugToDocId = {};
  for (const team of DATA.TEAMS) {
    const doc = await createDoc('api::team.team', team);
    state.teams.push({ documentId: doc.documentId, slug: team.slug });
    slugToDocId[team.slug] = doc.documentId;
    console.log('  + ' + team.slug);
  }
  persistState(state);
  return slugToDocId;
}

async function seedPlayers(state, slugToTeamDocId) {
  console.log('[FCV seed] Players…');
  for (const p of DATA.PLAYERS) {
    const teamDocId = slugToTeamDocId[p.teamSlug];
    if (!teamDocId) {
      console.warn('  ! skip ' + p.fullName + ' (unknown teamSlug ' + p.teamSlug + ')');
      continue;
    }
    const { teamSlug, ...rest } = p;
    const doc = await createDoc('api::player.player', { ...rest, team: teamDocId });
    state.players.push({ documentId: doc.documentId, slug: p.slug });
  }
  console.log('  + ' + state.players.length + ' players');
  persistState(state);
}

async function seedMatches(state, slugToTeamDocId) {
  console.log('[FCV seed] Matches…');
  for (const m of DATA.MATCHES) {
    const homeId = slugToTeamDocId[m.homeSlug];
    const awayId = slugToTeamDocId[m.awaySlug];
    if (!homeId || !awayId) {
      console.warn('  ! skip ' + m.homeSlug + ' vs ' + m.awaySlug + ' (missing team)');
      continue;
    }
    const { homeSlug, awaySlug, ...rest } = m;
    const doc = await createDoc('api::match.match', { ...rest, homeTeam: homeId, awayTeam: awayId });
    state.matches.push({ documentId: doc.documentId });
  }
  console.log('  + ' + state.matches.length + ' matches');
  persistState(state);
}

async function seedNews(state) {
  console.log('[FCV seed] News…');
  for (const n of DATA.NEWS) {
    const doc = await createDoc('api::news-article.news-article', n);
    state.newsArticles.push({ documentId: doc.documentId, slug: n.slug });
  }
  console.log('  + ' + state.newsArticles.length + ' news articles');
  persistState(state);
}

async function seedSiteSettings(state) {
  console.log('[FCV seed] Site Settings…');
  const docs = strapi.documents('api::site-setting.site-setting');
  const existing = await docs.findFirst();
  if (existing) {
    state.siteSettingsBackup = {
      documentId:  existing.documentId,
      clubName:    existing.clubName    || '',
      heroText:    existing.heroText    || '',
      footerText:  existing.footerText  || '',
    };
    await docs.update({
      documentId: existing.documentId,
      data: DATA.SITE_SETTINGS,
      status: 'published',
    });
    console.log('  ~ updated existing singleton (backup stored for reset)');
  } else {
    await docs.create({
      data: { ...DATA.SITE_SETTINGS, publishedAt: new Date() },
      status: 'published',
    });
    state.siteSettingsCreated = true;
    console.log('  + created singleton');
  }
  persistState(state);
}

async function main() {
  if (fs.existsSync(STATE_FILE)) {
    console.error(
      '\n[FCV seed] ABORT: a seed state file already exists at\n  ' + STATE_FILE +
      '\nRun the reset script first:\n  npm run seed:fcv:reset\n'
    );
    process.exitCode = 2;
    return;
  }

  const state = {
    seededAt: new Date().toISOString(),
    teams: [], players: [], matches: [], newsArticles: [],
    siteSettingsBackup:  null,
    siteSettingsCreated: false,
  };

  console.log('\n[FCV seed] Starting…');
  await ensurePublicPermissions();

  const slugToTeamDocId = await seedTeams(state);
  await seedPlayers(state, slugToTeamDocId);
  await seedMatches(state, slugToTeamDocId);
  await seedNews(state);
  await seedSiteSettings(state);

  console.log(
    '\n[FCV seed] DONE.  ' +
    state.teams.length + ' teams · ' +
    state.players.length + ' players · ' +
    state.matches.length + ' matches · ' +
    state.newsArticles.length + ' news.\n' +
    'State saved → ' + STATE_FILE + '\n'
  );
}

async function bootstrap() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  app.log.level = 'error';

  try {
    await main();
  } catch (e) {
    console.error('\n[FCV seed] FATAL:', e);
    process.exitCode = 1;
  } finally {
    await app.destroy();
    process.exit(process.exitCode || 0);
  }
}

bootstrap();
