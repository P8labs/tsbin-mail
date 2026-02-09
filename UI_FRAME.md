# tsbin Design System

**Version 1.0** • February 2026

A comprehensive design framework for all tsbin.tech products, ensuring consistent brand identity, visual language, and user experience across the entire product ecosystem.

---

## Philosophy

**Minimal. Functional. Honest.**

The tsbin design system is built on principles of simplicity, clarity, and respect for users. Every design decision serves a functional purpose while maintaining aesthetic appeal through restraint rather than decoration.

### Core Principles

1. **Clarity First** — Information hierarchy should be immediately apparent
2. **Minimal Friction** — Reduce cognitive load; make interfaces intuitive
3. **Privacy-Focused** — Visual language that communicates trust and security
4. **Content-Centric** — Design serves content, not the other way around
5. **Performance** — Lightweight, fast-loading, accessible

---

## Color System

### Primary Palette

```css
--bg: #fafafa; /* Background - Off-white */
--text: #0a0a0a; /* Text - Near black */
--divider: #e8e8e8; /* Borders & dividers - Light gray */
--hover: #f0f0f0; /* Hover states - Subtle gray */
```

### Usage Guidelines

- **Background**: Use `#fafafa` for primary backgrounds. Softer than pure white, reduces eye strain
- **Text**: Use `#0a0a0a` for all primary text. Near-black provides better readability than pure black
- **Dividers**: Use `#e8e8e8` for borders, section separators, and subtle UI boundaries
- **Hover**: Use `#f0f0f0` for subtle interactive feedback on light backgrounds

### Accent Colors (Background Effects)

```css
/* Warm accent gradient - Orange to amber */
Primary Orb: rgba(255, 69, 0, 0.8) → rgba(255, 140, 0, 0.4)

/* Warm accent gradient - Crimson to coral */
Secondary Orb: rgba(220, 20, 60, 0.8) → rgba(255, 99, 71, 0.4)
```

**Application**: Used exclusively for ambient background effects at 15% opacity. Not for UI elements.

### Opacity Levels

- **Full opacity**: Primary content (1.0)
- **Reduced emphasis**: Secondary content (0.75-0.8)
- **De-emphasized**: Tertiary content, hints (0.5-0.6)
- **Ambient**: Background effects (0.15)

---

## Typography

### Font Families

```css
/* Primary - Interface & Content */
font-family:
  "Inter",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;

/* Secondary - Code, Data, Branding */
font-family: "IBM Plex Mono", monospace;
```

**Load from Google Fonts**:

```
https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap
```

### Type Scale

#### Headings

```css
/* H1 - Page Title / Hero */
font-size: 3.5rem; /* 56px */
font-weight: 700;
letter-spacing: -0.03em;
line-height: 1.1;
margin-bottom: 1.5rem;

/* Hero variant */
font-size: 4.5rem; /* 72px */

/* H2 - Section Headers */
font-size: 2rem; /* 32px */
font-weight: 600;
letter-spacing: -0.02em;
line-height: 1.2;
margin-bottom: 1.25rem;
margin-top: 4rem;

/* H3 - Subsections */
font-size: 1.25rem; /* 20px */
font-weight: 600;
letter-spacing: -0.01em;
line-height: 1.3;
margin-bottom: 1rem;
margin-top: 2.5rem;
```

#### Body Text

```css
/* Base */
html {
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

/* Paragraphs */
p {
  margin-bottom: 1.5rem;
  max-width: 70ch; /* Optimal reading length */
}

/* Subtitle / Large body */
font-size: 1.5rem; /* 24px */
line-height: 1.4;

/* Supporting text */
font-size: 1.125rem; /* 18px */
line-height: 1.7;

/* Regular body */
font-size: 0.9375rem; /* 15px */

/* Small / Metadata */
font-size: 0.875rem; /* 14px */
```

### Typography Guidelines

