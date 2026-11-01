# DESIGN SYSTEM: "DROP 001"
**Naara Gentha Shypra Wardana — Personal Lookbook / Merch Portfolio**

---

## 1. Concept & Narrative
The portfolio is conceived as an exclusive streetwear merch drop. Naara is the brand, every project is a released product tagged with an SKU and a garment hang tag, the page is an editorial lookbook/catalogue, and skills/about are garment wash-care specification labels.

The personal bio, *"make your presence a gift that give through memories you leave behind"*, drives the hang tag motif, doubling each project card as an archival gift tag.

---

## 2. Color Palette & Rules
Flat, high-contrast streetwear screenprint colors only.

| Token | Hex | Role | Contrast Notes |
|---|---|---|---|
| `--paper` | `#F1E9D8` | Base background (unbleached garment paper) | Light neutral |
| `--ink` | `#121212` | Dense screenprint black (borders, text, hard shadows) | Contrast ratio ~15.2:1 against `--paper` |
| `--signal` | `#FF3B1D` | Industrial safety red (accents, buttons, badges) | Used for primary alerts and active tags |
| `--acid` | `#D7FF2E` | Electric cyber yellow-green | Used ONLY as a highlight behind `--ink` text or on `--ink`/`--signal` surfaces |
| `--white` | `#FFFFFF` | Polaroids, sticker cut lines | Crisp die-cut contrast |

### Strict Bans
- **BANNED Colors:** Purple, violet, indigo, lavender in any tint or tone.
- **BANNED Effects:** Linear/radial gradients, glassmorphism, blur shadows, inner glows, 3D skeuomorphic button swells.
- **Acid Green Contrast Rule:** Never use `--acid` as body text on `--paper` (insufficient contrast). Always render `--ink` text on an `--acid` background.

---

## 3. Typography
Modern, high-personality Google Fonts (no system fallbacks or generic corporate fonts):

1. **Display / Wordmark / SKU:**  
   `font-family: 'Dela Gothic One', sans-serif;`  
   - Heavy industrial brutalist display face. Used for the main header name, section titles, SKU tags, and stickers.
2. **Body Text:**  
   `font-family: 'Familjen Grotesk', sans-serif;`  
   - Expressive, readable grotesque font for paragraphs, project descriptions, and subtitles.
3. **Labels / Tags / Care Specs:**  
   `font-family: 'Courier Prime', monospace;`  
   - Monospaced typewriter font evoking thermal garment tags, barcode numbers, and care labels.

### Strict Font Bans
- Inter, Roboto, Poppins, Space Grotesk, Arial, and OS system default typefaces are prohibited.

---

## 4. Textures & Physical Merch Styling
- **Subtle Grain:** SVG `feTurbulence` overlay (~6% opacity, fixed, pointer-events: none).
- **Hard Offset Shadows:** Flat solid offset shadows `6px 6px 0 var(--ink)` (zero blur radius).
- **Borders:** Thick 3px solid ink borders (`border: 3px solid var(--ink)`).
- **Sewn Stitches:** 2px dashed borders for fabric care labels.
- **Die-cut Stickers:** White border outline (`0 0 0 3px #FFFFFF`) with hard black shadow.
- **Asymmetry & Rotations:** Deliberate slight rotations (-3° to +3°) on badges, polaroids, and stickers to recreate raw printed apparel lookbooks.
- **No Emojis as Decoration:** All visual cues rely on physical tags, stamped badges, or semantic SVG icons.

---

## 5. Interaction & Motion System
Strictly three functional micro-interactions, all fully disabled under `@media (prefers-reduced-motion: reduce)`:

1. **Hero Draggable Stickers:** Mouse & touch pointer-events dragging (`pointerdown`, `pointermove`, `pointerup`) with viewport boundary clamping.
2. **Project Hang Tags:** Natural swing animation on hover and 3D card flip (`rotateY(180deg)`) on tap/click to view technical specifications.
3. **Language Toggle:** Instant dictionary swap between Indonesian (`id`) and simple B1 English (`en`), with `localStorage` persistence.

---

## 6. Accessibility & Responsiveness
- **Mobile-first:** Optimized for touch devices (Instagram link in bio).
- **Tap Targets:** All buttons, links, and sticker triggers are $\ge 44\text{px}$.
- **Zero Horizontal Scroll:** Bounded widths, overflow controls, and fluid typography.
- **Keyboard Navigation:** High-contrast focus outline (`outline: 3px solid var(--signal); outline-offset: 3px`).
- **WCAG AA Compliance:** Text-to-background contrast ratios strictly validated.
