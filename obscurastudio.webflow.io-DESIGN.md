# Design System Inspired by OBSCURA Studio

## 1. Visual Theme & Atmosphere

OBSCURA Studio's design system embodies refined minimalism paired with bold typography—a contemporary approach that celebrates clarity without ornament. The visual language is anchored in a strict monochromatic palette of pure black and white, creating maximum contrast and commanding presence. This approach reflects a design studio ethos: intentional, structural, and deeply rooted in typographic hierarchy. The aesthetic is contemporary and sophisticated, with generous whitespace and deliberate visual breathing room. There is a stark, almost architectural quality—every element serves a purpose, and nothing is decorative. The mood is confident, professional, and intellectually rigorous, speaking to audiences who value substance over style.

**Key Characteristics**

- Monochromatic foundation with pure black (`#000000`) and white (`#FFFFFF`)
- Minimalist, high-contrast approach with maximum legibility
- Reliance on typographic hierarchy and proportional spacing
- Generous whitespace and considered vertical rhythm
- No shadows, gradients, or decorative effects
- Neutral gray mid-tones for secondary hierarchy and disabled states
- Architectural precision in layout and alignment
- Contemporary, stripped-back aesthetic with professional gravitas

## 2. Color Palette & Roles

### Primary

- **Black** (`#000000`): Primary background for dark surfaces, text on light backgrounds, borders, and dominant UI elements. Most frequently used color across the system.
- **White** (`#FFFFFF`): Primary background for light surfaces, text on dark backgrounds, and canvas default. Provides essential contrast.

### Accent Colors

- **Deep Charcoal** (`#171717`): Near-black used for subtle depth differentiation when pure black is primary; reserved for component elevation or nested layers.

### Interactive

- **White on Black** (`#FFFFFF` text on `#000000` background): Primary interactive state for buttons and links, ensuring maximum contrast and legibility.
- **Black on White** (`#000000` text on `#FFFFFF` background): Secondary interactive state for inverted contexts and high-emphasis actions.

### Neutral Scale

- **Light Gray** (`#CACACA`): Light mid-tone used for secondary text, disabled states, and subtle dividers on white backgrounds.
- **Medium Gray** (`#B3B3B3`): Medium-contrast gray for tertiary text and low-emphasis UI elements.
- **Dark Gray** (`#949494`): Prominent secondary text, secondary navigation, and medium-emphasis labels on light backgrounds.
- **Charcoal** (`#434343`): Darkest gray for subtle emphasis or alternative neutral tone when pure black requires relief.

### Surface & Borders

- **White Surface** (`#FFFFFF`): Default container and card backgrounds.
- **Black Surface** (`#000000`): Inverse container backgrounds and dark theme contexts.
- **No Borders**: The system uses background color changes and whitespace rather than explicit border strokes; when borders are necessary, use `1px solid #000000` or `1px solid #FFFFFF` depending on context.

## 3. Typography Rules

### Font Family

**Primary Font:** Neue Montreal (or fallback: `Eurostile, 'Courier New', monospace`)  
**Secondary Font:** Not specified; Neue Montreal serves all typographic roles.  
**Fallback Stack:** `'Neue Montreal', Eurostile, 'Courier New', monospace`

Neue Montreal is a geometric sans-serif with contemporary proportions and excellent screen rendering. Its warmth and precision align with OBSCURA's visual identity.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| **Display / Hero** | Neue Montreal | 69.12px | 500 | 65.664px | 0px | Maximum visual impact for page titles and hero sections; tight line height creates structure. |
| **Heading 1** | Neue Montreal | 34.56px | 500 | 34.56px | 0px | Primary section headings and large content blocks. |
| **Heading 2 / Accent** | Neue Montreal | 23.04px | 500 | 19.584px | 0px | Secondary headings and emphasized body text; tighter line height adds visual compression. |
| **Body Text** | Neue Montreal | 19.2px | 500 | 24.96px | 0px | Primary reading text and main content; 1.3 line height ratio ensures comfortable legibility. |
| **Body Small** | Neue Montreal | 15.36px | 400 | 21.504px | 0px | Secondary content, metadata, and supporting information; reduced weight adds visual hierarchy distinction. |
| **Caption / UI Label** | Neue Montreal | 15.36px | 400 | 21.504px | 0px | Button text, form labels, and interface annotations. |
| **Code / Monospace** | Neue Montreal | 15.36px | 400 | 21.504px | 0px | Inline code and technical references (monospace typeface recommended if code samples present). |

