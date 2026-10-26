# Prompt final para pedir el juego a la IA

Copiá y pegá este prompt en el asistente. Está pensado para generar un juego de realidad mixta de cuerpo entero en un solo archivo `index.html`, con Three.js y MediaPipe, y con las 10 estaciones del recorrido “El Colorado: dos tiempos, un camino”.

---

## Prompt

Quiero un juego de realidad mixta de cuerpo entero para el aula, en un solo archivo `index.html`, que funcione sin conexión en Chrome (servido desde una carpeta local o desde GitHub Pages/Floot). La cámara web recorta a la persona en vivo con MediaPipe y la coloca dentro de un pueblo en 3D hecho con Three.js. El pueblo es **El Colorado, Formosa, Argentina**, y el recorrido se llama **“El Colorado: dos tiempos, un camino”**.

### Idea

El jugador recorre 10 estaciones. Cada estación une un lugar real de El Colorado con un hito de la historia de la tecnología. La idea que ordena el recorrido es que **el pueblo y la tecnología son dos formas de conectar, registrar y compartir lo que sabemos**. Al llegar a cada estación, el juego se pausa y muestra una ficha doble: “El lugar” y “La tecnología”, con un concepto puente, una pregunta y tres opciones.

### Controles con el cuerpo (MediaPipe Pose)

- **Caminar en el lugar:** el personaje avanza.
- **Paso a la izquierda o a la derecha:** cambia de carril (3 carriles).
- **Mano izquierda arriba:** selecciona la opción A.
- **Dos manos arriba:** selecciona la opción B.
- **Mano derecha arriba:** selecciona la opción C.
- **Mantener la selección 1,2 segundos:** confirma la respuesta.
- **Calibración de 3 segundos al comenzar:** la persona se queda quieta, de frente, a unos 2 metros; el juego toma su altura, el centro de la cadera y la posición de las rodillas como referencia.
- **Modo sentado / sin cámara:** se puede jugar con teclado. `W` o `↑` avanza, `A`/`D` o `←`/`→` cambian de carril, `1`/`2`/`3` responden, `Enter` continúa. Debe existir un botón “Jugar sin cámara” desde el inicio.
- **Accesibilidad:** ofrecer variante sentada y de un solo brazo. No exigir saltar ni correr.

### Recorrido y contenidos

Usar estas 10 estaciones, en este orden. Para cada una, mostrar: nombre del lugar, año, un dato, una curiosidad, nombre del hito tecnológico, año, un dato, una curiosidad, el concepto puente, la pregunta y tres opciones. La respuesta correcta está marcada con ✅; el juego debe mezclar las opciones en cada partida.

1. **Puente Libertad (1958) + Telégrafo (1844)** — Concepto: “Conectar orillas”.
   - Lugar: se inauguró el 8/2/1958; antes El Colorado estaba prácticamente aislado. Curiosidad: el Bermejo es el límite natural con Chaco.
   - Tecnología: Morse envió el primer mensaje público entre Washington y Baltimore; el código Morse convirtió letras en puntos y rayas. Curiosidad: por primera vez un mensaje viajó más rápido que una persona.
   - Pregunta: ¿Qué cambió para El Colorado cuando se inauguró el Puente Libertad en 1958?
     - A. Dejó de estar aislado. ✅
     - B. Se fundó el pueblo.
     - C. Llegó el ferrocarril.

2. **Río Bermejo + Escritura (c. 3300 a. C.)** — Concepto: “Nombrar y registrar”.
   - Lugar: la colonia se marcó alrededor del km 192 de la navegación del Bermejo; el nombre “El Colorado” viene del color rojizo del agua en crecida. Curiosidad: el río fue la principal vía de llegada de los primeros pobladores.
   - Tecnología: la escritura cuneiforme nació en Mesopotamia; los primeros textos fueron listas de bienes y cuentas. Curiosidad: permitió recordar más allá del cuerpo y enviar órdenes a distancia.
   - Pregunta: ¿Por qué la colonia se llamó El Colorado?
     - A. Por el color del agua del Bermejo. ✅
     - B. Por un vecino.
     - C. Por el ferrocarril.

3. **Costanera y mirador + Imprenta (c. 1450)** — Concepto: “Ampliar la mirada”.
   - Lugar: la costanera y el mirador miran al Bermejo; es un espacio de paseo y atardeceres. Curiosidad: desde el mirador se ve el puente y el cambio de color del río.
   - Tecnología: los tipos móviles de Gutenberg permitieron reproducir textos en serie; la Biblia fue el primer gran libro impreso. Curiosidad: antes, copiar un libro a mano podía llevar meses.
   - Pregunta: ¿Qué permitió la imprenta de Gutenberg?
     - A. Reproducir textos y hacerlos circular. ✅
     - B. Navegar el Bermejo.
     - C. Medir la temperatura.

