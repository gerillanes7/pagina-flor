import { config, singleton, fields, collection } from '@keystatic/core';

const isGithub = !!(process.env.KEYSTATIC_GITHUB_APP_ID && process.env.KEYSTATIC_GITHUB_APP_PRIVATE_KEY);
const localizedText = (labelEs, labelEn) => fields.object({
  es: fields.text({ label: labelEs, multiline: true }),
  en: fields.text({ label: labelEn, multiline: true })
});
const keystaticConfig = config({
  storage: isGithub ? {
    kind: "github",
    repo: {
      owner: process.env.KEYSTATIC_GITHUB_REPO_OWNER || "",
      name: process.env.KEYSTATIC_GITHUB_REPO_NAME || ""
    }
  } : { kind: "local" },
  collections: {
    works: collection({
      label: "Pinturas",
      slugField: "slug",
      path: "src/content/works/*",
      schema: {
        slug: fields.slug({
          name: { label: "Slug (URL)" },
          slug: {
            description: "Identificador de la URL. Solo minúsculas, números y guiones."
          }
        }),
        plate: fields.text({
          label: "Plancha",
          description: "Número romano de plancha (I, II, III…)."
        }),
        order: fields.integer({
          label: "Orden",
          description: "Posición en el índice. Menor = primero."
        }),
        title: localizedText("Título (ES)", "Title (EN)"),
        year: fields.integer({ label: "Año" }),
        medium: localizedText("Técnica (ES)", "Medium (EN)"),
        dimensions: fields.text({
          label: "Dimensiones",
          description: "Ej.: 120 × 100 cm"
        }),
        availability: fields.select({
          label: "Disponibilidad",
          options: [
            { label: "Disponible", value: "available" },
            { label: "Reservada", value: "reserved" },
            { label: "Vendida", value: "sold" },
            { label: "En taller", value: "current" }
          ],
          defaultValue: "available"
        }),
        image: fields.image({
          label: "Imagen",
          directory: "public/paintings",
          publicPath: "/paintings/"
        }),
        note: fields.object({
          es: fields.text({ label: "Nota (ES)", multiline: true }),
          en: fields.text({ label: "Note (EN)", multiline: true })
        })
      }
    }),
    cv: collection({
      label: "CV",
      slugField: "year",
      path: "src/content/cv/*",
      schema: {
        year: fields.integer({ label: "Año" }),
        kind: fields.select({
          label: "Tipo",
          options: [
            { label: "Exposición individual", value: "solo" },
            { label: "Exposición colectiva", value: "group" },
            { label: "Feria", value: "fair" },
            { label: "Premio / Beca", value: "award" },
            { label: "Residencia", value: "residency" },
            { label: "Charla / Mesa", value: "talk" },
            { label: "Publicación", value: "publication" }
          ],
          defaultValue: "group"
        }),
        title: fields.text({ label: "Título" }),
        venue: fields.text({ label: "Sala / Publicación", multiline: true }),
        city: fields.text({ label: "Ciudad" }),
        url: fields.url({ label: "Enlace (opcional)" }),
        order: fields.integer({
          label: "Orden",
          description: "Para reordenar manualmente dentro del mismo año.",
          defaultValue: 0
        })
      }
    }),
    press: collection({
      label: "Prensa",
      slugField: "year",
      path: "src/content/press/*",
      schema: {
        year: fields.integer({ label: "Año" }),
        publication: fields.text({ label: "Publicación" }),
        title: fields.text({ label: "Título de la nota", multiline: true }),
        author: fields.text({ label: "Autoría (opcional)" }),
        url: fields.url({ label: "Enlace (opcional)" }),
        excerpt: fields.object({
          es: fields.text({ label: "Cita (ES)", multiline: true }),
          en: fields.text({ label: "Excerpt (EN)", multiline: true })
        }),
        order: fields.integer({
          label: "Orden",
          defaultValue: 0
        })
      }
    })
  },
  singletons: {
    bio: singleton({
      label: "Bio",
      path: "src/content/singletons/bio",
      schema: {
        title: localizedText("Encabezado (ES)", "Heading (EN)"),
        body: localizedText("Cuerpo (ES)", "Body (EN)"),
        portrait: fields.image({
          label: "Retrato (opcional)",
          directory: "public/portraits",
          publicPath: "/portraits/"
        })
      }
    }),
    studio: singleton({
      label: "Carta del estudio",
      path: "src/content/singletons/studio",
      schema: {
        intro: localizedText("Párrafo 1 — apertura (ES)", "Paragraph 1 — opening (EN)"),
        method: localizedText("Párrafo 2 — método (ES)", "Paragraph 2 — method (EN)"),
        commissions: localizedText("Párrafo 3 — encargos (ES)", "Paragraph 3 — commissions (EN)"),
        signature: fields.text({
          label: "Firma (opcional)",
          description: "Por defecto 'Florencia'. Dejar vacío para usar el valor por defecto."
        })
      }
    }),
    homePanels: singleton({
      label: "Paneles del home",
      path: "src/content/singletons/home-panels",
      schema: {
        obraPanel: fields.image({
          label: "Panel · Obra",
          directory: "public/panels",
          publicPath: "/panels/"
        }),
        cartaPanel: fields.image({
          label: "Panel · Carta",
          directory: "public/panels",
          publicPath: "/panels/"
        }),
        contactoPanel: fields.image({
          label: "Panel · Contacto",
          directory: "public/panels",
          publicPath: "/panels/"
        })
      }
    })
  }
});

export { keystaticConfig as k };
