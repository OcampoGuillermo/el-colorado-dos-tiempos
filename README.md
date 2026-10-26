# El Colorado: dos tiempos, un camino

Juego de realidad mixta de cuerpo entero para conocer El Colorado (Formosa) a través de diez lugares del pueblo y diez hitos de la historia de la tecnología.

La cámara recorta tu silueta con MediaPipe y te coloca dentro de un pueblo 3D hecho con Three.js. Caminás en el lugar, cambiás de carril con el cuerpo y respondés levantando la mano izquierda, las dos manos o la mano derecha. También se puede jugar entero con teclado y sin cámara.

> Proyecto realizado a partir del **Instructivo 43 — Cómo crear un juego de realidad mixta**, de la Práctica Profesionalizante del ISFD y T «República Federal de Alemania» (El Colorado, Formosa, 2026).

---

## Inicio rápido

El juego usa módulos ES y archivos locales, así que **no se abre con doble clic** (`file://`). Hay que servirlo desde una carpeta local.

### Opción A — Python

```powershell
cd el-colorado-dos-tiempos
python -m http.server 8010
```

Abrir <http://127.0.0.1:8010/> en Chrome o Edge.

### Opción B — Node

```powershell
cd el-colorado-dos-tiempos
npx.cmd serve . -l 8010
```

En Windows, la execution policy de PowerShell bloquea `npx.ps1`; por eso se usa `npx.cmd`.

### Opción C — público

También se puede publicar la carpeta en GitHub Pages, Netlify, Vercel o cualquier hosting estático. Para usar la cámara, el sitio debe servirse por **HTTPS** o desde `localhost`/`127.0.0.1`.

Para publicarlo en GitHub Pages desde este repositorio:

1. Subir la carpeta a la rama `main`.
2. En GitHub, abrir **Settings → Pages**.
3. En **Build and deployment**, elegir **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Guardar y esperar a que GitHub muestre la dirección `https://ocampoguillermo.github.io/el-colorado-dos-tiempos/`.

La cámara funciona en GitHub Pages porque el sitio se sirve por HTTPS. Los modelos y el wasm se cargan desde `vendor/` dentro del mismo repositorio.

---

## Requisitos

- Chrome o Edge actualizado, con WebGL habilitado.
- Cámara web para el modo cuerpo entero. Si no hay cámara o se niega el permiso, el juego arranca en modo teclado.
- Una computadora con parlantes o auriculares (el sonido se puede silenciar con **M**).
- No requiere conexión a internet después de descargar la carpeta: Three.js, MediaPipe, los modelos y el wasm están en `vendor/`.

---

## Cómo se juega

### Con cámara

1. Elegí **Jugar con cámara** y aceptá el permiso.
2. Acomodate de cuerpo entero, a unos 2 metros de la cámara, con luz de frente. La esquina inferior izquierda muestra una vista local para que puedas corregir el encuadre mientras calibrás.
3. Quedate quieto unos segundos para calibrar. Cuando el cuerpo completo entra en cuadro, tu silueta recortada reemplaza al personaje 3D.
4. Caminá en el lugar para avanzar. Un paso a la izquierda o a la derecha cambia de carril.
5. En cada estación, respondé con la mano:
   - **mano izquierda** = opción A
   - **las dos manos** = opción B
   - **mano derecha** = opción C
   - mantené la posición **1,2 segundos** para confirmar.
6. Bajá las manos y levantá una para continuar. El juego pide bajar las manos antes de aceptar una respuesta para evitar selecciones accidentales.

Si la cámara no detecta el cuerpo completo, el juego muestra el avatar 3D como respaldo y deja la vista de cámara visible durante la calibración. La partida nunca queda con una figura invisible.

### Si la cámara no te detecta

- Usá Chrome o Edge actualizado y abrí el juego desde `http://127.0.0.1:8010/` o desde un sitio **HTTPS**. Abrir `index.html` con doble clic (`file://`) bloquea la cámara.
- Revisá que el permiso esté concedido y que la cámara no tenga la tapa de privacidad cerrada ni esté siendo usada por otra aplicación.
- Ponete de frente, con el cuerpo completo en cuadro, a unos 2 metros. Si la vista solo muestra tu cabeza, alejate un poco.
- Iluminá la cara y el torso de frente; evitá las ventanas a contraluz.
- Si aun así no hay detección, usá **Seguir sin cámara**. El recorrido completo está disponible con teclado.

### Con teclado

- **W** o **↑**: avanzar.
- **A** o **←**: carril izquierdo.
- **D** o **→**: carril derecho.
- **1 / 2 / 3**: responder A, B o C.
- **Enter**: continuar después de responder.
- **Esc**: pausar o reanudar.
- **M**: activar o silenciar el sonido.

### Modo sentado

