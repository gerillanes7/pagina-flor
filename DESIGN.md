---
name: Florencia — Galería Horizontal
description: Portfolio bilingüe ES/EN para una pintora, con la dirección visual Galería Horizontal (traducción del patrón Ximena Agra). Site Astro estático.
colors:
  bone:        "#FFFFFF"
  bone-2:      "#F0E6E4"
  putty:       "#E0D2D0"
  putty-deep:  "#B5A29F"
  umber:       "#5A4545"
  ink:         "#1F1414"
  ink-soft:    "#6E5A5A"
  canvas:      "#FAF5F4"
  pink:        "#D3B9B9"
  pink-deep:   "#8B6E6E"
  pink-darker: "#6E5454"
  pink-hover:  "#C0A0A0"
  pink-soft:   "#EAD9D9"
typography:
  script-display:
    fontFamily: "Petit Formal Script, Allura, Pinyon Script, Apple Chancery, cursive"
    fontWeight: 400
    fontSize: "clamp(4rem, 9vw, 6rem)"
    lineHeight: 1
    letterSpacing: "-0.005em"
  script-page:
    fontFamily: "Petit Formal Script, Allura, Pinyon Script, Apple Chancery, cursive"
    fontWeight: 400
    fontSize: "clamp(2.8rem, 7vw, 4.6rem)"
    lineHeight: 1
    letterSpacing: "-0.005em"
  script-mark:
    fontFamily: "Petit Formal Script, Allura, Pinyon Script, Apple Chancery, cursive"
    fontWeight: 400
    fontSize: "clamp(2rem, 3vw, 2.6rem)"
    lineHeight: 1
  script-card:
    fontFamily: "Petit Formal Script, Allura, Pinyon Script, Apple Chancery, cursive"
    fontWeight: 400
    fontSize: "clamp(1.4rem, 2vw, 1.8rem)"
    lineHeight: 1.1
  script-detail:
    fontFamily: "Petit Formal Script, Allura, Pinyon Script, Apple Chancery, cursive"
    fontWeight: 400
    fontSize: "clamp(2.4rem, 5.5vw, 3.6rem)"
    lineHeight: 1
    letterSpacing: "-0.005em"
  script-selection:
    fontFamily: "Petit Formal Script, Allura, Pinyon Script, Apple Chancery, cursive"
    fontWeight: 400
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    lineHeight: 1
  script-micro:
    fontFamily: "Petit Formal Script, Allura, Pinyon Script, Apple Chancery, cursive"
    fontWeight: 400
    fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)"
    lineHeight: 1.1
  body:
    fontFamily: "Karla, Söhne, Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 400
    fontSize: "1rem"
    lineHeight: 1.55
  letter:
    fontFamily: "Source Serif 4, Source Serif Pro, Iowan Old Style, Georgia, serif"
    fontWeight: 400
    fontStyle: "italic"
    fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)"
    lineHeight: 1.55
  navLink:
    fontFamily: "Karla, Söhne, Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 500
    fontSize: "0.78rem"
    textTransform: "uppercase"
    letterSpacing: "0.4em"
  label:
    fontFamily: "Karla, Söhne, Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 500
    fontSize: "0.72rem"
    textTransform: "uppercase"
    letterSpacing: "0.32em"
  labelTight:
    fontFamily: "Karla, Söhne, Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 500
    fontSize: "0.7rem"
    textTransform: "uppercase"
    letterSpacing: "0.22em"
  labelMeta:
    fontFamily: "Karla, Söhne, Inter, system-ui, -apple-system, Segoe UI, sans-serif"
    fontWeight: 400
    fontSize: "0.66rem"
    textTransform: "uppercase"
    letterSpacing: "0.32em"
rounded:
  none: "0px"
spacing:
  s0: "0"
  s1: "0.25rem"
  s2: "0.5rem"
  s3: "0.75rem"
  s4: "1rem"
  s5: "1.5rem"
  s6: "2rem"
  s7: "3rem"
  s8: "4.5rem"
  s9: "7rem"
  s10: "10rem"
