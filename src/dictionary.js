import { additions, groupNote, treatment } from './entry-details.js';
import { specialistHospitals, specialistServices } from './specialist-services.js';
import { complementaryEntries } from './complementary.js';

const terms = [
  [
    'Aorta',
    'Aorta',
    'Anatomi',
    'Arteri utama yang membawa darah dari bilik kiri jantung menuju tubuh.',
    'n:aorta',
  ],
  [
    'Arteri',
    'Artery',
    'Anatomi',
    'Pembuluh darah yang membawa darah keluar dari jantung.',
    'n:artery',
  ],
  [
    'Atrium',
    'Atrium',
    'Anatomi',
    'Ruang atas jantung yang menerima darah. Jantung manusia memiliki atrium kanan dan kiri.',
    'n:atrium',
  ],
  [
    'Diafragma',
    'Diaphragm',
    'Anatomi',
    'Otot berbentuk kubah yang memisahkan rongga dada dan perut serta berperan dalam pernapasan.',
    'n:diaphragm',
  ],
  [
    'Esofagus',
    'Esophagus',
    'Anatomi',
    'Saluran berotot yang membawa makanan dan minuman dari tenggorokan ke lambung.',
    'n:esophagus',
    'kerongkongan',
  ],
  [
    'Kapiler',
    'Capillary',
    'Anatomi',
    'Pembuluh darah kecil tempat pertukaran zat antara darah dan jaringan.',
    'n:capillary',
  ],
  [
    'Neuron',
    'Neuron',
    'Anatomi',
    'Sel saraf yang menerima dan meneruskan sinyal.',
    'n:neuron',
    'sel saraf',
  ],
  [
    'Trakea',
    'Trachea',
    'Anatomi',
    'Saluran yang membawa udara dari laring menuju bronkus.',
    'n:trachea',
  ],
  [
    'Vena',
    'Vein',
    'Anatomi',
    'Pembuluh darah yang membawa darah kembali ke jantung.',
    'n:vein',
  ],
  [
    'Ventrikel jantung',
    'Heart ventricle',
    'Anatomi',
    'Ruang bawah jantung yang memompa darah ke paru-paru atau ke seluruh tubuh.',
    'n:ventricle',
  ],
  [
    'Anemia',
    'Anemia',
    'Kondisi',
    'Keadaan ketika jumlah sel darah merah atau kadar hemoglobin lebih rendah dari yang dibutuhkan tubuh.',
    'n:anemia',
    'kurang darah',
  ],
  [
    'Aritmia',
    'Arrhythmia',
    'Kondisi',
    'Gangguan irama jantung yang dapat membuat denyut terlalu cepat, terlalu lambat, atau tidak teratur.',
    'n:arrhythmia',
  ],
  [
    'Dehidrasi',
    'Dehydration',
    'Kondisi',
    'Keadaan ketika tubuh kehilangan lebih banyak cairan daripada yang diterimanya.',
    'm:dehydration',
  ],
  [
    'Diabetes melitus',
    'Diabetes mellitus',
    'Kondisi',
    'Kelompok kondisi yang ditandai kadar glukosa darah tinggi karena gangguan produksi atau kerja insulin.',
    'm:diabetes',
    'diabetes',
  ],
  [
    'Edema',
    'Edema',
    'Kondisi',
    'Pembengkakan akibat penumpukan cairan dalam jaringan tubuh.',
    'n:edema',
    'bengkak',
  ],
  [
    'Hiperglikemia',
    'Hyperglycemia',
    'Kondisi',
    'Keadaan ketika kadar glukosa dalam darah berada di atas kisaran normal.',
    'n:hyperglycemia',
    'gula darah tinggi',
  ],
  [
    'Hipertensi',
    'Hypertension',
    'Kondisi',
    'Keadaan ketika tekanan darah tetap tinggi.',
    'n:hypertension',
    'tekanan darah tinggi',
  ],
  [
    'Hipoglikemia',
    'Hypoglycemia',
    'Kondisi',
    'Keadaan ketika kadar glukosa dalam darah berada di bawah kisaran normal.',
    'n:hypoglycemia',
    'gula darah rendah',
  ],
  [
    'Inflamasi',
    'Inflammation',
    'Kondisi',
    'Respons tubuh terhadap cedera, infeksi, atau iritasi. Respons ini dapat menimbulkan kemerahan, hangat, nyeri, atau bengkak.',
    'n:inflammation',
    'peradangan',
  ],
  [
    'Pneumonia',
    'Pneumonia',
    'Kondisi',
    'Infeksi paru yang dapat menyebabkan kantung udara meradang dan terisi cairan atau nanah.',
    'm:pneumonia',
  ],
  [
    'Takikardia',
    'Tachycardia',
    'Kondisi',
    'Irama jantung yang lebih cepat daripada kisaran yang diharapkan dalam keadaan tertentu.',
    'n:tachycardia',
  ],
  [
    'Trombosis',
    'Thrombosis',
    'Kondisi',
    'Pembentukan bekuan darah di dalam pembuluh darah.',
    'n:thrombosis',
  ],
  [
    'Biopsi',
    'Biopsy',
    'Pemeriksaan',
    'Pengambilan sampel sel atau jaringan untuk diperiksa oleh ahli patologi.',
    'n:biopsy',
  ],
  [
    'CT scan',
    'Computed tomography',
    'Pemeriksaan',
    'Pemeriksaan pencitraan yang memakai sinar-X dan komputer untuk membuat gambar penampang tubuh.',
    'n:ct-scan',
    'tomografi komputer',
  ],
  [
    'Elektrokardiogram',
    'Electrocardiogram',
    'Pemeriksaan',
    'Rekaman aktivitas listrik jantung. Pemeriksaannya dapat membantu menilai irama jantung.',
    'n:electrocardiogram',
    'EKG ECG elektrokardiografi',
  ],
  [
    'Endoskopi',
    'Endoscopy',
    'Pemeriksaan',
    'Pemeriksaan bagian dalam tubuh dengan alat berkamera atau berlensa yang disebut endoskop.',
    'n:endoscopy',
  ],
  [
    'Hitung darah lengkap',
    'Complete blood count',
    'Pemeriksaan',
    'Tes darah yang mengukur beberapa komponen darah, termasuk sel darah merah, sel darah putih, dan trombosit.',
    'n:complete-blood-count',
    'CBC pemeriksaan darah lengkap',
  ],
  [
    'MRI',
    'Magnetic resonance imaging',
    'Pemeriksaan',
    'Pencitraan yang memakai medan magnet kuat dan gelombang radio untuk menghasilkan gambar bagian dalam tubuh.',
    'n:mri',
    'pencitraan resonansi magnetik',
  ],
  [
    'Ultrasonografi',
    'Ultrasonography',
    'Pemeriksaan',
    'Pencitraan dengan gelombang suara berfrekuensi tinggi untuk melihat bagian dalam tubuh.',
    'n:ultrasound',
    'USG',
  ],
  [
    'Urinalisis',
    'Urinalysis',
    'Pemeriksaan',
    'Pemeriksaan urine yang dapat menilai ciri fisik, zat kimia, dan komponen yang terlihat dengan mikroskop.',
    'n:urinalysis',
    'tes urine',
  ],
  [
    'Analgesik',
    'Analgesic',
    'Terapi dan obat',
    'Obat yang digunakan untuk meredakan nyeri.',
    'n:analgesic',
    'pereda nyeri',
  ],
  [
    'Anestesi',
    'Anesthesia',
    'Terapi dan obat',
    'Penggunaan obat untuk mengurangi atau menghilangkan sensasi saat tindakan medis. Efeknya bergantung pada jenis anestesi.',
    'n:anesthesia',
  ],
  [
    'Antibiotik',
    'Antibiotic',
    'Terapi dan obat',
    'Obat yang membunuh bakteri atau menghambat pertumbuhannya, digunakan untuk menangani infeksi bakteri tertentu.',
    'n:antibiotic',
  ],
  [
    'Antikoagulan',
    'Anticoagulant',
    'Terapi dan obat',
    'Obat yang membantu mencegah pembentukan atau pembesaran bekuan darah.',
    'n:anticoagulant',
    'pengencer darah',
  ],
  [
    'Dialisis',
    'Dialysis',
    'Terapi dan obat',
    'Prosedur untuk membantu membuang zat sisa dan kelebihan cairan dari darah ketika fungsi ginjal tidak mencukupi.',
    'n:dialysis',
    'cuci darah',
  ],
  [
    'Fisioterapi',
    'Physical therapy',
    'Terapi dan obat',
    'Terapi yang membantu memulihkan atau mempertahankan gerak dan fungsi tubuh.',
    'n:physical-therapy',
  ],
  [
    'Imunoterapi',
    'Immunotherapy',
    'Terapi dan obat',
    'Pengobatan yang memanfaatkan atau memengaruhi kerja sistem kekebalan tubuh.',
    'n:immunotherapy',
  ],
  [
    'Radioterapi',
    'Radiation therapy',
    'Terapi dan obat',
    'Pengobatan yang menggunakan radiasi untuk merusak sel kanker atau menghambat pertumbuhannya.',
    'n:radiation-therapy',
  ],
  [
    'Akut',
    'Acute',
    'Istilah klinis',
    'Menggambarkan kondisi atau gejala yang muncul cepat dan umumnya berlangsung singkat.',
    'n:acute',
  ],
  [
    'Diagnosis',
    'Diagnosis',
    'Istilah klinis',
    'Identifikasi penyakit atau kondisi berdasarkan informasi seperti riwayat, pemeriksaan fisik, dan hasil tes.',
    'n:diagnosis',
  ],
  [
    'Dispnea',
    'Dyspnea',
    'Istilah klinis',
    'Sensasi sulit bernapas atau kekurangan udara.',
    'n:dyspnea',
    'sesak napas',
  ],
  [
    'Kronis',
    'Chronic',
    'Istilah klinis',
    'Menggambarkan kondisi yang berlangsung lama atau menetap.',
    'n:chronic',
  ],
  [
    'Prognosis',
    'Prognosis',
    'Istilah klinis',
    'Perkiraan perjalanan dan hasil suatu penyakit, termasuk peluang pulih atau kambuh.',
    'n:prognosis',
  ],
  [
    'Remisi',
    'Remission',
    'Istilah klinis',
    'Keadaan ketika tanda dan gejala penyakit berkurang atau menghilang.',
    'n:remission',
  ],
  [
    'Sinkop',
    'Syncope',
    'Istilah klinis',
    'Kehilangan kesadaran sementara akibat berkurangnya aliran darah ke otak, biasanya diikuti pulih spontan.',
    'm:fainting',
    'pingsan',
  ],
  [
    'Tanda vital',
    'Vital signs',
    'Istilah klinis',
    'Ukuran fungsi dasar tubuh seperti denyut nadi, laju napas, tekanan darah, dan suhu tubuh.',
    'm:vitalsigns',
  ],
];
const byId = id => document.getElementById(id);
const query = byId('query');
const category = byId('category');
const alphabet = byId('alphabet');
const entries = byId('entries');
const favoriteButton = byId('favorites');
const empty = byId('empty');
let letter = '';
let onlyFavorites = false;
let favorites;
try {
  const saved = JSON.parse(
    localStorage.getItem('kamus-medika-favorit') || '[]'
  );
  favorites = new Set(Array.isArray(saved) ? saved : []);
} catch {
  favorites = new Set();
}

