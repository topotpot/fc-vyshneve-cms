'use strict';

// FC Vyshneve development seed data.
// Schemas: see cms-app/src/api/*/content-types/*/schema.json.

const TEAMS = [
  {
    name: 'Головна команда',
    slug: 'main',
    shortDescription: 'Професійна команда, що виступає у Чемпіонаті України та Кубку.',
    fullDescription:  'Головна команда ФК Вишневе — серце клубу. Виступає у Чемпіонаті України та Кубку, виборює нагороди з 1998 року.',
    foundedYear: 1998,
    stadium: 'Центральний стадіон, Вишневе',
    primaryColor: '#a71f45',
    secondaryColor: '#070709',
    featured: true,
  },
  {
    name: 'Молодіжна команда',
    slug: 'youth',
    shortDescription: 'Резерв клубу, де молоді гравці готуються до виступів за основу.',
    fullDescription:  'Молодіжний склад ФК Вишневе — кузня кадрів головної команди. Регулярно постачає таланти до першої команди.',
    foundedYear: 2003,
    stadium: 'Тренувальна база ФК Вишневе',
    primaryColor: '#a71f45',
    secondaryColor: '#1a1a21',
    featured: false,
  },
  {
    name: 'Команда U-19',
    slug: 'u-19',
    shortDescription: 'Академічний склад до 19 років — наше спортивне майбутнє.',
    fullDescription:  'Юнацька команда U-19 ФК Вишневе. Грає у Першій лізі юніорів, виховує наступне покоління футболістів клубу.',
    foundedYear: 2010,
    stadium: 'Академія ФК Вишневе',
    primaryColor: '#a71f45',
    secondaryColor: '#2a1a25',
    featured: false,
  },
];

