# Licencias de terceros

El juego usa las siguientes librerías y modelos, incluidos localmente en `vendor/` para funcionar sin internet.

## Three.js r160

- **Archivo:** `vendor/three.module.js`
- **Versión:** 0.160.0 (r160)
- **Autor:** Three.js Authors
- **Licencia:** MIT
- **Origen:** <https://github.com/mrdoob/three.js>
- **Texto completo:** [`vendor/LICENCIA-THREE.txt`](./vendor/LICENCIA-THREE.txt)

El archivo conserva el encabezado de licencia original:

```text
@license
Copyright 2010-2023 Three.js Authors
SPDX-License-Identifier: MIT
```

## MediaPipe Tasks Vision

- **Archivos:** `vendor/vision_bundle.mjs`, `vendor/wasm/`, `vendor/models/`
- **Versión:** 0.10.14
- **Autor:** Google LLC / MediaPipe Authors
- **Licencia:** Apache License 2.0
- **Origen:** <https://github.com/google-ai-edge/mediapipe>
- **Texto completo:** [`vendor/LICENCIA-APACHE-2.0.txt`](./vendor/LICENCIA-APACHE-2.0.txt)

Incluye:

- `vision_bundle.mjs`: paquete JavaScript de Tasks Vision.
- `wasm/vision_wasm_internal.*` y `wasm/vision_wasm_nosimd_internal.*`: binarios wasm SIMD y no-SIMD.
- `models/pose_landmarker_lite.task`: modelo de detección de pose (variante lite, float16).
- `models/selfie_segmenter.tflite`: modelo de segmentación de silueta.

Los modelos se distribuyen desde los repositorios públicos de modelos de MediaPipe. Conservan las condiciones de la licencia Apache 2.0 de MediaPipe.

## Fuentes de los archivos

- Three.js: build oficial `three@0.160.0/build/three.module.js`.
- MediaPipe Tasks Vision: paquete `@mediapipe/tasks-vision@0.10.14`.
- Modelo de pose: MediaPipe Pose Landmarker Lite.
- Modelo de segmentación: MediaPipe Selfie Segmenter.

No se usan CDN, fuentes externas ni imágenes de terceros en tiempo de ejecución.

## Contenido del juego

Las fichas históricas y las preguntas fueron elaboradas para este proyecto a partir de las fuentes citadas en [`CONTENIDO.md`](./CONTENIDO.md). El contenido se comparte con fines educativos. Las marcas, nombres de lugares, instituciones y tecnologías pertenecen a sus respectivos titulares.