- **Letter spacing**: Tighter for larger text (-0.03em to -0.01em), improves readability
- **Line height**: Generous (1.7 for body) for comfortable reading
- **Max width**: Constrain paragraphs to 70 characters for optimal reading
- **Monospace**: Use IBM Plex Mono for logos, code snippets, technical data

---

## Layout & Spacing

### Container System

```css
.container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 2rem;
}
```

- **Max width**: 820px keeps content readable and focused
- **Centering**: Auto margins for horizontal centering
- **Edge padding**: 2rem (32px) on desktop, 1.5rem (24px) on mobile

### Spacing Scale

Base unit: `1rem = 16px`

```css
/* Vertical rhythm */
--spacing-xs: 0.5rem; /* 8px */
--spacing-sm: 1rem; /* 16px */
--spacing-md: 1.5rem; /* 24px */
--spacing-lg: 2.5rem; /* 40px */
--spacing-xl: 4rem; /* 64px */
--spacing-2xl: 5rem; /* 80px */
--spacing-3xl: 8rem; /* 128px */
```

### Structural Spacing

```css
/* Header */
padding: 3rem 0;

/* Footer */
margin-top: 8rem;
padding: 4rem 0 3rem;

/* Main content */
padding: 5rem 0;

/* Sections */
padding: 4rem 0;

/* Hero */
padding: 4rem 0 5rem;
```

### Grid Systems

```css
/* Default: Single column, vertical stack */
display: flex;
flex-direction: column;
gap: 2rem;

/* Card/Tool grid */
display: grid;
gap: 2.5rem;
```

---

## Components

### Header

```css
header {
  padding: 3rem 0;
  border-bottom: 1px solid var(--divider);
}

header .container {
  display: flex;
  align-items: center;
  gap: 3rem;
}
```

**Structure**:

- Logo (left) + Navigation (right)
- Bottom border for separation
- Consistent 3rem vertical padding

### Logo

```css
.logo {
  font-family: "IBM Plex Mono", monospace;
  font-weight: 500;
  font-size: 1.125rem; /* 18px */
  letter-spacing: 0.05em;
  text-decoration: none;
}
```

**Guidelines**:

- Always use monospace font
- Uppercase text
- Increased letter spacing for clarity
- No underline decoration

### Navigation

```css
nav {
  display: flex;
  gap: 2rem;
  font-size: 0.9375rem; /* 15px */
}

nav a {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s ease;
}

nav a:hover {
  border-bottom-color: var(--text);
}
```

**Guidelines**:

- Horizontal layout with 2rem gaps
- Underline on hover via border-bottom
- Smooth 150ms transition
- Lowercase text for contrast with logo

### Buttons

```css
.button {
  display: inline-block;
  padding: 0.875rem 2rem;
  border: 1px solid var(--text);
  background: transparent;
  color: var(--text);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  font-family: inherit;
}

.button:hover {
  background: var(--text);
  color: var(--bg);
}

.button.secondary {
  border-color: var(--divider);
}

.button.secondary:hover {
  border-color: var(--text);
  background: transparent;
  color: var(--text);
}
```

**Button Types**:

- **Primary**: Solid border, inverts on hover (background fills)
- **Secondary**: Light border, border darkens on hover (no fill)

**Button Groups**:

```css
.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
```

### Sections

```css
section {
  padding: 4rem 0;
  border-bottom: 1px solid var(--divider);
}

section:last-child {
  border-bottom: none;
}

section h2:first-child {
  margin-top: 0;
}
```

**Guidelines**:

- Generous vertical padding (4rem)
- Bottom border for visual separation
- Remove border on last section
- Reset top margin on first heading

### Hero Section

```css
.hero {
  padding: 4rem 0 5rem;
  text-align: left;
}

.hero h1 {
  font-size: 4.5rem;
  margin-bottom: 1rem;
}

.hero .subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.hero .supporting {
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.75;
}
```

**Structure**:

1. Large heading (4.5rem)
2. Subtitle (1.5rem, normal weight)
3. Supporting text (1.125rem, 75% opacity)
4. Call-to-action buttons

