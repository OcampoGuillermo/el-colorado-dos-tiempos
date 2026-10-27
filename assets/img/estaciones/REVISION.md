# Revisión de las imágenes de las estaciones

Fecha de revisión: 26/10/2026 · 20 archivos presentes.

## Estado técnico

- Todas las imágenes fueron normalizadas a **JPEG real**, sin transparencia.
- Se aplicó orientación EXIF y se conservó el perfil de color cuando existía.
- Las imágenes grandes se redujeron a un máximo de **1600 × 1200 px**; las pequeñas se dejaron en su resolución original.
- Todas quedaron por debajo de **500 KB**.
- En el juego se muestran con `background-size: cover`: llenan el contenedor sin deformarse y se recortan solo si sobra imagen.
- La imagen tiene una capa oscura semitransparente y las fichas, opciones y fuentes tienen fondos o sombras para que el texto se lea.
- La foto de la parroquia se alinea arriba para que no se corte la cruz.

## Imágenes que conviene reemplazar o revisar

| Archivo | Observación |
|---|---|
| `05-tecnologia-telefono.jpg` | Muestra teléfonos inteligentes modernos. La ficha habla de Alexander Graham Bell y de 1876; conviene una foto de un teléfono antiguo o de Bell. |
| `06-tecnologia-computadora.jpg` | Muestra una computadora de escritorio actual con una pantalla. La ficha habla de ENIAC (1945); conviene una foto de ENIAC o de una computadora de válvulas. |
| `09-tecnologia-smartphone.jpg` | Muestra varios teléfonos actuales. La ficha habla del iPhone original de 2007; si se consigue una foto del modelo original, queda más preciso. |
| `07-lugar-parroquia-san-antonio.jpg` | Es la imagen de menor resolución (400 × 300 px). Se ve bien por el tratamiento de fondo, pero una versión más grande daría más nitidez. |
| `06-lugar-municipalidad.jpg` | El cartel “Bienvenidos El Colorado” identifica el lugar, pero no muestra el edificio municipal. Verificar si se busca una imagen más específica. |
| `10-lugar-feriarte.jpg` | Muestra un escenario nocturno. La ficha describe artesanos y artistas; puede servir si ese escenario es parte de Feriarte, pero conviene verificar. |

Las demás imágenes coinciden razonablemente con su ficha.

## Cómo reemplazar una imagen

1. Conservar el mismo nombre de archivo.
2. Usar JPG, idealmente de 1600 × 1000 px o más.
3. Copiarla en `assets/img/estaciones/`.
4. Anotar autor y licencia en `CREDITOS.md`.
5. No hay que cambiar código ni reconstruir `index.html`.

Las versiones originales de las 20 fotos quedaron guardadas en el historial de Git en el commit `d65493c`, por si hace falta recuperar alguna.
