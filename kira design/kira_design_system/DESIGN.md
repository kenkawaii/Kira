---
name: Kira Design System
colors:
  surface: '#FFFFFF'
  surface-dim: '#ead6cd'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1eb'
  surface-container: '#feeae1'
  surface-container-high: '#f8e4db'
  surface-container-highest: '#f2dfd6'
  on-surface: '#231914'
  on-surface-variant: '#564338'
  inverse-surface: '#3a2e28'
  inverse-on-surface: '#ffede5'
  outline: '#897267'
  outline-variant: '#ddc1b3'
  surface-tint: '#9b4500'
  primary: '#903f00'
  on-primary: '#ffffff'
  primary-container: '#b45309'
  on-primary-container: '#fff1eb'
  inverse-primary: '#ffb68e'
  secondary: '#645d58'
  on-secondary: '#ffffff'
  secondary-container: '#eae1da'
  on-secondary-container: '#6a635e'
  tertiary: '#005998'
  on-tertiary: '#ffffff'
  tertiary-container: '#0072c0'
  on-tertiary-container: '#eef3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb68e'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#763300'
  secondary-fixed: '#eae1da'
  secondary-fixed-dim: '#cec5bf'
  on-secondary-fixed: '#1f1b17'
  on-secondary-fixed-variant: '#4b4641'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#9fcaff'
  on-tertiary-fixed: '#001d36'
  on-tertiary-fixed-variant: '#00497e'
  background: '#fff8f6'
  on-background: '#231914'
  surface-variant: '#f2dfd6'
  amber-700: '#B45309'
  amber-600: '#D97706'
  amber-50: '#FFFBEB'
  bg-stone: '#FAFAF9'
  border: '#E7E5E4'
  text-muted: '#78716C'
  text-body: '#44403C'
  text-strong: '#1C1917'
  success: '#4D7C5F'
  warning: '#A16207'
  critical: '#9F3A38'
typography:
  h1-desktop:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2-desktop:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  h2-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  h3-desktop:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  h3-mobile:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  h4:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  caption:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.4'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
  container-max: 1200px
  section-v-pad-desktop: 96px
  section-v-pad-mobile: 64px
---

# Kira — Design System
## Brand
- Product name: Kira
- Category: Predictive analytics SaaS for Malaysian F&B SMEs
- Voice: Confident, helpful, plain-spoken. Friendly but professional.
- Vibe reference: Linear, Stripe, Notion marketing site. Clean, modern, B2B SaaS. NOT playful startup, NOT enterprise heavy.
## Colour palette
Primary
- Amber 700: #B45309 (primary buttons, key accents, headline highlights)
- Amber 600: #D97706 (hover state for primary)
- Amber 50: #FFFBEB (subtle background tints)
Neutrals (warm greys, not cold)
- Background: #FAFAF9
- Surface: #FFFFFF
- Border: #E7E5E4
- Text muted: #78716C
- Text body: #44403C
- Text strong: #1C1917
Status (use sparingly, only for indicators)
- Success: #4D7C5F
- Warning: #A16207
- Critical: #9F3A38
## Typography
Headings
- Font: Inter or Geist (weight 600-700)
- H1 (hero): 56px desktop / 36px mobile, line-height 1.1, letter-spacing -0.02em
- H2 (section): 40px desktop / 28px mobile, line-height 1.2
- H3 (card title): 24px desktop / 20px mobile, line-height 1.3
- H4 (subhead): 18px, weight 600
Body
- Font: Inter or Geist (weight 400-500)
- Body large: 18px, line-height 1.6
- Body: 16px, line-height 1.6
- Body small: 14px, line-height 1.5
- Caption: 13px, line-height 1.4, colour Text muted
Monospace accent
- Font: JetBrains Mono or Geist Mono
- Used only for: numbers in feature examples, data labels, code-style accents
- 14px, weight 500
## Spacing
- Use a 4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- Section vertical padding: 96px desktop / 64px mobile
- Card internal padding: 32px desktop / 24px mobile
- Container max-width: 1200px, centered, horizontal padding 24px
## Components
Buttons
- Primary: solid Amber 700 background, white text, 12px radius, 16px vertical / 24px horizontal padding, weight 600
- Secondary (ghost): transparent background, Text strong colour, 1px Border, same padding and radius
- No gradients. No shadows on buttons.
Cards
- White surface, 1px Border, 12px radius
- Hover state: 2px translate up, soft shadow (0 4px 12px rgba(0,0,0,0.04))
- No heavy drop shadows in default state
Forms
- Single column, generous spacing
- Inputs: 1px Border, 8px radius, 12px vertical padding, 16px text
- Focus state: 2px Amber 700 ring
- Labels above inputs, never inside (placeholder text is not a label)
Navigation
- Sticky top, 64px height
- White background with 1px bottom border
- Logo left, nav links centre, primary CTA right
- Mobile: hamburger menu, slide-in panel
## Visual rules
DO
- Use generous whitespace
- Lead with content, decorate sparingly
- Show actual product UI mocks in feature sections
- Use subtle borders to delineate sections, not heavy backgrounds
DO NOT
- Use stock photos of businesspeople with charts
- Use generic AI brain or neural network illustrations
- Use gradients on hero text
- Use glassmorphism, parallax, or autoplay video
- Use exclamation marks in copy
- Use emoji in primary copy (acceptable in playful FAQ answers)