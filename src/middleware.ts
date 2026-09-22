import { defineMiddleware } from "astro:middleware";

const KEySTATIC_REALM = "Keystatic Florencia";

function unauthorized(): Response {
  return new Response("Autenticación requerida.", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${KEySTATIC_REALM}", charset="UTF-8"`,
    },
  });
}

function notConfigured(): Response {
  return new Response(
    "Keystatic deshabilitado: KEYSTATIC_USER y KEYSTATIC_PASSWORD no están configurados.",
    { status: 404 }
  );
}

const NO_STORE = {
  "Cache-Control": "no-store, no-cache, must-revalidate, private",
  "Pragma": "no-cache",
  "Expires": "0",
};

export const onRequest = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith("/keystatic")) {
    return next();
  }

  const user = process.env.KEYSTATIC_USER ?? import.meta.env.KEYSTATIC_USER;
  const pass = process.env.KEYSTATIC_PASSWORD ?? import.meta.env.KEYSTATIC_PASSWORD;

  if (!user || !pass) {
    if (import.meta.env.DEV) {
      const res = notConfigured();
      Object.entries(NO_STORE).forEach(([k, v]) => res.headers.set(k, v));
      return res;
    }
    const res = new Response("Not Found", { status: 404 });
    Object.entries(NO_STORE).forEach(([k, v]) => res.headers.set(k, v));
    return res;
  }

  const header = context.request.headers.get("authorization");
  if (!header || !header.toLowerCase().startsWith("basic ")) {
    const res = unauthorized();
    Object.entries(NO_STORE).forEach(([k, v]) => res.headers.set(k, v));
    return res;
  }

  let decoded: string;
  try {
    decoded = atob(header.slice(6).trim());
  } catch {
    const res = unauthorized();
    Object.entries(NO_STORE).forEach(([k, v]) => res.headers.set(k, v));
    return res;
  }

  const sep = decoded.indexOf(":");
  const providedUser = sep === -1 ? decoded : decoded.slice(0, sep);
  const providedPass = sep === -1 ? "" : decoded.slice(sep + 1);

  if (providedUser !== user || providedPass !== pass) {
    const res = unauthorized();
    Object.entries(NO_STORE).forEach(([k, v]) => res.headers.set(k, v));
    return res;
  }

  const response = await next();
  Object.entries(NO_STORE).forEach(([k, v]) => response.headers.set(k, v));
  return response;
});