4. **Camping municipal y parque acuático + Radio (1895)** — Concepto: “Compartir el tiempo libre”.
   - Lugar: camping gratuito y abierto todo el año, a orillas del Bermejo, con parrillas, senderos y bicisenda; piletas en temporada. Curiosidad: se puede acampar sin costo.
   - Tecnología: Marconi transmitió sonido sin cables; la primera transmisión transatlántica fue en 1901. Curiosidad: las primeras radios se armaban en casa con galena y una antena larga.
   - Pregunta: ¿Qué usa la radio para transmitir?
     - A. Ondas. ✅
     - B. Cables.
     - C. Vapor.

5. **Plaza San Martín (1950) + Teléfono (1876)** — Concepto: “Poner en contacto voces”.
   - Lugar: el busto se instaló en 1950, a 100 años de la muerte de San Martín; la plaza está sobre la Av. 25 de Mayo. Curiosidad: la avenida fue la arteria principal y parte del antiguo camino provincial.
   - Tecnología: Bell transmitió la voz por un cable; la primera llamada fue a la habitación de al lado. Curiosidad: “Watson, ven aquí, te necesito” es la primera llamada registrada.
   - Pregunta: ¿Qué se instaló en la plaza en 1950?
     - A. Un busto a San Martín. ✅
     - B. Una antena de radio.
     - C. Una computadora.

6. **Municipalidad (1944 / 1957) + Computadora (1945)** — Concepto: “Ordenar y procesar”.
   - Lugar: la primera institución fue la Subcomisaría Bermejo (1936); la Comisión de Fomento se formó después; el edificio municipal funciona en 25 de Mayo y Tucumán. Curiosidad: el municipio se rige por la ley provincial 1028.
   - Tecnología: ENIAC pesaba unas 30 toneladas y tenía 18.000 válvulas; Turing había definido la computación teórica en 1936. Curiosidad: seis mujeres programaron ENIAC: Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Fran Bilas y Ruth Lichterman.
   - Pregunta: ¿En qué año El Colorado pasó a ser municipio?
     - A. 1957. ✅
     - B. 1936.
     - C. 1981.

7. **Parroquia San Antonio de Padua + Internet (1969)** — Concepto: “Redes de comunidad”.
   - Lugar: San Antonio de Padua es el patrono; la parroquia pertenece a la Diócesis de Formosa. Curiosidad: su fiesta es el 13 de junio; es invocado para encontrar objetos perdidos.
   - Tecnología: ARPANET conectó computadoras de universidades en 1969; TCP/IP llegó en 1983. Curiosidad: el primer mensaje fue “LO” porque el sistema se cayó al intentar “LOGIN”.
   - Pregunta: ¿Qué conectó ARPANET en 1969?
     - A. Computadoras de universidades. ✅
     - B. Ciudades de Formosa.
     - C. Radios de la parroquia.

8. **EPES 1 (1960) + Web (1989)** — Concepto: “Acceso al conocimiento”.
   - Lugar: se inauguró el 25/4/1960; es una de las secundarias históricas de la ciudad. Curiosidad: se inauguró 24 años después de la fundación del pueblo.
   - Tecnología: Tim Berners-Lee creó la Web en el CERN en 1989; el primer sitio es de 1991. Curiosidad: combinó hipertexto, URL y HTTP.
   - Pregunta: ¿Qué se inauguró el 25 de abril de 1960?
     - A. La EPES 1. ✅
     - B. El Puente Libertad.
     - C. El camping.

9. **INTA El Colorado (1981) + Smartphone (2007)** — Concepto: “Herramientas de campo”.
   - Lugar: se creó el 21/10/1981; tiene 450 hectáreas; investiga agricultura, ganadería y apicultura; tiene dos campos anexos. Curiosidad: trabaja con productores de la zona.
   - Tecnología: el iPhone de 2007 reunió teléfono, cámara, GPS, sensores e Internet en un bolsillo. Curiosidad: el primer iPhone no tenía App Store; llegó en 2008.
   - Pregunta: ¿Qué investiga el INTA en El Colorado?
     - A. Agricultura y ganadería. ✅
     - B. Minería.
     - C. Petróleo.

