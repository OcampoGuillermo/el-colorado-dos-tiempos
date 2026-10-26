/* ============================================================
   EL COLORADO · DOS TIEMPOS, UN CAMINO
   Juego de realidad mixta de cuerpo entero.
   Three.js + MediaPipe Tasks Vision.
   Todo el contenido está en STATIONS, al principio del archivo.
   ============================================================ */

import * as THREE from './vendor/three.module.js';

/* ============================================================
   1. CONTENIDO
   ============================================================ */

const STATIONS = [
  {
    id: 1,
    place: 'Puente Libertad',
    placeYear: '1958',
    placeFact: 'Se inauguró el 8 de febrero. Antes, El Colorado estaba prácticamente aislado.',
    placeCuriosity: 'El Bermejo es el límite natural con Chaco; el puente cambió la vida cotidiana del pueblo.',
    tech: 'Telégrafo',
    techYear: '1844',
    techFact: 'Morse envió el primer mensaje público entre Washington y Baltimore.',
    techCuriosity: 'Por primera vez un mensaje viajó más rápido que una persona.',
    concept: 'Conectar orillas',
    question: '¿Qué cambió para El Colorado cuando se inauguró el Puente Libertad en 1958?',
    options: [
      { text: 'Dejó de estar aislado.', correct: true },
      { text: 'Se fundó el pueblo.', correct: false },
      { text: 'Llegó el ferrocarril.', correct: false },
    ],
    explanation: 'El puente terminó con el aislamiento y conectó El Colorado con Chaco y el resto del país.',
    source: 'Municipalidad de El Colorado · Computer History Museum',
    icon: 'telegraph',
    side: 1,
    accent: '#f0a35e',
  },
  {
    id: 2,
    place: 'Río Bermejo',
    placeYear: '1936',
    placeFact: 'La colonia se marcó alrededor del km 192 de la navegación del Bermejo.',
    placeCuriosity: 'El nombre “El Colorado” viene del color rojizo del agua en épocas de crecida.',
    tech: 'Escritura',
    techYear: '3300 a. C.',
    techFact: 'La escritura cuneiforme nació en Mesopotamia; los primeros textos fueron listas de bienes y cuentas.',
    techCuriosity: 'Permitió recordar más allá del cuerpo y enviar órdenes a distancia.',
    concept: 'Nombrar y registrar',
    question: '¿Por qué la colonia se llamó El Colorado?',
    options: [
      { text: 'Por el color del agua del Bermejo.', correct: true },
      { text: 'Por un vecino.', correct: false },
      { text: 'Por el ferrocarril.', correct: false },
    ],
    explanation: 'El nombre viene del color rojizo que toma el Bermejo en épocas de crecida.',
    source: 'Municipalidad de El Colorado · British Museum',
    icon: 'tablet',
    side: -1,
    accent: '#8fc3d4',
  },
  {
    id: 3,
    place: 'Costanera y mirador',
    placeYear: 'Actualidad',
    placeFact: 'La costanera y el mirador miran al Bermejo; es un espacio de paseo y atardeceres.',
    placeCuriosity: 'Desde el mirador se ve el puente y se percibe el cambio de color del río según la crecida.',
    tech: 'Imprenta',
    techYear: '1450',
    techFact: 'Los tipos móviles de Gutenberg permitieron reproducir textos en serie.',
    techCuriosity: 'Antes de la imprenta, copiar un libro a mano podía llevar meses.',
    concept: 'Ampliar la mirada',
    question: '¿Qué permitió la imprenta de Gutenberg?',
    options: [
      { text: 'Reproducir textos y hacerlos circular.', correct: true },
      { text: 'Navegar el Bermejo.', correct: false },
      { text: 'Medir la temperatura.', correct: false },
    ],
    explanation: 'La imprenta multiplicó los textos y hizo que las ideas circularan más rápido y más lejos.',
    source: 'Gutenberg Museum · Encyclopaedia Britannica',
    icon: 'press',
    side: -1,
    accent: '#f7c98f',
  },
  {
    id: 4,
    place: 'Camping y parque acuático',
    placeYear: 'Actualidad',
    placeFact: 'El camping es gratuito, abre todo el año y está a orillas del Bermejo, con parrillas, senderos y bicisenda.',
    placeCuriosity: 'Se puede acampar sin costo y usar el parque acuático en temporada.',
    tech: 'Radio',
    techYear: '1895',
    techFact: 'Marconi transmitió sonido sin cables; la primera transmisión transatlántica fue en 1901.',
    techCuriosity: 'Las primeras radios se armaban en casa con un cristal de galena y una antena larga.',
    concept: 'Compartir el tiempo libre',
    question: '¿Qué usa la radio para transmitir?',
    options: [
      { text: 'Ondas.', correct: true },
      { text: 'Cables.', correct: false },
      { text: 'Vapor.', correct: false },
    ],
    explanation: 'La radio usa ondas electromagnéticas: no necesita cables para llegar a una casa.',
    source: 'BBC History · Encyclopaedia Britannica',
    icon: 'radio',
    side: -1,
    accent: '#d96c4f',
  },
  {
    id: 5,
    place: 'Plaza San Martín',
    placeYear: '1950',
    placeFact: 'El busto se instaló al cumplirse 100 años de la muerte de San Martín. La plaza está sobre la Av. 25 de Mayo.',
    placeCuriosity: 'La avenida fue la arteria principal y parte del antiguo camino provincial.',
    tech: 'Teléfono',
    techYear: '1876',
    techFact: 'Alexander Graham Bell transmitió la voz por un cable; la primera llamada fue a la habitación de al lado.',
    techCuriosity: '“Watson, ven aquí, te necesito” es la primera llamada telefónica registrada.',
    concept: 'Poner en contacto voces',
    question: '¿Qué se instaló en la plaza en 1950?',
    options: [
      { text: 'Un busto a San Martín.', correct: true },
      { text: 'Una antena de radio.', correct: false },
      { text: 'Una computadora.', correct: false },
    ],
    explanation: 'En 1950, a 100 años de su muerte, se instaló el busto de San Martín en la plaza que lleva su nombre.',
    source: 'Municipalidad de El Colorado · Library of Congress',
    icon: 'phone',
    side: 1,
    accent: '#f0a35e',
  },
  {
    id: 6,
    place: 'Municipalidad',
    placeYear: '1944 / 1957',
    placeFact: 'La primera institución fue la Subcomisaría Bermejo, en 1936. El edificio municipal funciona en 25 de Mayo y Tucumán.',
    placeCuriosity: 'El municipio nació antes de tener Carta Orgánica; se rige por la ley provincial 1028.',
    tech: 'Computadora',
    techYear: '1945',
    techFact: 'ENIAC pesaba unas 30 toneladas y tenía 18.000 válvulas; Turing había definido la computación teórica en 1936.',
    techCuriosity: 'Seis mujeres programaron ENIAC: Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Fran Bilas y Ruth Lichterman.',
    concept: 'Ordenar y procesar',
    question: '¿En qué año El Colorado pasó a ser municipio?',
    options: [
      { text: '1957.', correct: true },
      { text: '1936.', correct: false },
      { text: '1981.', correct: false },
    ],
    explanation: 'El 14 de mayo de 1957, la Comisión de Fomento fue elevada a la categoría de municipio.',
    source: 'Municipalidad de El Colorado · Computer History Museum',
    icon: 'computer',
    side: 1,
    accent: '#58a89b',
  },
  {
    id: 7,
    place: 'Parroquia San Antonio',
    placeYear: 'Actualidad',
    placeFact: 'San Antonio de Padua es el patrono de la ciudad; la parroquia pertenece a la Diócesis de Formosa.',
    placeCuriosity: 'Su fiesta es el 13 de junio; es invocado para encontrar objetos perdidos.',
    tech: 'Internet',
    techYear: '1969',
    techFact: 'ARPANET conectó computadoras de universidades; TCP/IP llegó en 1983.',
    techCuriosity: 'El primer mensaje fue “LO” porque el sistema se cayó al intentar enviar “LOGIN”.',
    concept: 'Redes de comunidad',
    question: '¿Qué conectó ARPANET en 1969?',
    options: [
      { text: 'Computadoras de universidades.', correct: true },
      { text: 'Ciudades de Formosa.', correct: false },
      { text: 'Radios de la parroquia.', correct: false },
    ],
    explanation: 'ARPANET fue la primera red de computadoras; conectó centros de investigación y fue el origen de Internet.',
    source: 'Obispado de Formosa · Internet Society',
    icon: 'network',
    side: -1,
    accent: '#8fc3d4',
  },
  {
    id: 8,
    place: 'EPES 1',
    placeYear: '1960',
    placeFact: 'Se inauguró el 25 de abril; es una de las escuelas secundarias históricas de la ciudad.',
    placeCuriosity: 'Se inauguró 24 años después de la fundación del pueblo.',
    tech: 'Web',
    techYear: '1989',
    techFact: 'Tim Berners-Lee creó la Web en el CERN; el primer sitio web es de 1991.',
    techCuriosity: 'Combinó hipertexto, URL y HTTP; hizo que Internet fuera usable para todos.',
    concept: 'Acceso al conocimiento',
    question: '¿Qué se inauguró el 25 de abril de 1960?',
    options: [
      { text: 'La EPES 1.', correct: true },
      { text: 'El Puente Libertad.', correct: false },
      { text: 'El camping.', correct: false },
    ],
    explanation: 'La EPES 1 se inauguró el 25 de abril de 1960 y sigue siendo una de las secundarias históricas de El Colorado.',
    source: 'Ministerio de Educación de Formosa · CERN',
    icon: 'web',
    side: 1,
    accent: '#f7c98f',
  },
  {
    id: 9,
    place: 'INTA El Colorado',
    placeYear: '1981',
    placeFact: 'Se creó el 21 de octubre; tiene 450 hectáreas y dos campos anexos.',
    placeCuriosity: 'Investiga agricultura, ganadería y apicultura, y trabaja con productores de la zona.',
    tech: 'Smartphone',
    techYear: '2007',
    techFact: 'El iPhone reunió teléfono, cámara, GPS, sensores e Internet en un bolsillo.',
    techCuriosity: 'El primer iPhone no tenía App Store; la tienda de aplicaciones llegó en 2008.',
    concept: 'Herramientas de campo',
    question: '¿Qué investiga el INTA en El Colorado?',
    options: [
      { text: 'Agricultura y ganadería.', correct: true },
      { text: 'Minería.', correct: false },
      { text: 'Petróleo.', correct: false },
    ],
    explanation: 'El INTA investiga agricultura, ganadería y apicultura, y trabaja junto a productores de la región.',
    source: 'INTA · Computer History Museum',
    icon: 'smartphone',
    side: 1,
    accent: '#66d19e',
  },
  {
    id: 10,
    place: 'Feriarte',
    placeYear: 'Octubre',
    placeFact: 'Es un festival de artesanos y artistas, una de las citas culturales de la ciudad.',
    placeCuriosity: 'Muestra oficios y saberes que pasan de generación en generación.',
    tech: 'IA generativa',
    techYear: '2017 / 2022',
    techFact: 'Los transformers y ChatGPT generan texto, imágenes, audio o video a partir de patrones aprendidos.',
    techCuriosity: 'La misma tecnología puede crear una imagen o una noticia falsa; importan la verificación, la autoría y el consentimiento.',
    concept: 'Crear con máquinas',
    question: '¿Qué hace la IA generativa?',
    options: [
      { text: 'Crea texto, imágenes o sonidos a partir de datos.', correct: true },
      { text: 'Solo suma números.', correct: false },
      { text: 'Imprime libros.', correct: false },
    ],
    explanation: 'La IA generativa aprende patrones de grandes conjuntos de datos y produce contenido nuevo; las decisiones y la autoría siguen siendo humanas.',
    source: 'UNESCO · Documentación de OpenAI',
    icon: 'ai',
    side: 1,
    accent: '#d96c4f',
  },
];

const LANES = [-3.1, 0, 3.1];
const SIL_W = 256;
const SIL_H = 384;
const STATION_START = 8;
const STATION_GAP = 24;
const PLAYER_START_Z = -18;
const STOP_DISTANCE = 2.4;

// Modo aula: estaciones 1, 2, 5, 6, 8 y 10 (índices de STATIONS).
const CLASSROOM_ROUTE = [0, 1, 4, 5, 7, 9];

/* ============================================================
   2. UTILIDADES
   ============================================================ */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const $ = (id) => document.getElementById(id);

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(seconds) {
  const s = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function roundRectPath(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function makeCanvasTexture(canvas) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function makeGlowTexture(color = '#f0a35e') {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 2, 64, 64, 62);
  g.addColorStop(0, color);
  g.addColorStop(0.25, color);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return makeCanvasTexture(c);
}

const GLOW_TEXTURE_CACHE = new Map();
function glowSprite(color, size = 2) {
  let tex = GLOW_TEXTURE_CACHE.get(color);
  if (!tex) {
    tex = makeGlowTexture(color);
    GLOW_TEXTURE_CACHE.set(color, tex);
  }
  const material = new THREE.SpriteMaterial({
    map: tex,
    color: 0xffffff,
    transparent: true,
    opacity: 0.55,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(size, size, 1);
  return sprite;
}

function makeLabel(main, sub = '', { accent = '#f0a35e', w = 512, h = 160 } = {}) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');

  ctx.fillStyle = 'rgba(7, 15, 23, .88)';
  roundRectPath(ctx, 4, 4, w - 8, h - 8, 22);
  ctx.fill();
  ctx.strokeStyle = 'rgba(244, 234, 216, .18)';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = accent;
  roundRectPath(ctx, 20, 20, 7, h - 40, 4);
  ctx.fill();

  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#f4ead8';
  let mainSize = Math.round(h * 0.28);
  ctx.font = `600 ${mainSize}px Georgia, serif`;
  while (ctx.measureText(main).width > w - 66 && mainSize > 18) {
    mainSize -= 1;
    ctx.font = `600 ${mainSize}px Georgia, serif`;
  }
  ctx.fillText(main, 46, sub ? h * 0.39 : h * 0.52);

  if (sub) {
    ctx.fillStyle = 'rgba(244, 234, 216, .66)';
    let subSize = Math.round(h * 0.145);
    ctx.font = `600 ${subSize}px "Segoe UI", sans-serif`;
    while (ctx.measureText(sub).width > w - 68 && subSize > 12) {
      subSize -= 1;
      ctx.font = `600 ${subSize}px "Segoe UI", sans-serif`;
    }
    ctx.fillText(sub, 47, h * 0.72);
  }

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeCanvasTexture(c),
    transparent: true,
    depthWrite: false,
  }));
  sprite.scale.set(w / 116, h / 116, 1);
  return sprite;
}

function makeBadge(number, color = '#f0a35e') {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 128;
  const ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.arc(64, 64, 56, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(7, 15, 23, .92)';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.font = '600 56px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(String(number).padStart(2, '0'), 64, 68);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeCanvasTexture(c),
    transparent: true,
    depthWrite: false,
  }));
  return sprite;
}

/* ============================================================
   3. ESTADO
   ============================================================ */