const PLAYERS = [
  // ── MAIN TEAM ──
  { teamSlug: 'main', fullName: 'Ростислав Баглай',  slug: 'rostyslav-bahlai',  position: 'Воротар',     number: 1,  age: 24, nationality: 'Україна', height: 188, weight: 84, preferredFoot: 'Права', shortBio: 'Реакція · Вибір позиції',     featured: false, captain: false },
  { teamSlug: 'main', fullName: 'Владислав Кравець', slug: 'vladyslav-kravets',  position: 'Воротар',     number: 12, age: 19, nationality: 'Україна', height: 191, weight: 86, preferredFoot: 'Права', shortBio: 'Рефлекси · Гра ногами',         featured: false, captain: false },
  { teamSlug: 'main', fullName: 'Андрій Лисенко',    slug: 'andrii-lysenko',    position: 'Захисник',    number: 4,  age: 27, nationality: 'Україна', height: 184, weight: 78, preferredFoot: 'Права', shortBio: 'Капітан команди · Лідер захисту', featured: true,  captain: true  },
  { teamSlug: 'main', fullName: 'Денис Мороз',       slug: 'denys-moroz',       position: 'Захисник',    number: 5,  age: 25, nationality: 'Україна', height: 182, weight: 76, preferredFoot: 'Ліва',  shortBio: 'Швидкість · Перехоплення',       featured: true,  captain: false },
  { teamSlug: 'main', fullName: 'Артем Коваленко',   slug: 'artem-kovalenko',   position: 'Півзахисник', number: 8,  age: 26, nationality: 'Україна', height: 178, weight: 72, preferredFoot: 'Обидві', shortBio: 'Контроль м’яча · Асисти',       featured: false, captain: false },
  { teamSlug: 'main', fullName: 'Олег Павленко',     slug: 'oleh-pavlenko',     position: 'Півзахисник', number: 10, age: 28, nationality: 'Україна', height: 176, weight: 70, preferredFoot: 'Права', shortBio: 'Плеймейкер · 8 асистів сезону', featured: true,  captain: false },
  { teamSlug: 'main', fullName: 'Максим Степаненко', slug: 'maksym-stepanenko', position: 'Нападник',    number: 9,  age: 27, nationality: 'Україна', height: 183, weight: 79, preferredFoot: 'Права', shortBio: 'Бомбардир · 14 голів сезону',   featured: true,  captain: false },
  { teamSlug: 'main', fullName: 'Іван Шевченко',     slug: 'ivan-shevchenko',   position: 'Нападник',    number: 11, age: 24, nationality: 'Україна', height: 180, weight: 74, preferredFoot: 'Ліва',  shortBio: 'Швидкість · Фінішер',           featured: false, captain: false },

  // ── YOUTH TEAM ──
  { teamSlug: 'youth', fullName: 'Назар Бойко',        slug: 'nazar-boiko',         position: 'Воротар',     number: 1,  age: 20, nationality: 'Україна', height: 189, weight: 82, preferredFoot: 'Права', shortBio: 'Молодий перспективний голкіпер', featured: true,  captain: false },
  { teamSlug: 'youth', fullName: 'Олександр Гнатюк',   slug: 'oleksandr-hnatiuk',   position: 'Воротар',     number: 13, age: 18, nationality: 'Україна', height: 186, weight: 78, preferredFoot: 'Права', shortBio: 'Перший рік у молодіжці',         featured: false, captain: false },
  { teamSlug: 'youth', fullName: 'Михайло Іваненко',   slug: 'mykhailo-ivanenko',   position: 'Захисник',    number: 3,  age: 21, nationality: 'Україна', height: 183, weight: 76, preferredFoot: 'Права', shortBio: 'Капітан молоді · Лідер групи',    featured: false, captain: true  },
  { teamSlug: 'youth', fullName: 'Тарас Семенюк',      slug: 'taras-semeniuk',      position: 'Захисник',    number: 6,  age: 22, nationality: 'Україна', height: 181, weight: 74, preferredFoot: 'Ліва',  shortBio: 'Універсальний оборонець',         featured: false, captain: false },
  { teamSlug: 'youth', fullName: 'Дмитро Кравчук',     slug: 'dmytro-kravchuk',     position: 'Півзахисник', number: 7,  age: 20, nationality: 'Україна', height: 175, weight: 68, preferredFoot: 'Права', shortBio: 'Талант сезону молоді',            featured: true,  captain: false },
  { teamSlug: 'youth', fullName: 'Сергій Тарасюк',     slug: 'serhii-tarasiuk',     position: 'Півзахисник', number: 14, age: 21, nationality: 'Україна', height: 177, weight: 71, preferredFoot: 'Обидві', shortBio: 'Робочий півзахисник',           featured: false, captain: false },
  { teamSlug: 'youth', fullName: 'Богдан Бондар',      slug: 'bohdan-bondar',       position: 'Нападник',    number: 9,  age: 19, nationality: 'Україна', height: 182, weight: 75, preferredFoot: 'Права', shortBio: 'Атакуючий потенціал',             featured: false, captain: false },
  { teamSlug: 'youth', fullName: 'Юрій Ткаченко',      slug: 'yurii-tkachenko',     position: 'Нападник',    number: 11, age: 21, nationality: 'Україна', height: 178, weight: 72, preferredFoot: 'Ліва',  shortBio: 'Швидкісний крайній',              featured: false, captain: false },

  // ── U-19 ──
  { teamSlug: 'u-19', fullName: 'Микита Хоменко',      slug: 'mykyta-khomenko',     position: 'Воротар',     number: 1,  age: 18, nationality: 'Україна', height: 188, weight: 80, preferredFoot: 'Права', shortBio: 'Капітан U-19 · Голос команди',    featured: false, captain: true  },
  { teamSlug: 'u-19', fullName: 'Євген Білецький',     slug: 'yevhen-biletskyi',    position: 'Воротар',     number: 12, age: 17, nationality: 'Україна', height: 184, weight: 76, preferredFoot: 'Права', shortBio: 'Перший рік у складі',             featured: false, captain: false },
  { teamSlug: 'u-19', fullName: 'Андрій Олійник',      slug: 'andrii-oliynyk',      position: 'Захисник',    number: 2,  age: 18, nationality: 'Україна', height: 180, weight: 72, preferredFoot: 'Права', shortBio: 'Лідер юнацької оборони',          featured: true,  captain: false },
  { teamSlug: 'u-19', fullName: 'Володимир Кулик',     slug: 'volodymyr-kulyk',     position: 'Захисник',    number: 4,  age: 17, nationality: 'Україна', height: 178, weight: 70, preferredFoot: 'Ліва',  shortBio: 'Молодий перспективний захисник',  featured: false, captain: false },
  { teamSlug: 'u-19', fullName: 'Ярослав Дорошенко',   slug: 'yaroslav-doroshenko', position: 'Півзахисник', number: 6,  age: 18, nationality: 'Україна', height: 174, weight: 66, preferredFoot: 'Права', shortBio: 'Стрижень середини поля',          featured: false, captain: false },
  { teamSlug: 'u-19', fullName: 'Денис Романюк',       slug: 'denys-romaniuk',      position: 'Півзахисник', number: 8,  age: 17, nationality: 'Україна', height: 173, weight: 65, preferredFoot: 'Обидві', shortBio: 'Творець гри юніорів',            featured: false, captain: false },
  { teamSlug: 'u-19', fullName: 'Назарій Шевчук',      slug: 'nazarii-shevchuk',    position: 'Нападник',    number: 9,  age: 18, nationality: 'Україна', height: 179, weight: 71, preferredFoot: 'Права', shortBio: 'Талант майбутнього сезону',       featured: true,  captain: false },
  { teamSlug: 'u-19', fullName: 'Олексій Гончарук',    slug: 'oleksii-honcharuk',   position: 'Нападник',    number: 11, age: 17, nationality: 'Україна', height: 175, weight: 68, preferredFoot: 'Ліва',  shortBio: 'Швидкий крайній юніор',           featured: false, captain: false },
];

