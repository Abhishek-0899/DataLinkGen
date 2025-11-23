# Design Guidelines: Modern Portfolio Website

## Design Approach
**Reference-Based**: Drawing inspiration from premium developer portfolios (Bruno Simon, Jacek Jeznach) and creative platforms (Dribbble, Behance) with emphasis on interactive storytelling and visual impact.

## Core Design Principles
1. **Bold Typography First**: Use typography as a primary design element, not just content
2. **Purposeful Animation**: Subtle scroll-based reveals and micro-interactions
3. **Asymmetric Balance**: Break the grid strategically for visual interest
4. **Depth Through Layers**: Use shadows, overlaps, and z-index to create dimension

## Typography System
- **Primary Font**: Inter (Google Fonts) - Modern, clean sans-serif
- **Accent Font**: Space Grotesk (Google Fonts) - Bold headings and emphasis
- **Hierarchy**:
  - Hero heading: 4xl-6xl, bold, tight leading
  - Section headings: 3xl-4xl, semibold
  - Project titles: 2xl, medium
  - Body text: base-lg, regular
  - Labels/metadata: sm-xs, uppercase tracking-wide

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-20 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Element spacing: gap-4, gap-6, gap-8

**Container Strategy**:
- Max-width: 7xl for full sections
- Max-width: 4xl for content-focused areas
- Full-bleed for hero and project showcases

## Section-by-Section Design

### Hero Section (Full Viewport: 90vh)
**Layout**: Split-screen asymmetric design
- Left 60%: Large animated gradient mesh background image with subtle movement
- Right 40%: Floating card with name, title, and quick stats overlay
- Content: Name (6xl bold), Animated role text cycling through skills, CTA buttons with backdrop-blur-md on glass effect

**Images**: Use abstract gradient mesh or geometric patterns as hero background (vibrant purples, blues, cyans)

### Projects Showcase (Multi-section)
**Layout**: Staggered masonry grid alternating between full-width and 2-column
- Project cards with hover lift effect (transform scale-105)
- Each card: Large preview image, category tag, title, tech stack icons, brief description
- Use grid-cols-1 md:grid-cols-2 with some full-width featured projects
- Include 4-6 project cards with "View Project" and "GitHub" CTAs

**Images**: Project mockups/screenshots - use placeholder services like shots.so or use abstract tech-themed visuals

### Skills Section
**Layout**: 3-column grid (desktop) collapsing to 1-column (mobile)
- Group skills by category: Frontend, Backend, Tools/Other
- Each skill: Icon from Heroicons, skill name, animated progress indicator (not bar, use circular or creative visualization)
- Include 12-15 skills total across categories

### About Section
**Layout**: 2-column split
- Left: Professional headshot (circular frame with gradient border)
- Right: Bio paragraph + Timeline of key experiences (3-4 entries)
- Timeline uses vertical line with nodes, dates, company/role, brief description

**Images**: Professional headshot placeholder (can use UI Faces or similar)

### Contact Section
**Layout**: Centered with card-style container
- Email link (large, prominent)
- Social media icon grid (LinkedIn, GitHub, Twitter, Portfolio)
- Optional newsletter signup with single input + button
- Background: Subtle gradient or abstract pattern

## Component Library

### Cards
- Rounded corners: rounded-xl to rounded-2xl
- Shadows: shadow-lg with hover:shadow-2xl
- Borders: 1px subtle borders or gradient borders for featured items
- Background: Semi-transparent with backdrop blur for glass effect on certain cards

### Buttons
- Primary: Solid fill with hover scale and shadow
- Secondary: Outline with hover fill transition
- Glass buttons on images: backdrop-blur-md, semi-transparent bg, white text
- Icon buttons: Circular or square with icon centering

### Navigation
**Fixed header**: backdrop-blur-md, semi-transparent background
- Logo/name on left
- Nav links center (Projects, Skills, About, Contact)
- Dark mode toggle on right
- Mobile: Hamburger menu with slide-in panel

### Icons
**Library**: Heroicons (outline style for most, solid for emphasis)
- Consistent sizing: h-5 w-5 for inline, h-6 w-6 for standalone
- Use throughout: skills, social links, project tech stacks

## Dark Mode Strategy
- Light mode: White/gray-50 backgrounds, gray-900 text
- Dark mode: gray-900/black backgrounds, white/gray-100 text
- Accent colors remain vibrant in both modes
- Smooth transition: transition-colors duration-300 on all elements

## Animation Guidelines
**Scroll Animations**: Fade-up reveals for sections (opacity + translateY)
**Hover Effects**: 
- Cards: scale-105 + shadow increase
- Buttons: scale-105 + brightness increase
- Images: subtle zoom on project previews
**Page Load**: Stagger hero elements (name → role → buttons)
**限制**: Keep animations subtle; total animation duration <0.5s

## Color Palette (Descriptive Only)
- **Accents**: Vibrant gradient combinations (purple-to-blue, cyan-to-teal)
- **Neutrals**: Full grayscale range for backgrounds and text
- **Status**: Success (green), Warning (amber), Error (red) for form states

## Images Summary
1. **Hero**: Large gradient mesh/abstract background (full-bleed)
2. **Projects**: 4-6 project preview images/mockups
3. **About**: Professional headshot (circular, bordered)
4. **Decorative**: Optional abstract shapes/patterns in contact section

All buttons placed over images use backdrop-blur-md with semi-transparent backgrounds.