const normalize = text =>
  text
    .toLocaleLowerCase('id')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
const alphabeticalName = ([name, , , , , , details]) => details?.sortName || name;
terms.push(...additions, ...specialistHospitals, ...complementaryEntries);
const hospitalDirectory = new Map(
  terms.filter(term => term[2] === 'Rumah sakit').map(term => [term[0], term[6]])
);
const wikiCategory = 'Rujukan Wikipedia';
const wikiStorageKey = 'medika-atlas-wikipedia-v1';
const wikiEntries = new Map();
const wikiLink = id => 'https://id.wikipedia.org/?curid=' + id;
const sortTerms = () => terms.sort((a, b) =>
  alphabeticalName(a).localeCompare(alphabeticalName(b), 'id')
);

function rememberWikiEntry({ id, title, summary, alias }) {
  if (!Number.isSafeInteger(id) || id < 1 ||
      typeof title !== 'string' || !title.trim() || title.length > 300 ||
      typeof summary !== 'string' || !summary.trim() || summary.length > 2500 ||
      typeof alias !== 'string' || alias.length > 160 ||
      wikiEntries.has(id) || terms.some(term => normalize(term[0]) === normalize(title))) return false;
  wikiEntries.set(id, { id, title, summary, alias });
  terms.push([title, '', wikiCategory, summary, '', alias, {
    fields: [['Jenis informasi', 'Ringkasan dari Wikipedia bahasa Indonesia.']],
    links: [['Artikel Wikipedia dan atribusi', wikiLink(id)],
      ['Lisensi CC BY-SA', 'https://creativecommons.org/licenses/by-sa/4.0/']]
  }]);
  return true;
}