Se activa desde la portada. No exige rodillas visibles para calibrar ni para avanzar: el avance es automático y las respuestas se dan con las manos o con las teclas **1 / 2 / 3**. Es la opción recomendada para aulas con poco espacio o para personas con movilidad reducida.

### Modo aula · 6 estaciones

Se activa desde la portada y acorta el recorrido a las estaciones **1, 2, 5, 6, 8 y 10**. La partida queda en 3–4 minutos y el HUD, el progreso y la pantalla final muestran **6 estaciones**. Se puede combinar con el modo sentado.

---

## Privacidad

- La cámara se procesa **solo en esta computadora**, dentro del navegador, con MediaPipe.
- El video **no se graba, no se sube y no se guarda**.
- Durante la calibración se muestra una **vista local** de la cámara para ayudarte a ubicarte; esa vista tampoco se guarda ni se transmite. En el juego solo se dibuja la silueta recortada.
- No hay cuentas, formularios, almacenamiento local ni envío de datos a servidores externos.
- La cámara se apaga al terminar la partida y también en la pantalla final.
- Los modelos de MediaPipe y las librerías se cargan desde `vendor/`, no desde una CDN.
- El botón de pausa permite cortar el juego sin perder el progreso.

Marco de referencia: **Ley 25.326 de Protección de los Datos Personales** (Argentina). Para una actividad en el aula, conviene informar a las familias qué se hace con la cámara y ofrecer siempre la alternativa sin cámara.

---

## Accesibilidad

- Fallback completo de teclado, sin cámara.
- Modo sentado con avance automático.
- Foco visible y orden de foco en portada, estación, pausa y final.
- Roles de diálogo, etiquetas ARIA y regiones `aria-live` para feedback y avisos.
- Respeto de `prefers-reduced-motion` para reducir animaciones.
- Texto legible y controles grandes; el diseño base está pensado para 912 × 670 y se adapta a una columna en pantallas angostas.
- Las respuestas no dependen del color: se marcan con texto y con el estado del botón.

---

## Recorrido y contenido

| # | Lugar de El Colorado | Hito tecnológico | Idea puente |
|---|---|---|---|
| 1 | Puente Libertad (1958) | Telégrafo (1844) | Conectar orillas |
| 2 | Río Bermejo | Escritura (c. 3300 a. C.) | Nombrar y registrar |
| 3 | Costanera y mirador | Imprenta (c. 1450) | Ampliar la mirada |
| 4 | Camping municipal y parque acuático | Radio (1895) | Compartir el tiempo libre |
| 5 | Plaza San Martín (1950) | Teléfono (1876) | Poner en contacto voces |
| 6 | Municipalidad (1944 / 1957) | Computadora (1945) | Ordenar y procesar |
| 7 | Parroquia San Antonio de Padua | Internet (1969) | Redes de comunidad |
| 8 | EPES 1 (1960) | Web (1989) | Acceso al conocimiento |
| 9 | INTA El Colorado (1981) | Smartphone (2007) | Herramientas de campo |
| 10 | Feriarte (octubre) | IA generativa (2017 / 2022) | Crear con máquinas |

Cada estación tiene una ficha del lugar, una ficha de la tecnología, un «puente» conceptual, una pregunta de opción múltiple y una fuente. El desarrollo completo, las respuestas y las fuentes están en [`CONTENIDO.md`](./CONTENIDO.md). El prompt reproducible para regenerar el juego está en [`PROMPT.md`](./PROMPT.md).

### Puntaje, pasos y calorías

- **100 puntos** por respuesta correcta.
- **10 puntos** por cada engranaje coleccionable del camino.
- Los charcos frenan un segundo; no restan puntos.
- El tiempo activo solo suma mientras el jugador avanza.
- Al final se muestra pasos, tiempo y una **estimación** de calorías para 60 kg con la fórmula `3,5 × 60 × horas`. No es una medición médica. En modo sentado se aclara que es solo una referencia de caminata.

---

## Estructura del proyecto

```text
el-colorado-dos-tiempos/
├─ index.html          ← versión lista para jugar (código incluido)
├─ index.source.html   ← plantilla con <script src="./game.js">
├─ game.js             ← fuente legible del juego
├─ build-inline.mjs    ← regenera index.html desde la plantilla + game.js
├─ favicon.svg
├─ CONTENIDO.md        ← fichas, preguntas, respuestas y fuentes
├─ PROMPT.md           ← prompt reproducible del juego
├─ README.md
├─ LICENCIAS.md
└─ vendor/
   ├─ three.module.js
   ├─ vision_bundle.mjs
   ├─ wasm/
   └─ models/
```

