import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Watch } from "@/types/watch";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { motion } from "motion/react";

const WATCHES_DATA: Watch[] = [
  {
    id: "gmt-gold",
    name: "GMT Master Gold",
    collection: "Grand Complication",
    price: 285000,
    priceLabel: "PKR 285,000",
    image: "/assets/generated/watch-gmt-gold.dim_600x600.jpg",
    category: "gold",
    description:
      "A masterpiece of horological precision, the GMT Master Gold commands attention with its lustrous 18K gold case and triple-timezone complication. Crafted for the discerning gentleman who travels first class.",
    features: [
      "18K solid gold case & bracelet",
      "Triple-timezone GMT complication",
      "Sapphire crystal with anti-reflective coating",
      "Luminous hands & hour markers",
      "Screw-down crown with water resistance",
    ],
    movement: "Automatic Swiss ETA 2893-2",
    caseDiameter: "42mm",
    waterResistance: "100m / 330ft",
    isFeatured: true,
    isNew: false,
  },
  {
    id: "legacy-aurum",
    name: "Legacy Aurum",
    collection: "Heritage Reserve",
    price: 195000,
    priceLabel: "PKR 195,000",
    image: "/assets/generated/watch-legacy-aurum.dim_600x600.jpg",
    category: "gold",
    description:
      "Born from a century of watchmaking tradition, the Legacy Aurum combines old-world elegance with modern engineering. Its champagne dial and gold indices evoke the timeless glamour of a bygone era.",
    features: [
      "Gold-plated stainless steel case",
      "Handcrafted champagne guilloche dial",
      "Exhibition caseback with skeleton movement",
      "Genuine alligator leather strap",
      "Engraved crown and pushers",
    ],
    movement: "Automatic Swiss Sellita SW200",
    caseDiameter: "40mm",
    waterResistance: "50m / 165ft",
    isFeatured: false,
    isNew: false,
  },
  {
    id: "stellar-obsidian",
    name: "Stellar Obsidian",
    collection: "Black Series",
    price: 165000,
    priceLabel: "PKR 165,000",
    image: "/assets/generated/watch-stellar-obsidian.dim_600x600.jpg",
    category: "black",
    description:
      "Where darkness becomes a statement. The Stellar Obsidian's DLC-coated case absorbs light like a void, while its rose gold accents provide a striking contrast that defines modern luxury.",
    features: [
      "DLC black-coated titanium case",
      "Sunburst black dial with rose gold indices",
      "Ceramic bezel with gold numerals",
      "Black rubber & leather hybrid strap",
      "Anti-magnetic movement shield",
    ],
    movement: "Automatic Swiss ETA 2824-2",
    caseDiameter: "44mm",
    waterResistance: "200m / 660ft",
    isFeatured: true,
    isNew: true,
  },
  {
    id: "chrono-pro",
    name: "Chrono Pro",
    collection: "Sport Élite",
    price: 220000,
    priceLabel: "PKR 220,000",
    image: "/assets/generated/watch-chrono-pro.dim_600x600.jpg",
    category: "steel",
    description:
      "Engineered for the pursuit of precision, the Chrono Pro delivers motorsport-grade chronograph performance in a bracelet worthy of a boardroom. Speed and sophistication, inseparable.",
    features: [
      "316L brushed stainless steel case",
      "Integrated tachymeter bezel",
      "Column-wheel chronograph movement",
      "Folding clasp with double push-button release",
      "Lume-filled sub-dials at 3, 6, and 9 o'clock",
    ],
    movement: "Automatic Swiss Valjoux 7750",
    caseDiameter: "43mm",
    waterResistance: "100m / 330ft",
    isFeatured: false,
    isNew: true,
  },
  {
    id: "prestige-noir",
    name: "Prestige Noir",
    collection: "Black Series",
    price: 175000,
    priceLabel: "PKR 175,000",
    image: "/assets/generated/watch-prestige-noir.dim_600x600.jpg",
    category: "black",
    description:
      "Understated power. The Prestige Noir forgoes decoration in favour of pure form — a blacked-out dial, polished case, and minimal indices that speak the language of quiet confidence.",
    features: [
      "PVD black stainless steel case",
      "Minimalist matte black dial",
      "Super-LumiNova C1 on all markers",
      "Integrated mesh bracelet in black",
      "Screw-down caseback with engravable surface",
    ],
    movement: "Automatic Miyota 9015",
    caseDiameter: "41mm",
    waterResistance: "100m / 330ft",
    isFeatured: false,
    isNew: false,
  },
  {
    id: "royal-tourbillon",
    name: "Royal Tourbillon",
    collection: "Grand Complication",
    price: 580000,
    priceLabel: "PKR 580,000",
    image: "/assets/generated/watch-royal-tourbillon.dim_600x600.jpg",
    category: "two-tone",
    description:
      "The pinnacle of MQstore craftsmanship. The Royal Tourbillon exposes its mechanical soul through an open-worked dial, revealing the floating tourbillon that conquers gravity itself. Fewer than 50 pieces per year.",
    features: [
      "18K white & yellow gold two-tone case",
      "Flying tourbillon at 6 o'clock",
      "Open-worked skeletonised dial",
      "Hand-stitched Paris-blue alligator strap",
      "Individually numbered, certificate of authenticity",
    ],
    movement: "Manual-wind in-house MQ T-01",
    caseDiameter: "41mm",
    waterResistance: "30m / 100ft",
    isFeatured: true,
    isNew: false,
  },
];