try {
  const savedWiki = JSON.parse(localStorage.getItem(wikiStorageKey) || '[]');
  if (Array.isArray(savedWiki)) {
    for (const row of savedWiki) {
      if (row && typeof row === 'object') rememberWikiEntry(row);
    }
  }
} catch {
  // The dictionary is still usable if browser storage is unavailable.
}
sortTerms();
[...new Set([wikiCategory, ...terms.map(term => term[2])])]
  .sort()
  .forEach(label => category.add(new Option(label, label)));

for (const item of ['', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = item || 'Semua';
  button.dataset.letter = item;
  button.addEventListener('click', () => {
    letter = item;
    render();
  });
  alphabet.append(button);
}

function renderSpecialistHospitals(name) {
  const services = specialistServices[name];
  if (!services) return null;

  const section = document.createElement('section');
  section.className = 'specialist-hospitals';
  const title = document.createElement('h4');
  title.textContent = 'Rumah sakit dengan layanan khusus';
  const note = document.createElement('p');
  note.className = 'specialist-note';
  note.textContent = 'Konfirmasi jadwal dan syarat rujukan melalui rumah sakit. Untuk kondisi gawat darurat, segera cari pertolongan di IGD terdekat.';
  const list = document.createElement('ul');

  for (const [hospital, service, serviceUrl] of services) {
    const location = hospitalDirectory.get(hospital);
    const item = document.createElement('li');
    const nameText = document.createElement('strong');
    nameText.textContent = hospital;
    const address = document.createElement('p');
    address.textContent = location.fields.find(([label]) => label === 'Alamat')[1];
    const description = document.createElement('p');
    description.textContent = service;
    const actions = document.createElement('div');
    actions.className = 'entry-sources';
    for (const [label, href] of [['Layanan resmi', serviceUrl], ...location.links.filter(([label]) => label === 'Buka peta')]) {
      const link = document.createElement('a');
      link.className = 'source';
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = label + ' ↗';
      link.setAttribute('aria-label', label + ' ' + hospital);
      actions.append(link);
    }
    item.append(nameText, address, description, actions);
    list.append(item);
  }

  section.append(title, list, note);
  return section;
}

function card([name, english, group, meaning, reference, aliases, details]) {
  const article = document.createElement('article');
  article.className = 'card';
  const [source, slug] = reference.split(':');
  const sourceName = source === 'n' ? 'NCI' : 'MedlinePlus';
  const url =
    source === 'n'
      ? 'https://www.cancer.gov/publications/dictionaries/cancer-terms/def/' +
        slug
      : 'https://medlineplus.gov/' + slug + '.html';
  const saved = favorites.has(name);
  const care = treatment[name];
  const fields = details?.fields || [];
  const links = details?.links || [['Rujukan ' + sourceName, url]];
  if (care) {
    fields.push(['Penanganan umum', care[0]]);
    links.push(['Rujukan penanganan', care[1]]);
  }
  if (groupNote[name]) fields.push(['Kandungan menurut produk', groupNote[name]]);
  article.innerHTML = `
    <div class="card-top">
      <span class="tag">${group}</span>
      <button type="button" class="save" aria-pressed="${saved}" aria-label="" title="${saved ? 'Hapus dari favorit' : 'Simpan ke favorit'}">${saved ? '★' : '☆'}</button>
    </div>
    <h3></h3>
    ${english ? '<div class="english" lang="en">' + english + '</div>' : ''}
    ${meaning ? '<p class="entry-meaning"></p>' : ''}`;
  article.querySelector('h3').textContent = name;
  if (meaning) article.querySelector('.entry-meaning').textContent = meaning;
  if (fields.length) {
    const list = document.createElement('dl');
    list.className = 'entry-details';
    for (const [label, value] of fields) {
      const term = document.createElement('dt');
      term.textContent = label;
      const description = document.createElement('dd');
      description.textContent = value;
      list.append(term, description);
    }
    article.append(list);
  }
  const hospitals = renderSpecialistHospitals(name);
  if (hospitals) article.append(hospitals);

  const sources = document.createElement('div');
  sources.className = 'entry-sources';
  for (const [label, href] of links) {
    const link = document.createElement('a');
    link.className = 'source';
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = label + ' ↗';
    sources.append(link);
  }
  article.append(sources);
  const save = article.querySelector('button');
  save.setAttribute('aria-label', (saved ? 'Hapus ' : 'Simpan ') + name);
  save.addEventListener('click', () => {
    if (saved) favorites.delete(name);
    else favorites.add(name);
    try {
      localStorage.setItem(
        'kamus-medika-favorit',
        JSON.stringify([...favorites])
      );
    } catch {
      byId('storage-note').hidden = false;
    }
    render({ keepPage: true });
    const next = Array.from(entries.querySelectorAll('button')).find(
      button =>
        button.getAttribute('aria-label') ===
        (saved ? 'Simpan ' : 'Hapus ') + name
    );
    (next || favoriteButton).focus();
  });
  return article;
}

const book = byId('book');
const previous = byId('book-prev');
const next = byId('book-next');
const compactBook = matchMedia('(max-width: 680px)');
let pageStart = 0;
let bookMatches = [];

const pagesPerSpread = () => compactBook.matches ? 1 : 2;

function showSpread(direction = '') {
  const step = pagesPerSpread();
  const total = bookMatches.length;
  const lastStart = Math.max(0, Math.floor((total - 1) / step) * step);
  pageStart = Math.min(pageStart - pageStart % step, lastStart);
  const pages = bookMatches.slice(pageStart, pageStart + step)
    .map((term, offset) => {
      const page = card(term);
      const number = document.createElement('span');
      number.className = 'page-number';
      number.textContent = pageStart + offset + 1;
      page.append(number);
      return page;
    });
  if (step === 2 && pages.length === 1) {
    const blank = document.createElement('div');
    blank.className = 'book-blank';
    blank.setAttribute('aria-hidden', 'true');
    pages.push(blank);
  }
  entries.dataset.turn = direction;
  entries.replaceChildren(...pages);
  book.hidden = total === 0;
  previous.setAttribute('aria-disabled', String(pageStart === 0));
  next.setAttribute('aria-disabled', String(pageStart + step >= total));
  const end = Math.min(pageStart + step, total);
  byId('book-page').textContent = total
    ? 'Halaman ' + (end === pageStart + 1 ? end : (pageStart + 1) + '–' + end) + ' dari ' + total
    : '';
}

function turnPage(offset) {
  const target = pageStart + offset * pagesPerSpread();
  if (target < 0 || target >= bookMatches.length) return;
  pageStart = target;
  showSpread(offset > 0 ? 'forward' : 'backward');
}

previous.addEventListener('click', () => turnPage(-1));
next.addEventListener('click', () => turnPage(1));
compactBook.addEventListener('change', () => showSpread());
book.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey ||
      !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  turnPage(event.key === 'ArrowRight' ? 1 : -1);
});