### Principles

- **Proportional Hierarchy:** Each size step maintains a consistent ratio; sizes step by approximately 1.4x (classical typographic scale).
- **Weight as Differentiator:** Weight 500 (medium) is standard; weight 400 (regular) is reserved for secondary and supporting text, creating visual subordination without size reduction.
- **Line Height Relationship:** Display and heading sizes use tighter line heights (0.95–1.0x of font size) to create visual compression and authority. Body text uses 1.3x line height for readability.
- **No Letter Spacing:** The geometric precision of Neue Montreal requires zero letter spacing; the font's inherent proportions are optimized.
- **Vertical Rhythm:** All line heights align to a 4px baseline grid for consistent vertical spacing across components and sections.

## 4. Component Stylings

### Buttons

#### Button – Primary (Text on Black)

- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#FFFFFF`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Line Height:** `21.504px`
- **Padding:** `0px` (text-only, no padding)
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Height:** `22.5px` (text height plus breathing room)
- **Cursor:** `pointer`
- **Hover State:** Text underline or opacity shift to `0.7` (recommend underline via `text-decoration: underline`)
- **Active State:** Opacity `0.5`
- **Disabled State:** Text color `#949494`

#### Button – Primary Large (Text on Black)

- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `#FFFFFF`
- **Font:** Neue Montreal, `19.2px`, weight 500
- **Line Height:** `19.2px`
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Height:** `19.2031px`
- **Cursor:** `pointer`
- **Hover State:** Underline or opacity `0.7`
- **Active State:** Opacity `0.5`

#### Button – Secondary (Solid White on Black Background)

- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Line Height:** `21.504px`
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Height:** `2px` (minimal height, text-driven)
- **Cursor:** `pointer`
- **Hover State:** Background opacity `0.9` or slight scale transform `scale(1.02)`
- **Active State:** Background opacity `0.8`
- **Disabled State:** Background `#CACACA`, text color `#949494`

#### Button – Ghost (Outlined, Text Only)

- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#FFFFFF`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Line Height:** `21.504px`
- **Padding:** `0px`
- **Border:** `1px solid #FFFFFF`
- **Border Radius:** `0px`
- **Box Shadow:** `none`
- **Cursor:** `pointer`
- **Hover State:** Background `#FFFFFF`, text color `#000000`
- **Active State:** Background `#FFFFFF`, opacity `0.8`

### Links

#### Link – Primary (Inline Text)

- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#FFFFFF`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Line Height:** `21.504px`
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Text Decoration:** `underline` on hover, `none` by default
- **Cursor:** `pointer`
- **Hover State:** `text-decoration: underline`
- **Visited State:** `color: #B3B3B3`
- **Focus State:** `outline: 2px solid #FFFFFF; outline-offset: 2px`

#### Link – Secondary (Navigation)

- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#FFFFFF`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Line Height:** `21.504px`
- **Padding:** `0px 15.36px 0px 0px` (right padding for icon or spacing)
- **Border Radius:** `0px`
- **Border:** `0px none`
- **Box Shadow:** `none`
- **Cursor:** `pointer`
- **Hover State:** Color shift to `#949494` or underline
- **Active State:** Color `#CACACA`

### Cards & Containers

#### Card – Default

- **Background:** `#FFFFFF`
- **Border:** `1px solid #000000`
- **Border Radius:** `0px`
- **Padding:** `40px` or `56px` (inset content)
- **Box Shadow:** `none`
- **Gap Between Children:** `48px` or `56px` (vertical rhythm)
- **Hover State:** No elevation change; background remains `#FFFFFF`; consider border or background color shift on interaction

#### Card – Dark (Inverse)

- **Background:** `#000000`
- **Border:** `1px solid #FFFFFF`
- **Border Radius:** `0px`
- **Padding:** `40px` or `56px`
- **Box Shadow:** `none`
- **Gap Between Children:** `48px` or `56px`
- **Text Color:** `#FFFFFF`

