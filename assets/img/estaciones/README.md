# Imágenes de las estaciones

Esta carpeta es el lugar donde van las **20 fotos reales** que aparecen de fondo en la ficha de cada estación.

> Estado actual: las 20 imágenes están cargadas y normalizadas. La revisión técnica y las fotos que conviene reemplazar están en [`REVISION.md`](./REVISION.md).

El juego intenta cargar una imagen según el tema elegido:

- **El lugar**: foto del lugar de El Colorado.
- **La tecnología**: foto del invento o hito tecnológico.
- Si falta la imagen de tecnología, usa como respaldo la imagen del lugar.
- Si falta la imagen del lugar, la ficha queda con el fondo oscuro y todo sigue funcionando.
- Mientras no estén todas las fotos, la consola del navegador puede mostrar un `404` por cada archivo faltante. Es esperado y no rompe el juego.

No hace falta tocar el código. Los nombres deben ser **exactos**, incluidas las minúsculas, los guiones y la extensión `.jpg`.

## Dónde guardar los archivos

```text
el-colorado-dos-tiempos/
└─ assets/
   └─ img/
      └─ estaciones/
         ├─ 01-lugar-puente-libertad.jpg
         ├─ 01-tecnologia-telegrafo.jpg
         ├─ ...
         └─ 10-tecnologia-ia-generativa.jpg
```

## Formato recomendado

- **JPG** en sRGB.
- **1600 × 1000 px** o **1920 × 1200 px** (proporción 16:10). Si la foto es 4:3 o panorámica, igual funciona: el juego la recorta con `cover`.
- Menos de **500 KB** por imagen para que la ficha abra rápido.
- Evitar fotos con texto grande, marcas de agua o rostros de menores sin autorización.
- Usar fotos propias, del municipio, de la escuela o de bancos de imágenes con licencia. Anotar autor y licencia en [`CREDITOS.md`](./CREDITOS.md).

## Las 20 imágenes

| Archivo exacto | Tema | Qué debe mostrar | Búsqueda sugerida |
|---|---|---|---|
| `01-lugar-puente-libertad.jpg` | El lugar | Vista del puente sobre el río Bermejo, en El Colorado. | `Puente Libertad El Colorado Formosa`, `puente río Bermejo` |
| `01-tecnologia-telegrafo.jpg` | La tecnología | Telégrafo de Morse, manipulador o equipo de 1844. | `Morse telegraph key 1844`, `telégrafo Morse` |
| `02-lugar-rio-bermejo.jpg` | El lugar | Paisaje del río Bermejo, idealmente con el agua rojiza o la costa del pueblo. | `Río Bermejo El Colorado Formosa` |
| `02-tecnologia-escritura-cuneiforme.jpg` | La tecnología | Tablilla de arcilla con escritura cuneiforme. | `cuneiform tablet British Museum` |
| `03-lugar-costanera-mirador.jpg` | El lugar | Costanera, mirador o atardecer sobre el Bermejo. | `costanera El Colorado Formosa`, `mirador río Bermejo` |
| `03-tecnologia-imprenta.jpg` | La tecnología | Imprenta de tipos móviles o prensa de Gutenberg. | `Gutenberg printing press`, `imprenta tipos móviles` |
| `04-lugar-camping.jpg` | El lugar | Camping, parrillas, senderos o parque junto al río. | `camping El Colorado Formosa`, `parque acuático El Colorado` |
| `04-tecnologia-radio.jpg` | La tecnología | Radio antigua, receptor de galena o equipo de Marconi. | `Marconi radio 1895`, `radio galena antigua` |
| `05-lugar-plaza-san-martin.jpg` | El lugar | Plaza San Martín y su busto, o la Av. 25 de Mayo. | `plaza San Martín El Colorado Formosa` |
| `05-tecnologia-telefono.jpg` | La tecnología | Teléfono de Alexander Graham Bell o teléfono de 1876. | `Bell telephone 1876`, `teléfono antiguo Bell` |
| `06-lugar-municipalidad.jpg` | El lugar | Edificio municipal de El Colorado. | `Municipalidad El Colorado Formosa`, `25 de Mayo y Tucumán` |
| `06-tecnologia-computadora.jpg` | La tecnología | ENIAC o una computadora de válvulas de 1945. | `ENIAC computer 1945`, `computadora ENIAC` |
| `07-lugar-parroquia-san-antonio.jpg` | El lugar | Fachada de la parroquia San Antonio de Padua. | `parroquia San Antonio El Colorado Formosa` |
| `07-tecnologia-internet.jpg` | La tecnología | Mapa de ARPANET, IMP o sala de computadoras de 1969. | `ARPANET map 1969`, `ARPANET IMP` |
| `08-lugar-epes-1.jpg` | El lugar | Edificio o frente de la EPES 1. | `EPES 1 El Colorado Formosa` |
| `08-tecnologia-web.jpg` | La tecnología | Tim Berners-Lee, el CERN o el primer servidor web. | `Tim Berners-Lee CERN 1989`, `first web server` |
| `09-lugar-inta.jpg` | El lugar | Campo experimental, cultivos, ganadería o edificio del INTA. | `INTA El Colorado Formosa`, `campo experimental INTA` |
| `09-tecnologia-smartphone.jpg` | La tecnología | iPhone original de 2007 o un smartphone de esa época. | `original iPhone 2007` |
| `10-lugar-feriarte.jpg` | El lugar | Feria de artesanos, puestos o artistas de Feriarte. | `Feriarte El Colorado Formosa`, `feria de artesanos Formosa` |
| `10-tecnologia-ia-generativa.jpg` | La tecnología | Persona usando una herramienta de IA generativa o una visualización de redes neuronales. | `generative AI interface`, `person using AI chatbot` |

## Cómo se ve en el juego

- El tema se elige al azar en cada entrada: en un recorrido completo se reparten **5 entradas de “El lugar” y 5 de “La tecnología”**.
- Si volvés a abrir la misma estación, cambia al otro tema para no repetir la pregunta.
- La imagen ocupa el fondo de la ventana emergente con `background-size: cover`; se amplía o se recorta según el tamaño del contenedor, sin deformarse.
- Lleva una capa oscura semitransparente y las fichas, opciones y fuentes tienen fondos o sombras para que el texto se lea sin competir con la foto.
- La ficha activa (lugar o tecnología) queda marcada con el color del tema.
- Las preguntas, opciones y respuestas correctas de cada tema están en `game.js`.