let swipeStart;
entries.addEventListener('touchstart', event => {
  const touch = event.changedTouches[0];
  swipeStart = compactBook.matches && event.touches.length === 1 &&
    !event.target.closest('a, button') ? [touch.clientX, touch.clientY] : null;
}, { passive: true });
entries.addEventListener('touchcancel', () => { swipeStart = null; });
entries.addEventListener('touchend', event => {
  if (!swipeStart) return;
  const touch = event.changedTouches[0];
  const dx = touch.clientX - swipeStart[0];
  const dy = touch.clientY - swipeStart[1];
  swipeStart = null;
  if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) {
    turnPage(dx < 0 ? 1 : -1);
  }
}, { passive: true });

const webResults = byId('web-results');
const webStatus = byId('web-status');
const webItems = byId('web-items');
const webButtons = [byId('web-search'), byId('web-empty')];
let webKeyword = '';
let webRequest;
let automaticTimer;
let attemptedKeyword;

function updateWebSearch(keyword) {
  for (const button of webButtons) button.hidden = !keyword;
  if (keyword === webKeyword) return;
  webKeyword = keyword;
  attemptedKeyword = undefined;
  clearTimeout(automaticTimer);
  webRequest?.abort();
  webResults.hidden = true;
  webItems.replaceChildren();
  webStatus.textContent = '';
}

