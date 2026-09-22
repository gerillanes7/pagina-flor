import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DlZ1i--8.mjs';
import { manifest } from './manifest_BNJtDZtp.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page3 = () => import('./pages/404.astro.mjs');
const _page4 = () => import('./pages/_locale_/contact.astro.mjs');
const _page5 = () => import('./pages/_locale_/studio.astro.mjs');
const _page6 = () => import('./pages/_locale_/work.astro.mjs');
const _page7 = () => import('./pages/_locale_/work/_---slug_.astro.mjs');
const _page8 = () => import('./pages/_locale_.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/[locale]/contact.astro", _page4],
    ["src/pages/[locale]/studio.astro", _page5],
    ["src/pages/[locale]/work/index.astro", _page6],
    ["src/pages/[locale]/work/[...slug].astro", _page7],
    ["src/pages/[locale]/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/germa/Documents/Proyectos/paginarefuerzo/dist/client/",
    "server": "file:///C:/Users/germa/Documents/Proyectos/paginarefuerzo/dist/server/",
    "host": "127.0.0.1",
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