const state = {
  mode: 'start',
  cameraMode: false,
  seated: false,
  classroom: false,
  route: [],
  routePos: 0,
  sound: true,
  score: 0,
  steps: 0,
  activeTime: 0,
  correct: 0,
  currentStation: 0,
  player: {
    x: 0,
    z: PLAYER_START_Z,
    lane: 1,
    targetLane: 1,
    targetX: 0,
    walkPhase: 0,
    moving: false,
  },
  pose: {
    visible: false,
    calibrated: false,
    leftHand: false,
    rightHand: false,
    advancing: false,
    hipX: 0.5,
    baseHipX: 0.5,
    baseKneeL: 0,
    baseKneeR: 0,
    lastStep: 0,
    lastLane: 0,
    center: true,
    handsReleased: true,
    frames: 0,
    calFrames: 0,
    calHip: [],
    calKneeL: [],
    calKneeR: [],
  },
  touch: { forward: false, left: false, right: false },
  slowUntil: 0,
  stationOpenedAt: 0,
  hoveredOption: -1,
  answerHoldStart: 0,
  answeredAt: 0,
  continueHoldStart: 0,
  pausedFrom: null,
  lastHud: 0,
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
};

/* ============================================================
   4. REFERENCIAS DE INTERFAZ
   ============================================================ */

const ui = {
  body: document.body,
  start: $('startScreen'),
  hud: $('hud'),
  hudNum: $('hudNum'),
  hudPlace: $('hudPlace'),
  hudConcept: $('hudConcept'),
  hudProgressText: $('hudProgressText'),
  progressDots: $('progressDots'),
  hudScore: $('hudScore'),
  hudSteps: $('hudSteps'),
  hudTime: $('hudTime'),
  stationOverlay: $('stationOverlay'),
  stationCard: $('stationCard'),
  stIndex: $('stIndex'),
  stationTitle: $('stationTitle'),
  stationSub: $('stationSub'),
  stConcept: $('stConcept'),
  stPlaceYear: $('stPlaceYear'),
  stPlace: $('stPlace'),
  stPlaceFact: $('stPlaceFact'),
  stPlaceCuriosity: $('stPlaceCuriosity'),
  stTechYear: $('stTechYear'),
  stTech: $('stTech'),
  stTechFact: $('stTechFact'),
  stTechCuriosity: $('stTechCuriosity'),
  stConceptLine: $('stConceptLine'),
  stQuestion: $('stQuestion'),
  stOptions: $('stOptions'),
  stHint: $('stHint'),
  stFeedback: $('stFeedback'),
  stSource: $('stSource'),
  btnContinue: $('btnContinue'),
  loading: $('loadingScreen'),
  loadTitle: $('loadTitle'),
  loadSub: $('loadSub'),
  btnCancelLoad: $('btnCancelLoad'),
  calibration: $('calibration'),
  calRing: $('calRing'),
  calCount: $('calCount'),
  calStatus: $('calStatus'),
  btnSkipCal: $('btnSkipCal'),
  pause: $('pauseScreen'),
  btnResume: $('btnResume'),
  btnQuit: $('btnQuit'),
  pauseSub: $('pauseSub'),
  end: $('endScreen'),
  endScore: $('endScore'),
  endCorrect: $('endCorrect'),
  endSteps: $('endSteps'),
  endTime: $('endTime'),
  endCalories: $('endCalories'),
  endRoute: $('endRoute'),
  endFine: $('endFine'),
  btnRestart: $('btnRestart'),
  btnHome: $('btnHome'),
  cameraPreview: $('cameraPreview'),
  previewCanvas: $('previewCanvas'),
  poseStatus: $('poseStatus'),
  toasts: $('toasts'),
  flash: $('flash'),
  hintText: $('hintText'),
  btnCamera: $('btnCamera'),
  btnKeyboard: $('btnKeyboard'),
  seatedToggle: $('seatedToggle'),
  classroomToggle: $('classroomToggle'),
  stationCountChip: $('stationCountChip'),
  startRouteCount: $('startRouteCount'),
  ledeStations: $('ledeStations'),
  ledeHitos: $('ledeHitos'),
  btnSound: $('btnSound'),
  btnPause: $('btnPause'),
  touchLeft: $('touchLeft'),
  touchForward: $('touchForward'),
  touchRight: $('touchRight'),
};

/* ============================================================
   5. ESCENA 3D
   ============================================================ */

let scene;
let threeCamera;
let renderer;
let clock;
let world;
let playerGroup;
let avatar3d;
let playerPlane;
let playerShadow;
let silhouetteCanvas;
let silhouetteCtx;
let silhouetteTexture;
let stationLight;
let particlesGroup;

const markerObjects = [];
const collectibleObjects = [];
const puddleObjects = [];
const particleBursts = [];
const treePositions = [];

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.86,
    metalness: 0.03,
    ...opts,
  });
}

function box(w, h, d, color, opts = {}) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color, opts));
}

function cyl(rt, rb, h, color, segments = 12, opts = {}) {
  return new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, segments), mat(color, opts));
}

function put(parent, mesh, x, y, z) {
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function makeShadow(w = 1, d = 1, opacity = 0.22) {
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity, depthWrite: false })
  );
  m.rotation.x = -Math.PI / 2;
  m.position.y = 0.025;
  return m;
}

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x071018);
  scene.fog = new THREE.Fog(0x0a1722, 55, 235);

  threeCamera = new THREE.PerspectiveCamera(54, window.innerWidth / window.innerHeight, 0.1, 600);
  threeCamera.position.set(0, 6, -30);
  threeCamera.lookAt(0, 2, 30);
  threeCamera.userData.look = new THREE.Vector3(0, 2, 30);

  renderer = new THREE.WebGLRenderer({
    canvas: $('scene'),
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;

  const hemi = new THREE.HemisphereLight(0x8ab8cf, 0x2a2418, 1.35);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xffc48a, 1.7);
  sun.position.set(45, 38, -25);
  sun.target.position.set(0, 0, 80);
  scene.add(sun.target);
  scene.add(sun);

  const ambient = new THREE.AmbientLight(0x203244, 0.55);
  scene.add(ambient);

  world = new THREE.Group();
  scene.add(world);

  stationLight = new THREE.PointLight(0xf0a35e, 0, 16, 2);
  scene.add(stationLight);

  // Las estaciones necesitan su z antes de construir el mundo.
  prepareOptions();

  buildSky();
  buildWorld();
  buildPlayer();

  clock = new THREE.Clock();
  window.addEventListener('resize', onResize);
  animate();
}

function onResize() {
  threeCamera.aspect = window.innerWidth / window.innerHeight;
  threeCamera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
}

/* ---------- Cielo ---------- */