// matchDate: ISO. Today is mid-2026 in the dev timeline.
const MATCHES = [
  // ── Future 2026 ──
  { homeSlug: 'main',  awaySlug: 'youth', matchDate: '2026-09-15T18:00:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Кубок України',           matchStatus: 'upcoming', matchType: 'home', featured: true,  description: 'Перша гра нового сезону.' },
  { homeSlug: 'main',  awaySlug: 'u-19',  matchDate: '2026-09-22T17:00:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Товариський матч',        matchStatus: 'upcoming', matchType: 'home', featured: false },
  { homeSlug: 'youth', awaySlug: 'u-19',  matchDate: '2026-10-01T16:00:00.000Z', stadium: 'Тренувальна база',             competition: 'Чемпіонат U-21',         matchStatus: 'upcoming', matchType: 'home', featured: false },
  { homeSlug: 'u-19',  awaySlug: 'main',  matchDate: '2026-10-08T16:30:00.000Z', stadium: 'Академія ФК Вишневе',          competition: 'Тренувальний цикл',      matchStatus: 'upcoming', matchType: 'away', featured: false },
  { homeSlug: 'main',  awaySlug: 'youth', matchDate: '2026-11-15T19:00:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Кубок України',           matchStatus: 'upcoming', matchType: 'home', featured: false },

  // ── Past 2026 ──
  { homeSlug: 'main',  awaySlug: 'u-19',  homeScore: 3, awayScore: 1, matchDate: '2026-04-20T18:00:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Кубок України',     matchStatus: 'finished', matchType: 'home', featured: false },
  { homeSlug: 'youth', awaySlug: 'main',  homeScore: 1, awayScore: 2, matchDate: '2026-03-10T18:30:00.000Z', stadium: 'Тренувальна база',             competition: 'Чемпіонат України', matchStatus: 'finished', matchType: 'away', featured: false },
  { homeSlug: 'u-19',  awaySlug: 'youth', homeScore: 0, awayScore: 0, matchDate: '2026-02-14T16:00:00.000Z', stadium: 'Академія ФК Вишневе',          competition: 'Чемпіонат U-21',    matchStatus: 'finished', matchType: 'away', featured: false },
  { homeSlug: 'main',  awaySlug: 'youth', homeScore: 2, awayScore: 0, matchDate: '2026-01-25T17:00:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Суперкубок',        matchStatus: 'finished', matchType: 'home', featured: false },

  // ── 2025 ──
  { homeSlug: 'main',  awaySlug: 'u-19',  homeScore: 4, awayScore: 2, matchDate: '2025-11-12T18:00:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Чемпіонат України', matchStatus: 'finished', matchType: 'home', featured: false },
  { homeSlug: 'youth', awaySlug: 'main',  homeScore: 1, awayScore: 3, matchDate: '2025-09-05T19:00:00.000Z', stadium: 'Тренувальна база',             competition: 'Кубок України',     matchStatus: 'finished', matchType: 'away', featured: false },
  { homeSlug: 'u-19',  awaySlug: 'main',  homeScore: 0, awayScore: 2, matchDate: '2025-06-18T17:00:00.000Z', stadium: 'Академія ФК Вишневе',          competition: 'Товариський матч',  matchStatus: 'finished', matchType: 'away', featured: false },

  // ── 2024 ──
  { homeSlug: 'main',  awaySlug: 'youth', homeScore: 5, awayScore: 1, matchDate: '2024-10-22T18:00:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Суперкубок',        matchStatus: 'finished', matchType: 'home', featured: false },
  { homeSlug: 'main',  awaySlug: 'u-19',  homeScore: 2, awayScore: 2, matchDate: '2024-08-15T16:30:00.000Z', stadium: 'Центральний стадіон, Вишневе', competition: 'Чемпіонат України', matchStatus: 'finished', matchType: 'home', featured: false },
];

