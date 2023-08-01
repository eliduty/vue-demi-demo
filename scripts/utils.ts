import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
export function loadModule(name: string) {
  try {
    return import(name);
  } catch (e) {
    return undefined;
  }
}
type VueVersion = '2' | '2.7' | '3';

async function copy(name: string, version: VueVersion, vue = 'vue') {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dir = path.resolve(__dirname, '..', 'dist');
  const src = path.join(dir, `v${version}`, name);
  const dest = path.join(dir, name);
  let content = fs.readFileSync(src, 'utf-8');
  content = content.replace(/'vue'/g, `'${vue}'`);
  fs.writeFileSync(dest, content, 'utf-8');
}

export function switchVersion(version: VueVersion, vue?: string) {
  ['index.umd.js', 'index.es.js', 'index.cjs.js', 'style.css'].forEach(async name => {
    await copy(name, version, vue);
  });
}