const wikiWords = value => normalize(value).match(/[\p{L}\p{N}]+/gu) || [];

function importMatchingArticle(pages, keyword) {
  const words = wikiWords(keyword);
  const page = pages.find(({ title, extract }) => {
    if (typeof title !== 'string' || typeof extract !== 'string') return false;
    const titleWords = wikiWords(title);
    const healthContext = /\b(penyakit|medis|kedokteran|gangguan|gejala|infeksi|virus|bakteri|obat|kesehatan|rumah sakit|diagnosis|dokter|sindrom|organ tubuh|terapi|medik)\b/i;
    return words.length && words.every(word => titleWords.includes(word))
      && healthContext.test(extract);
  });
  if (!page || !rememberWikiEntry({
    id: page.pageid,
    title: page.title,
    summary: page.extract.trim().slice(0, 2500),
    alias: keyword
  })) return '';

  sortTerms();
  let stored = true;
  try {
    localStorage.setItem(wikiStorageKey, JSON.stringify([...wikiEntries.values()]));
  } catch {
    stored = false;
  }
  render({ keepPage: true });
  return page.title + (stored
    ? ' ditambahkan ke kamus di browser ini.'
    : ' ditambahkan untuk sesi ini. Browser tidak dapat menyimpannya.');
}

async function searchArticles({ automatic = false } = {}) {
  if (!webKeyword) return;
  clearTimeout(automaticTimer);
  const keyword = webKeyword;
  attemptedKeyword = keyword;
  webRequest?.abort();
  const request = new AbortController();
  webRequest = request;
  webResults.hidden = false;
  webItems.replaceChildren();
  webStatus.textContent = 'Mencari artikel Wikipedia bahasa Indonesia…';
  if (!automatic) byId('web-heading').focus();

  const url = new URL('https://id.wikipedia.org/w/api.php');
  url.search = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: keyword,
    gsrlimit: '5',
    gsrnamespace: '0',
    prop: 'extracts',
    exintro: '1',
    explaintext: '1',
    exsentences: '2',
    exlimit: 'max',
    format: 'json',
    formatversion: '2',
    origin: '*'
  });
  const timeout = setTimeout(() => request.abort('timeout'), 12000);

  try {
    const response = await fetch(url, { signal: request.signal, credentials: 'omit' });
    if (!response.ok) throw new Error('Article search failed');
    const payload = await response.json();
    if (payload.error) throw new Error('Article search failed');
    if (webRequest !== request || request.signal.aborted) return;
    const pages = (payload.query?.pages || []).sort((a, b) => a.index - b.index);
    const imported = !bookMatches.length && !onlyFavorites && !letter &&
      (!category.value || category.value === wikiCategory)
      ? importMatchingArticle(pages, keyword) : '';
    webStatus.textContent = imported || (pages.length
      ? pages.length + ' artikel dari Wikipedia bahasa Indonesia.'
      : 'Artikel belum ditemukan. Coba kata kunci lain.');
    for (const page of pages) {
      const article = document.createElement('article');
      article.className = 'web-article';
      const title = document.createElement('h3');
      title.textContent = page.title;
      const summary = document.createElement('p');
      summary.textContent = page.extract?.trim() || 'Ringkasan belum tersedia.';
      const source = document.createElement('a');
      source.href = 'https://id.wikipedia.org/?curid=' + Number(page.pageid);
      source.textContent = 'Sumber: Wikipedia';
      article.append(title, summary, source);
      webItems.append(article);
    }
  } catch {
    if (webRequest === request && (!request.signal.aborted || request.signal.reason === 'timeout')) {
      webStatus.textContent = 'Pencarian artikel sedang gagal. Tekan Cari artikel di aplikasi untuk mencoba lagi.';
    }
  } finally {
    clearTimeout(timeout);
  }
}