#### Container – Section Wrapper

- **Background:** `#FFFFFF` (default) or `#000000` (alternate)
- **Max Width:** `1200px` (recommended, inferred from modern studio design standards)
- **Padding:** `96px` (top/bottom), `40px` (left/right on tablet), `20px` (left/right on mobile)
- **Margin:** `0 auto` (centered)
- **Border:** `none`
- **Border Radius:** `0px`

### Inputs & Forms

#### Input – Text (Default)

- **Background:** `#FFFFFF`
- **Border:** `1px solid #000000`
- **Border Radius:** `0px`
- **Text Color:** `#000000`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Line Height:** `21.504px`
- **Padding:** `12px 20px`
- **Box Shadow:** `none`
- **Focus State:** `border: 1px solid #000000; outline: 2px solid #000000; outline-offset: 2px`
- **Placeholder Color:** `#949494`
- **Disabled State:** Background `#CACACA`, border color `#B3B3B3`, text color `#949494`

#### Input – Text (Dark Background)

- **Background:** `#000000`
- **Border:** `1px solid #FFFFFF`
- **Text Color:** `#FFFFFF`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Padding:** `12px 20px`
- **Placeholder Color:** `#949494`
- **Focus State:** `border: 1px solid #FFFFFF; outline: 2px solid #FFFFFF; outline-offset: 2px`

#### Checkbox / Radio

- **Default:** `background: #FFFFFF; border: 1px solid #000000; width: 20px; height: 20px; border-radius: 0px`
- **Checked:** `background: #000000; border: 1px solid #000000`
- **Checkmark Color:** `#FFFFFF`

#### Label

- **Font:** Neue Montreal, `15.36px`, weight 400
- **Color:** `#000000` (default) or `#FFFFFF` (on dark backgrounds)
- **Line Height:** `21.504px`
- **Margin Bottom:** `8px`

### Navigation

#### Navigation Bar (Header)

- **Background:** `#FFFFFF`
- **Border Bottom:** `1px solid #000000`
- **Padding:** `20px 40px` (responsive: `12px 20px` on mobile)
- **Flex Layout:** Justify-content `space-between`, align-items `center`
- **Height:** Auto (text-driven)
- **Position:** `sticky` or `relative` (implementation-dependent)

#### Navigation Item (Inactive)

- **Color:** `#000000`
- **Font:** Neue Montreal, `15.36px`, weight 400
- **Text Decoration:** `none`
- **Padding:** `0px 20px` (horizontal spacing between items)
- **Cursor:** `pointer`

#### Navigation Item (Active)

- **Color:** `#000000`
- **Text Decoration:** `underline`
- **Border Bottom:** None (underline preferred)

#### Navigation Item (Hover)

- **Color:** `#949494` (optional secondary state) or underline appears
- **Text Decoration:** `underline`

## 5. Layout Principles

### Spacing System

The spacing system uses a **4px base unit** with a modular scale:

- **4px:** Minimal internal padding, tight micro-interactions
- **8px:** Small component padding (e.g., icon spacing)
- **12px:** Small gaps between form elements or tight grouped content
- **20px:** Standard component padding and medium gap
- **40px:** Primary section padding and container inset
- **48px:** Large gap between content blocks
- **56px:** Extra-large gap for major section separation
- **96px:** Vertical section margins and page-level rhythm
- **116px:** Maximum gap for dramatic visual separation

**Usage Context:**
- **4–8px:** Internal component spacing, icon–text alignment
- **12–20px:** Form field spacing, small cards, button groups
- **40–48px:** Section content inset, card padding
- **56–96px:** Between major sections, full-width container vertical margins
- **116px:** Hero to next section, dramatic visual breaks

### Grid & Container

- **Max Width:** `1200px` (primary container max-width for desktop)
- **Column Strategy:** 12-column grid inferred from modern design standards; grid-gap `20px` (desktop), `12px` (tablet), `8px` (mobile)
- **Container Padding:** `40px` left/right (desktop), `20px` (tablet/mobile)
- **Alignment:** Centered via `margin: 0 auto`
- **Section Patterns:** Full-width backgrounds with centered content containers; alternating black/white backgrounds for visual separation

