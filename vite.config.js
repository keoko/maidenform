import { defineConfig } from 'vite';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import * as fs from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

function getEntryFiles() {
  const blocks = fs.readdirSync(path.join(__dirname, 'blocks'));
  const files = blocks.filter((file) => fs.existsSync(path.join(__dirname, 'blocks', file)))
  console.log(files.map((file) => path.join(__dirname, 'blocks', file, `${file}.js`)))
  return files.map((file) => path.join(__dirname, 'blocks', file, `${file}.js`))
}

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'fre'`,
    target: 'es2020',
    format: 'esm'
  },
  plugins: [viteStaticCopy({
    targets: [
      { src: "blocks/**/*.css",
        dest: ".", rename: (name, extension, fullPath) => fullPath
      },
      { src: "blocks/**/*.public.*",
        dest: ".", rename: (name, extension, fullPath) => fullPath.replace('.public', '')
      }
    ]
  })],
  build: {
    minify: false,
    lib: {
      entry: getEntryFiles(),
      fileName: (format, entry) => `${entry}.js`,
      formats: ['esm']
    },
    rollupOptions: {
      external: ['scripts/lib-franklin.js', 'scripts/scripts.js', 'scripts/delayed.js'].map((name) => path.join(__dirname, name)),
    }
  },
})
