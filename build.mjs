import {build} from 'esbuild';
import {compile} from '@tailwindcss/node';
import {readFile,writeFile,mkdir,cp} from 'node:fs/promises';
import {createRequire} from 'node:module';
import path from 'node:path';
await mkdir('dist/privacy',{recursive:true});
await mkdir('dist/assets',{recursive:true});
await build({entryPoints:['src/pages.tsx'],outfile:'.render.cjs',bundle:true,platform:'node',format:'cjs',jsx:'automatic',alias:{'@':path.resolve('src')}});
const require=createRequire(import.meta.url);
const {renderPage}=require('./.render.cjs');
await writeFile('dist/index.html',renderPage(false));
await writeFile('dist/privacy/index.html',renderPage(true));
const compiler=await compile(await readFile('src/site.css','utf8'),{base:path.resolve('src'),onDependency:()=>{}});
const component=await readFile('src/components/ui/card.tsx','utf8')+await readFile('src/components/ui/_shared.ts','utf8');
const candidates=[...component.matchAll(/[A-Za-z0-9_:/.[\]%-]+/g)].map(m=>m[0]);
await writeFile('dist/assets/site.css',compiler.build(candidates));
for(const weight of [400,600]){const font=`inter-latin-${weight}-normal.woff2`;try{await cp(require.resolve(`@fontsource/inter/files/${font}`),`dist/assets/${font}`)}catch{await readFile(`dist/assets/${font}`)}}
console.log('Built crawlable homepage and privacy policy from React source.');
