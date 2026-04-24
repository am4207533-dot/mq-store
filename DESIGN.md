# Design Brief — MQ Store Luxury Watch Brand

**Tone**: Refined luxury, editorial sophistication, timeless premium positioning with understated power.

**Differentiation**: Gold accents as refined highlights (not garish), sophisticated product showcase with editorial layouts, premium shadows suggesting depth and exclusivity, smooth transitions conveying craftsmanship.

## Color Palette

| Token         | OKLCH              | Usage                              |
|---------------|--------------------|-------------------------------------|
| primary       | 0.08 0 0           | Deep black backgrounds             |
| foreground    | 0.95 0 0           | Light text on dark                 |
| card          | 0.12 0 0           | Elevated card surfaces             |
| accent        | 0.62 0.23 85       | Gold accent (#D4AF37 equivalent)  |
| border        | 0.2 0 0            | Subtle dividers                    |
| muted         | 0.2 0 0            | Muted text, secondary surfaces    |
| destructive   | 0.65 0.19 22       | Error states                       |

**Typography**

| Role      | Font          | Scale              | Weight   |
|-----------|---------------|--------------------|----------|
| Display   | Fraunces      | 2.5rem–3.5rem     | 600–700  |
| Body      | General Sans  | 0.875rem–1rem     | 400–500  |
| Mono      | system mono   | 0.8rem             | 400      |

## Structural Zones

| Zone         | Treatment                                    | Depth                      |
|--------------|----------------------------------------------|----------------------------|
| Header       | Card bg with gold bottom border, nav links   | Elevated above content     |
| Hero         | Full-bleed dark with product imagery         | Deep shadow effect         |
| Products     | Card grid with subtle shadows, gold text     | Layered elevation          |
| Footer       | Inverted card with gold accents              | Grounded at base           |

**Component Patterns**
- Navigation: gold underline on hover/active states
- Buttons: gold background with dark text or dark border with gold text
- Product cards: dark with subtle shadow, gold price/accent text
- Links: underline on hover with smooth transition

**Motion**
- Fade-in entrance animations (0.5s easing) for content sections
- Smooth transitions (0.3s cubic-bezier) for interactive elements
- Hover states trigger color transitions to gold accent
- Page transitions use gentle opacity fades

**Signature Detail**: Thin gold accent lines subtly dividing sections; luxury shadows (0 10px 40px black/0.6) creating depth without ostentation.

**Constraints**: No gradients beyond gold gradient. Dark mode optimized. Generous whitespace emphasizes luxury positioning. Gold used sparingly for maximum impact.