`index.html` es el archivo que se sirve y se entrega. Incluye el CSS y el JavaScript del juego para cumplir el formato de **un solo HTML**; las librerías pesadas (Three.js, MediaPipe, wasm y modelos) quedan en `vendor/` para poder funcionar sin internet. Si se edita `game.js` o `index.source.html`, se regenera el HTML con:

```powershell
node build-inline.mjs
```

---

## Pruebas y depuración

La consola expone `window.__game` para pruebas docentes o de desarrollo:

```js
__game.jumpTo(4);                    // abrir una estación sin caminar
__game.selectAnswer(2);              // responder una opción
__game.continueAfterStation();       // continuar
__game.finishAll();                  // simular una partida completa (datos de prueba)
await __game.testVision();           // comprobar que MediaPipe cargó
```

`finishAll()` inyecta pasos y tiempo de prueba; no debe usarse para evaluar una partida real.

Pruebas realizadas en este prototipo:

- Carga de Three.js y de la escena 3D.
- Carga de MediaPipe con pose y segmentación (`testVision()` → `ready: true`).
- Fallback a teclado cuando no hay cámara.
- Recorrido completo de 10 estaciones y recorrido de aula de 6 estaciones.
- Apertura, respuesta correcta e incorrecta, feedback y continuación.
- Pausa, reanudación, reinicio y vuelta al inicio.
- Foco de estación, pausa y final.
- Guard de manos: una mano levantada al abrir la estación no responde hasta bajarla.
- Diseño sin scroll en 912 × 670 para portada, ficha y final.
- Cámara: apertura de la webcam real, vista local de calibración y fallback al avatar cuando el cuerpo completo no está visible.
- Calibración y reemplazo del avatar con un video sintético de cuerpo entero (persona completa a distancia y con luz).
- Recorte de la silueta, proporción del billboard y actualización de la vista previa.
- Inclinación lateral de cámara y teclas **A/D** verificadas en la pantalla: **A** va al carril izquierdo y **D** al derecho.
- Fallback al pulsar **Seguir sin cámara** y cuando se niega el permiso.

La cámara integrada del equipo de prueba abrió correctamente y mostró la vista de calibración, pero en el entorno automatizado no había una persona de cuerpo entero frente a ella. Por eso el recorrido completo con una persona real debe probarse en el equipo del aula, a unos 2 metros y con luz de frente. El video sintético de cuerpo entero permitió validar la calibración, el recorte y el reemplazo del avatar.

---

## Limitaciones y datos a verificar

- El pueblo 3D es una **interpretación estilizada**, no una reconstrucción geográfica exacta.
- Las fechas y datos locales provienen de la reseña municipal, Wikipedia y fuentes secundarias. Antes de una publicación definitiva conviene validarlos con el archivo municipal, el Obispado de Formosa, el INTA y la escuela.
- La estación 7 (Parroquia San Antonio de Padua) no tiene una fecha de construcción confirmada; en el juego se muestra como **Actualidad** y en `CONTENIDO.md` queda aclarado.
- El modo sentado estima calorías con la fórmula de caminata solo como referencia; no representa el gasto real de una persona sentada.
- El rendimiento de MediaPipe depende de la luz, la cámara y la computadora. Para el aula se recomienda probar antes en el equipo que se va a usar.
- La detección de cuerpo entero necesita que la persona entre completa en el cuadro. Si solo se ve la cabeza o el torso, el juego vuelve al avatar 3D y la calibración no avanza; la vista local ayuda a corregir la distancia.
- La figura de la cámara se muestra como un **billboard recortado** que mira siempre hacia la cámara del juego, no como un modelo 3D reconstruido. Es una decisión de privacidad y de rendimiento.
- Si se publica en un servidor, verificar que los `.wasm` se sirvan con el MIME correcto (`application/wasm`). Los servidores estáticos habituales ya lo hacen.

---

## Créditos

- **Instructivo 43 — Cómo crear un juego de realidad mixta**, Prof. Ariel Cóceres, Práctica Profesionalizante, ISFD y T «República Federal de Alemania», El Colorado, Formosa, 2026.
- Contenido histórico: Municipalidad de El Colorado, reseña histórica municipal y suplemento del diario *El Comercial*; Wikipedia, «El Colorado (Formosa)»; INTA El Colorado; EPES 1; Obispado de Formosa; y las fuentes específicas citadas en `CONTENIDO.md`.
- Hitos tecnológicos: Computer History Museum, Internet Society, CERN, UNESCO, Microsoft y documentación de OpenAI, entre otras fuentes citadas en `CONTENIDO.md`.
- **Three.js r160** (MIT) y **MediaPipe Tasks Vision 0.10.14** (Apache-2.0). Ver [`LICENCIAS.md`](./LICENCIAS.md).
- Tipografías del sistema; no se usan fuentes ni imágenes externas.

El código y el contenido se comparten con fines educativos. Las librerías de terceros conservan sus licencias originales.