### Footer

```css
footer {
  margin-top: 8rem;
  padding: 4rem 0 3rem;
  border-top: 1px solid var(--divider);
}

footer .container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-copyright {
  font-size: 0.875rem;
  opacity: 0.5;
  margin-top: 1rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
  font-size: 0.9375rem;
}
```

**Guidelines**:

- Large top margin (8rem) for clear separation
- Top border
- Vertical stack layout
- Reduced opacity for copyright (0.5)

### Lists

```css
ul {
  list-style: none;
  margin-bottom: 1.5rem;
}

ul li {
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  position: relative;
}

ul li:before {
  content: "•";
  position: absolute;
  left: 0;
}
```

**Custom bullets**: Use bullet character (•) positioned absolutely for precise control

### Links

```css
a {
  color: var(--text);
  text-decoration: underline;
  text-decoration-color: var(--divider);
  text-underline-offset: 3px;
  transition: text-decoration-color 0.15s ease;
}

a:hover {
  text-decoration-color: var(--text);
}
```

**Guidelines**:

- Always underlined for accessibility
- Light underline by default (--divider)
- Darker underline on hover (--text)
- 3px offset for breathing room
- Smooth 150ms transition

### Tool/Card Grid

```css
.tool-grid {
  display: grid;
  gap: 2.5rem;
  margin-top: 2rem;
}

.tool h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
}

.tool p {
  font-size: 0.9375rem;
  opacity: 0.8;
  margin-bottom: 0;
}
```

**Usage**: For feature lists, product showcases, related projects

---

## Animations & Effects

### Background Ambient Effects

```css
.bg-effect {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.15;
  pointer-events: none;
  overflow: hidden;
}

.bg-effect::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 69, 0, 0.8) 0%,
    rgba(255, 140, 0, 0.4) 40%,
    transparent 70%
  );
  top: 10%;
  left: 15%;
  animation: floatBall1 25s ease-in-out infinite;
  filter: blur(60px);
}

.bg-effect::after {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(220, 20, 60, 0.8) 0%,
    rgba(255, 99, 71, 0.4) 40%,
    transparent 70%
  );
  bottom: 15%;
  right: 20%;
  animation: floatBall2 20s ease-in-out infinite;
  filter: blur(60px);
}

@keyframes floatBall1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(50px, -40px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
  }
}

@keyframes floatBall2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(-40px, 50px) scale(1.15);
  }
  66% {
    transform: translate(40px, -30px) scale(0.85);
  }
}
```

**Key characteristics**:

- Fixed position, full viewport coverage
- Very low opacity (0.15) for subtlety
- Two gradient orbs with warm color palette
- Slow, organic floating animation (20-25s)
- Heavy blur (60px) for soft ambient feel
- Pointer-events disabled to not interfere with interactions

### Transition Standards

```css
/* Standard interactive transition */
transition: all 0.15s ease;

/* Border/color transitions */
transition: border-color 0.15s ease;
transition: text-decoration-color 0.15s ease;
```

**Guidelines**:

- Use 150ms (0.15s) for all micro-interactions
- Use `ease` timing function for natural feel
- Keep transitions fast and subtle

---

## Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
}
```

**Single breakpoint strategy**: Mobile (≤768px) vs Desktop (>768px)

### Mobile Adaptations

```css
@media (max-width: 768px) {
  /* Reduce container padding */
  .container {
    padding: 0 1.5rem;
  }

  /* Stack header vertically */
  header .container {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  /* Reduce navigation gaps */
  nav {
    gap: 1.5rem;
  }

  /* Scale down typography */
  .hero h1 {
    font-size: 3rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  /* Stack buttons vertically */
  .button-group {
    flex-direction: column;
  }

  .button {
    text-align: center;
  }
}
```

**Mobile principles**:

- Reduce padding to maximize screen space
- Stack horizontal layouts vertically
- Scale down large typography proportionally
- Full-width buttons for easier tapping
- Maintain visual hierarchy

---

## Implementation Guidelines

### CSS Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Always include this reset for consistency.

### Font Smoothing

```css
html {
  -webkit-font-smoothing: antialiased;
}
```

Apply antialiasing for better text rendering on webkit browsers.

### Global Styles Order

1. CSS Reset
2. CSS Variables (`:root`)
3. Base HTML elements (`html`, `body`, headings, paragraphs)
4. Layout containers (`.container`)
5. Structural components (`header`, `footer`, `nav`, `main`)
6. UI components (`.button`, `.card`, etc.)
7. Utility classes (`.mono`, `.text-center`, etc.)
8. Media queries (mobile overrides)

### Naming Conventions

- **BEM-inspired**: Use descriptive class names (`.button-group`, `.footer-links`)
- **Semantic**: Name based on function, not appearance
- **Lowercase with hyphens**: `.hero-subtitle` not `.heroSubtitle` or `.hero_subtitle`
- **Avoid abbreviations**: `.navigation` preferred over `.nav` (unless very common)

### File Organization

```
styles/
  ├── reset.css          # CSS reset
  ├── variables.css      # CSS custom properties
  ├── typography.css     # Font imports, text styles
  ├── layout.css         # Grid, container, structural
  ├── components.css     # Reusable UI components
  ├── effects.css        # Animations, transitions
  └── responsive.css     # Media queries
```

Or use a single `layout.css` / `global.css` for smaller projects.

### Accessibility Checklist

- ✅ Minimum 4.5:1 color contrast ratio (text passes WCAG AA)
- ✅ All interactive elements have visible focus states
- ✅ Links are clearly distinguishable (underlined)
- ✅ Text is resizable (uses rem, not px)
- ✅ No animation-only important information
- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)

### Performance Checklist

- ✅ Font subsetting (load only required weights: 400, 500, 600, 700)
- ✅ Minimal CSS (remove unused styles)
- ✅ Efficient selectors (avoid deep nesting)
- ✅ CSS minification for production
- ✅ Limit animation to transform and opacity (GPU-accelerated)

---

## Brand Voice & Content

### Tone

- **Direct**: Get to the point quickly
- **Honest**: No marketing fluff or exaggeration
- **Respectful**: Assume user intelligence
- **Minimal**: Fewer words, more meaning

### Content Structure

#### Hero Section

1. Product name (H1)
2. One-line description (subtitle)
3. 2-3 supporting statements
4. Primary CTA

#### Standard Section

1. Clear heading (H2)
2. 2-4 short paragraphs
3. Optional list for features/benefits
4. Optional secondary CTA

### Writing Guidelines

- **Short paragraphs**: 1-3 sentences maximum
- **Action-oriented**: "Start scanning" not "You can start scanning"
- **No jargon**: Technical accuracy without technical language
- **No superlatives**: Avoid "best", "fastest", "easiest"
- **Privacy-conscious**: Highlight what you DON'T do with user data

---

## Product-Specific Customization

While maintaining the core design system, individual products can customize:

### Color Accents

Different products can use different accent colors for background effects while keeping the same base palette (`--bg`, `--text`, `--divider`).

**Example variations**:

- **LOCAM**: Orange-to-amber + crimson-to-coral (warm)
- **tsbin**: Blue-to-cyan + purple-to-violet (cool, secure)
- **Mail**: Green-to-teal + lime-to-emerald (fresh, temporary)
- **Paper**: Indigo-to-blue + violet-to-purple (creative, calm)

### Logo Styling

Each product logo should use the same monospace font and styling, differentiated only by name.

### Hero Customization

Adjust hero content and imagery per product while maintaining the structural template.

---

## Version History

- **v1.0** (February 2026) — Initial design system documentation based on LOCAM implementation

---

## Maintenance & Updates

**Owner**: P8labs Design  
**Review Cycle**: Quarterly  
**Last Updated**: February 9, 2026

For questions or contributions to this design system, visit: [github.com/P8labs](https://github.com/P8labs)

---

**End of Document**