const NEWS = [
  {
    title: 'Кубковий тріумф: перемога над U-19 з рахунком 3:1',
    slug: 'kubkovyi-triumf-3-1',
    excerpt: 'Головна команда впевнено пройшла стадію Кубка України проти академічного складу клубу.',
    content: 'У дуже динамічному матчі головна команда ФК Вишневе перемогла резерв U-19 з рахунком 3:1. Голами відзначилися Степаненко (двічі) та Шевченко. Команда впевнено крокує до наступного раунду турніру.',
    category: 'Матчі',
    author: 'Спортивний журналіст',
    featured: true,
  },
  {
    title: 'ФК Вишневе підписав контракт з молодим нападником',
    slug: 'kontrakt-z-molodym-napadnykom',
    excerpt: 'Талановитий 22-річний форвард приєднується до головної команди.',
    content: 'Клуб оголосив про підписання контракту з талановитим нападником. Гравець виступав за молодіжну збірну та має досвід в українських клубах. Дебют очікується наступного тижня.',
    category: 'Трансфери',
    author: 'Прес-служба клубу',
    featured: false,
  },
  {
    title: 'Драматична нічия з юніорами в Чемпіонаті U-21',
    slug: 'drama-z-yuniorami-u21',
    excerpt: 'Молодіжна команда та U-19 розписали безголову нічию у напруженому матчі.',
    content: 'Зустріч резервів пройшла на високих швидкостях, але обидві команди виявилися рівними. Підсумок 0:0 був закономірним результатом протистояння двох академічних колективів.',
    category: 'Матчі',
    author: 'Спортивний журналіст',
    featured: false,
  },
  {
    title: 'Презентація нової форми на сезон',
    slug: 'prezentatsiia-novoi-formy',
    excerpt: 'Бордова домашня форма та чорна виїзна — клуб представив комплекти на новий сезон.',
    content: 'На стадіоні відбулася офіційна презентація нової форми у бордових кольорах із сучасним логотипом. На презентації були присутні гравці, тренерський штаб та сотні вболівальників.',
    category: 'Клуб',
    author: 'Офіційний сайт',
    featured: false,
  },
  {
    title: 'Відкрито нове крило футбольної академії',
    slug: 'vidkryto-nove-krylo-akademii',
    excerpt: 'ФК Вишневе розширив інфраструктуру академії — нові поля та зали для тренувань.',
    content: 'Клуб урочисто відкрив нове крило академії, що включає два нові футбольні поля з сучасним покриттям, тренажерний зал та відновлювальний центр для молодих гравців.',
    category: 'Академія',
    author: 'Прес-служба клубу',
    featured: false,
  },
  {
    title: 'Капітан головної команди про підготовку до сезону',
    slug: 'kapitan-pro-pidhotovku',
    excerpt: 'Андрій Лисенко поділився думками щодо нового сезону та цілей команди.',
    content: 'У ексклюзивному інтерв’ю клубному виданню капітан розповів про фізичну форму, тактичні цілі та командний дух. За його словами, команда готова боротися за всі трофеї сезону.',
    category: "Інтерв'ю",
    author: 'Спортивний журналіст',
    featured: false,
  },
  {
    title: 'Молодіжний склад поповнили двоє талантів',
    slug: 'molod-popovnyly-talantamy',
    excerpt: 'Перспективні гравці підписали контракти з молодіжною командою.',
    content: 'У молодіжний склад приєдналися два талановитих гравця, що раніше виступали за відомі футбольні школи країни. Очікується, що вони підсилять конкуренцію за місце у складі.',
    category: 'Трансфери',
    author: 'Прес-служба клубу',
    featured: false,
  },
  {
    title: 'Розгромна перемога у Суперкубку: 2:0 над молоддю',
    slug: 'superkubok-2-0',
    excerpt: 'Головна команда здобула трофей Суперкубка переконливою грою.',
    content: 'У матчі за Суперкубок головна команда впевнено перемогла молодіжний склад з рахунком 2:0. Голи на рахунку Павленка та Степаненка. Це перший трофей сезону для клубу.',
    category: 'Матчі',
    author: 'Офіційний сайт',
    featured: false,
  },
  {
    title: 'ФК Вишневе відзначив 28 років від дня заснування',
    slug: 'vk-vyshneve-28-rokiv',
    excerpt: 'Клуб провів урочисті заходи з нагоди ювілею.',
    content: 'У присутності легенд клубу, керівництва та вболівальників ФК Вишневе урочисто відзначив 28-річчя заснування. Програма включала виставку трофеїв, дружній матч ветеранів та автограф-сесію.',
    category: 'Клуб',
    author: 'Прес-служба клубу',
    featured: false,
  },
  {
    title: 'Готуємось до нового сезону: збір команди розпочато',
    slug: 'zbir-komandy-rozpochato',
    excerpt: 'Гравці головної команди приступили до передсезонної підготовки.',
    content: 'Головна команда розпочала збори перед новим сезоном. Програма включає фізичну, тактичну та технічну роботу, а також серію контрольних матчів проти команд Першої ліги.',
    category: 'Клуб',
    author: 'Прес-служба клубу',
    featured: false,
  },
];

const SITE_SETTINGS = {
  clubName:   'ФК Вишневе',
  heroText:   'Сила. Честь. Перемога.',
  footerText: '© 2026 ФК Вишневе. Всі права захищено.',
};

module.exports = { TEAMS, PLAYERS, MATCHES, NEWS, SITE_SETTINGS };