10. **Feriarte (octubre) + IA generativa (2017 / 2022)** — Concepto: “Crear con máquinas”.
    - Lugar: festival de artesanos y artistas, una de las citas culturales de la ciudad. Curiosidad: muestra oficios y saberes que pasan de generación en generación.
    - Tecnología: los transformers (2017) y ChatGPT (2022) generan texto, imágenes, audio o video a partir de patrones aprendidos. Curiosidad: la misma tecnología puede crear una imagen o una noticia falsa; importan la verificación, la autoría y el consentimiento.
    - Pregunta: ¿Qué hace la IA generativa?
      - A. Crea texto, imágenes o sonidos a partir de datos. ✅
      - B. Solo suma números.
      - C. Imprime libros.

### Mundo 3D

- Un pueblo chaqueño low-poly al atardecer: río Bermejo, puente, costanera, camping, plaza, municipalidad, parroquia, escuela, INTA y feria.
- Calle recta con 3 carriles, veredas, edificios simples, árboles, faroles, carteles y un cielo con gradiente.
- Cada estación tiene un portal flotante con un número, el nombre del lugar y un ícono 3D del hito tecnológico (telégrafo, tablilla, imprenta, antena de radio, teléfono, computadora, globo de red, ventana web, celular, engranaje de IA).
- El jugador es un recorte de la cámara en vivo, como un plano billboard, o un avatar low-poly si juega sin cámara.
- Cámara en tercera persona, detrás del jugador, con seguimiento suave.
- Estética: cálida y editorial; ocres, terracota, crema, verde jade y azul noche. Textos grandes, legibles a 2 metros. Tipografía con serif para títulos y sans para la interfaz. Nada de gradientes genéricos ni brillos excesivos.
- Rendimiento: formas simples, sin sombras costosas, pixel ratio limitado, pensado para computadoras escolares.

### Mecánicas

- Avance automático solo cuando el jugador camina en el lugar o mantiene `W`/`↑`.
- Cambio de carril suave entre 3 carriles.
- Engranajes coleccionables entre estaciones: +10 puntos. Charcos que frenan 1 segundo, sin quitar puntos.
- Al llegar a una estación, el avance se detiene y se abre la ficha.
- Respuesta correcta: +100 puntos, sonido y partículas. Respuesta incorrecta: se muestra la correcta y una explicación breve, sin castigo.
- Pantalla final: puntaje, respuestas correctas sobre 10, pasos, tiempo en movimiento, calorías estimadas y lista de estaciones visitadas.
- Calorías: `3,5 × 60 kg × horas`, aclarando que es una estimación para 60 kg y que no es una medición médica.
- Pasos: contar alternancias de rodillas con cámara; estimar con el tiempo si se juega con teclado.
- Botón de pausa, sonido on/off y reinicio.
- Modo aula: permitir elegir un subconjunto de 6 estaciones (1, 2, 5, 6, 8 y 10) para que la partida dure 3-4 minutos.

### Privacidad, ética e inclusión

- La cámara se procesa **solo en la computadora**. No grabar, no subir, no guardar imágenes.
- Aviso claro antes de empezar: “La cámara se usa solo para recortar tu silueta. No se graba ni se envía a Internet”. Ley 25.326.
- Nadie juega si no quiere. Botón “Jugar sin cámara” siempre visible.
- Ofrecer variante sentada y de un solo brazo.
- Espacio despejado, sin sillas ni mochilas cerca; pausas entre partidas.
- Los datos históricos deben citarse; los relatos de vecinos, nombrarse.
- La IA escribe el código, pero las decisiones sobre qué contar del pueblo son del grupo (UNESCO, 2021).

### Requisitos técnicos

- Three.js para el mundo 3D.
- MediaPipe Tasks Vision para `PoseLandmarker` y `ImageSegmenter` (segmentación de la persona).
- Cargar las bibliotecas y los modelos desde la carpeta local `vendor/` para que funcione sin Internet.
- Fallback: si la cámara o los modelos fallan, mostrar un mensaje claro y ofrecer el modo teclado.
- Un solo `index.html` con el CSS y el JavaScript de la aplicación; `vendor/` solo contiene bibliotecas y modelos.
- Código comentado en español, modular y fácil de editar. El arreglo `STATIONS` debe estar al principio y contener todas las fichas.
- Sin dependencias de servidores externos, sin analíticas, sin cookies.

### Entregables

1. `index.html` completo y funcional.
2. Carpeta `vendor/` con Three.js, MediaPipe y los modelos.
3. `README.md` con instrucciones para correrlo con un servidor local, controles, privacidad y créditos.
4. `CONTENIDO.md` con las 10 fichas completas y las fuentes.
5. Una nota final con las limitaciones y los datos que hay que verificar con el archivo municipal.
