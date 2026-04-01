# Design System Strategy: The Curated Canvas

## 1. Overview & Creative North Star
This design system is built upon the "Curated Canvas" philosophy. In the world of premium aesthetics, the interface must mirror the experience of the clinic itself: sterile yet warm, minimal yet indulgent, and meticulously precise. 

We move beyond the rigid "dashboard" aesthetic. Instead, we treat the UI as a high-end editorial layout. We break the "template" look through **intentional asymmetry**, where large typographic elements overlap subtle background containers, and **tonal depth**, where hierarchy is defined by light and shadow rather than lines and boxes. This system is designed to breathe, utilizing the expansive `16 (5.5rem)` and `20 (7rem)` spacing tokens to create a sense of exclusivity and calm.

---

## 2. Colors & Surface Architecture
Our palette transitions from the purity of "Diamond White" to the professional weight of "Graphite," punctuated by the human warmth of "Dusty Pink."

*   **Primary Background (`surface` #f9f9f9):** The foundation of the experience. It should feel like an infinite, clean gallery space.
*   **The "No-Line" Rule:** Direct structural lines are prohibited for sectioning. To separate content, designers must use background color shifts. For example, a sidebar in `surface-container-low` should sit against a main content area of `surface`. 
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine paper.
    *   **Level 0 (Base):** `surface`
    *   **Level 1 (Subtle Inset):** `surface-container-low` (used for secondary sidebars or grouped background elements).
    *   **Level 2 (The Hero Card):** `surface-container-lowest` (#ffffff). Use this for main content cards to make them appear to float naturally above the base.
*   **Signature Textures:** The "Burnt Cement" effect is achieved through the `surface-dim` (#dadada) token with a subtle noise overlay. Use this exclusively for high-impact areas like Login or VIP profile backdrops to ground the lightness of the rest of the system.
*   **Rose Gold Accents:** Reserve for VIP services and premium indicators. This is executed using a linear gradient from `primary` (#7a5642) to `primary-container` (#dcae96) at a 45-degree angle.

---

## 3. Typography
The typography is the voice of the brand. We pair the geometric authority of **Epilogue** with the modern, approachable clarity of **Manrope**.

*   **Display & Headlines (Epilogue):** These are our "Editorial" moments. Use `display-lg` for welcome screens and `headline-lg` for section headers. The tight letter-spacing and bold weight convey clinical expertise.
*   **Body & Labels (Manrope):** All functional data and patient information must use Manrope. It provides high legibility at `body-md` (0.875rem).
*   **The Authority Scale:** To create a premium feel, increase the contrast between sizes. A `headline-lg` header should often be paired with a `label-md` uppercase sub-header with expanded letter spacing (0.05rem) to mimic luxury brand styling.

---

## 4. Elevation & Depth
We achieve dimension through **Tonal Layering** rather than traditional structural boundaries.

*   **The Layering Principle:** Depth is created by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` section. The change in hex value provides all the "border" the eye needs.
*   **Ambient Shadows:** When a card needs to "hover" (e.g., a selected appointment), use an extra-diffused shadow.
    *   *Shadow Setting:* `Y: 12px, Blur: 40px, Color: rgba(122, 86, 66, 0.06)`. Note the use of the `primary` color in the shadow to keep it warm and organic.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility in input fields, use the `outline-variant` token at **20% opacity**. Never use 100% opaque borders.
*   **Glassmorphism:** For top navigation bars or floating action menus, use `surface-container-lowest` at 80% opacity with a `20px` backdrop-blur. This keeps the interface feeling "light" and integrated with the content scrolling beneath it.

---

## 5. Components

### Buttons
*   **Primary:** Uses `primary-container` (#dcae96). Shape: `full` (pill). Padding: `2.5` (top/bottom) by `6` (left/right). The text uses `on-primary-container` for a soft, sophisticated contrast.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary/Text:** `on-surface-variant` text. Use for "Cancel" or "Back" actions.

### Input Fields
*   **Style:** Refined and minimal. Use a `surface-container-low` background with a `sm` (0.125rem) corner radius.
*   **Interaction:** On focus, the background transitions to `surface-container-lowest` with a subtle `primary` ghost border (20% opacity).

### Cards & Lists
*   **The Divider Rule:** 1px divider lines are strictly forbidden. Use the `spacing scale 3 (1rem)` to separate list items. 
*   **Appointment Cards:** Use `surface-container-lowest` with a left-accent bar (4px width) using the `primary-container` color to denote the service category.

### Special Clinic Components
*   **Service Chips:** Use `secondary-fixed` for standard treatments and the **Rose Gold Gradient** for premium aesthetic procedures (Botox, Fillers, etc.).
*   **Timeline:** A vertical line using `outline-variant` at 15% opacity, with `primary` dots for scheduled procedures.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace White Space:** If a section feels crowded, increase the spacing to the next token (e.g., from `8` to `10`).
*   **Layer Surfaces:** Use `surface-container` tiers to group related information.
*   **Use Asymmetry:** Place a large `display-md` title off-center to create a modern, editorial feel.

### Don't:
*   **Don't Use Pure Black:** Typography should never be #000000. Always use `on-surface-variant` (#50443e) or Graphite (#4F4F4F).
*   **Don't Use Heavy Shadows:** If the shadow is visible as a "shape," it is too dark. It should be felt, not seen.
*   **Don't Use Default Grids:** Avoid the "three-column box" layout. Vary the widths of containers to guide the eye across the "canvas."