for (const button of webButtons) button.addEventListener('click', () => searchArticles());

function render({ keepPage = false } = {}) {
  if (!keepPage) pageStart = 0;
  const keyword = query.value.trim();
  updateWebSearch(keyword);
  const words = normalize(keyword).split(/\s+/).filter(Boolean);
  const matches = terms.filter(term => {
    const [name, english, group, , , aliases, details] = term;
    const searchable = normalize([name, english, aliases, ...(
      details?.fields.map(([, value]) => value) || []
    )].join(' '));
    return (
      (!category.value || group === category.value) &&
      (!letter || alphabeticalName(term).toUpperCase().startsWith(letter)) &&
      (!onlyFavorites || favorites.has(name)) &&
      words.every(word => searchable.includes(word))
    );
  });
  byId('results-title').textContent = onlyFavorites
    ? 'Istilah favorit'
    : 'Daftar istilah';
  byId('favorite-count').textContent = favorites.size;
  byId('count').textContent = matches.length + ' entri';
  favoriteButton.setAttribute('aria-pressed', String(onlyFavorites));
  for (const button of alphabet.children) {
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.letter === letter)
    );
  }
  empty.hidden = matches.length > 0;
  empty.querySelector('p').textContent =
    onlyFavorites && !favorites.size
      ? 'Belum ada istilah favorit.'
      : 'Tidak ada istilah yang cocok.';
  byId('reset').hidden = onlyFavorites && !favorites.size;
  bookMatches = matches;
  showSpread();
  clearTimeout(automaticTimer);
  if (!matches.length && !onlyFavorites && !letter &&
      (!category.value || category.value === wikiCategory) &&
      keyword.length >= 3 && keyword.length <= 160 && keyword !== attemptedKeyword) {
    automaticTimer = setTimeout(() => searchArticles({ automatic: true }), 650);
  }
}

function resetFilters() {
  query.value = '';
  category.value = '';
  letter = '';
}

query.addEventListener('input', render);
category.addEventListener('change', render);
favoriteButton.addEventListener('click', () => {
  onlyFavorites = !onlyFavorites;
  resetFilters();
  render();
});
byId('reset').addEventListener('click', () => {
  resetFilters();
  render();
  query.focus();
});
render();
