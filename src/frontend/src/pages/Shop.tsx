import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import type { Watch, WatchCategory } from "@/types/watch";
import { Link } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

const WATCHES: Watch[] = [
  {
    id: "gmt-gold",
    name: "GMT Gold",
    collection: "Signature Series",
    price: 85000,
    priceLabel: "PKR 85,000",
    image: "/assets/generated/watch-gmt-gold.dim_600x600.jpg",
    category: "gold",
    description:
      "A bold statement of authority. Dual-timezone complication housed in a 40mm yellow gold case, polished to perfection.",
    features: [
      "Dual Timezone Display",
      "Sapphire Crystal",
      "Anti-Reflective Coating",
      "Screw-Down Crown",
    ],
    movement: "Swiss Automatic ETA 2893-2",
    caseDiameter: "40mm",
    waterResistance: "100m",
    isFeatured: true,
  },
  {
    id: "legacy-aurum",
    name: "Legacy Aurum",
    collection: "Heritage Collection",
    price: 120000,
    priceLabel: "PKR 120,000",
    image: "/assets/generated/watch-legacy-aurum.dim_600x600.jpg",
    category: "gold",
    description:
      "Timeless elegance forged in 18k gold. The Legacy Aurum carries decades of master craftsmanship in every component.",
    features: [
      "18K Gold Case",
      "Hand-Engraved Dial",
      "Exhibition Caseback",
      "Alligator Leather Strap",
    ],
    movement: "Swiss Manual-Wind Cal. 9001",
    caseDiameter: "38mm",
    waterResistance: "30m",
    isFeatured: true,
    isNew: false,
  },
  {
    id: "stellar-obsidian",
    name: "Stellar Obsidian",
    collection: "Noir Edition",
    price: 95000,
    priceLabel: "PKR 95,000",
    image: "/assets/generated/watch-stellar-obsidian.dim_600x600.jpg",
    category: "black",
    description:
      "Born from darkness. DLC-coated titanium case with a meteorite-inspired black dial that captures the cosmos.",
    features: [
      "DLC Black Coating",
      "Meteorite Dial",
      "Titanium Case",
      "Luminescent Hands",
    ],
    movement: "In-House Automatic MQ-300",
    caseDiameter: "42mm",
    waterResistance: "200m",
    isNew: true,
  },
  {
    id: "chrono-pro",
    name: "Chrono Pro",
    collection: "Sport Elite",
    price: 75000,
    priceLabel: "PKR 75,000",
    image: "/assets/generated/watch-chrono-pro.dim_600x600.jpg",
    category: "steel",
    description:
      "Precision engineered for performance. Chronograph function with a tachymeter bezel and brushed steel bracelet.",
    features: [
      "Chronograph Function",
      "Tachymeter Bezel",
      "Pushers at 2 & 4",
      "Steel Oyster Bracelet",
    ],
    movement: "Valjoux 7750 Automatic",
    caseDiameter: "43mm",
    waterResistance: "100m",
  },
  {
    id: "prestige-noir",
    name: "Prestige Noir",
    collection: "Noir Edition",
    price: 110000,
    priceLabel: "PKR 110,000",
    image: "/assets/generated/watch-prestige-noir.dim_600x600.jpg",
    category: "black",
    description:
      "The ultimate power dress watch. All-black ceramic case with onyx dial and platinum hour markers.",
    features: [
      "Full Ceramic Case",
      "Onyx Dial",
      "Platinum Hour Markers",
      "Black Alligator Strap",
    ],
    movement: "Swiss Automatic ETA 2824-2",
    caseDiameter: "41mm",
    waterResistance: "50m",
    isFeatured: true,
  },
  {
    id: "royal-tourbillon",
    name: "Royal Tourbillon",
    collection: "Grand Complication",
    price: 250000,
    priceLabel: "PKR 250,000",
    image: "/assets/generated/watch-royal-tourbillon.dim_600x600.jpg",
    category: "two-tone",
    description:
      "The apex of horological artistry. Flying tourbillon at 6 o'clock, two-tone gold and steel construction.",
    features: [
      "Flying Tourbillon",
      "Two-Tone Construction",
      "Skeletonized Dial",
      "Manual 7-Day Power Reserve",
    ],
    movement: "In-House Manual MQ-T01 Tourbillon",
    caseDiameter: "44mm",
    waterResistance: "30m",
    isFeatured: true,
    isNew: true,
  },
];

type SortOption = "featured" | "price-asc" | "price-desc";

const CATEGORY_FILTERS: { label: string; value: WatchCategory }[] = [
  { label: "All", value: "all" },
  { label: "Gold", value: "gold" },
  { label: "Steel", value: "steel" },
  { label: "Black", value: "black" },
  { label: "Two-Tone", value: "two-tone" },
];

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