const CATEGORY_LABEL: Record<Watch["category"], string> = {
  gold: "Gold",
  steel: "Steel",
  black: "Black Series",
  "two-tone": "Two-Tone",
};

export default function WatchDetailPage() {
  const { watchId } = useParams({ from: "/shop/$watchId" });
  const watch = WATCHES_DATA.find((w) => w.id === watchId);

  if (!watch) {
    return (
      <Layout>
        <section className="min-h-[70vh] flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md"
          >
            <p className="text-accent-gold font-body tracking-[0.3em] uppercase text-xs mb-4">
              404
            </p>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Watch Not Found
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              The timepiece you are looking for may have been moved or no longer
              exists in our collection.
            </p>
            <Link
              to="/shop"
              className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-sm"
              data-ocid="not_found.back_button"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Collection
            </Link>
          </motion.div>
        </section>
      </Layout>
    );
  }

  const specs = [
    { label: "Case Diameter", value: watch.caseDiameter },
    { label: "Movement", value: watch.movement },
    { label: "Water Resistance", value: watch.waterResistance },
    { label: "Category", value: CATEGORY_LABEL[watch.category] },
    { label: "Collection", value: watch.collection },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <nav
        className="border-b border-border/40 bg-card"
        data-ocid="watch_detail.breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-xs tracking-wider text-muted-foreground">
            <li>
              <Link to="/" className="hover-accent transition-smooth uppercase">
                Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <li>
              <Link
                to="/shop"
                className="hover-accent transition-smooth uppercase"
              >
                Shop
              </Link>
            </li>
            <ChevronRight className="w-3 h-3 opacity-40" />
            <li className="text-accent-gold uppercase truncate max-w-[140px] sm:max-w-none">
              {watch.name}
            </li>
          </ol>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── Image Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="lg:sticky lg:top-24"
            data-ocid="watch_detail.image_panel"
          >
            <div className="relative rounded-sm overflow-hidden border border-accent/30 shadow-luxury bg-card">
              {/* Decorative corner accents */}
              <span className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-accent-gold opacity-60 z-10" />
              <span className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-accent-gold opacity-60 z-10" />
              <span className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-accent-gold opacity-60 z-10" />
              <span className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-accent-gold opacity-60 z-10" />

              <img
                src={watch.image}
                alt={watch.name}
                className="w-full aspect-square object-cover"
              />

              {/* Badges overlay */}
              <div className="absolute top-5 left-5 z-20 flex flex-col gap-2">
                {watch.isNew && (
                  <span className="btn-gold text-[10px] px-3 py-1 rounded-sm tracking-widest">
                    NEW
                  </span>
                )}
                {watch.isFeatured && (
                  <span className="btn-outline-gold text-[10px] px-3 py-1 rounded-sm tracking-widest">
                    FEATURED
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Details Column ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col gap-6"
            data-ocid="watch_detail.details_panel"
          >
            {/* Collection badge */}
            <div>
              <Badge
                variant="outline"
                className="border-accent/50 text-accent-gold text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-sm"
                data-ocid="watch_detail.collection_badge"
              >
                {watch.collection}
              </Badge>
            </div>

            {/* Watch name */}
            <h1
              className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight"
              data-ocid="watch_detail.name"
            >
              {watch.name}
            </h1>

            {/* Price */}
            <p
              className="text-accent-gold font-display text-3xl font-semibold tracking-wide"
              data-ocid="watch_detail.price"
            >
              {watch.priceLabel}
            </p>

            <Separator className="bg-border/40" />

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-sm">
              {watch.description}
            </p>

            {/* Features */}
            <div data-ocid="watch_detail.features_list">
              <h3 className="text-foreground font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                Key Features
              </h3>
              <ul className="flex flex-col gap-3">
                {watch.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-border/40" />

            {/* Specs table */}
            <div data-ocid="watch_detail.specs_table">
              <h3 className="text-foreground font-body font-semibold text-xs tracking-[0.2em] uppercase mb-4">
                Specifications
              </h3>
              <table className="w-full text-sm">
                <tbody>
                  {specs.map(({ label, value }) => (
                    <tr
                      key={label}
                      className="border-b border-border/30 last:border-0"
                    >
                      <td className="py-2.5 text-muted-foreground w-2/5">
                        {label}
                      </td>
                      <td className="py-2.5 text-foreground font-medium">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                className="btn-gold flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-sm"
                data-ocid="watch_detail.add_to_cart_button"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>

            {/* Back link */}
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover-accent transition-smooth mt-1 self-start"
              data-ocid="watch_detail.back_link"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Collection
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
