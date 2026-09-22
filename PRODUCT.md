# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static-first, islands architecture). i18n via Astro's built-in routing with per-locale URLs (`/es/...`, `/en/...`) and a visible language switch.

## Users

Primary visitors to an artist's online portfolio: collectors browsing for a piece to buy, prospective clients considering a commission, gallery curators and curators' assistants scanning her body of work, art directors and editors looking for collaborations, and casual visitors who arrive via Instagram, search, or personal referral and want to feel the painter's world before they leave.

Secondary: Florencia herself, who uses the page as a quiet sales and contact surface that does not require her to maintain it daily.

## Product Purpose

Give Florencia a single, durable web home where a visitor can feel the painter's body of work, understand her practice and process, and reach her to buy an existing piece or commission a new one. Success looks like a real inquiry (sale or commission) per meaningful traffic window, and zero requests for information that the page already shows.

## Positioning

A working painter's own portfolio, not a marketplace, not a stock-art site, not a generic agency page. The page carries the painter's voice and taste directly. The product truth that must survive every redesign: this is one artist's body of work, presented as her own, and the only way to transact with her is through her.

## Operating Context

- Visitors arrive mostly from Instagram, search, and word of mouth; the page must look complete and trustworthy without context.
- Most visits are on mobile in low light (the audience opens Instagram, taps a link, lands here).
- A small share of visits are from curators on desktop during business hours; the work and contact details must be findable in seconds.
- The page replaces a previously missing or inadequate online presence; it must stand alone and never require a phone call to explain who Florencia is.
- The painter's practice is real and ongoing; new works will be added over time.

## Capabilities and Constraints

- Bilingual ES/EN via per-route URLs (`/es/...`, `/en/...`); language switch is always visible.
- Portfolio grid with individual work pages (image, title, year, medium, dimensions, availability, price on request).
- Contact form or direct contact surface for sales and commissions; no e-commerce checkout (transactions happen offline after a real conversation).
- Static-first delivery (Astro) so the page is fast, cheap to host, and resilient.
- Placeholder imagery is acceptable while real photos are not yet supplied; the page must look finished with placeholders and not visibly broken when real photos land.
- Real bio text, artist statement, CV, and press will be supplied by the painter; until then, the page must not fabricate them. Section placeholders are allowed and must be clearly empty rather than inventing text.
- The painter's medium (oil, acrylic, watercolor, mixed) and stylistic register are **undecided product facts** and will be filled in by the painter; the page must read correctly across the realistic range of contemporary painting practices without committing to one.
- No testimonials, no press quotes, no collector names, no exhibition lists are to be invented.

## Brand Commitments

None. No name, logo, palette, typeface, mascot, slogan, or accreditation has been declared by the painter. The visual world will be created from scratch in new-work. The painter's real name, "Florencia", is the only durable identity fact.

## Evidence on Hand

- Real photographs of the paintings: **absent**. Placeholder imagery is approved for this build; real photos will be supplied later and must slot into the existing layout without redesign.
- Painter's bio, artist statement, CV, press, and exhibition history: **absent**. The page must leave honest, restrained placeholders (no lorem ipsum, no invented names) and not invent text in these slots.
- Social and contact handles (Instagram, email, atelier city): **absent**. A single contact mechanism (form or mailto) is allowed and must be visibly empty until the painter supplies the destination.

## Product Principles

1. The work leads. Every visual decision exists to honor the paintings; the interface recedes.
2. One artist's voice. No marketplace language, no "our artists", no stock gallery cues. The page speaks as Florencia.
3. Trust through restraint. Placeholder content is honest about being placeholder; nothing is fabricated to look finished.
4. Bilingual by default, not as an afterthought. ES and EN are equal first-class surfaces; switching languages does not downgrade the experience.
5. Calm durability. The page is built to outlive trends and to accept new paintings without restructuring.

## Accessibility & Inclusion

- WCAG 2.2 AA is the floor for the page itself (contrast, focus, semantic structure, alt text, language attribute).
- Placeholder images must carry meaningful alt text describing the intended subject ("placeholder for a painting titled X") so the structure is screen-reader correct from day one.
- The language switch must be reachable by keyboard, labeled, and announced.
- No accessibility claims or certifications are made on the painter's behalf.