### Whitespace Philosophy

OBSCURA's design employs **assertive whitespace**—negative space is as important as content. Generous margins and padding create visual breathing room, allowing typography and imagery to command attention without competition. The absence of borders, shadows, and decorative elements means whitespace becomes the primary visual organizing principle. Sections are separated by rhythm rather than visual barriers. This approach conveys confidence and sophistication, treating the canvas as part of the design.

### Border Radius Scale

- **0px (sharp corners):** All components and containers; no rounding used in the system. This maintains architectural precision and contemporary minimalism.
- **3.84px (modal corners only):** Slight rounding reserved for modal overlays or dialog boxes if present; otherwise, use `0px` throughout.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| **Base / Level 0** | `box-shadow: none` | All primary surfaces, buttons, cards, and default container backgrounds. |
| **Hover / Level 1** | `box-shadow: none` | No elevation change on hover; use color, border, or opacity changes instead. |
| **Pressed / Active** | `box-shadow: none` | No shadow for active states; rely on background color shift or border changes. |
| **Modal / Overlay** | `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)` | Optional for modal dialogs or elevated overlays (use sparingly). |

**Shadow Philosophy:**

OBSCURA's design system **rejects shadows entirely** for flat, contemporary aesthetic. Depth is achieved through color contrast (black vs. white), borders, and negative space rather than drop shadows. This creates a graphic, almost print-like quality that emphasizes the layering of typography and form. If elevation becomes necessary (e.g., modals, floating actions), a subtle shadow is acceptable: `0 20px 60px rgba(0, 0, 0, 0.3)` at maximum. Default approach: **no shadows**.

## 7. Do's and Don'ts

### Do

- **Use pure black (`#000000`) and white (`#FFFFFF`) as primary colors.** They provide maximum contrast and embody OBSCURA's design philosophy.
- **Build hierarchy through typography size and weight.** Neue Montreal at 500 vs. 400 weight is the primary hierarchy tool.
- **Employ generous whitespace and vertical rhythm.** Give content room to breathe; this reinforces sophistication.
- **Use sharp corners (`0px` border-radius) throughout.** Precision and geometric clarity are core to the aesthetic.
- **Create interactive feedback via underlines, opacity shifts, or color changes.** Avoid shadows; these are visual and immediate.
- **Align all elements to a consistent spacing grid** (multiples of 4px or 8px). This creates structural cohesion.
- **Ensure text contrast meets WCAG AA standards** (7:1 for small text, 4.5:1 for large text). Black on white or white on black satisfies this.
- **Use borders (1px solid) to define sections and containers** rather than shadows or background color changes alone.

### Don't

- **Don't add drop shadows, gradients, or blur effects.** The system is resolutely flat and graphic.
- **Don't introduce colors outside the monochromatic + gray palette.** Stay within black, white, and the neutral scale.
- **Don't use rounded corners on any component except modals.** Sharp, geometric form is essential to OBSCURA's identity.
- **Don't mix typefaces.** Neue Montreal is used exclusively; no secondary fonts.
- **Don't create excessive padding or margins that fragment the design.** Use the spacing scale consistently; avoid random values.
- **Don't underutilize whitespace.** Crowded layouts contradict the minimalist philosophy.
- **Don't override focus states or remove outlines for keyboard navigation.** Accessibility is non-negotiable.
- **Don't use color alone to communicate state.** Combine with text labels, borders, or icons for clarity.
- **Don't animate elements with distracting motion.** If animation is needed, keep it subtle and purposeful (fade, scale, or slide; no bounces or overshoot).

## 8. Responsive Behavior

### Breakpoints

| Breakpoint Name | Width | Key Changes |
|---|---|---|
| **Mobile** | `0–599px` | Single column layout; padding `12px–20px`; font sizes reduce 10–15% (inferred from mobile-first practices); gap `8px–12px`; section margin `48px` vertical. |
| **Tablet** | `600–1023px` | 2-column grid; padding `20px–40px`; font sizes at 90% of desktop; gap `12px–20px`; section margin `56px–96px`. |
| **Desktop** | `1024px+` | 12-column grid or multi-column layouts; padding `40px`; full typography hierarchy; gap `20px–48px`; section margin `96px–116px`. |

