'use strict';

/*
 * FC Vyshneve — development seed reset.
 *
 *   npm run seed:fcv:reset
 *
 * Reads scripts/.fcv-seed-state.json and deletes every documentId
 * recorded there. Manually-created content is never touched because
 * its documentId is not in the state file. Restores the previous
 * Site Settings snapshot if one was captured during seed.
 */

const fs = require('fs');
const path = require('path');

const STATE_FILE = path.join(__dirname, '.fcv-seed-state.json');

async function deleteDoc(uid, documentId) {
  try {
    await strapi.documents(uid).delete({ documentId });
    return true;
  } catch (e) {
    console.warn('  ! ' + uid + ' ' + documentId + ' — ' + (e.message || e));
    return false;
  }
}

async function deleteList(uid, list) {
  let ok = 0, fail = 0;
  for (const item of list || []) {
    if (await deleteDoc(uid, item.documentId)) ok++; else fail++;
  }
  return { ok, fail };
}

async function restoreSiteSettings(state) {
  const docs = strapi.documents('api::site-setting.site-setting');
  if (state.siteSettingsBackup) {
    const { documentId, ...prev } = state.siteSettingsBackup;
    try {
      await docs.update({ documentId, data: prev, status: 'published' });
      console.log('[FCV reset] Site Settings restored to previous snapshot.');
    } catch (e) {
      console.warn('[FCV reset] Site Settings restore failed:', e.message || e);
    }
  } else if (state.siteSettingsCreated) {
    // Singleton was created by seed → delete it.
    const existing = await docs.findFirst();
    if (existing) {
      try {
        await docs.delete({ documentId: existing.documentId });
        console.log('[FCV reset] Site Settings singleton removed (created by seed).');
      } catch (e) {
        console.warn('[FCV reset] Site Settings delete failed:', e.message || e);
      }
    }
  }
}

async function main() {
  if (!fs.existsSync(STATE_FILE)) {
    console.error(
      '\n[FCV reset] No state file at\n  ' + STATE_FILE +
      '\nNothing to reset. Did you run npm run seed:fcv first?\n'
    );
    process.exitCode = 2;
    return;
  }

  const state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  console.log('\n[FCV reset] Reversing seed from ' + state.seededAt + '…');

  // Order matters: child entities before parents (FK constraints).
  const matchesResult  = await deleteList('api::match.match',              state.matches);
  const playersResult  = await deleteList('api::player.player',            state.players);
  const teamsResult    = await deleteList('api::team.team',                state.teams);
  const newsResult     = await deleteList('api::news-article.news-article', state.newsArticles);

  await restoreSiteSettings(state);

  fs.unlinkSync(STATE_FILE);

  console.log(
    '\n[FCV reset] DONE.  ' +
    'matches: ' + matchesResult.ok + '/' + (matchesResult.ok + matchesResult.fail) + ' · ' +
    'players: ' + playersResult.ok + '/' + (playersResult.ok + playersResult.fail) + ' · ' +
    'teams: '   + teamsResult.ok   + '/' + (teamsResult.ok   + teamsResult.fail)   + ' · ' +
    'news: '    + newsResult.ok    + '/' + (newsResult.ok    + newsResult.fail)    + '.\n' +
    'State file removed.\n'
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
    console.error('\n[FCV reset] FATAL:', e);
    process.exitCode = 1;
  } finally {
    await app.destroy();
    process.exit(process.exitCode || 0);
  }
}

bootstrap();
