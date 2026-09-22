import 'cookie';
import 'kleur/colors';
import './chunks/astro-designed-error-pages_CCfNTCZv.mjs';
import 'es-module-lexer';
import { h as decodeKey } from './chunks/astro/server__ziRuwAX.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B8YQwKls.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/germa/Documents/Proyectos/paginarefuerzo/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://florencia.example","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/germa/Documents/Proyectos/paginarefuerzo/src/pages/[locale]/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/germa/Documents/Proyectos/paginarefuerzo/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/germa/Documents/Proyectos/paginarefuerzo/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/germa/Documents/Proyectos/paginarefuerzo/src/pages/[locale]/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/germa/Documents/Proyectos/paginarefuerzo/src/pages/[locale]/studio.astro",{"propagation":"none","containsHead":true}],["C:/Users/germa/Documents/Proyectos/paginarefuerzo/src/pages/[locale]/work/[...slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/germa/Documents/Proyectos/paginarefuerzo/src/pages/[locale]/work/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[locale]/contact@_@astro":"pages/_locale_/contact.astro.mjs","\u0000@astro-page:src/pages/[locale]/index@_@astro":"pages/_locale_.astro.mjs","\u0000@astro-page:src/pages/[locale]/studio@_@astro":"pages/_locale_/studio.astro.mjs","\u0000@astro-page:src/pages/[locale]/work/[...slug]@_@astro":"pages/_locale_/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/[locale]/work/index@_@astro":"pages/_locale_/work.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/germa/Documents/Proyectos/paginarefuerzo/node_modules/@astrojs/vercel/dist/image/build-service.js":"chunks/build-service_P3UjhgaF.mjs","\u0000@astrojs-manifest":"manifest_DZLj6sVz.mjs","C:/Users/germa/Documents/Proyectos/paginarefuerzo/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.D5u9L0yW.js","@astrojs/react/client.js":"_astro/client.BzBrOBkE.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/source-serif-4-cyrillic-ext-400-normal.CWV284fw.woff2","/_astro/source-serif-4-cyrillic-400-normal.C44pakCn.woff2","/_astro/source-serif-4-vietnamese-400-normal.BbG3LG1A.woff2","/_astro/source-serif-4-greek-400-normal.Cw5-AHNN.woff2","/_astro/source-serif-4-cyrillic-ext-400-italic.zoDFlEzN.woff2","/_astro/source-serif-4-latin-ext-400-normal.Cp7z-ARB.woff2","/_astro/source-serif-4-latin-400-normal.DJ5YJwmz.woff2","/_astro/source-serif-4-cyrillic-400-italic.BLN19cOa.woff2","/_astro/source-serif-4-vietnamese-400-italic.CjUPRDIa.woff2","/_astro/source-serif-4-greek-400-italic.C7D4Dq0H.woff2","/_astro/source-serif-4-latin-ext-400-italic.JynPwBMj.woff2","/_astro/source-serif-4-latin-400-italic.0j97Jm6B.woff2","/_astro/source-serif-4-cyrillic-600-normal.BDP5YDHD.woff2","/_astro/source-serif-4-vietnamese-600-normal.CznyfUKR.woff2","/_astro/source-serif-4-latin-600-normal.DouSKlru.woff2","/_astro/source-serif-4-latin-ext-600-normal.0sIUyHMO.woff2","/_astro/karla-latin-500-normal.6wzn_4WC.woff2","/_astro/karla-latin-ext-400-normal.DQe2ZdED.woff2","/_astro/karla-latin-ext-500-normal.BQGx_UZ6.woff2","/_astro/karla-latin-ext-700-normal.DnPH2EDB.woff2","/_astro/source-serif-4-cyrillic-ext-600-normal.D_E8FDgP.woff2","/_astro/karla-latin-400-normal.C_jajTY_.woff2","/_astro/karla-latin-700-normal.DFuMffT3.woff2","/_astro/source-serif-4-greek-600-normal.DdRkKr-1.woff2","/_astro/jetbrains-mono-cyrillic-400-normal.BEIGL1Tu.woff2","/_astro/jetbrains-mono-greek-400-normal.C190GLew.woff2","/_astro/jetbrains-mono-latin-ext-400-normal.Bc8Ftmh3.woff2","/_astro/jetbrains-mono-latin-400-normal.V6pRDFza.woff2","/_astro/petit-formal-script-latin-ext-400-normal._wbkGvqD.woff2","/_astro/petit-formal-script-latin-400-normal.C9t40IAv.woff2","/_astro/source-serif-4-cyrillic-ext-400-normal.DLkyKLvH.woff","/_astro/source-serif-4-vietnamese-400-normal.DR1UuFon.woff","/_astro/source-serif-4-cyrillic-ext-400-italic.Dx4A8QUO.woff","/_astro/source-serif-4-greek-400-normal.BccYJ-vZ.woff","/_astro/source-serif-4-latin-ext-400-normal.CEpydyUl.woff","/_astro/source-serif-4-cyrillic-400-italic.Dx8qIUN3.woff","/_astro/source-serif-4-latin-400-normal.Dn3IlU-Z.woff","/_astro/source-serif-4-vietnamese-400-italic.DyjhI2GX.woff","/_astro/source-serif-4-greek-400-italic.DcuniPAV.woff","/_astro/source-serif-4-cyrillic-400-normal.B8Z6Jvzv.woff","/_astro/source-serif-4-latin-ext-400-italic.G7LDTi7t.woff","/_astro/source-serif-4-latin-400-italic.Dv9jnFA_.woff","/_astro/source-serif-4-cyrillic-600-normal.DFnC3vAY.woff","/_astro/source-serif-4-latin-600-normal.DMD1h6_f.woff","/_astro/source-serif-4-latin-ext-600-normal.C6NNqpJh.woff","/_astro/source-serif-4-vietnamese-600-normal.B0WJbuqT.woff","/_astro/karla-latin-ext-500-normal.BR9CgtUN.woff","/_astro/karla-latin-500-normal.BWjg-GL4.woff","/_astro/karla-latin-ext-400-normal.CMxStcnq.woff","/_astro/karla-latin-ext-700-normal.eTNnM7bB.woff","/_astro/karla-latin-400-normal.iWRxgclR.woff","/_astro/source-serif-4-cyrillic-ext-600-normal.DiT2IGQm.woff","/_astro/source-serif-4-greek-600-normal.DhXQw1Kl.woff","/_astro/karla-latin-700-normal.CospC10L.woff","/_astro/jetbrains-mono-cyrillic-400-normal.ugxPyKxw.woff","/_astro/jetbrains-mono-greek-400-normal.B9oWc5Lo.woff","/_astro/jetbrains-mono-latin-ext-400-normal.fXTG6kC5.woff","/_astro/jetbrains-mono-vietnamese-400-normal.CqNFfHCs.woff","/_astro/jetbrains-mono-latin-400-normal.6-qcROiO.woff","/_astro/petit-formal-script-latin-ext-400-normal.E3lgQq5o.woff","/_astro/petit-formal-script-latin-400-normal.D968odld.woff","/_astro/index.Se6b9TOB.css","/favicon.svg","/studio.svg","/banners/carta-banner.svg","/banners/contacto-banner.svg","/banners/obra-banner.svg","/paintings/01-untitled-bone-field.svg","/paintings/02-pavimento.svg","/paintings/03-tertiary.svg","/paintings/04-estudio-de-tarde.svg","/paintings/05-two-bowls.svg","/paintings/06-marcas.svg","/paintings/07-torso.svg","/paintings/08-paisaje-interior.svg","/panels/carta-panel.svg","/panels/contacto-panel.svg","/panels/obra-panel.svg","/_astro/client.BzBrOBkE.js","/_astro/index.AcHJwViZ.js","/_astro/keystatic-page.D5u9L0yW.js","/404.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"tfyhbgn68IOOIJ0gowv37jMPWLVTVzl/Iq/oA+k9IEA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