function buildSky() {
  const skyGeo = new THREE.SphereGeometry(420, 32, 18);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x06101e) },
      midColor: { value: new THREE.Color(0x183246) },
      bottomColor: { value: new THREE.Color(0xe59a63) },
    },
    vertexShader: `
      varying vec3 vWorld;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorld = wp.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 topColor;
      uniform vec3 midColor;
      uniform vec3 bottomColor;
      varying vec3 vWorld;
      void main() {
        float h = normalize(vWorld).y;
        vec3 col = mix(bottomColor, midColor, smoothstep(-0.02, 0.22, h));
        col = mix(col, topColor, smoothstep(0.18, 0.72, h));
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));

  const starGeo = new THREE.BufferGeometry();
  const positions = [];
  for (let i = 0; i < 280; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 0.42;
    const r = 360;
    positions.push(
      Math.cos(theta) * Math.sin(phi) * r,
      Math.cos(phi) * r,
      Math.sin(theta) * Math.sin(phi) * r
    );
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ color: 0xfff1d6, size: 1.2, transparent: true, opacity: 0.7, depthWrite: false })
  );
  scene.add(stars);

  const sunGlow = glowSprite('#ffb36b', 70);
  sunGlow.position.set(90, 34, 250);
  scene.add(sunGlow);
  const sunDisc = new THREE.Mesh(
    new THREE.CircleGeometry(7, 32),
    new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0.95 })
  );
  sunDisc.position.set(90, 34, 248);
  scene.add(sunDisc);

  const cloudMat = new THREE.MeshBasicMaterial({ color: 0xf0b48a, transparent: true, opacity: 0.08, depthWrite: false });
  for (let i = 0; i < 6; i++) {
    const cloud = new THREE.Mesh(new THREE.SphereGeometry(9, 12, 8), cloudMat);
    cloud.scale.set(2.2, 0.35, 1);
    cloud.position.set(-80 + i * 38, 46 + (i % 2) * 7, 170 + i * 10);
    scene.add(cloud);
  }
}

/* ---------- Mundo ---------- */

function buildWorld() {
  buildGround();
  buildRoad();
  buildRiver();
  world.add(makeBridge());
  buildLandmarks();
  buildBackgroundBuildings();
  buildTrees();
  buildStreetlights();
  buildStationMarkers();
  buildCollectibles();
  buildPuddles();
  buildFields();

  particlesGroup = new THREE.Group();
  scene.add(particlesGroup);
}

function buildGround() {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(260, 460),
    mat(0x3e4c34, { roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(0, -0.1, 120);
  world.add(ground);

  const bank = new THREE.Mesh(
    new THREE.PlaneGeometry(9, 320),
    mat(0x5a4a36, { roughness: 1 })
  );
  bank.rotation.x = -Math.PI / 2;
  bank.position.set(-13, -0.07, 140);
  world.add(bank);

  const bank2 = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 320),
    mat(0x4a5a3c, { roughness: 1 })
  );
  bank2.rotation.x = -Math.PI / 2;
  bank2.position.set(10.5, -0.06, 140);
  world.add(bank2);
}

function buildRoad() {
  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(9.8, 300),
    mat(0x252b32, { roughness: 0.96 })
  );
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0.012, 124);
  world.add(road);

  for (const x of [-6.6, 6.6]) {
    const sidewalk = box(3, 0.18, 300, 0x8a7e6d);
    put(world, sidewalk, x, 0.09, 124);
  }
  for (const x of [-5.1, 5.1]) {
    const curb = box(0.18, 0.24, 300, 0xb2a48e);
    put(world, curb, x, 0.1, 124);
  }

  const lineMat = new THREE.MeshBasicMaterial({ color: 0xdfd0b6, transparent: true, opacity: 0.42 });
  for (const x of [-4.82, 4.82]) {
    const line = new THREE.Mesh(new THREE.PlaneGeometry(0.07, 300), lineMat);
    line.rotation.x = -Math.PI / 2;
    line.position.set(x, 0.026, 124);
    world.add(line);
  }

  const laneMat = new THREE.MeshBasicMaterial({ color: 0xdfd0b6, transparent: true, opacity: 0.52 });
  const dashGeo = new THREE.PlaneGeometry(0.09, 1.55);
  const dashMatrix = new THREE.Matrix4();
  const dashCount = 2 * Math.ceil(278 / 3.4);
  const dashed = new THREE.InstancedMesh(dashGeo, laneMat, dashCount);
  let dashIndex = 0;
  for (const x of [-1.55, 1.55]) {
    for (let z = -2; z < 276; z += 3.4) {
      dashMatrix.makeRotationX(-Math.PI / 2);
      dashMatrix.setPosition(x, 0.026, z);
      dashed.setMatrixAt(dashIndex, dashMatrix);
      dashIndex += 1;
    }
  }
  dashed.instanceMatrix.needsUpdate = true;
  dashed.frustumCulled = false;
  world.add(dashed);

  // Cruce peatonal en la plaza
  for (let i = 0; i < 7; i++) {
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 8.6), lineMat);
    stripe.rotation.x = -Math.PI / 2;
    stripe.position.set(-4.4 + i * 1.45, 0.028, 98);
    world.add(stripe);
  }
}

function makeWaterTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#1f5d73';
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 70; i++) {
    const y = Math.random() * 256;
    const w = 20 + Math.random() * 90;
    ctx.strokeStyle = `rgba(210, 240, 240, ${0.025 + Math.random() * 0.06})`;
    ctx.lineWidth = 1 + Math.random() * 1.4;
    ctx.beginPath();
    ctx.moveTo(Math.random() * 256, y);
    ctx.quadraticCurveTo(Math.random() * 256, y + 4, Math.random() * 256, y);
    ctx.stroke();
  }
  const tex = makeCanvasTexture(c);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  return tex;
}

let waterTexture;
function buildRiver() {
  waterTexture = makeWaterTexture();
  const waterMat = new THREE.MeshStandardMaterial({
    map: waterTexture,
    color: 0x2f7387,
    roughness: 0.32,
    metalness: 0.2,
    transparent: true,
    opacity: 0.94,
  });

  const horizontal = new THREE.Mesh(new THREE.PlaneGeometry(150, 16), waterMat);
  horizontal.rotation.x = -Math.PI / 2;
  horizontal.position.set(0, -0.23, -13);
  world.add(horizontal);

  const vertical = new THREE.Mesh(new THREE.PlaneGeometry(24, 320), waterMat);
  vertical.rotation.x = -Math.PI / 2;
  vertical.position.set(-30, -0.23, 147);
  world.add(vertical);

  const bankMat = mat(0x6a5940, { roughness: 1 });
  const bank = box(2.2, 0.3, 320, 0x6a5940);
  put(world, bank, -17.2, -0.08, 147);

  for (let z = -2; z < 260; z += 4.5) {
    const reed = cyl(0.02, 0.035, 1.1 + Math.random() * 0.9, 0x7d8b52, 5);
    put(world, reed, -17.8 - Math.random() * 1.8, 0.5, z + Math.random() * 2);
    reed.rotation.z = (Math.random() - 0.5) * 0.25;
  }

  // Bote en el río
  const boat = new THREE.Group();
  boat.position.set(-33, -0.05, 40);
  const hull = box(1.2, 0.45, 3.4, 0x7b4a2f);
  put(boat, hull, 0, 0.25, 0);
  const bow = new THREE.Mesh(new THREE.ConeGeometry(0.62, 1.1, 4), mat(0x7b4a2f));
  bow.rotation.x = -Math.PI / 2;
  bow.rotation.z = Math.PI / 4;
  put(boat, bow, 0, 0.25, 2.1);
  const mast = cyl(0.04, 0.04, 2.6, 0x3b2b20, 6);
  put(boat, mast, 0, 1.4, 0);
  const sail = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 1.7),
    new THREE.MeshStandardMaterial({ color: 0xe8d8b8, side: THREE.DoubleSide, roughness: 0.9 })
  );
  sail.position.set(0, 1.7, 0.02);
  sail.rotation.y = Math.PI / 2;
  boat.add(sail);
  world.add(boat);
}

function makeBridge() {
  const g = new THREE.Group();
  g.position.set(0, 0, -13);

  const deck = box(64, 0.45, 18, 0x6f6254);
  put(g, deck, 0, -0.2, 0);
  const top = box(64, 0.06, 17, 0x2b3138);
  put(g, top, 0, 0.03, 0);

  for (const z of [-8.6, 8.6]) {
    put(g, box(64, 0.12, 0.12, 0xc5b79d), 0, 1.32, z);
    for (let x = -31; x <= 31; x += 3.1) {
      put(g, box(0.12, 1.2, 0.12, 0x95836b), x, 0.72, z);
    }
  }

  for (const x of [-17, 0, 17]) {
    const arch = new THREE.Mesh(
      new THREE.TorusGeometry(7, 0.45, 8, 30, Math.PI),
      mat(0x8b7a63, { roughness: 0.95 })
    );
    arch.position.set(x, -7.1, 0);
    g.add(arch);
  }

  for (const x of [-31, 31]) {
    put(g, box(3.4, 4.2, 4.4, 0x7d6c58), x, 1.6, 0);
  }

  const sign = makeLabel('Puente Libertad', '1958 · 8 de febrero', { accent: '#f0a35e', w: 512, h: 156 });
  sign.position.set(8.8, 3.3, 9);
  sign.scale.set(4.9, 1.49, 1);
  g.add(sign);

  for (const x of [-26, -10, 8, 24]) {
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
    lamp.position.set(x, 2.65, 0);
    g.add(lamp);
    const glow = glowSprite('#ffc27a', 1.6);
    glow.position.copy(lamp.position);
    g.add(glow);
  }

  return g;
}

/* ---------- Landmarks ---------- */

function buildLandmarks() {
  world.add(makeRiverDock());
  world.add(makeViewpoint());
  world.add(makeCamping());
  world.add(makePlaza());
  world.add(makeMunicipality());
  world.add(makeChurch());
  world.add(makeSchool());
  world.add(makeINTA());
  world.add(makeFair());
}

function makeRiverDock() {
  const g = new THREE.Group();
  g.position.set(-14, 0, 32);

  const deck = box(5.2, 0.28, 7.4, 0x7b5b3d);
  put(g, deck, 0, 0.42, 0);
  for (const x of [-2.2, 2.2]) {
    for (const z of [-3.2, 0, 3.2]) {
      put(g, cyl(0.1, 0.12, 2.1, 0x5a3e2a, 6), x, -0.6, z);
    }
  }
  for (const x of [-2.4, 2.4]) {
    put(g, box(0.1, 1.1, 7.4, 0x8f6b47), x, 1.05, 0);
  }
  const sign = makeLabel('Río Bermejo', 'El nombre del pueblo', { accent: '#8fc3d4', w: 460, h: 140 });
  sign.position.set(0, 2.3, 2.2);
  sign.scale.set(3.8, 1.16, 1);
  g.add(sign);

  const crate = box(0.8, 0.8, 0.8, 0x9a7448);
  put(g, crate, -1.4, 0.96, -1.4);
  const barrel = cyl(0.35, 0.35, 0.9, 0x6d4d31, 10);
  put(g, barrel, 1.5, 0.95, -1.8);

  return g;
}

function makeViewpoint() {
  const g = new THREE.Group();
  g.position.set(-14, 0, 56);

  const platform = box(6.4, 0.35, 6.2, 0x8a6a48);
  put(g, platform, 0, 0.35, 0);
  for (const x of [-3, 3]) {
    for (const z of [-2.8, 2.8]) {
      put(g, cyl(0.12, 0.14, 2.8, 0x5b4029, 6), x, 1.7, z);
    }
  }
  const roof = box(7.2, 0.16, 7, 0x6f5538);
  put(g, roof, 0, 3.15, 0);
  for (let i = -2; i <= 2; i++) {
    put(g, box(0.1, 0.1, 6.8, 0x9b7c55), i * 1.2, 3.25, 0);
  }

  for (let x = -2.8; x <= 2.8; x += 1.4) {
    put(g, box(0.08, 1.0, 0.08, 0x6e553c), x, 1.3, 3.06);
  }
  put(g, box(6.0, 0.08, 0.08, 0x6e553c), 0, 1.8, 3.06);

  const bench = new THREE.Group();
  put(bench, box(2.2, 0.12, 0.5, 0x8f6a46), 0, 0.55, 0);
  put(bench, box(2.2, 0.5, 0.1, 0x8f6a46), 0, 0.85, -0.22);
  for (const x of [-0.8, 0.8]) put(bench, box(0.1, 0.55, 0.4, 0x4d3828), x, 0.28, 0);
  bench.position.set(-1.2, 0.52, -1.1);
  g.add(bench);

  const telescope = new THREE.Group();
  put(telescope, cyl(0.04, 0.05, 1.0, 0x3a3a3a, 6), 0, 0.5, 0);
  const tube = cyl(0.08, 0.11, 0.7, 0xb08a52, 12);
  tube.rotation.x = Math.PI / 2.6;
  put(telescope, tube, 0, 1.05, 0);
  telescope.position.set(2.3, 0.55, 1.5);
  g.add(telescope);

  const sign = makeLabel('Mirador', 'La mirada larga', { accent: '#f7c98f', w: 420, h: 132 });
  sign.position.set(0, 3.9, 0);
  sign.scale.set(3.4, 1.07, 1);
  g.add(sign);

  return g;
}

function makeCamping() {
  const g = new THREE.Group();
  g.position.set(-14, 0, 80);

  const cabin = new THREE.Group();
  put(cabin, box(5.2, 3.1, 4.6, 0xb4885a), 0, 1.55, 0);
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0, 4.1, 1.6, 4), mat(0x6f3f2e));
  roof.rotation.y = Math.PI / 4;
  put(cabin, roof, 0, 3.9, 0);
  put(cabin, box(0.9, 1.9, 0.12, 0x4d2f22), 0, 0.95, 2.32);
  for (const x of [-1.7, 1.7]) {
    put(cabin, box(0.75, 0.75, 0.08, 0xffcf8a, { emissive: 0xffb45e, emissiveIntensity: 0.5 }), x, 1.8, 2.32);
  }
  put(cabin, box(5.6, 0.12, 5.0, 0x5a3527), 0, 3.15, 0);
  g.add(cabin);

  const pool = new THREE.Group();
  pool.position.set(-1.5, 0, 4.6);
  put(pool, box(5.2, 0.25, 3.4, 0xc8b18d), 0, 0.12, 0);
  const water = new THREE.Mesh(
    new THREE.PlaneGeometry(4.7, 2.9),
    new THREE.MeshStandardMaterial({ color: 0x4aa9c4, roughness: 0.18, metalness: 0.35 })
  );
  water.rotation.x = -Math.PI / 2;
  put(pool, water, 0, 0.27, 0);
  g.add(pool);

  for (const x of [-3.8, 2.8]) {
    const pole = cyl(0.035, 0.035, 2.2, 0xd8c8a8, 6);
    put(g, pole, x, 1.1, 4.2);
    const umbrella = new THREE.Mesh(new THREE.ConeGeometry(1.2, 0.5, 8), mat(x < 0 ? 0xd96c4f : 0xf0a35e));
    put(g, umbrella, x, 2.3, 4.2);
  }

  for (const x of [-3.2, 3.1]) {
    put(g, box(0.12, 0.8, 0.12, 0x4e3726), x, 0.4, -8.5);
    put(g, box(0.9, 0.1, 0.5, 0x8b6542), x, 0.82, -8.5);
  }

  const sign = makeLabel('Camping municipal', 'Gratis, todo el año', { accent: '#d96c4f', w: 470, h: 140 });
  sign.position.set(0, 4.8, 0);
  sign.scale.set(4.0, 1.19, 1);
  g.add(sign);

  return g;
}

function makePlaza() {
  const g = new THREE.Group();
  g.position.set(13, 0, 104);

  const paving = new THREE.Mesh(new THREE.CylinderGeometry(5.6, 5.6, 0.12, 28), mat(0xb7a27e));
  put(g, paving, 0, 0.06, 0);
  const grass = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 0.14, 24), mat(0x4f6a3a));
  put(g, grass, 0, 0.13, 0);

  const pedestal = box(1.4, 1.5, 1.4, 0xc7c0b2);
  put(g, pedestal, 0, 0.95, 0);
  const shoulders = box(0.9, 0.5, 0.55, 0x9b7a58);
  put(g, shoulders, 0, 1.85, 0);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), mat(0xa77c56));
  put(g, head, 0, 2.3, 0);
  const plaque = box(0.8, 0.4, 0.06, 0x8d6a3f);
  put(g, plaque, 0, 1.25, 0.72);

  for (const [x, z, r] of [[-3.7, 1.5, 0.4], [3.7, 1.5, -0.4], [-3.3, -2.4, 0.2]]) {
    const bench = new THREE.Group();
    put(bench, box(1.8, 0.1, 0.45, 0x8f6a46), 0, 0.55, 0);
    put(bench, box(1.8, 0.45, 0.1, 0x8f6a46), 0, 0.82, -0.2);
    for (const bx of [-0.65, 0.65]) put(bench, box(0.1, 0.5, 0.35, 0x4d3828), bx, 0.28, 0);
    bench.position.set(x, 0.5, z);
    bench.rotation.y = r;
    g.add(bench);
  }

  const fountain = new THREE.Group();
  put(fountain, cyl(1.1, 1.3, 0.4, 0xc8bda8, 16), 0, 0.22, 0);
  put(fountain, cyl(0.08, 0.1, 1.0, 0xb7a27e, 8), 0, 0.95, 0);
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.95, 20), new THREE.MeshStandardMaterial({ color: 0x4aa9c4, roughness: 0.2 }));
  water.rotation.x = -Math.PI / 2;
  put(fountain, water, 0, 0.43, 0);
  fountain.position.set(0, 0, 3.5);
  g.add(fountain);

  for (const [x, z] of [[4.2, -3.2], [-4.4, -3.0]]) {
    const tree = makeTree(0, 0, 0.9);
    tree.position.set(x, 0, z);
    g.add(tree);
  }

  const sign = makeLabel('Plaza San Martín', '1950 · El busto', { accent: '#f0a35e', w: 470, h: 140 });
  sign.position.set(0, 4.2, 0);
  sign.scale.set(4.0, 1.19, 1);
  g.add(sign);

  return g;
}

function makeMunicipality() {
  const g = new THREE.Group();
  g.position.set(14, 0, 128);

  const body = box(8.2, 6.0, 7.0, 0xd6c5a8);
  put(g, body, 0, 3.0, 0);
  const base = box(8.6, 0.4, 7.4, 0xa98f6d);
  put(g, base, 0, 0.2, 0);
  const roof = box(8.8, 0.3, 7.6, 0x7b5e45);
  put(g, roof, 0, 6.1, 0);
  const parapet = box(8.6, 0.7, 7.4, 0xc0ae90);
  put(g, parapet, 0, 6.45, 0);

  for (let f = 0; f < 2; f++) {
    for (let i = 0; i < 4; i++) {
      put(g, box(0.9, 1.2, 0.08, 0x35424a, { emissive: 0x9fc7d6, emissiveIntensity: 0.22 }), -2.7 + i * 1.8, 1.9 + f * 2.3, 3.54);
    }
  }
  put(g, box(1.4, 2.2, 0.12, 0x4b3426), 0, 1.15, 3.58);
  put(g, box(2.0, 0.15, 0.8, 0x7b5e45), 0, 2.6, 3.8);

  const tower = box(2.2, 8.2, 2.2, 0xc8b697);
  put(g, tower, 0, 4.1, -3.2);
  const towerRoof = new THREE.Mesh(new THREE.ConeGeometry(1.8, 1.6, 4), mat(0x7b4a37));
  towerRoof.rotation.y = Math.PI / 4;
  put(g, towerRoof, 0, 8.9, -3.2);
  const clock = new THREE.Mesh(new THREE.CircleGeometry(0.55, 20), new THREE.MeshBasicMaterial({ color: 0xf4ead8 }));
  clock.position.set(0, 6.6, -2.08);
  clock.rotation.y = Math.PI;
  g.add(clock);
  put(g, box(0.05, 0.35, 0.03, 0x2b2b2b), 0, 6.72, -2.1);
  put(g, box(0.25, 0.05, 0.03, 0x2b2b2b), 0.1, 6.6, -2.1);

  const flagPole = cyl(0.04, 0.04, 5.2, 0xd8d0bd, 6);
  put(g, flagPole, 5.2, 2.6, 3.8);
  put(g, box(1.4, 0.28, 0.03, 0x74b3d1), 5.9, 4.9, 3.8);
  put(g, box(1.4, 0.28, 0.03, 0xf4ead8), 5.9, 4.62, 3.8);
  put(g, box(1.4, 0.28, 0.03, 0x74b3d1), 5.9, 4.34, 3.8);

  const sign = makeLabel('Municipalidad', '1944 · 1957', { accent: '#58a89b', w: 470, h: 140 });
  sign.position.set(0, 7.6, 0);
  sign.scale.set(4.2, 1.25, 1);
  g.add(sign);

  return g;
}

function makeChurch() {
  const g = new THREE.Group();
  g.position.set(-14, 0, 152);

  const nave = box(6.2, 5.0, 10.2, 0xe1d4bc);
  put(g, nave, 0, 2.5, 0);
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0, 4.6, 2.0, 4), mat(0x7d4a37));
  roof.rotation.y = Math.PI / 4;
  put(g, roof, 0, 5.9, 0);

  const tower = box(3.0, 8.4, 3.0, 0xd9cbb0);
  put(g, tower, 0, 4.2, 5.8);
  const towerRoof = new THREE.Mesh(new THREE.ConeGeometry(2.2, 2.2, 4), mat(0x7d4a37));
  towerRoof.rotation.y = Math.PI / 4;
  put(g, towerRoof, 0, 9.5, 5.8);

  const crossV = box(0.12, 1.1, 0.12, 0x8d6a3f);
  put(g, crossV, 0, 10.9, 5.8);
  const crossH = box(0.62, 0.12, 0.12, 0x8d6a3f);
  put(g, crossH, 0, 11.0, 5.8);

  const door = new THREE.Mesh(new THREE.CircleGeometry(0.9, 18, 0, Math.PI), mat(0x4a2e22));
  door.position.set(0, 1.0, 5.06);
  door.rotation.z = Math.PI;
  g.add(door);

  const rose = new THREE.Mesh(new THREE.CircleGeometry(0.65, 20), new THREE.MeshBasicMaterial({ color: 0x8fc3d4 }));
  rose.position.set(0, 6.4, 5.06);
  g.add(rose);

  for (const z of [-3.4, 0, 3.4]) {
    for (const x of [-3.12, 3.12]) {
      put(g, box(0.08, 1.3, 0.7, 0x4b5c66, { emissive: 0x6e9db0, emissiveIntensity: 0.15 }), x, 2.7, z);
    }
  }

  const sign = makeLabel('San Antonio de Padua', 'Patrono de El Colorado', { accent: '#8fc3d4', w: 500, h: 145 });
  sign.position.set(0, 11.8, 0);
  sign.scale.set(4.4, 1.28, 1);
  g.add(sign);

  return g;
}

function makeSchool() {
  const g = new THREE.Group();
  g.position.set(14, 0, 176);

  const body = box(11.5, 4.0, 6.2, 0xd8c9ad);
  put(g, body, 0, 2.0, 0);
  const roof = box(11.9, 0.25, 6.6, 0x7e5a43);
  put(g, roof, 0, 4.1, 0);
  const entrance = box(2.2, 4.6, 1.2, 0xc3ad8c);
  put(g, entrance, 0, 2.3, 3.2);

  for (let i = 0; i < 5; i++) {
    put(g, box(1.1, 1.15, 0.08, 0x45545c, { emissive: 0x9fc7d6, emissiveIntensity: 0.18 }), -4.2 + i * 2.1, 2.3, 3.14);
  }
  put(g, box(1.2, 2.2, 0.1, 0x4b3426), 0, 1.1, 3.82);

  const flagPole = cyl(0.035, 0.04, 5.5, 0xd8d0bd, 6);
  put(g, flagPole, 7.6, 2.75, 1.7);
  put(g, box(1.5, 0.3, 0.03, 0x74b3d1), 8.35, 5.2, 1.7);
  put(g, box(1.5, 0.3, 0.03, 0xf4ead8), 8.35, 4.9, 1.7);
  put(g, box(1.5, 0.3, 0.03, 0x74b3d1), 8.35, 4.6, 1.7);

  const sign = makeLabel('EPES 1', '1960 · 25 de abril', { accent: '#f7c98f', w: 440, h: 136 });
  sign.position.set(0, 5.6, 0);
  sign.scale.set(3.9, 1.21, 1);
  g.add(sign);

  return g;
}

function makeINTA() {
  const g = new THREE.Group();
  g.position.set(15, 0, 200);

  const barn = box(8.0, 4.2, 6.4, 0xb88e61);
  put(g, barn, 0, 2.1, 0);
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0, 5.4, 2.1, 4), mat(0x70432f));
  roof.rotation.y = Math.PI / 4;
  put(g, roof, 0, 5.2, 0);
  put(g, box(1.8, 2.4, 0.12, 0x4b3426), 0, 1.2, 3.24);

  const silo = cyl(1.5, 1.6, 6.8, 0xc9b28d, 16);
  put(g, silo, 5.8, 3.4, -1.4);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.55, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x8d6b4c));
  put(g, dome, 5.8, 6.8, -1.4);
  put(g, cyl(0.05, 0.05, 1.4, 0x6c5036, 6), 5.8, 8.2, -1.4);

  for (let i = 0; i < 3; i++) {
    put(g, box(7.0, 0.08, 0.08, 0x6e553c), 0, 4.4 + i * 0.25, 0);
  }

  const sign = makeLabel('INTA El Colorado', '1981 · 21 de octubre', { accent: '#66d19e', w: 490, h: 142 });
  sign.position.set(0, 7.7, 0);
  sign.scale.set(4.4, 1.27, 1);
  g.add(sign);

  return g;
}

function buildFields() {
  for (let i = 0; i < 7; i++) {
    const row = box(0.8, 0.12, 22, 0x6f8b44);
    put(world, row, 21 + i * 2.1, 0.02, 198);
  }
  for (let i = 0; i < 4; i++) {
    const hay = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.8, 1.4, 10), mat(0xc2a35e));
    hay.rotation.z = Math.PI / 2;
    put(world, hay, 20 + i * 2.5, 0.7, 216);
  }
}

function makeFair() {
  const g = new THREE.Group();
  g.position.set(0, 0, 224);

  const stage = box(8.0, 0.8, 5.0, 0x6f4d36);
  put(g, stage, 0, 0.4, 3.5);
  const back = box(8.0, 4.0, 0.25, 0x8a5f42);
  put(g, back, 0, 2.4, 1.0);
  const banner = makeLabel('FERIARTE', 'Octubre · Artesanos', { accent: '#f0a35e', w: 512, h: 150 });
  banner.position.set(0, 3.2, 1.18);
  banner.scale.set(5.0, 1.46, 1);
  g.add(banner);

  const stallColors = [0xd96c4f, 0xf0a35e, 0x58a89b, 0x8fc3d4, 0xe1c48b];
  for (let i = 0; i < 5; i++) {
    const side = i % 2 === 0 ? 1 : -1;
    const x = side * (7.5 + (i % 3) * 2.2);
    const z = -2.5 + i * 2.1;
    const stall = new THREE.Group();
    stall.position.set(x, 0, z);
    put(stall, box(2.6, 2.2, 2.4, 0xe3d2b5), 0, 1.1, 0);
    const awning = new THREE.Mesh(new THREE.ConeGeometry(2.0, 0.8, 4), mat(stallColors[i]));
    awning.rotation.y = Math.PI / 4;
    put(stall, awning, 0, 2.55, 0);
    put(stall, box(2.2, 0.1, 0.7, 0x8f6a46), 0, 0.95, 1.25);
    g.add(stall);
  }

  for (let i = 0; i < 8; i++) {
    const x = -6 + i * 1.7;
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.1, 6, 6), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
    light.position.set(x, 3.2 + Math.sin(i * 0.8) * 0.25, 5.8);
    g.add(light);
  }

  return g;
}

function buildBackgroundBuildings() {
  const colors = [0x9b7a58, 0xb08c63, 0x8a6a4f, 0xc0a37a, 0x7d5f47, 0xa88b68, 0x6f5a45, 0xb89a70];
  for (let i = 0; i < 18; i++) {
    const z = -8 + i * 14 + Math.random() * 5;
    const x = 22 + Math.random() * 10;
    const w = 5 + Math.random() * 4;
    const d = 5 + Math.random() * 4;
    const h = 4 + Math.random() * 7;
    const color = colors[Math.floor(Math.random() * colors.length)];
    world.add(makeGenericBuilding(x, z, w, d, h, color));
  }
  for (let i = 0; i < 7; i++) {
    const z = -15 + i * 38 + Math.random() * 12;
    const x = -46 - Math.random() * 8;
    const h = 5 + Math.random() * 6;
    world.add(makeGenericBuilding(x, z, 6 + Math.random() * 4, 6 + Math.random() * 4, h, 0x6f5a45, 0.5));
  }
}

function makeGenericBuilding(x, z, w, d, h, color, dim = 1) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  const body = box(w, h, d, color, { color: new THREE.Color(color).multiplyScalar(dim) });
  put(g, body, 0, h / 2, 0);
  const roof = box(w + 0.4, 0.22, d + 0.4, 0x5b4434);
  put(g, roof, 0, h + 0.11, 0);
  const facade = x > 0 ? -1 : 1;
  const rows = Math.max(1, Math.floor(h / 2.4));
  const cols = Math.max(2, Math.floor(d / 2.2));
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (Math.random() < 0.22) continue;
      const win = box(0.06, 0.7, 0.55, 0x3b4c56, { emissive: 0xffc27a, emissiveIntensity: 0.25 });
      win.position.set(facade * (w / 2 + 0.02), 1.3 + r * 2.1, -d / 2 + 1.1 + c * 2.0);
      g.add(win);
    }
  }
  const awning = box(0.7, 0.08, 1.8, 0xc26b4f);
  put(g, awning, facade * (w / 2 + 0.35), 2.2, 0);
  const shadow = makeShadow(w * 1.1, d * 1.1, 0.18);
  g.add(shadow);
  return g;
}

function makeTree(x, z, scale = 1) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.scale.setScalar(scale);
  const trunk = cyl(0.12, 0.2, 1.3, 0x5e422c, 7);
  put(g, trunk, 0, 0.65, 0);
  const greens = [0x4d6b39, 0x567a40, 0x3f5c30];
  for (let i = 0; i < 3; i++) {
    const foliage = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.75 - i * 0.12, 0),
      mat(greens[i % greens.length], { roughness: 1 })
    );
    foliage.position.set((Math.random() - 0.5) * 0.35, 1.45 + i * 0.38, (Math.random() - 0.5) * 0.35);
    g.add(foliage);
  }
  const shadow = makeShadow(1.6, 1.6, 0.16);
  g.add(shadow);
  return g;
}

function buildTrees() {
  const stations = STATIONS.map((s) => s.z);
  for (let i = 0; i < 48; i++) {
    const side = Math.random() > 0.5 ? 1 : -1;
    const x = side * (8.2 + Math.random() * 9.2);
    const z = -2 + Math.random() * 245;
    const nearStation = stations.some((sz) => Math.abs(sz - z) < 6);
    if (nearStation && Math.abs(x) < 17) continue;
    const tree = makeTree(x, z, 0.75 + Math.random() * 0.65);
    world.add(tree);
  }
  for (let i = 0; i < 10; i++) {
    const tree = makeTree(-40 - Math.random() * 6, -4 + Math.random() * 240, 0.8 + Math.random() * 0.5);
    world.add(tree);
  }
}

function buildStreetlights() {
  for (let z = 0; z <= 240; z += 24) {
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      g.position.set(side * 7.2, 0, z);
      put(g, cyl(0.06, 0.09, 4.2, 0x3a3a3a, 6), 0, 2.1, 0);
      const arm = box(1.0, 0.07, 0.07, 0x3a3a3a);
      put(g, arm, -side * 0.45, 4.15, 0);
      const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.17, 8, 8), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
      put(g, lamp, -side * 0.92, 4.05, 0);
      const glow = glowSprite('#ffc27a', 1.9);
      glow.position.copy(lamp.position);
      g.add(glow);
      world.add(g);
    }
  }
  for (const [x, y, z] of [[-8, 4.2, 48], [8, 4.2, 126], [-8, 4.2, 204]]) {
    const light = new THREE.PointLight(0xffb36b, 1.1, 22, 2);
    light.position.set(x, y, z);
    scene.add(light);
  }
}

/* ---------- Marcadores de estación ---------- */

function buildStationMarkers() {
  for (const st of STATIONS) {
    const marker = makeStationMarker(st);
    world.add(marker.group);
    st.marker = marker;
    markerObjects.push(marker);
  }
}

function makeStationMarker(st) {
  const g = new THREE.Group();
  g.position.set(st.side * 5.8, 0, st.z);
  const color = new THREE.Color(st.accent);

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(1.45, 1.65, 0.18, 24),
    new THREE.MeshStandardMaterial({ color: 0x101a22, roughness: 0.8, metalness: 0.2 })
  );
  base.position.y = 0.09;
  g.add(base);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.08, 0.065, 8, 40),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 })
  );
  ring.position.y = 2.45;
  g.add(ring);

  const inner = new THREE.Mesh(
    new THREE.CircleGeometry(0.98, 32),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.09, side: THREE.DoubleSide, depthWrite: false })
  );
  inner.position.y = 2.45;
  g.add(inner);

  const badge = makeBadge(st.id, st.accent);
  badge.position.set(0, 2.45, 0.05);
  badge.scale.set(0.95, 0.95, 1);
  g.add(badge);

  const label = makeLabel(st.place, `${st.placeYear} · ${st.tech}`, { accent: st.accent, w: 512, h: 150 });
  label.position.set(0, 3.62, 0);
  label.scale.set(4.4, 1.29, 1);
  g.add(label);

  const icon = makeTechIcon(st.icon, st.accent);
  icon.position.set(0, 4.95, 0);
  icon.scale.setScalar(0.92);
  g.add(icon);

  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.5, 2.2, 10, 1, true),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.13,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  beam.position.y = 1.18;
  g.add(beam);

  const glow = glowSprite(st.accent, 3.4);
  glow.position.y = 2.45;
  g.add(glow);

  return { group: g, ring, inner, badge, label, icon, beam, glow, accent: color };
}

function makeTechIcon(type, accent) {
  const g = new THREE.Group();
  const metal = mat(0xb9a98e, { metalness: 0.45, roughness: 0.45 });
  const dark = mat(0x2b3138, { metalness: 0.35, roughness: 0.5 });
  const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(accent) });
  const accentMat = mat(new THREE.Color(accent), { emissive: new THREE.Color(accent), emissiveIntensity: 0.3 });

  const add = (mesh, x, y, z) => put(g, mesh, x, y, z);

  switch (type) {
    case 'telegraph': {
      add(box(1.1, 0.18, 0.65, 0x5b402c), 0, 0, 0);
      add(box(0.7, 0.1, 0.28, 0x8b6542), 0, 0.14, 0);
      const lever = box(0.55, 0.06, 0.12, metal);
      lever.rotation.z = -0.4;
      add(lever, 0.15, 0.35, 0);
      add(cyl(0.12, 0.12, 0.12, 0x2b2b2b, 12), 0.02, 0.48, 0);
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), glow);
      add(knob, 0.42, 0.38, 0);
      break;
    }
    case 'tablet': {
      const tablet = box(0.85, 0.08, 0.65, 0xb9905f);
      add(tablet, 0, 0, 0);
      for (let i = 0; i < 4; i++) {
        add(box(0.55, 0.015, 0.035, 0x5b3f2a), 0, 0.05, -0.18 + i * 0.12);
      }
      add(box(0.12, 0.06, 0.12, 0x8a6845), 0.5, 0.02, 0.28);
      break;
    }
    case 'press': {
      add(box(1.2, 0.16, 0.8, 0x5b402c), 0, -0.2, 0);
      for (const x of [-0.45, 0.45]) {
        for (const z of [-0.28, 0.28]) {
          add(box(0.1, 0.85, 0.1, metal), x, 0.22, z);
        }
      }
      add(box(1.2, 0.14, 0.75, metal), 0, 0.62, 0);
      add(cyl(0.16, 0.16, 0.9, 0x8b6542, 12), 0, 1.05, 0);
      add(box(0.5, 0.06, 0.4, 0xe8d8b8), 0, 0.35, 0);
      break;
    }
    case 'radio': {
      add(box(0.8, 0.45, 0.55, 0x5b402c), 0, 0, 0);
      add(cyl(0.04, 0.04, 1.5, metal, 6), -0.2, 0.95, 0);
      for (let i = 0; i < 3; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.25 + i * 0.15, 0.018, 5, 18), glow);
        ring.rotation.x = Math.PI / 2;
        add(ring, -0.2, 1.3 + i * 0.22, 0);
      }
      add(cyl(0.13, 0.13, 0.05, 0x2b2b2b, 16), 0.25, 0.1, 0.29);
      add(box(0.08, 0.02, 0.3, glow), 0.25, 0.13, 0.29);
      break;
    }
    case 'phone': {
      add(box(0.95, 0.5, 0.6, 0x2b3138), 0, 0, 0);
      add(cyl(0.22, 0.22, 0.05, 0xe1c48b, 18), 0, 0.27, 0.31);
      const handset = new THREE.Group();
      const bar = box(0.85, 0.1, 0.12, 0x8b6542);
      put(handset, bar, 0, 0, 0);
      for (const x of [-0.4, 0.4]) {
        put(handset, box(0.18, 0.14, 0.16, 0x5b402c), x, 0.04, 0);
      }
      handset.position.set(0, 0.72, 0);
      handset.rotation.z = 0.18;
      g.add(handset);
      break;
    }
    case 'computer': {
      add(box(0.95, 0.65, 0.18, 0x2b3138), 0, 0.25, 0);
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.45), glow);
      add(screen, 0, 0.25, 0.095);
      add(box(0.6, 0.08, 0.3, 0x5b402c), 0, -0.18, 0.15);
      add(box(0.18, 0.35, 0.18, 0x3a3a3a), 0.75, -0.05, 0);
      break;
    }
    case 'network': {
      const globe = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.62, 1),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(accent), wireframe: true, transparent: true, opacity: 0.8 })
      );
      add(globe, 0, 0, 0);
      for (const [x, y, z] of [[0.55, 0.3, 0.2], [-0.4, 0.5, -0.2], [0.1, -0.55, 0.35], [-0.55, -0.2, 0.4]]) {
        const node = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), glow);
        add(node, x, y, z);
        const lineGeo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(x, y, z)]);
        g.add(new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: new THREE.Color(accent), transparent: true, opacity: 0.5 })));
      }
      break;
    }
    case 'web': {
      add(box(1.0, 0.7, 0.12, 0x2b3138), 0, 0, 0);
      add(box(0.9, 0.5, 0.02, 0xe8d8b8), 0, -0.05, 0.075);
      for (let i = 0; i < 3; i++) {
        const dot = new THREE.Mesh(new THREE.CircleGeometry(0.035, 8), glow);
        add(dot, -0.33 + i * 0.09, 0.26, 0.09);
      }
      add(box(0.45, 0.035, 0.02, 0x8b6542), 0, 0.2, 0.09);
      add(box(0.35, 0.035, 0.02, 0x8b6542), 0, 0.1, 0.09);
      add(box(0.25, 0.035, 0.02, 0x8b6542), 0, 0.0, 0.09);
      break;
    }
    case 'smartphone': {
      add(box(0.55, 0.95, 0.1, 0x1f262c), 0, 0, 0);
      add(box(0.45, 0.74, 0.02, 0x8fc3d4), 0, 0, 0.06);
      add(cyl(0.03, 0.03, 0.02, 0x111111, 8), 0, 0.38, 0.06);
      add(box(0.12, 0.02, 0.02, 0x111111), 0, -0.38, 0.06);
      break;
    }
    case 'ai': {
      add(box(0.85, 0.85, 0.16, 0x2b3138), 0, 0, 0);
      add(box(0.5, 0.5, 0.05, glow), 0, 0, 0.1);
      for (let i = 0; i < 4; i++) {
        for (const side of [-1, 1]) {
          add(box(0.12, 0.04, 0.04, metal), side * (0.48 + 0.05), -0.27 + i * 0.18, 0);
          add(box(0.04, 0.12, 0.04, metal), side * 0.2, side * 0.48, 0);
        }
      }
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.025, 6, 24), glow);
      ring.rotation.x = Math.PI / 2;
      add(ring, 0, 0, 0);
      break;
    }
  }

  return g;
}

/* ---------- Coleccionables y charcos ---------- */

function buildCollectibles() {
  for (let i = 0; i < STATIONS.length - 1; i++) {
    const z = STATIONS[i].z + 12;
    for (let k = 0; k < 2; k++) {
      const lane = (i + k) % 2 === 0 ? -1 : 1;
      const x = LANES[lane === -1 ? 0 : 2];
      const gear = makeGear();
      gear.position.set(x, 1.15, z + k * 3.6);
      world.add(gear);
      collectibleObjects.push({ mesh: gear, x, z: z + k * 3.6, collected: false });
    }
  }
}

function makeGear() {
  const g = new THREE.Group();
  const gold = mat(0xf0c36b, { metalness: 0.55, roughness: 0.35, emissive: 0x5a3b10, emissiveIntensity: 0.25 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.07, 6, 16), gold);
  g.add(ring);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const tooth = box(0.14, 0.08, 0.12, 0xf0c36b, { metalness: 0.55, roughness: 0.35 });
    tooth.position.set(Math.cos(a) * 0.34, Math.sin(a) * 0.34, 0);
    tooth.rotation.z = a;
    g.add(tooth);
  }
  const core = new THREE.Mesh(new THREE.CircleGeometry(0.1, 12), new THREE.MeshBasicMaterial({ color: 0xfff0c9 }));
  core.position.z = 0.01;
  g.add(core);
  return g;
}

function buildPuddles() {
  for (let i = 0; i < STATIONS.length - 1; i++) {
    const z = STATIONS[i].z + 17;
    const lane = i % 2 === 0 ? -1 : 1;
    const x = LANES[lane === -1 ? 0 : 2];
    const puddle = new THREE.Mesh(
      new THREE.CircleGeometry(1.15, 20),
      new THREE.MeshStandardMaterial({ color: 0x182b33, roughness: 0.2, metalness: 0.3, transparent: true, opacity: 0.9 })
    );
    puddle.rotation.x = -Math.PI / 2;
    puddle.scale.set(1, 0.62, 1);
    puddle.position.set(x, 0.035, z);
    world.add(puddle);
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.15, 1.28, 20),
      new THREE.MeshBasicMaterial({ color: 0x58a89b, transparent: true, opacity: 0.25, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, 0.04, z);
    ring.scale.set(1, 0.62, 1);
    world.add(ring);
    puddleObjects.push({ x, z, cooldown: 0, mesh: puddle, ring });
  }
}

/* ---------- Jugador ---------- */

function buildPlayer() {
  playerGroup = new THREE.Group();
  playerGroup.position.set(0, 0, PLAYER_START_Z);
  world.add(playerGroup);

  avatar3d = makeAvatar();
  playerGroup.add(avatar3d);

  playerShadow = makeShadow(1.3, 1.1, 0.28);
  playerGroup.add(playerShadow);

  silhouetteCanvas = document.createElement('canvas');
  silhouetteCanvas.width = SIL_W;
  silhouetteCanvas.height = SIL_H;
  silhouetteCtx = silhouetteCanvas.getContext('2d');
  silhouetteTexture = makeCanvasTexture(silhouetteCanvas);
  silhouetteTexture.minFilter = THREE.LinearFilter;
  silhouetteTexture.magFilter = THREE.LinearFilter;

  // La silueta se recorta a la persona y se muestra como un billboard
  // de 1,50 × 2,25 m. El canvas mantiene la misma proporción para no
  // deformar el cuerpo cuando se ve desde la cámara del juego.
  playerPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(1.5, 2.25),
    new THREE.MeshBasicMaterial({
      map: silhouetteTexture,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      toneMapped: false,
    })
  );
  playerPlane.position.y = 1.125;
  playerPlane.visible = false;
  playerGroup.add(playerPlane);

  const playerLight = new THREE.PointLight(0xffb36b, 0.55, 7, 2);
  playerLight.position.set(0, 2.4, 2.2);
  playerGroup.add(playerLight);
}

function makeAvatar() {
  const g = new THREE.Group();
  const skin = mat(0xb9825a, { roughness: 0.9 });
  const jacket = mat(0x3f8f84, { roughness: 0.8 });
  const pants = mat(0x283a4a, { roughness: 0.9 });
  const shoe = mat(0x2a1d16, { roughness: 0.9 });
  const scarf = mat(0xf0a35e, { roughness: 0.8 });
  const hair = mat(0x2a1a14, { roughness: 0.95 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.72, 4, 10), jacket);
  body.position.y = 1.12;
  g.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.23, 14, 12), skin);
  head.position.y = 1.79;
  g.add(head);

  const hairMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.235, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.58),
    hair
  );
  hairMesh.position.y = 1.82;
  g.add(hairMesh);

  const scarfMesh = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.045, 6, 16), scarf);
  scarfMesh.position.y = 1.53;
  scarfMesh.rotation.x = Math.PI / 2;
  g.add(scarfMesh);

  const pack = box(0.48, 0.52, 0.22, 0x8a5a3b);
  put(g, pack, 0, 1.2, -0.3);
  const packTop = box(0.48, 0.12, 0.22, 0x6e452d);
  put(g, packTop, 0, 1.5, -0.3);

  const legL = new THREE.Group();
  legL.position.set(-0.16, 0.62, 0);
  const legLMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.085, 0.5, 4, 8), pants);
  legLMesh.position.y = -0.25;
  legL.add(legLMesh);
  const shoeL = box(0.2, 0.12, 0.34, shoe);
  put(legL, shoeL, 0, -0.52, 0.06);
  g.add(legL);

  const legR = legL.clone();
  legR.position.x = 0.16;
  g.add(legR);

  const armL = new THREE.Group();
  armL.position.set(-0.38, 1.38, 0);
  const armLMesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.48, 4, 8), jacket);
  armLMesh.position.y = -0.26;
  armL.add(armLMesh);
  const handL = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), skin);
  put(armL, handL, 0, -0.54, 0);
  armL.rotation.z = 0.12;
  g.add(armL);

  const armR = armL.clone();
  armR.position.x = 0.38;
  armR.rotation.z = -0.12;
  g.add(armR);

  g.userData = { body, head, legL, legR, armL, armR, pack };
  return g;
}

function setPlayerMode(cameraMode) {
  // Hasta que la segmentación entregue una silueta válida, mostramos el
  // avatar 3D. Así el jugador nunca queda como una figura invisible si la
  // cámara está tapada, falta luz o el cuerpo no entra en cuadro.
  avatar3d.visible = true;
  playerPlane.visible = false;
  playerShadow.visible = true;
  if (!cameraMode) {
    silhouetteLastValid = 0;
    poseLastVisible = 0;
  }
}

/* ---------- Partículas ---------- */

function burst(position, color, count = 18) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];
  for (let i = 0; i < count; i++) {
    positions[i * 3] = position.x;
    positions[i * 3 + 1] = position.y;
    positions[i * 3 + 2] = position.z;
    const a = Math.random() * Math.PI * 2;
    const up = 1.5 + Math.random() * 2.5;
    const spread = 0.8 + Math.random() * 2.2;
    velocities.push(new THREE.Vector3(Math.cos(a) * spread, up, Math.sin(a) * spread));
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const matP = new THREE.PointsMaterial({
    color: new THREE.Color(color),
    size: 0.16,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, matP);
  particlesGroup.add(points);
  particleBursts.push({ points, velocities, life: 0, maxLife: 1.15 });
}

function updateParticles(dt) {
  for (let i = particleBursts.length - 1; i >= 0; i--) {
    const b = particleBursts[i];
    b.life += dt;
    const pos = b.points.geometry.attributes.position;
    for (let j = 0; j < b.velocities.length; j++) {
      b.velocities[j].y -= 5.5 * dt;
      pos.array[j * 3] += b.velocities[j].x * dt;
      pos.array[j * 3 + 1] += b.velocities[j].y * dt;
      pos.array[j * 3 + 2] += b.velocities[j].z * dt;
    }
    pos.needsUpdate = true;
    b.points.material.opacity = Math.max(0, 1 - b.life / b.maxLife);
    if (b.life >= b.maxLife) {
      particlesGroup.remove(b.points);
      b.points.geometry.dispose();
      b.points.material.dispose();
      particleBursts.splice(i, 1);
    }
  }
}

/* ---------- Animate ---------- */

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  const now = performance.now();

  if (state.cameraMode && visionReady && state.mode !== 'end' && state.mode !== 'start') {
    processVideo(now);
  }

  if (state.mode === 'start') {
    cinematicCamera(dt, now);
  } else if (state.mode === 'playing' || state.mode === 'station' || state.mode === 'paused' || state.mode === 'end') {
    if (state.mode === 'playing') updateGame(dt, now);
    updateFollowCamera(dt);
    updateWorld(dt, now);
  }

  updateParticles(dt);
  renderer.render(scene, threeCamera);
}

function cinematicCamera(dt, now) {
  const t = now * 0.00006;
  const desired = new THREE.Vector3(
    Math.sin(t) * 22,
    8.5 + Math.sin(t * 0.7) * 1.2,
    -30 + Math.cos(t) * 7
  );
  threeCamera.position.lerp(desired, 1 - Math.exp(-dt * 1.5));
  const look = new THREE.Vector3(0, 2.2, 30 + Math.sin(t * 0.6) * 8);
  threeCamera.lookAt(look);
}

function updateFollowCamera(dt) {
  const p = playerGroup.position;
  const desired = new THREE.Vector3(p.x * 0.32, 5.1, p.z - 9.6);
  const look = new THREE.Vector3(p.x * 0.22, 1.65, p.z + 11.5);
  const k = 1 - Math.exp(-dt * 3.4);
  threeCamera.position.lerp(desired, k);
  threeCamera.userData.look.lerp(look, k * 1.15);
  threeCamera.lookAt(threeCamera.userData.look);
}

function updateWorld(dt, now) {
  if (waterTexture) {
    waterTexture.offset.x += dt * 0.008;
    waterTexture.offset.y += dt * 0.004;
  }

  for (const m of markerObjects) {
    m.ring.rotation.z += dt * 0.45;
    m.icon.rotation.y += dt * 0.6;
    const active = m === markerObjects[state.currentStation];
    const pulse = active ? 1 + Math.sin(now * 0.004) * 0.045 : 1;
    m.ring.scale.setScalar(pulse);
    m.inner.material.opacity = active ? 0.15 + Math.sin(now * 0.004) * 0.04 : 0.055;
    m.glow.material.opacity = active ? 0.55 : 0.22;
    m.icon.position.y = 4.95 + Math.sin(now * 0.0018 + m.group.position.z) * 0.12;
  }

  for (const c of collectibleObjects) {
    if (!c.collected) {
      c.mesh.rotation.z += dt * 1.8;
      c.mesh.position.y = 1.15 + Math.sin(now * 0.003 + c.z) * 0.1;
    }
  }

  for (const p of puddleObjects) {
    p.ring.material.opacity = 0.18 + Math.sin(now * 0.003 + p.z) * 0.06;
  }

  if (state.cameraMode && playerPlane.visible) {
    playerPlane.lookAt(threeCamera.position.x, playerPlane.position.y, threeCamera.position.z);
  }

  const moving = state.mode === 'playing' && state.player.moving;
  if (avatar3d.visible) {
    const phase = state.player.walkPhase;
    const amp = moving ? 1 : 0;
    avatar3d.userData.legL.rotation.x = Math.sin(phase) * 0.55 * amp;
    avatar3d.userData.legR.rotation.x = -Math.sin(phase) * 0.55 * amp;
    avatar3d.userData.armL.rotation.x = -Math.sin(phase) * 0.38 * amp;
    avatar3d.userData.armR.rotation.x = Math.sin(phase) * 0.38 * amp;
    avatar3d.userData.body.position.y = 1.12 + Math.abs(Math.sin(phase)) * 0.025 * amp;
    avatar3d.userData.head.position.y = 1.79 + Math.abs(Math.sin(phase)) * 0.018 * amp;
  }

  if (stationLight && markerObjects[state.currentStation]) {
    const m = markerObjects[state.currentStation];
    stationLight.position.set(m.group.position.x, 2.6, m.group.position.z);
    stationLight.color.set(m.accent);
    stationLight.intensity = 1.1 + Math.sin(now * 0.004) * 0.15;
  }
}

/* ============================================================
   6. ARRANQUE
   ============================================================ */

/* ============================================================
   6. AUDIO
   ============================================================ */

let audioCtx = null;

function ensureAudio() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audioCtx = new AC();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function tone(freq, dur = 0.12, type = 'sine', gain = 0.04, delay = 0) {
  if (!state.sound) return;
  ensureAudio();
  if (!audioCtx) return;
  const t = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const amp = audioCtx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  amp.gain.setValueAtTime(0.0001, t);
  amp.gain.linearRampToValueAtTime(gain, t + 0.012);
  amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(amp);
  amp.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.04);
}

function sfxCorrect() {
  tone(523.25, 0.12, 'sine', 0.05, 0);
  tone(659.25, 0.12, 'sine', 0.05, 0.1);
  tone(783.99, 0.22, 'sine', 0.045, 0.2);
}

function sfxWrong() {
  tone(220, 0.16, 'triangle', 0.04, 0);
  tone(174.61, 0.24, 'triangle', 0.035, 0.11);
}

function sfxCollect() {
  tone(880, 0.07, 'square', 0.02, 0);
  tone(1318.5, 0.1, 'square', 0.016, 0.06);
}

function sfxStation() {
  tone(392, 0.14, 'sine', 0.03, 0);
  tone(523.25, 0.16, 'sine', 0.03, 0.12);
}

function toggleSound() {
  state.sound = !state.sound;
  ui.btnSound.classList.toggle('off', !state.sound);
  ui.btnSound.textContent = state.sound ? '♪' : '×';
  if (state.sound) tone(660, 0.08, 'sine', 0.03);
}

/* ============================================================
   7. INTERFAZ GENERAL
   ============================================================ */

let flashTimer = null;

function toast(text, kind = '', ms = 3000) {
  const node = document.createElement('div');
  node.className = `toast ${kind}`.trim();
  node.textContent = text;
  ui.toasts.appendChild(node);
  window.setTimeout(() => node.remove(), ms + 450);
}

function flash(kind) {
  ui.flash.className = kind;
  window.clearTimeout(flashTimer);
  flashTimer = window.setTimeout(() => {
    ui.flash.className = '';
  }, 340);
}

function setMode(mode) {
  state.mode = mode;
  ui.body.dataset.mode = mode;

  ui.start.style.display = mode === 'start' ? 'grid' : 'none';
  ui.loading.classList.toggle('open', mode === 'loading');
  ui.calibration.classList.toggle('open', mode === 'calibrating');
  ui.stationOverlay.classList.toggle('open', mode === 'station');
  ui.pause.classList.toggle('open', mode === 'paused');
  ui.end.classList.toggle('open', mode === 'end');

  if (mode !== 'playing') {
    keys.forward = false;
    state.touch.forward = false;
  }
}

function showLoading(title, sub) {
  ui.loadTitle.textContent = title;
  ui.loadSub.textContent = sub;
  setMode('loading');
}

function setHint() {
  if (state.cameraMode) {
    ui.hintText.textContent = state.seated
      ? 'Modo sentado · avanza solo · manos para responder'
      : 'Caminá en el lugar para avanzar · pasos a los costados · manos para responder';
  } else {
    ui.hintText.textContent = state.seated
      ? 'Modo sentado · avanza solo · 1/2/3 para responder'
      : 'Caminá en el lugar o mantené ↑ · A/D para cambiar de carril';
  }
}

function focusPlay() {
  if (state.cameraMode) {
    ui.btnPause.focus({ preventScroll: true });
  } else {
    const hintBar = $('hintBar');
    if (hintBar) hintBar.focus({ preventScroll: true });
  }
}

/* ============================================================
   8. PREPARACIÓN DE LA PARTIDA
   ============================================================ */

const keys = { forward: false, left: false, right: false };

function prepareOptions() {
  for (const st of STATIONS) {
    st.options = shuffle(st.options);
    st.correctIndex = st.options.findIndex((o) => o.correct);
    st.completed = false;
    st.triggered = false;
    st.answered = false;
    st.selected = -1;
    st.correctAnswer = false;
    st.z = STATION_START + (st.id - 1) * STATION_GAP;
  }
}

function routeSelection() {
  return state.classroom ? CLASSROOM_ROUTE.slice() : STATIONS.map((_, i) => i);
}

function updateStartModeUI() {
  const count = state.classroom ? CLASSROOM_ROUTE.length : STATIONS.length;
  if (ui.stationCountChip) ui.stationCountChip.textContent = String(count);
  if (ui.startRouteCount) ui.startRouteCount.textContent = `${count} estaciones`;
  if (ui.ledeStations) ui.ledeStations.textContent = state.classroom ? 'Seis' : 'Diez';
  if (ui.ledeHitos) ui.ledeHitos.textContent = state.classroom ? 'seis' : 'diez';
  document.querySelectorAll('.mini-route [data-station]').forEach((el) => {
    const index = Number(el.dataset.station) - 1;
    el.classList.toggle('muted', state.classroom && !CLASSROOM_ROUTE.includes(index));
  });
  if (markerObjects.length) {
    markerObjects.forEach((marker, index) => {
      marker.group.visible = !state.classroom || CLASSROOM_ROUTE.includes(index);
    });
  }
  document.body.classList.toggle('classroom', state.classroom);
}

function resetRun() {
  prepareOptions();

  state.route = routeSelection();
  state.routePos = 0;
  state.score = 0;
  state.steps = 0;
  state.activeTime = 0;
  state.correct = 0;
  state.currentStation = state.route[0] ?? 0;
  state.slowUntil = 0;
  state.hoveredOption = -1;
  state.answerHoldStart = 0;
  state.answeredAt = 0;
  state.continueHoldStart = 0;
  state.pausedFrom = null;
  state.lastHud = 0;

  state.player.x = 0;
  state.player.z = PLAYER_START_Z;
  state.player.lane = 1;
  state.player.targetLane = 1;
  state.player.targetX = 0;
  state.player.walkPhase = 0;
  state.player.moving = false;

  state.pose.visible = false;
  state.pose.calibrated = false;
  state.pose.leftHand = false;
  state.pose.rightHand = false;
  state.pose.advancing = false;
  state.pose.handsReleased = true;
  state.pose.center = true;
  state.pose.frames = 0;
  state.pose.calFrames = 0;
  state.pose.calHip = [];
  state.pose.calKneeL = [];
  state.pose.calKneeR = [];

  for (let i = 0; i < markerObjects.length; i += 1) {
    const m = markerObjects[i];
    m.group.visible = state.route.includes(i);
    m.ring.material.color.copy(m.accent);
    m.inner.material.color.copy(m.accent);
    m.ring.material.opacity = 0.95;
    m.inner.material.opacity = 0.09;
    m.glow.material.opacity = 0.22;
    m.badge.material.color.set(0xffffff);
    m.badge.visible = true;
    m.label.visible = true;
    m.icon.visible = true;
    m.beam.visible = true;
    m.ring.scale.setScalar(1);
  }
  for (const c of collectibleObjects) {
    c.collected = false;
    c.mesh.visible = true;
    c.mesh.scale.setScalar(1);
  }
  for (const p of puddleObjects) {
    p.cooldown = 0;
  }

  if (playerGroup) {
    playerGroup.position.set(0, 0, PLAYER_START_Z);
    playerGroup.rotation.y = 0;
  }
  if (threeCamera) {
    threeCamera.position.set(0, 5.4, PLAYER_START_Z - 10);
    threeCamera.userData.look.set(0, 1.7, PLAYER_START_Z + 11);
  }
  if (avatar3d) {
    avatar3d.rotation.x = 0;
    avatar3d.userData.legL.rotation.x = 0;
    avatar3d.userData.legR.rotation.x = 0;
    avatar3d.userData.armL.rotation.x = 0;
    avatar3d.userData.armR.rotation.x = 0;
  }

  setPlayerMode(state.cameraMode);
  buildProgress();
  updateHUD();
}

function buildProgress() {
  ui.progressDots.innerHTML = '';
  const route = state.route.length ? state.route : routeSelection();
  for (const index of route) {
    const st = STATIONS[index];
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.title = `${String(st.id).padStart(2, '0')} · ${st.place}`;
    ui.progressDots.appendChild(dot);
  }
}

function updateProgress() {
  const route = state.route.length ? state.route : routeSelection();
  const dots = Array.from(ui.progressDots.children);
  dots.forEach((dot, i) => {
    const st = STATIONS[route[i]];
    dot.classList.toggle('done', !!st.completed);
    dot.classList.toggle('active', i === state.routePos && !st.completed && state.mode !== 'end');
  });
  const done = route.filter((index) => STATIONS[index].completed).length;
  ui.hudProgressText.textContent = `${done} / ${route.length}`;
}

function updateHUD() {
  const index = Math.min(state.currentStation, STATIONS.length - 1);
  const st = STATIONS[index];
  ui.hudNum.textContent = String(st.id).padStart(2, '0');
  ui.hudPlace.textContent = st.place;
  ui.hudConcept.textContent = st.concept;
  ui.hudScore.textContent = String(state.score).padStart(4, '0');
  ui.hudSteps.textContent = Math.round(state.steps).toLocaleString('es-AR');
  ui.hudTime.textContent = formatTime(state.activeTime);
  updateProgress();
}

function changeLane(direction) {
  const p = state.player;
  const next = clamp(p.targetLane + direction, 0, 2);
  if (next !== p.targetLane) {
    p.targetLane = next;
    p.lane = next;
    // +1 es el carril visual izquierdo y -1 el derecho: tono grave al
    // moverse a la izquierda y agudo a la derecha.
    tone(direction > 0 ? 440 : 520, 0.06, 'sine', 0.018);
  }
}

/* ============================================================
   9. PARTIDA
   ============================================================ */

function startKeyboardMode() {
  ensureAudio();
  state.cameraMode = false;
  state.seated = ui.seatedToggle.checked;
  state.classroom = ui.classroomToggle.checked;
  state.cameraCancelled = false;
  stopCamera();
  resetRun();
  setPlayerMode(false);
  setHint();
  setMode('playing');
  focusPlay();
  toast(
    `${state.classroom ? 'Modo aula: 6 estaciones. ' : ''}${
      state.seated
        ? 'Modo sentado: avanza solo. Respondé con 1, 2 y 3.'
        : 'Mantené ↑ o W para avanzar. A/D para cambiar de carril.'
    }`,
    '',
    4600
  );
  sfxStation();
}

async function startCameraMode() {
  ensureAudio();
  state.cameraMode = true;
  state.seated = ui.seatedToggle.checked;
  state.classroom = ui.classroomToggle.checked;
  state.cameraCancelled = false;
  resetRun();
  setMode('loading');
  showLoading(
    'Pidiendo permiso',
    'El navegador va a pedir permiso para usar la cámara. La imagen no sale de esta computadora.'
  );

  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('Este navegador no tiene acceso a la cámara.');
    }

    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user',
        width: { ideal: 640 },
        height: { ideal: 480 },
      },
      audio: false,
    });

    if (state.cameraCancelled || state.mode !== 'loading') {
      stopCamera();
      return;
    }

    videoEl = $('cam');
    videoEl.srcObject = stream;
    await videoEl.play();

    ui.body.classList.add('camera');
    ui.previewCanvas.width = 180;
    ui.previewCanvas.height = 135;
    previewCtx = ui.previewCanvas.getContext('2d');

    ensureSilhouetteBuffers();
    showLoading(
      'Cargando visión',
      'Estamos cargando el modelo que recorta tu silueta. Puede tardar unos segundos.'
    );
    await loadVision();

    if (state.cameraCancelled || state.mode !== 'loading') return;
    startCalibration();
  } catch (error) {
    console.error(error);
    stopCamera();
    state.cameraMode = false;
    startKeyboardMode();
    toast('No pudimos usar la cámara. Podés jugar con teclado.', 'bad', 5200);
  }
}

function updateGame(dt, now) {
  const p = state.player;

  const advance =
    state.seated ||
    keys.forward ||
    state.touch.forward ||
    (state.cameraMode && state.pose.advancing);

  const baseSpeed = state.seated ? 3.0 : 4.2;
  const speed = now < state.slowUntil ? baseSpeed * 0.34 : baseSpeed;
  state.player.moving = advance;

  if (advance) {
    state.activeTime += dt;
    p.z += speed * dt;
    p.walkPhase += dt * 7.6;
    if (!state.cameraMode || state.seated) {
      state.steps += dt * 2.05;
    }
  }

  p.targetX = LANES[p.targetLane];
  p.x = lerp(p.x, p.targetX, 1 - Math.exp(-dt * 8.5));
  playerGroup.position.x = p.x;
  playerGroup.position.z = p.z;

  const st = STATIONS[state.currentStation];
  if (st && !st.completed && p.z >= st.z - STOP_DISTANCE) {
    p.z = st.z - STOP_DISTANCE;
    playerGroup.position.z = p.z;
    openStation(state.currentStation);
    return;
  }

  for (const c of collectibleObjects) {
    if (!c.collected && Math.abs(c.z - p.z) < 1.15 && Math.abs(c.x - p.x) < 1.15) {
      c.collected = true;
      c.mesh.visible = false;
      state.score += 10;
      burst(c.mesh.position, '#f0c36b', 12);
      sfxCollect();
      toast('+10 · engranaje', 'good', 1200);
      updateHUD();
    }
  }

  for (const puddle of puddleObjects) {
    if (
      now > puddle.cooldown &&
      Math.abs(puddle.z - p.z) < 0.95 &&
      Math.abs(puddle.x - p.x) < 1.15
    ) {
      puddle.cooldown = now + 2600;
      state.slowUntil = now + 1100;
      burst(new THREE.Vector3(puddle.x, 0.3, puddle.z), '#58a89b', 8);
      tone(180, 0.16, 'sawtooth', 0.025);
      toast('¡Charcó! Frenás un segundo', 'bad', 1700);
    }
  }

  if (now - state.lastHud > 100) {
    updateHUD();
    state.lastHud = now;
  }
}

function openStation(index) {
  const st = STATIONS[index];
  if (!st) return;

  state.currentStation = index;
  state.stationOpenedAt = performance.now();
  state.hoveredOption = -1;
  state.answerHoldStart = 0;
  state.continueHoldStart = 0;
  state.pose.handsReleased = false;

  ui.stationCard.style.setProperty('--station-accent', st.accent);
  ui.stIndex.textContent = String(st.id).padStart(2, '0');
  ui.stationTitle.textContent = st.place;
  ui.stationSub.textContent = `El Colorado · ${st.placeYear}`;
  ui.stConcept.textContent = st.concept;
  ui.stPlaceYear.textContent = st.placeYear;
  ui.stPlace.textContent = st.place;
  ui.stPlaceFact.textContent = st.placeFact;
  ui.stPlaceCuriosity.textContent = st.placeCuriosity;
  ui.stTechYear.textContent = st.techYear;
  ui.stTech.textContent = st.tech;
  ui.stTechFact.textContent = st.techFact;
  ui.stTechCuriosity.textContent = st.techCuriosity;
  ui.stConceptLine.textContent = st.concept;
  ui.stQuestion.textContent = st.question;
  ui.stSource.textContent = `Fuente: ${st.source}`;

  ui.stOptions.innerHTML = '';
  const letters = ['A', 'B', 'C'];
  st.options.forEach((option, i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.dataset.index = String(i);
    button.innerHTML = `<span class="letter">${letters[i]}</span><span>${option.text}</span>`;
    button.addEventListener('click', () => selectAnswer(i));
    ui.stOptions.appendChild(button);
  });

  ui.stFeedback.className = 'feedback';
  ui.stFeedback.textContent = '';
  ui.btnContinue.disabled = true;
  ui.stHint.textContent = state.cameraMode
    ? 'Mano izquierda = A · dos manos = B · mano derecha = C · mantené 1,2 s'
    : 'Teclas 1, 2 y 3 · Enter para continuar';

  ui.toasts.innerHTML = '';
  setMode('station');
  updateHUD();

  const marker = st.marker;
  if (marker) {
    burst(new THREE.Vector3(marker.group.position.x, 2.4, marker.group.position.z), st.accent, 20);
  }
  sfxStation();

  window.requestAnimationFrame(() => {
    ui.stationCard.scrollTop = 0;
    ui.stationTitle.focus({ preventScroll: true });
  });
}

function selectAnswer(index) {
  const st = STATIONS[state.currentStation];
  if (!st || st.answered) return;
  if (index < 0 || index >= st.options.length) return;

  st.answered = true;
  st.selected = index;
  st.correctAnswer = !!st.options[index].correct;

  const buttons = Array.from(ui.stOptions.querySelectorAll('button'));
  buttons.forEach((button, i) => {
    button.disabled = true;
    button.classList.remove('selected');
    if (i === st.correctIndex) button.classList.add('correct');
    if (i === index && !st.correctAnswer) button.classList.add('wrong');
    if (i === index && st.correctAnswer) button.classList.add('selected');
  });

  const correctText = st.options[st.correctIndex].text.replace(/[.\s]+$/, '');
  if (st.correctAnswer) {
    state.score += 100;
    state.correct += 1;
    ui.stFeedback.className = 'feedback show good';
    ui.stFeedback.innerHTML = `<strong>¡Bien!</strong> ${st.explanation}`;
    flash('good');
    sfxCorrect();
  } else {
    ui.stFeedback.className = 'feedback show bad';
    ui.stFeedback.innerHTML = `<strong>Casi.</strong> La respuesta correcta era <strong>${correctText}</strong>. ${st.explanation}`;
    flash('bad');
    sfxWrong();
  }

  const marker = st.marker;
  if (marker) {
    const burstColor = st.correctAnswer ? '#66d19e' : '#ef7a6d';
    burst(new THREE.Vector3(marker.group.position.x, 2.5, marker.group.position.z), burstColor, 26);
  }

  state.answeredAt = performance.now();
  state.continueHoldStart = 0;
  state.pose.handsReleased = false;
  ui.btnContinue.disabled = false;
  ui.stHint.textContent = state.cameraMode
    ? 'Bajá las manos y levantá una para continuar'
    : 'Enter para continuar';
  updateHUD();
}

function markStationCompleted(st) {
  const marker = st.marker;
  if (!marker) return;
  marker.ring.material.color.set(0x66d19e);
  marker.inner.material.color.set(0x66d19e);
  marker.ring.material.opacity = 0.4;
  marker.inner.material.opacity = 0.035;
  marker.glow.material.opacity = 0.1;
  marker.badge.material.color.set(0xa8efcf);
  marker.label.visible = false;
  marker.badge.visible = false;
  marker.icon.visible = false;
  marker.beam.visible = false;
}

function continueAfterStation() {
  const st = STATIONS[state.currentStation];
  if (!st || !st.answered || state.mode !== 'station') return;

  st.completed = true;
  markStationCompleted(st);
  state.routePos += 1;

  if (state.routePos >= state.route.length) {
    showEnd();
    return;
  }

  state.currentStation = state.route[state.routePos];
  state.player.z = Math.max(state.player.z, st.z - STOP_DISTANCE + 0.8);
  playerGroup.position.z = state.player.z;
  state.hoveredOption = -1;
  state.continueHoldStart = 0;
  state.pose.handsReleased = false;

  ui.btnContinue.disabled = true;
  setMode('playing');
  updateHUD();
  focusPlay();
  toast('Estación completada · seguí caminando', 'good', 1700);
  tone(660, 0.08, 'sine', 0.02);
  tone(880, 0.1, 'sine', 0.018, 0.07);
}

function showEnd() {
  const modeLabel = state.cameraMode ? 'cámara' : 'teclado';
  const route = state.route.length ? state.route : routeSelection();
  ui.toasts.innerHTML = '';
  const hours = state.activeTime / 3600;
  const calories = 3.5 * 60 * hours;
  const routeLabel = state.classroom ? ' · aula de 6 estaciones' : '';
  const calorieNote = state.seated
    ? ' En modo sentado es una referencia de caminata, no el gasto real.'
    : '';

  ui.endScore.textContent = String(state.score).padStart(4, '0');
  ui.endCorrect.textContent = `${state.correct} / ${route.length}`;
  ui.endSteps.textContent = Math.round(state.steps).toLocaleString('es-AR');
  ui.endTime.textContent = formatTime(state.activeTime);
  ui.endCalories.textContent = calories < 10 ? calories.toFixed(1) : String(Math.round(calories));
  ui.endRoute.innerHTML = route.map((index) => {
    const st = STATIONS[index];
    return `<span class="route-chip ${st.correctAnswer ? 'ok' : 'no'}" title="${st.place}">${String(st.id).padStart(2, '0')} · ${st.place}</span>`;
  }).join('');
  const cameraNote = state.cameraMode
    ? ' La cámara se apagó y no se guardó ninguna imagen.'
    : ' No se guardó ninguna imagen.';
  ui.endFine.textContent = `Recorrido en modo ${modeLabel}${routeLabel}. Calorías estimadas para 60 kg con la fórmula 3,5 × 60 × ${hours.toFixed(2)} h.${calorieNote} No es una medición médica.${cameraNote}`;

  setMode('end');
  updateHUD();
  stopCamera();
  sfxCorrect();
  const p = playerGroup.position;
  burst(new THREE.Vector3(p.x, 1.4, p.z), '#f0c36b', 40);
  window.setTimeout(() => ui.btnRestart.focus({ preventScroll: true }), 220);
}

function pauseGame() {
  if (state.mode !== 'playing') return;
  state.pausedFrom = 'playing';
  state.pose.advancing = false;
  keys.forward = false;
  state.touch.forward = false;
  ui.toasts.innerHTML = '';
  ui.pauseSub.textContent = state.cameraMode
    ? 'El juego está en pausa. La cámara sigue solo para mostrarte tu silueta; no se graba nada.'
    : 'El juego está en pausa. Podés reanudar o volver al inicio.';
  setMode('paused');
  window.setTimeout(() => ui.btnResume.focus({ preventScroll: true }), 80);
}

function resumeGame() {
  if (state.mode !== 'paused') return;
  setMode('playing');
  focusPlay();
}

function goHome() {
  stopCamera();
  state.cameraMode = false;
  resetRun();
  updateStartModeUI();
  setPlayerMode(false);
  setMode('start');
  window.requestAnimationFrame(() => ui.btnCamera.focus({ preventScroll: true }));
}

/* ============================================================
   10. CÁMARA + MEDIAPIPE
   ============================================================ */

let visionApi = null;
let visionReady = false;
let poseLandmarker = null;
let segmenter = null;
let stream = null;
let videoEl = null;
let previewCtx = null;
let rawCanvas = null;
let rawCtx = null;
let maskCanvas = null;
let maskCtx = null;
let lastVisionTime = 0;
let lastVideoTime = -1;
let calibrationStart = 0;
let silhouetteLastValid = 0;
let poseLastVisible = 0;

function ensureSilhouetteBuffers() {
  if (!rawCanvas) {
    rawCanvas = document.createElement('canvas');
    rawCanvas.width = 320;
    rawCanvas.height = 240;
    rawCtx = rawCanvas.getContext('2d', { willReadFrequently: false });
  }
  if (!maskCanvas) {
    maskCanvas = document.createElement('canvas');
    maskCanvas.width = 256;
    maskCanvas.height = 256;
    maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
  }
  if (!previewCtx) {
    previewCtx = ui.previewCanvas.getContext('2d');
  }
}

async function loadVision() {
  if (visionReady) return;
  if (!visionApi) {
    visionApi = await import('./vendor/vision_bundle.mjs');
  }

  const fileset = await visionApi.FilesetResolver.forVisionTasks('./vendor/wasm');

  const createPose = (delegate) =>
    visionApi.PoseLandmarker.createFromOptions(fileset, {
      baseOptions: {
        modelAssetPath: './vendor/models/pose_landmarker_lite.task',
        delegate,
      },
      runningMode: 'VIDEO',
      numPoses: 1,
      minPoseDetectionConfidence: 0.5,
      minPosePresenceConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });

  try {
    poseLandmarker = await createPose('GPU');
  } catch (error) {
    console.warn('Pose GPU no disponible, probando CPU.', error);
    poseLandmarker = await createPose('CPU');
  }

  const createSegmenter = (delegate) =>
    visionApi.ImageSegmenter.createFromOptions(fileset, {
      baseOptions: {
        modelAssetPath: './vendor/models/selfie_segmenter.tflite',
        delegate,
      },
      runningMode: 'VIDEO',
      outputCategoryMask: false,
      outputConfidenceMasks: true,
    });

  try {
    segmenter = await createSegmenter('GPU');
  } catch (error) {
    console.warn('Segmentador GPU no disponible, probando CPU.', error);
    segmenter = await createSegmenter('CPU');
  }

  visionReady = true;
}

function startCalibration() {
  ensureSilhouetteBuffers();
  state.pose.calibrated = false;
  state.pose.calFrames = 0;
  state.pose.calHip = [];
  state.pose.calKneeL = [];
  state.pose.calKneeR = [];
  state.pose.handsReleased = true;
  calibrationStart = performance.now();
  ui.calRing.style.setProperty('--p', '0');
  ui.calCount.textContent = '3';
  ui.calStatus.textContent = 'Buscando tu silueta…';
  const calSub = ui.calibration.querySelector('.cal-sub');
  if (calSub) {
    calSub.textContent = state.seated
      ? 'Sentado y de frente a la cámara. Vamos a tomar el centro de tu torso como referencia. Podés responder con las manos.'
      : 'De frente, a unos 2 metros de la cámara y con luz de frente. Vamos a tomar tu altura y tu centro como referencia.';
  }
  setMode('calibrating');
}

function updateCalibrationUI(now, hasPose) {
  if (state.mode !== 'calibrating') return;
  const elapsed = (now - calibrationStart) / 1000;
  const remain = Math.max(0, 3 - elapsed);
  ui.calCount.textContent = remain > 0 ? String(Math.ceil(remain)) : '✓';
  ui.calRing.style.setProperty('--p', String(clamp((elapsed / 3) * 100, 0, 100)));
  if (!hasPose) {
    ui.calStatus.textContent = 'No te veo. Ponete de frente a la cámara, a unos 2 metros.';
  }
  if (elapsed >= 3) finishCalibration();
}

function finishCalibration() {
  if (state.mode !== 'calibrating') return;
  if (state.pose.calFrames < 10 || state.pose.calHip.length < 10) {
    state.pose.calFrames = 0;
    state.pose.calHip = [];
    state.pose.calKneeL = [];
    state.pose.calKneeR = [];
    calibrationStart = performance.now();
    ui.calCount.textContent = '3';
    ui.calRing.style.setProperty('--p', '0');
    ui.calStatus.textContent = 'No pudimos verte bien. Probamos otra vez: ponete de frente, con luz.';
    return;
  }

  const avg = (arr) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);
  state.pose.baseHipX = avg(state.pose.calHip);
  state.pose.baseKneeL = avg(state.pose.calKneeL);
  state.pose.baseKneeR = avg(state.pose.calKneeR);
  state.pose.calibrated = true;
  state.pose.center = true;
  state.pose.visible = true;
  state.pose.handsReleased = true;
  state.pose.lastStep = performance.now();
  state.pose.lastLane = performance.now();

  setMode('playing');
  setHint();
  updateHUD();
  focusPlay();
  toast(
    state.seated
      ? '¡Listo! Avanza solo. Respondé con las manos.'
      : '¡Listo! Caminá en el lugar para avanzar.',
    'good',
    4200
  );
  sfxStation();
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    stream = null;
  }
  if (videoEl) {
    try {
      videoEl.pause();
    } catch (error) {
      /* nada */
    }
    videoEl.srcObject = null;
  }
  ui.body.classList.remove('camera');
  state.pose.visible = false;
  state.pose.advancing = false;
  state.pose.leftHand = false;
  state.pose.rightHand = false;
  silhouetteLastValid = 0;
  poseLastVisible = 0;
  if (playerPlane) playerPlane.visible = false;
  if (avatar3d) avatar3d.visible = true;
  ui.poseStatus.textContent = 'Cámara apagada';
}

function processVideo(now) {
  if (!visionReady || !videoEl || videoEl.readyState < 2) return;
  if (now - lastVisionTime < 66) return;
  lastVisionTime = now;
  if (videoEl.currentTime === lastVideoTime) return;
  lastVideoTime = videoEl.currentTime;

  let poseResult = null;
  let segResult = null;

  try {
    poseResult = poseLandmarker.detectForVideo(videoEl, now);
    if (poseResult && poseResult.landmarks && poseResult.landmarks.length) {
      updatePoseState(poseResult, now);
    } else {
      updatePoseLost();
    }
  } catch (error) {
    console.warn('Error de pose:', error);
    updatePoseLost();
  }

  try {
    segResult = segmenter.segmentForVideo(videoEl, now);
    drawSilhouette(segResult);
  } catch (error) {
    console.warn('Error de segmentación:', error);
    silhouetteMissing();
  } finally {
    if (segResult && typeof segResult.close === 'function') segResult.close();
    if (poseResult && typeof poseResult.close === 'function') poseResult.close();
  }
}

function updatePoseState(poseResult, now) {
  const lm = poseResult.landmarks[0];
  if (!lm) {
    updatePoseLost();
    return;
  }

  const vis = (i) => (lm[i] && (lm[i].visibility === undefined || lm[i].visibility > 0.42));
  const needKnees = !state.seated;
  if (!vis(23) || !vis(24) || (needKnees && (!vis(25) || !vis(26)))) {
    updatePoseLost();
    return;
  }

  state.pose.visible = true;
  state.pose.frames += 1;
  poseLastVisible = now;

  const hipX = 1 - (lm[23].x + lm[24].x) / 2;
  const kneeL = lm[25] ? lm[25].y : 1;
  const kneeR = lm[26] ? lm[26].y : 1;
  const leftHand = vis(15) && lm[15].y < lm[11].y - 0.035;
  const rightHand = vis(16) && lm[16].y < lm[12].y - 0.035;

  state.pose.hipX = hipX;
  state.pose.leftHand = leftHand;
  state.pose.rightHand = rightHand;

  if (state.mode === 'calibrating') {
    state.pose.calFrames += 1;
    state.pose.calHip.push(hipX);
    if (vis(25)) state.pose.calKneeL.push(kneeL);
    if (vis(26)) state.pose.calKneeR.push(kneeR);
    ui.calStatus.textContent = 'Bien. Quedate quieto…';
    updateCalibrationUI(now, true);
    return;
  }

  if (!state.pose.calibrated) return;

  if (state.mode === 'playing') {
    const dx = hipX - state.pose.baseHipX;
    if (Math.abs(dx) < 0.03) state.pose.center = true;
    if (state.pose.center && now - state.pose.lastLane > 680) {
      if (dx < -0.055) {
        state.player.targetLane = clamp(state.player.targetLane + 1, 0, 2);
        state.player.lane = state.player.targetLane;
        state.pose.center = false;
        state.pose.lastLane = now;
        tone(440, 0.06, 'sine', 0.018);
      } else if (dx > 0.055) {
        state.player.targetLane = clamp(state.player.targetLane - 1, 0, 2);
        state.player.lane = state.player.targetLane;
        state.pose.center = false;
        state.pose.lastLane = now;
        tone(520, 0.06, 'sine', 0.018);
      }
    }

    if (state.seated) {
      state.pose.advancing = false;
    } else {
      const leftUp = vis(25) && kneeL < state.pose.baseKneeL - 0.035;
      const rightUp = vis(26) && kneeR < state.pose.baseKneeR - 0.035;
      state.pose.advancing = leftUp || rightUp;

      if (leftUp && !rightUp && now - state.pose.lastStep > 270) {
        state.steps += 1;
        state.pose.lastStep = now;
      } else if (rightUp && !leftUp && now - state.pose.lastStep > 270) {
        state.steps += 1;
        state.pose.lastStep = now;
      }
    }

    if (!leftHand && !rightHand) {
      ui.poseStatus.textContent = state.seated
        ? 'Modo sentado · avanza solo'
        : state.pose.advancing
          ? 'Caminando'
          : 'Quieto · caminá en el lugar';
    } else if (leftHand && rightHand) {
      ui.poseStatus.textContent = 'Dos manos · B';
    } else if (leftHand) {
      ui.poseStatus.textContent = 'Mano izquierda · A';
    } else {
      ui.poseStatus.textContent = 'Mano derecha · C';
    }
  }

  if (state.mode === 'station') {
    updateStationPose(now);
  }
}

function updatePoseLost() {
  state.pose.visible = false;
  state.pose.advancing = false;
  state.pose.leftHand = false;
  state.pose.rightHand = false;
  ui.poseStatus.textContent = 'No te veo · acomodate';
  if (state.mode === 'calibrating') updateCalibrationUI(performance.now(), false);
}

function updateStationPose(now) {
  if (!state.pose.calibrated) return;
  const st = STATIONS[state.currentStation];
  if (!st) return;

  if (!st.answered) {
    if (now - state.stationOpenedAt < 1100) return;
    const left = state.pose.leftHand;
    const right = state.pose.rightHand;

    if (!state.pose.handsReleased) {
      if (!left && !right) {
        state.pose.handsReleased = true;
      } else {
        ui.stHint.textContent = 'Bajá las manos para empezar…';
        return;
      }
    }

    const selected = left && right ? 1 : left ? 0 : right ? 2 : -1;

    if (selected !== state.hoveredOption) {
      state.hoveredOption = selected;
      state.answerHoldStart = now;
      const buttons = Array.from(ui.stOptions.querySelectorAll('button'));
      buttons.forEach((button, i) => button.classList.toggle('selected', i === selected));
      if (selected >= 0) {
        ui.stHint.textContent = `Seleccionando ${['A', 'B', 'C'][selected]} · mantené la posición`;
      } else {
        ui.stHint.textContent =
          'Mano izquierda = A · dos manos = B · mano derecha = C · mantené 1,2 s';
      }
    }

    if (selected >= 0 && now - state.answerHoldStart >= 1100) {
      selectAnswer(selected);
    }
    return;
  }

  if (!state.pose.leftHand && !state.pose.rightHand) {
    state.pose.handsReleased = true;
    state.continueHoldStart = 0;
    ui.stHint.textContent = 'Levantá una mano para continuar, o usá Enter';
    return;
  }

  if (state.pose.handsReleased && (state.pose.leftHand || state.pose.rightHand)) {
    if (!state.continueHoldStart) state.continueHoldStart = now;
    ui.stHint.textContent = 'Mantené la mano arriba para continuar…';
    if (now - state.continueHoldStart > 1100) {
      state.continueHoldStart = 0;
      continueAfterStation();
    }
  }
}

function paintCameraPreview(showRawVideo = false) {
  if (!previewCtx || !ui.previewCanvas) return;
  const pw = ui.previewCanvas.width || 180;
  const ph = ui.previewCanvas.height || 135;

  previewCtx.fillStyle = '#050b12';
  previewCtx.fillRect(0, 0, pw, ph);

  if (showRawVideo && videoEl && videoEl.readyState >= 2) {
    // Espejo natural para que la persona pueda acomodarse durante la
    // calibración. Es una vista local: no se guarda ni se envía.
    previewCtx.save();
    previewCtx.translate(pw, 0);
    previewCtx.scale(-1, 1);
    previewCtx.drawImage(videoEl, 0, 0, pw, ph);
    previewCtx.restore();
  } else if (silhouetteCanvas) {
    const scale = Math.min(pw / SIL_W, ph / SIL_H);
    const dw = SIL_W * scale;
    const dh = SIL_H * scale;
    previewCtx.drawImage(silhouetteCanvas, (pw - dw) / 2, (ph - dh) / 2, dw, dh);
  }

  previewCtx.strokeStyle = 'rgba(88, 168, 155, .35)';
  previewCtx.lineWidth = 1;
  previewCtx.strokeRect(0.5, 0.5, pw - 1, ph - 1);
}

function silhouetteMissing() {
  if (!state.cameraMode) return;
  const now = performance.now();
  if (now - silhouetteLastValid < 700) return;

  if (silhouetteLastValid) {
    silhouetteCtx.clearRect(0, 0, SIL_W, SIL_H);
    silhouetteTexture.needsUpdate = true;
    playerPlane.visible = false;
    avatar3d.visible = true;
    silhouetteLastValid = 0;
  }

  // Mientras se calibra mostramos la cámara sin recortar: ayuda a ubicarse
  // si la persona todavía no entra completa en el cuadro.
  paintCameraPreview(state.mode === 'calibrating');
}

function drawSilhouette(segResult) {
  if (!videoEl || !rawCtx || !maskCtx || !silhouetteCtx) return;
  const W = 320;
  const H = 240;

  rawCtx.globalCompositeOperation = 'source-over';
  rawCtx.clearRect(0, 0, W, H);
  rawCtx.drawImage(videoEl, 0, 0, W, H);

  let maskData = null;
  let mw = 0;
  let mh = 0;
  let minX = 0;
  let minY = 0;
  let maxX = -1;
  let maxY = -1;
  let count = 0;

  try {
    const mask = segResult && segResult.confidenceMasks && segResult.confidenceMasks[0];
    if (mask && typeof mask.getAsFloat32Array === 'function') {
      mw = mask.width;
      mh = mask.height;
      if (maskCanvas.width !== mw || maskCanvas.height !== mh) {
        maskCanvas.width = mw;
        maskCanvas.height = mh;
      }
      maskData = mask.getAsFloat32Array();

      let minXi = mw;
      let minYi = mh;
      let maxXi = -1;
      let maxYi = -1;
      for (let y = 0; y < mh; y++) {
        for (let x = 0; x < mw; x++) {
          if (maskData[y * mw + x] > 0.5) {
            count += 1;
            if (x < minXi) minXi = x;
            if (x > maxXi) maxXi = x;
            if (y < minYi) minYi = y;
            if (y > maxYi) maxYi = y;
          }
        }
      }

      // Un cuerpo a dos metros ocupa bastante más que este mínimo. Si la
      // máscara es casi vacía preferimos el avatar 3D antes que un recorte
      // invisible o lleno de fondo.
      if (count < mw * mh * 0.008 || maxXi - minXi < 8 || maxYi - minYi < 16) {
        maskData = null;
      } else {
        minX = minXi;
        minY = minYi;
        maxX = maxXi;
        maxY = maxYi;
      }
    }
  } catch (error) {
    console.warn('Máscara no disponible:', error);
    maskData = null;
  }

  if (!maskData) {
    silhouetteMissing();
    return;
  }

  try {
    const image = maskCtx.createImageData(mw, mh);
    for (let i = 0; i < maskData.length; i++) {
      const value = maskData[i];
      const alpha =
        value > 0.55 ? 255 : value > 0.35 ? Math.round(((value - 0.35) / 0.2) * 255) : 0;
      image.data[i * 4] = 255;
      image.data[i * 4 + 1] = 255;
      image.data[i * 4 + 2] = 255;
      image.data[i * 4 + 3] = alpha;
    }
    maskCtx.putImageData(image, 0, 0);
    rawCtx.globalCompositeOperation = 'destination-in';
    rawCtx.drawImage(maskCanvas, 0, 0, W, H);
    rawCtx.globalCompositeOperation = 'source-over';
  } catch (error) {
    console.warn('Máscara no disponible:', error);
    silhouetteMissing();
    return;
  }

  // Recortamos el rectángulo que ocupa la persona. Antes la figura se
  // dibujaba dentro de todo el cuadro 4:3 y quedaba pequeña y deformada al
  // proyectarse sobre el billboard vertical de 1,50 × 2,25 m.
  let sx0 = (minX / mw) * W;
  let sy0 = (minY / mh) * H;
  let sx1 = ((maxX + 1) / mw) * W;
  let sy1 = ((maxY + 1) / mh) * H;
  const padX = Math.max(2, (sx1 - sx0) * 0.06);
  const padY = Math.max(2, (sy1 - sy0) * 0.02);
  sx0 = Math.max(0, sx0 - padX);
  sy0 = Math.max(0, sy0 - padY);
  sx1 = Math.min(W, sx1 + padX);
  sy1 = Math.min(H, sy1 + padY);

  const cw = Math.max(1, sx1 - sx0);
  const ch = Math.max(1, sy1 - sy0);
  const fit = Math.min(SIL_W / cw, SIL_H / ch);
  const dw = cw * fit;
  const dh = ch * fit;
  const dx = (SIL_W - dw) / 2;
  const dy = SIL_H - dh;

  silhouetteCtx.clearRect(0, 0, SIL_W, SIL_H);
  silhouetteCtx.save();
  silhouetteCtx.translate(SIL_W, 0);
  silhouetteCtx.scale(-1, 1);
  silhouetteCtx.drawImage(rawCanvas, sx0, sy0, cw, ch, dx, dy, dw, dh);
  silhouetteCtx.restore();
  silhouetteTexture.needsUpdate = true;
  silhouetteLastValid = performance.now();

  if (state.cameraMode) {
    // La silueta solo sustituye al avatar cuando el cuerpo completo está
    // siendo detectado. Si la persona se acerca demasiado y solo entra la
    // cabeza, preferimos mostrar el avatar antes que un recorte gigante.
    const poseRecent = performance.now() - poseLastVisible < 700;
    playerPlane.visible = poseRecent;
    avatar3d.visible = !poseRecent;
    paintCameraPreview(state.mode === 'calibrating' && !poseRecent);
  } else {
    paintCameraPreview(false);
  }
}

/* ============================================================
   11. CONTROLES
   ============================================================ */

window.addEventListener('keydown', (event) => {
  ensureAudio();
  const key = event.key;
  const lower = key.toLowerCase();

  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(lower)) {
    event.preventDefault();
  }

  if (lower === 'w' || lower === 'arrowup' || lower === ' ') {
    keys.forward = true;
  }
  if (lower === 'a' || lower === 'arrowleft') {
    if (!event.repeat && state.mode === 'playing') changeLane(1);
  }
  if (lower === 'd' || lower === 'arrowright') {
    if (!event.repeat && state.mode === 'playing') changeLane(-1);
  }
  if (lower === '1' || lower === '2' || lower === '3') {
    if (state.mode === 'station') selectAnswer(Number(lower) - 1);
  }
  if (lower === 'enter') {
    const st = STATIONS[state.currentStation];
    if (state.mode === 'station' && st && st.answered) continueAfterStation();
  }
  if (lower === 'escape' && !event.repeat) {
    if (state.mode === 'playing') pauseGame();
    else if (state.mode === 'paused') resumeGame();
  }
  if (lower === 'm' && !event.repeat) toggleSound();
});

window.addEventListener('keyup', (event) => {
  const lower = event.key.toLowerCase();
  if (lower === 'w' || lower === 'arrowup' || lower === ' ') keys.forward = false;
});

window.addEventListener('blur', () => {
  keys.forward = false;
  state.touch.forward = false;
  state.touch.left = false;
  state.touch.right = false;
});

function bindHold(button, onStart, onEnd) {
  button.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    button.setPointerCapture?.(event.pointerId);
    onStart();
  });
  const end = (event) => {
    event.preventDefault();
    onEnd();
  };
  button.addEventListener('pointerup', end);
  button.addEventListener('pointercancel', end);
  button.addEventListener('pointerleave', end);
}

ui.touchLeft.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  if (state.mode === 'playing') changeLane(1);
});
ui.touchRight.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  if (state.mode === 'playing') changeLane(-1);
});
bindHold(
  ui.touchForward,
  () => {
    state.touch.forward = true;
  },
  () => {
    state.touch.forward = false;
  }
);

ui.btnCamera.addEventListener('click', () => startCameraMode());
ui.btnKeyboard.addEventListener('click', () => startKeyboardMode());
ui.btnCancelLoad.addEventListener('click', () => {
  state.cameraCancelled = true;
  state.cameraMode = false;
  stopCamera();
  startKeyboardMode();
});
ui.btnSkipCal.addEventListener('click', () => {
  state.cameraCancelled = true;
  state.cameraMode = false;
  stopCamera();
  startKeyboardMode();
});
ui.btnContinue.addEventListener('click', () => continueAfterStation());
ui.btnSound.addEventListener('click', toggleSound);
ui.btnPause.addEventListener('click', pauseGame);
ui.btnResume.addEventListener('click', resumeGame);
ui.btnQuit.addEventListener('click', goHome);
ui.btnRestart.addEventListener('click', () => {
  const wasCamera = state.cameraMode;
  stopCamera();
  if (wasCamera) startCameraMode();
  else startKeyboardMode();
});
ui.btnHome.addEventListener('click', goHome);

ui.seatedToggle.addEventListener('change', () => {
  state.seated = ui.seatedToggle.checked;
  setHint();
});

ui.classroomToggle.addEventListener('change', () => {
  state.classroom = ui.classroomToggle.checked;
  updateStartModeUI();
});

document.addEventListener('pointerdown', ensureAudio, { once: true });

/* ============================================================
   12. ARRANQUE E INTERFAZ DE DEPURACIÓN
   ============================================================ */

initScene();
state.classroom = ui.classroomToggle.checked;
state.seated = ui.seatedToggle.checked;
buildProgress();
resetRun();
updateStartModeUI();
setMode('start');
setPlayerMode(false);

window.__game = {
  state,
  STATIONS,
  scene,
  playerGroup,
  playerShadow,
  playerPlane,
  avatar3d,
  threeCamera,
  silhouetteCanvas,
  setMode,
  resetRun,
  startKeyboardMode,
  startCameraMode,
  openStation,
  selectAnswer,
  continueAfterStation,
  updateStationPose,
  updatePoseState,
  changeLane,
  showEnd,
  loadVision,
  async testVision() {
    await loadVision();
    return { ready: visionReady, pose: !!poseLandmarker, segmenter: !!segmenter };
  },
  debugCamera() {
    return {
      mode: state.mode,
      cameraMode: state.cameraMode,
      visionReady,
      pose: {
        visible: state.pose.visible,
        calibrated: state.pose.calibrated,
        hipX: state.pose.hipX,
        baseHipX: state.pose.baseHipX,
        leftHand: state.pose.leftHand,
        rightHand: state.pose.rightHand,
        advancing: state.pose.advancing,
      },
      lane: state.player.targetLane,
      playerX: state.player.x,
      silhouetteAge: silhouetteLastValid ? performance.now() - silhouetteLastValid : null,
      playerPlane: playerPlane.visible,
      avatar: avatar3d.visible,
      video: videoEl
        ? {
            readyState: videoEl.readyState,
            width: videoEl.videoWidth,
            height: videoEl.videoHeight,
            currentTime: videoEl.currentTime,
            paused: videoEl.paused,
          }
        : null,
    };
  },
  skipToStation(index) {
    resetRun();
    state.currentStation = index;
    state.player.z = STATIONS[index].z - STOP_DISTANCE;
    playerGroup.position.z = state.player.z;
    setMode('playing');
    openStation(index);
  },
  jumpTo(index) {
    if (index < 0 || index >= STATIONS.length) return;
    state.currentStation = index;
    state.player.z = STATIONS[index].z - STOP_DISTANCE;
    playerGroup.position.z = state.player.z;
    setMode('playing');
    openStation(index);
  },
  finishAll() {
    resetRun();
    state.cameraMode = false;
    setPlayerMode(false);
    state.steps = 2874;
    state.activeTime = 1234;
    const route = state.route.length ? state.route : routeSelection();
    for (const index of route) {
      const st = STATIONS[index];
      st.answered = true;
      st.selected = st.correctIndex;
      st.correctAnswer = true;
      st.completed = true;
      state.score += 100;
      state.correct += 1;
      markStationCompleted(st);
    }
    state.routePos = route.length;
    state.currentStation = route[route.length - 1] ?? 0;
    showEnd();
  },
  next() {
    if (state.mode === 'station') {
      const st = STATIONS[state.currentStation];
      if (st && !st.answered) selectAnswer(st.correctIndex);
      continueAfterStation();
    }
  },
};

console.info(
  '%cEl Colorado · dos tiempos, un camino',
  'color:#f0a35e;font-weight:bold;font-size:14px',
  '— 10 estaciones cargadas. Usá window.__game para depurar.'
);