const CATEGORY_BADGE_STYLES: Record<string, string> = {
  gold: "border-[#D4AF37]/60 text-[#D4AF37] bg-[#D4AF37]/10",
  steel: "border-foreground/30 text-foreground/70 bg-foreground/5",
  black: "border-foreground/20 text-foreground/60 bg-foreground/5",
  "two-tone": "border-[#D4AF37]/40 text-foreground/80 bg-foreground/5",
};

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<WatchCategory>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let list =
      activeCategory === "all"
        ? [...WATCHES]
        : WATCHES.filter((w) => w.category === activeCategory);
    if (sortBy === "price-asc") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    return list;
  }, [activeCategory, sortBy]);

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.4em] text-accent-gold uppercase mb-4 font-body"
          >
            MQstore · Exclusive Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-4"
          >
            Men's Watches
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-0.5 mx-auto mb-6 gradient-gold"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto"
          >
            Handpicked timepieces crafted for men who command respect. Each
            watch a legacy in motion.
          </motion.p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category Filters */}
          <div
            className="flex items-center gap-2 flex-wrap"
            data-ocid="shop.category_filters"
          >
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat.value}
                type="button"
                data-ocid={`shop.category.${cat.value}`}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-smooth border ${
                  activeCategory === cat.value
                    ? "border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_12px_rgba(212,175,55,0.25)]"
                    : "border-border text-muted-foreground hover:border-[#D4AF37]/40 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div
            className="flex items-center gap-2 min-w-0"
            data-ocid="shop.sort_controls"
          >
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0" />
            <select
              data-ocid="shop.sort_select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-input border border-border text-foreground text-xs tracking-wider uppercase rounded-md px-3 py-1.5 focus:outline-none focus:border-[#D4AF37]/60 transition-smooth cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Watch Grid */}
      <section
        className="bg-background py-12 md:py-16"
        data-ocid="shop.grid_section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-8">
            {filtered.length}{" "}
            {filtered.length === 1 ? "Timepiece" : "Timepieces"} Found
          </p>

          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              data-ocid="shop.watch_list"
            >
              {filtered.map((watch, index) => (
                <WatchCard key={watch.id} watch={watch} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
}

function WatchCard({ watch, index }: { watch: Watch; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      data-ocid={`shop.watch_card.${index + 1}`}
      className="card-watch rounded-xl overflow-hidden group flex flex-col"
    >
      {/* Image */}
      <Link
        to="/shop/$watchId"
        params={{ watchId: watch.id }}
        data-ocid={`shop.watch_image_link.${index + 1}`}
        className="block relative overflow-hidden bg-secondary aspect-square"
      >
        <img
          src={watch.image}
          alt={watch.name}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        {/* Badges overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {watch.isNew && (
            <span className="px-2 py-0.5 text-[10px] tracking-widest uppercase font-bold rounded bg-[#D4AF37] text-[#0a0a0a]">
              New
            </span>
          )}
          {watch.isFeatured && (
            <span className="px-2 py-0.5 text-[10px] tracking-widest uppercase font-semibold rounded border border-[#D4AF37]/60 text-[#D4AF37] bg-black/60 backdrop-blur-sm">
              Featured
            </span>
          )}
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Collection Badge */}
        <Badge
          variant="outline"
          className={`self-start text-[10px] tracking-[0.15em] uppercase px-2 py-0.5 rounded font-semibold border ${CATEGORY_BADGE_STYLES[watch.category]}`}
        >
          {watch.collection}
        </Badge>

        {/* Name */}
        <div>
          <h3 className="font-display text-xl font-bold text-foreground leading-tight group-hover:text-accent-gold transition-smooth">
            {watch.name}
          </h3>
          <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
            {watch.description}
          </p>
        </div>

        {/* Specs Row */}
        <div className="flex items-center gap-3 text-[10px] tracking-wider uppercase text-muted-foreground/60 border-t border-border pt-3">
          <span>{watch.caseDiameter}</span>
          <span className="w-px h-3 bg-border" />
          <span>{watch.waterResistance}</span>
          <span className="w-px h-3 bg-border" />
          <span className="truncate">{watch.category}</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <span className="text-accent-gold font-display text-xl font-bold tracking-wide">
            {watch.priceLabel}
          </span>
          <Link
            to="/shop/$watchId"
            params={{ watchId: watch.id }}
            data-ocid={`shop.view_details_button.${index + 1}`}
            className="btn-gold px-4 py-2 rounded-lg text-[10px] inline-block hover:no-underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