components:
  panel:
    aspectRatio: "16 / 9"
    mobileAspectRatio: "4 / 5"
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.pink-hover}"
---

# Design System: Florencia — Galería Horizontal

## Overview

**Creative North Star: "A painter's walk through the studio, told in painted bands."**

The home is a white wall with the painter's name in handwritten script centered at the top, the horizontal nav in ink below (turning to a dusty pink underline at the active page), the language switch top-left, and the city/studio top-right. Below the chrome: three full-bleed horizontal painted panels — Obra, Carta, Contacto — each a horizontal slice of a different piece of work, each labeled in handwritten script dead center on the painted surface. Clicking a panel opens the corresponding room. The work leads; the chrome is small and signature-only.

The painter's medium (oil, acrylic, watercolor, mixed) and stylistic register are **undecided product facts** and are not committed in the visual system; the painted panels read across the realistic range of contemporary painting without committing to one.

This is not a marketplace and not a stock-art gallery. The interface recedes. There are no stock decorations, no hero metric, no kicker above a heading, no glass, no gradient text, no mono. The page is white with one accent — a dusty rose powder (`#D3B9B9`) — that earns its place by being rare. Three voices in type: handwritten cursive (the painter's mark), tracked uppercase grotesk (the centered nav and labels), humanist sans (the body and form), italic serif (the studio letter and the empty placeholders).

**Key Characteristics:**
- The signature leads, the panels follow. Type at the top, painted bands below.
- One voice, one room, one accent.
- The home is a stack of painted doors; the dedicated pages are two-column letters.
- Bilingual ES/EN by per-route URLs, with equal first-class surfaces; language switch lives top-left as a quiet utility.
- Honest placeholders for biography, CV, and press — never invented text.

## Colors

The palette is the real colors of a working painter's studio on a clean white wall: bone and putty have lifted to white and warm off-whites so the studio feels washed in daylight; the single accent is a dusty rose powder (`#D3B9B9`) that lives in one tonal family (`--pink`, `--pink-deep`, `--pink-darker`, `--pink-hover`, `--pink-soft`). Pink appears only on the things that need the accent: the light button background, the active nav underline, the section rules, the link color (in a darker shade that reads on white), the "current work" status, the focus halo. The default for chrome is ink on white; the link hovers through a darker pink, never away from the family.

### Accent (the only accent)
- **Pink** (`#D3B9B9`): The single accent of the page. Decorative fills: button backgrounds, panel underlines, hairline rules, ::selection, subtle tints behind the studio letter. Where it must read as text on white, it deepens to the sibling shades below; the family itself never changes.
- **Pink-Deep** (`#8B6E6E`): Sibling shade used where the accent must read as text on white — link color at rest, hover state for chrome text, the eyebrow label above the contact title, the "trabajo en curso" tag on a work card, focus outline, caret, input focus border.
- **Pink-Darker** (`#6E5454`): Pressed/hover state for the accent used as text.
- **Pink-Hover** (`#C0A0A0`): Sibling shade for the primary button's hover background — a slightly darker pink on the same hue.
- **Pink-Soft** (`#EAD9D9`): A very pale sibling used only for the radial wash behind the about-home heading.

### Neutral
- **Bone** (`#FFFFFF`): Pure white. Body background, the dominant field on every page. No tint, no warmth — daylight on a wall.
- **Bone-2** (`#F0E6E4`): A barely-warm off-white. The only recess on the page — used for the contact-home section background, painting surfaces in cells/cards, and the scrollbar track. The page reads as flat white with one soft tonal band.
- **Canvas** (`#FAF5F4`): A fraction-of-a-step warmer than bone-2. Used as the input background and as light text on dark painted panel banners.
- **Putty** (`#E0D2D0`): Mid-warm neutral. Reserved for painted compositions; not part of the chrome.
- **Putty-Deep** (`#B5A29F`): Mid-warm border. Hairlines under nav, dividers, input borders, scrollbar thumb, and the rule under each spec pair on the work-detail page.
- **Umber** (`#5A4545`): Deep warm. Reserved for the painted banner compositions; appears as the scrollbar thumb on hover.
- **Ink** (`#1F1414`): Primary text. Body and headings. A warm near-black, never a true black.
- **Ink-Soft** (`#6E5A5A`): Secondary text. Captions, "muted" content, labels at lower contrast. A warm gray-brown, never a cool gray.

### Named Rules
**The One-Accent Rule.** The system carries one accent — the pink family. The decorative shade (`#D3B9B9`) appears on ≤10% of any viewport. The sibling shades (`#8B6E6E`, `#6E5454`, `#C0A0A0`, `#EAD9D9`) are all the same hue at different lightness, never a different color.

**The White-Background Rule.** The page is white. The only recess is `--bone-2` for the contact-home section, painting surfaces, and scrollbar. Recess is tonal layering, never a saturated surface.

**The No-Default-Gray Rule.** Secondary text is not gray; it is `ink-soft`, a warm-brown desaturated from ink. Cool grays are wrong against white.

**The Pink-Accent Stays In The Family.** Hover and pressed states move within the pink family. They never introduce a new hue — no terracotta, no secondary brand color, no saturation jump.

## Typography

Three voices only. **Script** carries the painter's mark, the page titles, the panel labels, the work-card titles, and the empty placeholders for biography, CV, and press. **Sans** carries the body, the nav, the labels, and the form. **Italic serif** carries the studio letter and the empty placeholders. The cursive is humanist, flowing; the sans is calm and humanist; the italic serif has weight and presence.

**Script Font:** Petit Formal Script (self-hosted via @fontsource), with `Allura`, `Pinyon Script`, `Apple Chancery`, and cursive fallbacks.
**Body Font:** Karla (self-hosted via @fontsource), with `Söhne`, `Inter`, system-ui, `-apple-system`, `Segoe UI`, and sans-serif fallbacks.
**Letter Font:** Source Serif 4 (self-hosted via @fontsource), with `Source Serif Pro`, `Iowan Old Style`, Georgia, and serif fallbacks — used only for the studio letter and the empty placeholders.

**Character:** The cursive is humanist, flowing, with subtle loops at the terminals — it reads as a painter's signature, not as a wedding invitation. The grotesk is calm, wide, and humanist. The italic serif has weight and a slight italic terminal that feels like a hand-written letterhead.

### Hierarchy
- **Script — display** (Petit Formal Script, 400, `clamp(4rem, 9vw, 6rem)`, line-height 1, letter-spacing -0.005em): The script label centered on each painted panel (Obra, Carta, Contacto). The largest piece of script on the home.
- **Script — page** (Petit Formal Script, 400, `clamp(2.8rem, 7vw, 4.6rem)`, line-height 1, letter-spacing -0.005em): Centered page titles on Carta, Obra, Contacto.
- **Script — mark** (Petit Formal Script, 400, `clamp(2rem, 3vw, 2.6rem)`, line-height 1): The painter's signature in the nav (`Florencia`).
- **Script — card** (Petit Formal Script, 400, `clamp(1.4rem, 2vw, 1.8rem)`, line-height 1.1): Work-card titles in the grid and the next/prev navigation on the work detail page.
- **Script — detail** (Petit Formal Script, 400, `clamp(2.4rem, 5.5vw, 3.6rem)`, line-height 1, letter-spacing -0.005em): The work-detail title (the painting's own name, on its detail page).
- **Script — selection** (Petit Formal Script, 400, `clamp(1.6rem, 3vw, 2.2rem)`, line-height 1): The "Selección" label on the home.
- **Script — micro** (Petit Formal Script, 400, `clamp(1.2rem, 1.8vw, 1.6rem)`, line-height 1.1): The selection-cell titles in the home strip.
- **Body** (Karla, 400, 1rem, line-height 1.55): Paragraphs, lead text, captions, form labels, form fields.
- **Letter** (Source Serif 4 Italic, 400, `clamp(1.375rem, 2.2vw, 1.75rem)`, line-height 1.55): The studio letter on the Carta page; the empty placeholders for biography, CV, and press.
- **Nav Link** (Karla, 500, 0.78rem, uppercase, letter-spacing 0.4em): The horizontal nav and the small mono taglines on each panel.
- **Label** (Karla, 500, 0.72rem, uppercase, letter-spacing 0.32em): Section labels (`SOBRE LA PINTORA`, `EXPOSICIONES, PUBLICACIONES Y PREMIOS`, `PRENSA`), the language switch, the city utility.
- **Label — tight** (Karla, 500, 0.7rem, uppercase, letter-spacing 0.22em): The work-card sub-label (year · technique · dimensions).
- **Label — meta** (Karla, 400, 0.66rem, uppercase, letter-spacing 0.32em): The work-detail spec keys (AÑO, TÉCNICA, DIMENSIONES, DISPONIBILIDAD).

### Named Rules
**The Three Voices Rule.** Only script, sans, and italic serif carry meaning. The italic serif is reserved for the studio letter and the empty placeholders. It never carries chrome, navigation, or body copy.

**The Script-Mark Rule.** The cursive script is the painter's voice. It appears as the brand mark, the page titles, the panel labels, the work-card titles, and the empty placeholders. It is never used for body copy, navigation, or form labels.

**The Self-Hosted-Face Rule.** Every face is self-hosted via `@fontsource`. No Google Fonts CDN. No system-display-face-as-display-voice.

**The Single-Tracking Rule.** The page navigation uses one tracking register (0.4em) and one size (0.78rem) across the horizontal nav, with section labels and the language switch using a parallel 0.32em register at 0.72rem. Both registers are the page's wayfinding voice.

**The No-Kicker Rule.** No eyebrow or kicker sits above a heading. The heading carries its own weight. Section labels live above a thin pink rule and a paragraph, never as a heading kicker.

## Layout

A single horizontal rhythm and a fixed vertical spacing scale (`--space-0` through `--space-10`, 11 steps). Container widths: `--container` at `min(100% - 2.5rem, 1240px)` for prose pages, `min(100% - 1.25rem, 1480px)` for the work grid. The work grid is `repeat(auto-fill, minmax(min(320px, 100%), 1fr))` so it is four-up at 1440, two-up at ~960, one-up at mobile. There is no fixed-pixel grid that wraps a hundred pixels narrower; columns are fluid.

**The Home Chrome** owns the first viewport of the home. A three-column grid at desktop: language switch (`ES / EN`) top-left, painter's signature (`Florencia`) centered, city/studio utility (`Madrid · Estudio`) top-right. Below: the horizontal nav (`ESTUDIO · OBRA · CARTA · CONTACTO`) centered, in ink, with an active-link underline that animates in from the left in pink.

**The Three Painted Panels** sit immediately below the chrome. Three full-bleed horizontal bands, each at 16:9 aspect, each a hand-authored SVG banner composition. Each panel carries its own painted surface and its own script label dead center. The Obra panel shows a painterly figure-composition in bone and umber. The Carta panel shows a sketchy figure study on warm paper, with annotations in the same hand-written script. The Contacto panel shows a moody figure emerging from a dark atmosphere. At ≤720px the panels collapse to 4:5 portrait.

**The Selection Strip** sits below the panels: a small "Selección" script label on the left, a "Ver toda la obra →" tracked link on the right, then four painting thumbnails at `4:5` portrait with the work titles in script below.

**The Detail Page Layout** is a two-column composition (text left ~42%, image right ~58%) on every dedicated page:
- **Carta**: italic-serif letter on the left, painterly portrait on the right; below the letter, the bio, CV, and press sections cascade down the left column with section labels and empty placeholders.
- **Obra**: a 4-column grid of paintings, each with a script title and a tracked sub-label.
- **Work Detail**: painting on the left, plate number + script title + spec list + CTA on the right.
- **Contacto**: channels on the left, mailto form on the right.

**The First Heading Rule.** More space above a heading than below it. Headings breathe at the top of a section, not at the bottom of the previous one.

## Elevation & Depth

The system is flat by default. There is no drop-shadow vocabulary. Depth comes from tonal layering and from the painted panels themselves. The selection cell surface is `bone-2`, framed by a one-pixel putty-deep border — a tonal recession, not a shadow. The only shadow that appears in the system is a soft hover lift on selection cells (`box-shadow: 0 18px 40px -28px color-mix(in srgb, var(--ink) 60%, transparent)`), which is a response to state, not a decoration. The painted panels carry their own depth via atmospheric gradients and brushwork.

### Shadow Vocabulary
- **selection-cell-hover** (`box-shadow: 0 18px 40px -28px rgba(ink, 0.6)`): Soft upward drift on selection-cell hover. The cell lifts by 2px (`translateY(-2px)`) and the shadow extends below it.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The only shadow in the system is the selection-cell hover lift, which is a state response, not a baseline. No `box-shadow` on the nav, the footer, the page heads, or the inputs.

## Shapes

The form language is sharp-cornered. Every corner is 0px — buttons, inputs, cards, the painting frame, the studio scene. The system never introduces a radius. Where a softer edge is needed (selection cell hover), it comes from the shadow lift, not from rounding.

**The One-SVG-Language Rule.** Imagery is hand-authored SVG. Every painting is its own SVG composition. The home panels are three hand-authored SVG banners. There are no clip-path approximations of organic shapes; there are no stock icons standing in for drawn marks. The script mark is a real Petit Formal Script glyph; icons that must exist are drawn.

## Components

Each component leads with a character line, then specifies shape, color assignment, states, and any distinctive behavior.

### Buttons

- **Shape:** Sharp-cornered (0px). Padding `0.75rem 1.5rem`.
- **Primary (`.btn`):** Background `pink`, text `ink`. Border 1px solid `pink`. Letter-spacing 0.02em, weight 500.
- **Primary Hover:** Background swaps to `pink-hover`; the active press translates `translateY(1px)`.
- **Ghost (`.btn--ghost`):** Background transparent, text `ink`, border `putty-deep`. Hover: background `bone-2`.

### Inputs / Fields

- **Style:** Stroke 1px `putty-deep`, background `canvas`, padding `0.75rem 1rem`. Sharp-cornered.
- **Focus:** Border-color shifts to `pink-deep`; a 3px `color-mix(pink 35%, transparent)` halo surrounds the field.
- **Placeholder:** Not used; fields carry a small uppercase label above.

### Navigation

- **Style:** Sticky at the top of the page (not floating). The brand row sits at the top in three columns (lang left, signature center, utility right). Below it, a 1px putty-deep hairline rule, then the horizontal nav centered in the page. Background `bone` (not transparent — the page below scrolls under the chrome).
- **Brand:** "Florencia" centered in Petit Formal Script at `clamp(2rem, 3vw, 2.6rem)` — the painter's signature as the page mark. No logo, no wordmark, no slogan.
- **Language switch:** `ES / EN` top-left in 0.32em-tracked 0.72rem label type. Active language in pink-deep; separator in putty-deep.
- **Utility:** Top-right small label (`Madrid · Estudio` / `Madrid · Studio`) in the same 0.32em register. Hidden on mobile.
- **Nav links:** Centered horizontal, in 0.4em-tracked 0.78rem label type. Default ink color; hover/active pink-deep with a 1px pink underline that animates in from the left at 420ms cubic-bezier(0.22, 1, 0.36, 1).
- **Mobile (≤720px):** The brand row stacks single-column (lang → signature → nav). The utility is hidden. The nav links wrap with reduced tracking (0.28em). Every link keeps its tap target.

### Panels (the home signature)

- **Placement:** Directly under the chrome on the home page. Three full-bleed bands stacked vertically, no gap between them.
- **Aspect:** 16:9 landscape on desktop, 4:5 portrait on mobile.
- **Composition:** Each band carries an `<img>` of a hand-authored SVG banner at the panel's full width and height with `object-fit: cover`. A 1px-to-30% gradient scrim darkens the bottom edge slightly so the script label reads cleanly. The script label sits dead center, in `clamp(4rem, 9vw, 6rem)` Petit Formal Script on a canvas-color value with a soft ink-toned text-shadow.
- **Hover state:** The image scales 1.025× over 760ms; the script mark translates up by 2px. The link is a stretched `<a>` covering the entire panel.
- **Tag:** Below each script mark, a small uppercase tracked tag (`I · OBRA · 8 PIEZAS` / `II · CARTA · CARTA DEL ESTUDIO` / `III · CONTACTO · CORREO · INSTAGRAM · VISITA`) sits at 0.72rem with 0.32em tracking.

### Selection Cell (the home strip below the panels)

- **Corner Style:** 0px.
- **Background:** `bone-2` (slightly darker than the page ground) for the painting medium, framed by a 1px putty-deep border.
- **Aspect:** 4:5 portrait, `object-fit: cover`.
- **Title:** Script below the cell, in `clamp(1.2rem, 1.8vw, 1.6rem)`.
- **Sub:** Year · technique in 0.7rem label-tight type, ink-soft.
- **Hover:** Cell lifts 2px with the soft shadow above.

### Work Card (the /work grid)

- **Corner Style:** 0px.
- **Background:** `bone-2` for the painting medium, framed by a 1px putty-deep border.
- **Aspect:** 4:5 portrait.
- **Title:** Script below the card, `clamp(1.4rem, 2vw, 1.8rem)`.
- **Sub:** Year · medium · dimensions in 0.7rem label-tight type, ink-soft.
- **Current tag:** A second sub-line in pink-deep when the painting is `current` (in progress).

### Work Detail Layout

- **Grid:** Two columns at desktop (1.25fr / 1fr), single column at mobile.
- **Painting:** Left column, 4:5 aspect, `bone-2` background and putty-deep border.
- **Meta Column:** Plate badge as a 0.66rem label-meta, then script title `clamp(2.4rem, 5.5vw, 3.6rem)`, then a definition list (year, medium, dimensions, availability) bordered top and bottom by putty-deep rules. Each spec pair: label-meta key, then value in body sans.

### Empty Placeholder

- **Style:** Italic serif (Source Serif 4 italic), color `ink-soft`, left border 1px `putty-deep`, padding-left `1rem`.
- **Use:** Biography, CV, and press listings on the Carta page until the painter supplies them. Never invented text. The placeholder carries an honest note ("no dates will be invented") rather than lorem ipsum.

## Do's and Don'ts

Concrete guardrails grounded in the shipped implementation and the chosen visual world.

### Do:
- **Do** keep the three painted panels stacked full-bleed on the home — Obra, Carta, Contacto.
- **Do** give every painting a museum-grade caption: title, year, medium, dimensions, availability.
- **Do** treat the language switch as a primary chrome element (top-left), equal in weight to the painter's signature.
- **Do** let placeholder content stay honest. Empty bio, CV, and press are placeholders, not lorem ipsum.
- **Do** keep one motion moment — the painter's signature fades into view on load — and let everything else stay still.
- **Do** source and self-host the faces; no Google Fonts CDN, no system display faces as the page voice.
- **Do** author every painted panel as a hand-authored SVG banner — no raster crops of raster artwork.

### Don't:
- **Don't** place three doors side by side inside a card grid. The painted panels are the doors; they are full-bleed bands, not equal cards.
- **Don't** add a kicker, eyebrow, or category label above a heading. The heading carries its own weight.
- **Don't** introduce a second brand accent. The pink family is the only saturated color on the page; do not introduce any other hue with chroma.
- **Don't** use system fonts as the display voice. Petit Formal Script and Karla (with their fallback chains) only.
- **Don't** introduce a radius. The whole system is sharp-cornered.
- **Don't** introduce JetBrains Mono or any mono as decoration. The catalogue uses label-meta (sans) for plate numbers and spec keys.
- **Don't** introduce gradients, glass, blur-as-decoration, or hero-metric scaffolding.
- **Don't** use the cursive script on body copy, navigation, or form labels — only on the painter's name, page titles, panel labels, work-card titles, and empty placeholders.
- **Don't** use Source Serif 4 outside the studio letter and the empty placeholders.
- **Don't** fabricate biography, CV entries, press quotes, or collector names. Honest placeholders only.
- **Don't** lock the painter's medium or stylistic register into the visual system. The room is medium-neutral by design.