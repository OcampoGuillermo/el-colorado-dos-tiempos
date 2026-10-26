import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const templatePath = path.join(root, 'index.source.html');
const scriptPath = path.join(root, 'game.js');
const outputPath = path.join(root, 'index.html');

const template = fs.readFileSync(templatePath, 'utf8');
const game = fs.readFileSync(scriptPath, 'utf8');
const externalTag = '<script type="module" src="./game.js"></script>';

if (!template.includes(externalTag)) {
  throw new Error(`No se encontró ${externalTag} en index.source.html`);
}
if (game.includes('</script')) {
  throw new Error('game.js contiene una etiqueta </script> y no se puede inline-ar sin escaparla');
}

const inlineTag = `<script type="module">\n${game}\n</script>`;
const output = template.replace(externalTag, () => inlineTag);
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`index.html generado: ${output.length.toLocaleString('es-AR')} caracteres`);
