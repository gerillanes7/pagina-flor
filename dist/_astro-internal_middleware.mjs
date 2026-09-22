import { d as defineMiddleware, s as sequence } from './chunks/render-context_BI_y-Bl3.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BGKFRZgw.mjs';
import 'cookie';

const KEySTATIC_REALM = "Keystatic Florencia";
function unauthorized() {
  return new Response("Autenticación requerida.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${KEySTATIC_REALM}", charset="UTF-8"`
    }
  });
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith("/keystatic")) {
    return next();
  }
  const user = process.env.KEYSTATIC_USER ?? "admin";
  const pass = process.env.KEYSTATIC_PASSWORD ?? "cambia-esta-clave";
  if (!user || !pass) {
    return new Response("Not Found", { status: 404 });
  }
  const header = context.request.headers.get("authorization");
  if (!header || !header.toLowerCase().startsWith("basic ")) {
    return unauthorized();
  }
  let decoded;
  try {
    decoded = atob(header.slice(6).trim());
  } catch {
    return unauthorized();
  }
  const sep = decoded.indexOf(":");
  const providedUser = sep === -1 ? decoded : decoded.slice(0, sep);
  const providedPass = sep === -1 ? "" : decoded.slice(sep + 1);
  if (providedUser !== user || providedPass !== pass) {
    return unauthorized();
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
