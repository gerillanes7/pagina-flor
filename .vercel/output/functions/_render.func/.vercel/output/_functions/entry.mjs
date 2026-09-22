import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CORsAB6T.mjs';
import { manifest } from './manifest_DnS-uaow.mjs';

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
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
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
    "middlewareSecret": "8760f677-e70c-4811-8458-c348022af1d3"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
