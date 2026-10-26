# Vendor

Archivos de terceros necesarios para que el juego funcione sin conexión.

| Archivo / carpeta | Versión | Licencia |
|---|---|---|
| `three.module.js` | Three.js r160 (0.160.0) | MIT |
| `vision_bundle.mjs` | MediaPipe Tasks Vision 0.10.14 | Apache-2.0 |
| `wasm/` | MediaPipe Tasks Vision 0.10.14 | Apache-2.0 |
| `models/pose_landmarker_lite.task` | MediaPipe Pose Landmarker Lite | Apache-2.0 |
| `models/selfie_segmenter.tflite` | MediaPipe Selfie Segmenter | Apache-2.0 |

Textos de licencia:

- `LICENCIA-THREE.txt`
- `LICENCIA-APACHE-2.0.txt`

No editar estos archivos a mano. Si se actualiza una librería, revisar que las rutas de `game.js` sigan siendo válidas y volver a probar `testVision()` y la escena 3D.

Origen:

- <https://github.com/mrdoob/three.js>
- <https://github.com/google-ai-edge/mediapipe>
- <https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker>
- <https://ai.google.dev/edge/mediapipe/solutions/vision/image_segmenter>