### Touch Targets

- **Minimum Touch Target Height:** `48px` (buttons, links, interactive elements)
- **Minimum Touch Target Width:** `48px`
- **Recommended Minimum:** `56px × 56px` for buttons and primary CTAs
- **Spacing Between Targets:** Minimum `8px` to avoid accidental activation
- **Button Padding Adjustment (Mobile):** Increase from `12px` to `16px–20px` vertically and horizontally to meet touch target minimums

### Collapsing Strategy

- **Navigation:** On mobile, switch to hamburger menu (3-line icon) or vertical stack; remove horizontal padding; full-width on trigger.
- **Typography:** Reduce heading sizes by 15–20% on tablet, 25–30% on mobile (maintain proportion using scale, not exact pixel values).
- **Spacing:** Reduce gaps and margins by 25–30% on mobile (e.g., `96px` → `56px`, `56px` → `40px`, `40px` → `20px`).
- **Containers:** Remove max-width constraint on mobile; full bleed with safe padding (`12px–20px`).
- **Grid:** Shift from 12-column to 4-column (tablet) or 2-column / single column (mobile).
- **Forms:** Stack inputs vertically; full-width on mobile.
- **Cards:** Reduce padding from `40px` to `20px` on mobile; single column layouts.

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA Text:** White (`#FFFFFF`) on black background
- **Secondary CTA:** White background (`#FFFFFF`) on black, or black text (`#000000`) on white background
- **Background (Light):** White (`#FFFFFF`)
- **Background (Dark):** Black (`#000000`)
- **Heading Text:** Black (`#000000`) on white or white (`#FFFFFF`) on black
- **Body Text:** Black (`#000000`) on white, weight 500, size `19.2px`
- **Secondary Text:** Dark Gray (`#949494`)
- **Disabled Text:** Light Gray (`#CACACA`)
- **Borders:** Black (`#000000`) on white or white (`#FFFFFF`) on black; `1px solid`
- **No Shadows:** Use `box-shadow: none` universally

### Iteration Guide

1. **Monochromatic Foundation First:** All UI begins with pure black and white. Gray shades are strictly secondary; introduce them only for disabled, hint, or tertiary states.

2. **Typography is Primary:** Hierarchy is built entirely through Neue Montreal size and weight (500 vs. 400). Exact pixel values are non-negotiable: h1 `34.56px`, body `19.2px`, secondary `15.36px`. Lock line heights to 1.1–1.3× of font size.

3. **Spacing Adheres to 4px Base Unit:** All padding, margin, gap values are multiples of 4px (e.g., 8, 12, 20, 40, 48, 56, 96). Never use arbitrary values; this breaks vertical rhythm.

4. **Corners Are Always Sharp (0px):** No border-radius except for modals (3.84px max). This is non-negotiable for OBSCURA's geometric aesthetic.

5. **Interaction Feedback via Text or Opacity, Never Shadows:** Hover states use underline, opacity reduction (0.7–0.8), or color shift to grays. Active states reduce opacity to 0.5 or shift color. Never add `box-shadow` for depth.

6. **Borders Define Structure:** Use `1px solid #000000` (light background) or `1px solid #FFFFFF` (dark background) to separate sections and containers. Avoid background color alone for visual separation.

7. **Whitespace is Generous:** Minimum gap between major sections is `56px` vertically. Container padding is `40px` minimum (desktop). Mobile reduces to `20px`. Never crowd components; negative space conveys confidence.

8. **Accessibility Non-Negotiable:** All text meets 7:1 contrast (black on white, white on black). Focus states have visible outlines (`2px solid` in foreground color, `2px` offset). No color-only indicators of state.

9. **Responsive Strategy:** Mobile (`<600px`) uses single-column, reduced padding (`20px`), smaller gaps (`8px–12px`). Tablet (`600–1023px`) introduces two-column and moderate spacing. Desktop (`1024px+`) scales to 12-column with full spacing and typography scale. All type reduces proportionally, not arbitrarily.

10. **Component Defaults Are Text-Only:** Buttons have `0px` padding and transparent backgrounds by default, with white text. Secondary buttons are white fill on black. All interactive elements are borderless unless explicitly marked as "outlined" variant.