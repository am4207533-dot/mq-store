import { r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DZfbxrNQ.js";
import { c as createLucideIcon, L as Layout, m as motion, a as AnimatePresence } from "./Layout-BE7aCRPw.js";
import { B as Badge } from "./badge-CyokG2Kx.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = createLucideIcon("sliders-horizontal", __iconNode);
const WATCHES = [
  {
    id: "gmt-gold",
    name: "GMT Gold",
    collection: "Signature Series",
    price: 85e3,
    priceLabel: "PKR 85,000",
    image: "/assets/generated/watch-gmt-gold.dim_600x600.jpg",
    category: "gold",
    description: "A bold statement of authority. Dual-timezone complication housed in a 40mm yellow gold case, polished to perfection.",
    features: [
      "Dual Timezone Display",
      "Sapphire Crystal",
      "Anti-Reflective Coating",
      "Screw-Down Crown"
    ],
    movement: "Swiss Automatic ETA 2893-2",
    caseDiameter: "40mm",
    waterResistance: "100m",
    isFeatured: true
  },
  {
    id: "legacy-aurum",
    name: "Legacy Aurum",
    collection: "Heritage Collection",
    price: 12e4,
    priceLabel: "PKR 120,000",
    image: "/assets/generated/watch-legacy-aurum.dim_600x600.jpg",
    category: "gold",
    description: "Timeless elegance forged in 18k gold. The Legacy Aurum carries decades of master craftsmanship in every component.",
    features: [
      "18K Gold Case",
      "Hand-Engraved Dial",
      "Exhibition Caseback",
      "Alligator Leather Strap"
    ],
    movement: "Swiss Manual-Wind Cal. 9001",
    caseDiameter: "38mm",
    waterResistance: "30m",
    isFeatured: true,
    isNew: false
  },
  {
    id: "stellar-obsidian",
    name: "Stellar Obsidian",
    collection: "Noir Edition",
    price: 95e3,
    priceLabel: "PKR 95,000",
    image: "/assets/generated/watch-stellar-obsidian.dim_600x600.jpg",
    category: "black",
    description: "Born from darkness. DLC-coated titanium case with a meteorite-inspired black dial that captures the cosmos.",
    features: [
      "DLC Black Coating",
      "Meteorite Dial",
      "Titanium Case",
      "Luminescent Hands"
    ],
    movement: "In-House Automatic MQ-300",
    caseDiameter: "42mm",
    waterResistance: "200m",
    isNew: true
  },
  {
    id: "chrono-pro",
    name: "Chrono Pro",
    collection: "Sport Elite",
    price: 75e3,
    priceLabel: "PKR 75,000",
    image: "/assets/generated/watch-chrono-pro.dim_600x600.jpg",
    category: "steel",
    description: "Precision engineered for performance. Chronograph function with a tachymeter bezel and brushed steel bracelet.",
    features: [
      "Chronograph Function",
      "Tachymeter Bezel",
      "Pushers at 2 & 4",
      "Steel Oyster Bracelet"
    ],
    movement: "Valjoux 7750 Automatic",
    caseDiameter: "43mm",
    waterResistance: "100m"
  },
  {
    id: "prestige-noir",
    name: "Prestige Noir",
    collection: "Noir Edition",
    price: 11e4,
    priceLabel: "PKR 110,000",
    image: "/assets/generated/watch-prestige-noir.dim_600x600.jpg",
    category: "black",
    description: "The ultimate power dress watch. All-black ceramic case with onyx dial and platinum hour markers.",
    features: [
      "Full Ceramic Case",
      "Onyx Dial",
      "Platinum Hour Markers",
      "Black Alligator Strap"
    ],
    movement: "Swiss Automatic ETA 2824-2",
    caseDiameter: "41mm",
    waterResistance: "50m",
    isFeatured: true
  },
  {
    id: "royal-tourbillon",
    name: "Royal Tourbillon",
    collection: "Grand Complication",
    price: 25e4,
    priceLabel: "PKR 250,000",
    image: "/assets/generated/watch-royal-tourbillon.dim_600x600.jpg",
    category: "two-tone",
    description: "The apex of horological artistry. Flying tourbillon at 6 o'clock, two-tone gold and steel construction.",
    features: [
      "Flying Tourbillon",
      "Two-Tone Construction",
      "Skeletonized Dial",
      "Manual 7-Day Power Reserve"
    ],
    movement: "In-House Manual MQ-T01 Tourbillon",
    caseDiameter: "44mm",
    waterResistance: "30m",
    isFeatured: true,
    isNew: true
  }
];
const CATEGORY_FILTERS = [
  { label: "All", value: "all" },
  { label: "Gold", value: "gold" },
  { label: "Steel", value: "steel" },
  { label: "Black", value: "black" },
  { label: "Two-Tone", value: "two-tone" }
];
const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" }
];
const CATEGORY_BADGE_STYLES = {
  gold: "border-[#D4AF37]/60 text-[#D4AF37] bg-[#D4AF37]/10",
  steel: "border-foreground/30 text-foreground/70 bg-foreground/5",
  black: "border-foreground/20 text-foreground/60 bg-foreground/5",
  "two-tone": "border-[#D4AF37]/40 text-foreground/80 bg-foreground/5"
};
function ShopPage() {
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("featured");
  const filtered = reactExports.useMemo(() => {
    let list = activeCategory === "all" ? [...WATCHES] : WATCHES.filter((w) => w.category === activeCategory);
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    return list;
  }, [activeCategory, sortBy]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-card border-b border-border overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "text-xs tracking-[0.4em] text-accent-gold uppercase mb-4 font-body",
            children: "MQstore · Exclusive Collection"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            className: "font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4",
            children: "Men's Watches"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            transition: { duration: 0.6, delay: 0.3 },
            className: "w-24 h-0.5 mx-auto mb-6 gradient-gold"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.4 },
            className: "text-muted-foreground text-base md:text-lg max-w-xl mx-auto",
            children: "Handpicked timepieces crafted for men who command respect. Each watch a legacy in motion."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "flex items-center gap-2 flex-wrap",
          "data-ocid": "shop.category_filters",
          children: CATEGORY_FILTERS.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": `shop.category.${cat.value}`,
              onClick: () => setActiveCategory(cat.value),
              className: `px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-smooth border ${activeCategory === cat.value ? "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_12px_rgba(212,175,55,0.25)]" : "border-border text-muted-foreground hover:border-[#D4AF37]/40 hover:text-foreground"}`,
              children: cat.label
            },
            cat.value
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2 min-w-0",
          "data-ocid": "shop.sort_controls",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                "data-ocid": "shop.sort_select",
                value: sortBy,
                onChange: (e) => setSortBy(e.target.value),
                className: "bg-input border border-border text-foreground text-xs tracking-wider uppercase rounded-md px-3 py-1.5 focus:outline-none focus:border-[#D4AF37]/60 transition-smooth cursor-pointer",
                children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt.value, children: opt.label }, opt.value))
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-12 md:py-16",
        "data-ocid": "shop.grid_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground tracking-widest uppercase mb-8", children: [
            filtered.length,
            " ",
            filtered.length === 1 ? "Timepiece" : "Timepieces",
            " Found"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              layout: true,
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
              "data-ocid": "shop.watch_list",
              children: filtered.map((watch, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(WatchCard, { watch, index }, watch.id))
            }
          ) })
        ] })
      }
    )
  ] });
}
function WatchCard({ watch, index }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      layout: true,
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95 },
      transition: { duration: 0.4, delay: index * 0.07 },
      "data-ocid": `shop.watch_card.${index + 1}`,
      className: "card-watch rounded-xl overflow-hidden group flex flex-col",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/shop/$watchId",
            params: { watchId: watch.id },
            "data-ocid": `shop.watch_image_link.${index + 1}`,
            className: "block relative overflow-hidden bg-secondary aspect-square",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: watch.image,
                  alt: watch.name,
                  className: "w-full h-full object-cover transition-smooth group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-1.5", children: [
                watch.isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] tracking-widest uppercase font-bold rounded bg-[#D4AF37] text-[#0a0a0a]", children: "New" }),
                watch.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 text-[10px] tracking-widest uppercase font-semibold rounded border border-[#D4AF37]/60 text-[#D4AF37] bg-black/60 backdrop-blur-sm", children: "Featured" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: `self-start text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 rounded font-semibold border ${CATEGORY_BADGE_STYLES[watch.category]}`,
              children: watch.collection
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground leading-tight group-hover:text-accent-gold transition-smooth", children: watch.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1 line-clamp-2", children: watch.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] tracking-wider uppercase text-muted-foreground/60 border-t border-border pt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: watch.caseDiameter }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-3 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: watch.waterResistance }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-3 bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: watch.category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-auto pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-gold font-display text-xl font-bold tracking-wide", children: watch.priceLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/shop/$watchId",
                params: { watchId: watch.id },
                "data-ocid": `shop.view_details_button.${index + 1}`,
                className: "btn-gold px-4 py-2 rounded-lg text-[10px] inline-block hover:no-underline",
                children: "View Details"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  ShopPage as default
};
