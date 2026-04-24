import { r as reactExports, j as jsxRuntimeExports, u as useParams, L as Link } from "./index-DZfbxrNQ.js";
import { c as createLucideIcon, L as Layout, m as motion } from "./Layout-BE7aCRPw.js";
import { c as createSlot, a as cn, B as Badge } from "./badge-CyokG2Kx.js";
import { C as CircleCheck } from "./circle-check-BYWx5eCe.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode);
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const WATCHES_DATA = [
  {
    id: "gmt-gold",
    name: "GMT Master Gold",
    collection: "Grand Complication",
    price: 285e3,
    priceLabel: "PKR 285,000",
    image: "/assets/generated/watch-gmt-gold.dim_600x600.jpg",
    category: "gold",
    description: "A masterpiece of horological precision, the GMT Master Gold commands attention with its lustrous 18K gold case and triple-timezone complication. Crafted for the discerning gentleman who travels first class.",
    features: [
      "18K solid gold case & bracelet",
      "Triple-timezone GMT complication",
      "Sapphire crystal with anti-reflective coating",
      "Luminous hands & hour markers",
      "Screw-down crown with water resistance"
    ],
    movement: "Automatic Swiss ETA 2893-2",
    caseDiameter: "42mm",
    waterResistance: "100m / 330ft",
    isFeatured: true,
    isNew: false
  },
  {
    id: "legacy-aurum",
    name: "Legacy Aurum",
    collection: "Heritage Reserve",
    price: 195e3,
    priceLabel: "PKR 195,000",
    image: "/assets/generated/watch-legacy-aurum.dim_600x600.jpg",
    category: "gold",
    description: "Born from a century of watchmaking tradition, the Legacy Aurum combines old-world elegance with modern engineering. Its champagne dial and gold indices evoke the timeless glamour of a bygone era.",
    features: [
      "Gold-plated stainless steel case",
      "Handcrafted champagne guilloche dial",
      "Exhibition caseback with skeleton movement",
      "Genuine alligator leather strap",
      "Engraved crown and pushers"
    ],
    movement: "Automatic Swiss Sellita SW200",
    caseDiameter: "40mm",
    waterResistance: "50m / 165ft",
    isFeatured: false,
    isNew: false
  },
  {
    id: "stellar-obsidian",
    name: "Stellar Obsidian",
    collection: "Black Series",
    price: 165e3,
    priceLabel: "PKR 165,000",
    image: "/assets/generated/watch-stellar-obsidian.dim_600x600.jpg",
    category: "black",
    description: "Where darkness becomes a statement. The Stellar Obsidian's DLC-coated case absorbs light like a void, while its rose gold accents provide a striking contrast that defines modern luxury.",
    features: [
      "DLC black-coated titanium case",
      "Sunburst black dial with rose gold indices",
      "Ceramic bezel with gold numerals",
      "Black rubber & leather hybrid strap",
      "Anti-magnetic movement shield"
    ],
    movement: "Automatic Swiss ETA 2824-2",
    caseDiameter: "44mm",
    waterResistance: "200m / 660ft",
    isFeatured: true,
    isNew: true
  },
  {
    id: "chrono-pro",
    name: "Chrono Pro",
    collection: "Sport Élite",
    price: 22e4,
    priceLabel: "PKR 220,000",
    image: "/assets/generated/watch-chrono-pro.dim_600x600.jpg",
    category: "steel",
    description: "Engineered for the pursuit of precision, the Chrono Pro delivers motorsport-grade chronograph performance in a bracelet worthy of a boardroom. Speed and sophistication, inseparable.",
    features: [
      "316L brushed stainless steel case",
      "Integrated tachymeter bezel",
      "Column-wheel chronograph movement",
      "Folding clasp with double push-button release",
      "Lume-filled sub-dials at 3, 6, and 9 o'clock"
    ],
    movement: "Automatic Swiss Valjoux 7750",
    caseDiameter: "43mm",
    waterResistance: "100m / 330ft",
    isFeatured: false,
    isNew: true
  },
  {
    id: "prestige-noir",
    name: "Prestige Noir",
    collection: "Black Series",
    price: 175e3,
    priceLabel: "PKR 175,000",
    image: "/assets/generated/watch-prestige-noir.dim_600x600.jpg",
    category: "black",
    description: "Understated power. The Prestige Noir forgoes decoration in favour of pure form — a blacked-out dial, polished case, and minimal indices that speak the language of quiet confidence.",
    features: [
      "PVD black stainless steel case",
      "Minimalist matte black dial",
      "Super-LumiNova C1 on all markers",
      "Integrated mesh bracelet in black",
      "Screw-down caseback with engravable surface"
    ],
    movement: "Automatic Miyota 9015",
    caseDiameter: "41mm",
    waterResistance: "100m / 330ft",
    isFeatured: false,
    isNew: false
  },
  {
    id: "royal-tourbillon",
    name: "Royal Tourbillon",
    collection: "Grand Complication",
    price: 58e4,
    priceLabel: "PKR 580,000",
    image: "/assets/generated/watch-royal-tourbillon.dim_600x600.jpg",
    category: "two-tone",
    description: "The pinnacle of MQstore craftsmanship. The Royal Tourbillon exposes its mechanical soul through an open-worked dial, revealing the floating tourbillon that conquers gravity itself. Fewer than 50 pieces per year.",
    features: [
      "18K white & yellow gold two-tone case",
      "Flying tourbillon at 6 o'clock",
      "Open-worked skeletonised dial",
      "Hand-stitched Paris-blue alligator strap",
      "Individually numbered, certificate of authenticity"
    ],
    movement: "Manual-wind in-house MQ T-01",
    caseDiameter: "41mm",
    waterResistance: "30m / 100ft",
    isFeatured: true,
    isNew: false
  }
];
const CATEGORY_LABEL = {
  gold: "Gold",
  steel: "Steel",
  black: "Black Series",
  "two-tone": "Two-Tone"
};
function WatchDetailPage() {
  const { watchId } = useParams({ from: "/shop/$watchId" });
  const watch = WATCHES_DATA.find((w) => w.id === watchId);
  if (!watch) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-[70vh] flex flex-col items-center justify-center px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "text-center max-w-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent-gold font-body tracking-[0.3em] uppercase text-xs mb-4", children: "404" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-bold text-foreground mb-4", children: "Watch Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-8", children: "The timepiece you are looking for may have been moved or no longer exists in our collection." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/shop",
              className: "btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-sm",
              "data-ocid": "not_found.back_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                "Return to Collection"
              ]
            }
          )
        ]
      }
    ) }) });
  }
  const specs = [
    { label: "Case Diameter", value: watch.caseDiameter },
    { label: "Movement", value: watch.movement },
    { label: "Water Resistance", value: watch.waterResistance },
    { label: "Category", value: CATEGORY_LABEL[watch.category] },
    { label: "Collection", value: watch.collection }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        className: "border-b border-border/40 bg-card",
        "data-ocid": "watch_detail.breadcrumb",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-xs tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover-accent transition-smooth uppercase", children: "Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/shop",
              className: "hover-accent transition-smooth uppercase",
              children: "Shop"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-accent-gold uppercase truncate max-w-[140px] sm:max-w-none", children: watch.name })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -32 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          className: "lg:sticky lg:top-24",
          "data-ocid": "watch_detail.image_panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-sm overflow-hidden border border-accent/30 shadow-luxury bg-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-accent-gold opacity-60 z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-accent-gold opacity-60 z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-accent-gold opacity-60 z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-accent-gold opacity-60 z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: watch.image,
                alt: watch.name,
                className: "w-full aspect-square object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-5 left-5 z-20 flex flex-col gap-2", children: [
              watch.isNew && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-gold text-[10px] px-3 py-1 rounded-sm tracking-widest", children: "NEW" }),
              watch.isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "btn-outline-gold text-[10px] px-3 py-1 rounded-sm tracking-widest", children: "FEATURED" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 32 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] },
          className: "flex flex-col gap-6",
          "data-ocid": "watch_detail.details_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "border-accent/50 text-accent-gold text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-sm",
                "data-ocid": "watch_detail.collection_badge",
                children: watch.collection
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight",
                "data-ocid": "watch_detail.name",
                children: watch.name
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-accent-gold font-display text-3xl font-semibold tracking-wide",
                "data-ocid": "watch_detail.price",
                children: watch.priceLabel
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm", children: watch.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "watch_detail.features_list", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4", children: "Key Features" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: watch.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-3 text-sm text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-accent-gold shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: feature })
                  ]
                },
                feature
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-border/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "watch_detail.specs_table", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-foreground font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4", children: "Specifications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "w-full text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: specs.map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "tr",
                {
                  className: "border-b border-border/30 last:border-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 text-muted-foreground w-2/5", children: label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2.5 text-foreground font-medium", children: value })
                  ]
                },
                label
              )) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "btn-gold flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-sm",
                "data-ocid": "watch_detail.add_to_cart_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4" }),
                  "Add to Cart"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/shop",
                className: "inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover-accent transition-smooth mt-1 self-start",
                "data-ocid": "watch_detail.back_link",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5" }),
                  "Back to Collection"
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
export {
  WatchDetailPage as default
};
