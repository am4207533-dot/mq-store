import { j as jsxRuntimeExports, L as Link } from "./index-DZfbxrNQ.js";
import { c as createLucideIcon, L as Layout, m as motion, A as ArrowRight } from "./Layout-BE7aCRPw.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
  ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
];
const Gem = createLucideIcon("gem", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["polyline", { points: "12 10 12 12 13 13", key: "19dquz" }],
  [
    "path",
    { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }
  ],
  ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }]
];
const Watch = createLucideIcon("watch", __iconNode);
const featuredWatches = [
  {
    id: "gmt-gold-elite",
    name: "GMT Gold Elite",
    collection: "Prestige Collection",
    price: 189e3,
    priceLabel: "Rs. 189,000",
    image: "/assets/generated/watch-gmt-gold.dim_600x600.jpg",
    category: "gold",
    description: "A masterpiece of horological engineering with dual-time zone function.",
    features: [
      "GMT Function",
      "Sapphire Crystal",
      "Water Resistant 100m",
      "18K Gold Bezel"
    ],
    movement: "Swiss Automatic",
    caseDiameter: "42mm",
    waterResistance: "100m",
    isFeatured: true,
    isNew: false
  },
  {
    id: "legacy-aurum",
    name: "Legacy Aurum",
    collection: "Heritage Series",
    price: 245e3,
    priceLabel: "Rs. 245,000",
    image: "/assets/generated/watch-legacy-aurum.dim_600x600.jpg",
    category: "two-tone",
    description: "Heritage design meets modern precision in this timeless two-tone masterpiece.",
    features: [
      "Power Reserve 72h",
      "Exhibition Caseback",
      "Calfskin Strap",
      "Date Display"
    ],
    movement: "Swiss Mechanical",
    caseDiameter: "40mm",
    waterResistance: "50m",
    isFeatured: true,
    isNew: false
  },
  {
    id: "stellar-obsidian",
    name: "Stellar Obsidian",
    collection: "Noir Edition",
    price: 165e3,
    priceLabel: "Rs. 165,000",
    image: "/assets/generated/watch-stellar-obsidian.dim_600x600.jpg",
    category: "black",
    description: "Midnight aesthetics with uncompromising performance for the modern connoisseur.",
    features: [
      "PVD Black Coating",
      "Luminous Indices",
      "Tachymeter Scale",
      "Chronograph"
    ],
    movement: "Swiss Automatic",
    caseDiameter: "44mm",
    waterResistance: "200m",
    isFeatured: true,
    isNew: true
  }
];
const brandValues = [
  {
    icon: Watch,
    title: "Swiss Precision",
    description: "Every movement is calibrated to the highest horological standards, ensuring accuracy within ±3 seconds per day."
  },
  {
    icon: Award,
    title: "Heritage Craftsmanship",
    description: "Decades of watchmaking tradition fused with modern innovation — each timepiece takes over 200 hours to complete."
  },
  {
    icon: Gem,
    title: "Limited Collections",
    description: "Exclusivity is our promise. Each MQstore collection is numbered and limited to preserve its singular value."
  }
];
const testimonials = [
  {
    quote: "The GMT Gold Elite is the finest watch I've ever owned. The craftsmanship is beyond extraordinary — every glance at my wrist is a moment of pure satisfaction.",
    author: "Usman Malik",
    location: "Lahore",
    rating: 5
  },
  {
    quote: "MQstore delivered excellence in every detail. The packaging, the timepiece, and the after-sales service — everything was world-class. Absolutely worth every rupee.",
    author: "Bilal Ahmed",
    location: "Karachi",
    rating: 5
  },
  {
    quote: "I gifted the Legacy Aurum to my father on his retirement and he was moved to tears. A watch that carries soul. MQstore has a loyal customer for life.",
    author: "Hamza Raza",
    location: "Islamabad",
    rating: 5
  }
];
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" }
  })
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay) => ({
    opacity: 1,
    transition: { duration: 0.9, delay, ease: "easeOut" }
  })
};
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "hero.section",
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        style: { background: "oklch(0.06 0 0)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
              style: {
                backgroundImage: "url('/assets/generated/hero-watch.dim_1600x900.jpg')"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                custom: 0.1,
                initial: "hidden",
                animate: "visible",
                variants: fadeIn,
                className: "font-body text-xs tracking-[0.5em] uppercase mb-6",
                style: { color: "oklch(var(--accent))" },
                children: "Est. 2015 — Lahore, Pakistan"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                custom: 0.3,
                initial: "hidden",
                animate: "visible",
                variants: fadeUp,
                className: "font-display font-bold leading-[1.05] mb-6",
                style: {
                  fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
                  letterSpacing: "-0.02em"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "MQ" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(var(--accent))" }, children: "Store" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: ".pk" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                custom: 0.15,
                initial: "hidden",
                animate: "visible",
                variants: fadeIn,
                className: "section-divider w-32 my-4 mx-auto",
                "aria-hidden": "true"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                custom: 0.5,
                initial: "hidden",
                animate: "visible",
                variants: fadeUp,
                className: "font-display text-xl md:text-2xl font-light italic text-foreground/80 mb-10 tracking-wide",
                children: "Where Time Meets Luxury"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                custom: 0.7,
                initial: "hidden",
                animate: "visible",
                variants: fadeUp,
                className: "flex flex-col sm:flex-row gap-4 items-center",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/shop",
                      "data-ocid": "hero.explore_button",
                      className: "btn-gold px-8 py-3.5 rounded-sm inline-flex items-center gap-2 min-w-[180px] justify-center",
                      children: [
                        "Explore Collection",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/about",
                      "data-ocid": "hero.story_button",
                      className: "btn-outline-gold px-8 py-3.5 rounded-sm inline-flex items-center gap-2 min-w-[180px] justify-center",
                      children: "Our Story"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1, y: [0, 8, 0] },
              transition: {
                delay: 1.5,
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              },
              className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.6rem] tracking-[0.4em] uppercase text-foreground/40", children: "Scroll" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-foreground/40" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "featured.section",
        className: "py-24 px-6 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              custom: 0,
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.5em] uppercase text-accent-gold mb-3 font-body", children: "Curated for Excellence" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4", children: "Our Finest Timepieces" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider w-24 mx-auto" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: featuredWatches.map((watch, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              "data-ocid": `featured.item.${index + 1}`,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              custom: index * 0.15,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/shop/$watchId",
                  params: { watchId: watch.id },
                  className: "block card-watch rounded-sm overflow-hidden group",
                  "data-ocid": `featured.card_link.${index + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-card", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: watch.image,
                          alt: watch.name,
                          className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        }
                      ),
                      watch.isNew && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "absolute top-3 right-3 text-[0.6rem] tracking-[0.3em] uppercase px-2.5 py-1 rounded-sm font-semibold",
                          style: {
                            background: "linear-gradient(135deg, #D4AF37, #C9A227)",
                            color: "oklch(0.08 0 0)"
                          },
                          children: "New"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.65rem] tracking-[0.4em] uppercase text-accent-gold mb-1.5 font-body", children: watch.collection }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent-gold transition-colors duration-300", children: watch.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body font-semibold text-foreground/90 text-sm", children: watch.priceLabel }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[0.65rem] tracking-[0.3em] uppercase text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1", children: [
                          "View Details ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                        ] })
                      ] })
                    ] })
                  ]
                }
              )
            },
            watch.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              custom: 0.3,
              className: "text-center mt-12",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/shop",
                  "data-ocid": "featured.view_all_button",
                  className: "btn-outline-gold px-10 py-3.5 rounded-sm inline-flex items-center gap-2",
                  children: [
                    "View All Watches",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ]
                }
              )
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "values.section",
        className: "py-24 px-6",
        style: { background: "oklch(0.1 0 0)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              custom: 0,
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.5em] uppercase text-accent-gold mb-3 font-body", children: "The MQstore Promise" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4", children: "Crafted Without Compromise" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider w-24 mx-auto" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10", children: brandValues.map((value, index) => {
            const Icon = value.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                "data-ocid": `values.item.${index + 1}`,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true },
                variants: fadeUp,
                custom: index * 0.15,
                className: "flex flex-col items-center text-center px-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-14 h-14 rounded-full flex items-center justify-center mb-5 border",
                      style: {
                        borderColor: "oklch(var(--accent) / 0.3)",
                        background: "oklch(var(--accent) / 0.07)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-accent-gold" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-foreground mb-3", children: value.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground/60 leading-relaxed", children: value.description })
                ]
              },
              value.title
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "testimonials.section",
        className: "py-24 px-6 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              custom: 0,
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.5em] uppercase text-accent-gold mb-3 font-body", children: "Voices of Connoisseurs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4", children: "What Our Patrons Say" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider w-24 mx-auto" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.figure,
            {
              "data-ocid": `testimonials.item.${index + 1}`,
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              custom: index * 0.15,
              className: "relative rounded-sm p-7 flex flex-col gap-4",
              style: {
                background: "oklch(var(--card))",
                border: "1px solid oklch(var(--accent) / 0.25)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-0 left-8 right-8 h-px",
                    style: {
                      background: "linear-gradient(to right, transparent, oklch(var(--accent) / 0.6), transparent)"
                    },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex gap-0.5",
                    "aria-label": `${testimonial.rating} out of 5 stars`,
                    children: Array.from({ length: testimonial.rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        className: "w-3.5 h-3.5 text-accent-gold fill-current"
                      },
                      `star-${testimonial.author}-${i}`
                    ))
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-body text-sm text-foreground/70 leading-relaxed italic flex-1", children: [
                  '"',
                  testimonial.quote,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "font-body", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: testimonial.author }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/40 tracking-wide", children: testimonial.location })
                ] })
              ]
            },
            testimonial.author
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "cta.section",
        className: "py-24 px-6 relative overflow-hidden",
        style: {
          background: "linear-gradient(135deg, oklch(0.1 0 0) 0%, oklch(0.13 0.02 85) 50%, oklch(0.1 0 0) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 pointer-events-none",
              style: {
                background: "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(var(--accent) / 0.07) 0%, transparent 70%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "visible",
              viewport: { once: true },
              variants: fadeUp,
              custom: 0,
              className: "relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.5em] uppercase text-accent-gold font-body", children: "Explore the Collection" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground leading-tight", children: [
                  "Discover Your Perfect",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(var(--accent))" }, children: "Timepiece" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground/60 leading-relaxed max-w-md", children: "Browse our full range of luxury men's watches — from classic dress pieces to bold sport chronographs. Each one a statement." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/shop",
                    "data-ocid": "cta.shop_button",
                    className: "btn-gold px-10 py-4 rounded-sm inline-flex items-center gap-2 text-sm mt-2",
                    children: [
                      "Explore Full Collection",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  Home as default
};
