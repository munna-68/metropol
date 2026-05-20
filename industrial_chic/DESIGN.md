---
name: Industrial Chic
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#181919'
  on-primary: '#ffffff'
  primary-container: '#2d2d2d'
  on-primary-container: '#959494'
  inverse-primary: '#c8c6c6'
  secondary: '#45655b'
  on-secondary: '#ffffff'
  secondary-container: '#c7eade'
  on-secondary-container: '#4b6b61'
  tertiary: '#281400'
  on-tertiary: '#ffffff'
  tertiary-container: '#422709'
  on-tertiary-container: '#b58d67'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e2e1'
  primary-fixed-dim: '#c8c6c6'
  on-primary-fixed: '#1b1c1c'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#c7eade'
  secondary-fixed-dim: '#accec2'
  on-secondary-fixed: '#002019'
  on-secondary-fixed-variant: '#2e4d44'
  tertiary-fixed: '#ffdcbe'
  tertiary-fixed-dim: '#ebbe95'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#5f4021'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style
The design system embodies the atmosphere of a high-end Manhattan loft conversion—balancing the raw, unyielding nature of industrial materials with the warmth of bespoke hospitality. The aesthetic is "Industrial-chic," characterized by structural integrity, sleek minimalism, and a sophisticated urban edge. It targets a discerning clientele that values both the history of the city and the precision of modern culinary arts.

The UI should feel architectural and intentional. We utilize heavy whitespace to frame content like art in a gallery, while subtle textures—mimicking cold-rolled steel and honed concrete—provide depth without clutter. The emotional response is one of calm authority, exclusivity, and timelessness.

## Colors
The palette is grounded in the materiality of the city. 

- **Deep Charcoal (#2D2D2D):** Representing forged iron and night-time architecture, this is the primary driver for text and structural elements.
- **Forest Green (#2E4D44):** A sophisticated accent used sparingly to denote organic quality and luxury.
- **Warm Oak (#B58D67):** Used for tactile moments, interactive highlights, and to soften the industrial coldness.
- **High-Contrast Neutrals:** Off-whites and light grays ensure the layout feels airy and readable, preventing the "heavy" feel often associated with industrial styles.

Color application should follow a 60-30-10 rule, where Charcoal and White dominate, with Green and Oak providing the refined finish.

## Typography
Typography is the primary vehicle for the brand’s sophistication. 

- **Headlines:** Playfair Display provides a classic, editorial feel that contrasts against the rigid layout. Use it for menu categories, section headings, and hero statements.
- **Body:** Montserrat offers a clean, geometric counterpoint. Its high legibility is essential for menu descriptions and wine lists.
- **Navigation & Labels:** Utilize the `label-caps` style for all navigational items and small metadata. The increased letter spacing evokes an architectural blueprint aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** system on desktop to maintain a sense of structured elegance, transitioning to a fluid model on mobile. 

- **Grid:** A 12-column grid with generous 24px gutters.
- **Rhythm:** Spacing follows an 8px base unit. Section vertical spacing is intentionally large (`section-gap`) to allow the photography and typography to "breathe," mirroring the feeling of a spacious gallery or high-ceilinged dining room.
- **Alignment:** Use asymmetrical layouts occasionally to create visual interest, but always snap elements to the grid lines to maintain the "industrial" precision.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and **Subtle Textures** rather than traditional shadows.

- **Surfaces:** Use flat, solid fills for most surfaces. When depth is required, use a 1px solid border in a slightly lighter or darker charcoal rather than a drop shadow.
- **Textures:** Apply a very low-opacity grain or noise overlay to Charcoal containers to simulate the feel of matte metal or concrete.
- **Overlays:** For modals or mobile menus, use a high-blur backdrop filter (Glassmorphism) with a dark tint (#2D2D2D at 80% opacity) to maintain the urban, moody atmosphere.

## Shapes
The shape language is predominantly **Sharp** and linear. 

- **Primary Corners:** Use a 4px (Soft) radius for buttons and input fields to prevent the UI from feeling overly aggressive, while maintaining a crisp, professional look.
- **Imagery:** Photography should always have sharp 0px corners, reinforcing the architectural "frame" concept.
- **Dividers:** Use thin, 1px horizontal and vertical rules in light gray or oak to separate content, echoing the lines of metal shelving or industrial windows.

## Components

### Navigation
- **Top Bar:** A minimalist, fixed height bar with a centered logo. Navigation links use `label-caps`. Use a 1px bottom border in Charcoal (#2D2D2D) instead of a shadow.

### Buttons
- **Primary:** Solid Charcoal (#2D2D2D) with White text. Sharp or 4px corners. 
- **Secondary:** Solid Forest Green (#2E4D44) for primary calls to action like "Reserve a Table."
- **Ghost:** Transparent background with a 1px Oak (#B58D67) border and Oak text.

### Cards (Menu & Gallery)
- **Menu Items:** A simple vertical layout. The price should be set in Montserrat Bold, aligned to the right or immediately following the title.
- **Gallery Cards:** Full-bleed images with sharp corners. On hover, a subtle Oak (#B58D67) border appears inside the frame.

### Input Fields
- Underlined style or 1px Charcoal border. Use Montserrat for placeholder text. Avoid rounded corners; stick to the 4px soft-sharp aesthetic.

### Chips & Tags
- Used for dietary restrictions or wine regions. Small, rectangular, with a light gray background and Charcoal text in `label-caps`.