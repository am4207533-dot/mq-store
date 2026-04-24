import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  ChevronDown,
  Gem,
  Star,
  Watch as WatchIcon,
} from "lucide-react";
import { type Variants, motion } from "motion/react";
import { Layout } from "../components/Layout";
import type { Watch } from "../types/watch";

// ─── Sample Featured Watches ────────────────────────────────────────────────
const featuredWatches: Watch[] = [
  {
    id: "gmt-gold-elite",
    name: "GMT Gold Elite",
    collection: "Prestige Collection",
    price: 189000,
    priceLabel: "Rs. 189,000",
    image: "/assets/generated/watch-gmt-gold.dim_600x600.jpg",
    category: "gold",
    description:
      "A masterpiece of horological engineering with dual-time zone function.",
    features: [
      "GMT Function",
      "Sapphire Crystal",
      "Water Resistant 100m",
      "18K Gold Bezel",
    ],
    movement: "Swiss Automatic",
    caseDiameter: "42mm",
    waterResistance: "100m",
    isFeatured: true,
    isNew: false,
  },
  {
    id: "legacy-aurum",
    name: "Legacy Aurum",
    collection: "Heritage Series",
    price: 245000,
    priceLabel: "Rs. 245,000",
    image: "/assets/generated/watch-legacy-aurum.dim_600x600.jpg",
    category: "two-tone",
    description:
      "Heritage design meets modern precision in this timeless two-tone masterpiece.",
    features: [
      "Power Reserve 72h",
      "Exhibition Caseback",
      "Calfskin Strap",
      "Date Display",
    ],
    movement: "Swiss Mechanical",
    caseDiameter: "40mm",
    waterResistance: "50m",
    isFeatured: true,
    isNew: false,
  },
  {
    id: "stellar-obsidian",
    name: "Stellar Obsidian",
    collection: "Noir Edition",
    price: 165000,
    priceLabel: "Rs. 165,000",
    image: "/assets/generated/watch-stellar-obsidian.dim_600x600.jpg",
    category: "black",
    description:
      "Midnight aesthetics with uncompromising performance for the modern connoisseur.",
    features: [
      "PVD Black Coating",
      "Luminous Indices",
      "Tachymeter Scale",
      "Chronograph",
    ],
    movement: "Swiss Automatic",
    caseDiameter: "44mm",
    waterResistance: "200m",
    isFeatured: true,
    isNew: true,
  },
];

// ─── Brand Values ─────────────────────────────────────────────────────────────
const brandValues = [
  {
    icon: WatchIcon,
    title: "Swiss Precision",
    description:
      "Every movement is calibrated to the highest horological standards, ensuring accuracy within ±3 seconds per day.",
  },
  {
    icon: Award,
    title: "Heritage Craftsmanship",
    description:
      "Decades of watchmaking tradition fused with modern innovation — each timepiece takes over 200 hours to complete.",
  },
  {
    icon: Gem,
    title: "Limited Collections",
    description:
      "Exclusivity is our promise. Each MQstore collection is numbered and limited to preserve its singular value.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote:
      "The GMT Gold Elite is the finest watch I've ever owned. The craftsmanship is beyond extraordinary — every glance at my wrist is a moment of pure satisfaction.",
    author: "Usman Malik",
    location: "Lahore",
    rating: 5,
  },
  {
    quote:
      "MQstore delivered excellence in every detail. The packaging, the timepiece, and the after-sales service — everything was world-class. Absolutely worth every rupee.",
    author: "Bilal Ahmed",
    location: "Karachi",
    rating: 5,
  },
  {
    quote:
      "I gifted the Legacy Aurum to my father on his retirement and he was moved to tears. A watch that carries soul. MQstore has a loyal customer for life.",
    author: "Hamza Raza",
    location: "Islamabad",
    rating: 5,
  },
];

// ─── Fade-in animation variants ──────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <Layout>
      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section
        data-ocid="hero.section"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "oklch(0.06 0 0)" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-watch.dim_1600x900.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.p
            custom={0.1}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="font-body text-xs tracking-[0.5em] uppercase mb-6"
            style={{ color: "oklch(var(--accent))" }}
          >
            Est. 2015 — Lahore, Pakistan
          </motion.p>

          <motion.h1
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display font-bold leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-foreground">MQ</span>
            <span style={{ color: "oklch(var(--accent))" }}>Store</span>
            <span className="text-foreground">.pk</span>
          </motion.h1>

          <motion.div
            custom={0.15}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="section-divider w-32 my-4 mx-auto"
            aria-hidden="true"
          />

          <motion.p
            custom={0.5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-display text-xl md:text-2xl font-light italic text-foreground/80 mb-10 tracking-wide"
          >
            Where Time Meets Luxury
          </motion.p>

          <motion.div
            custom={0.7}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link
              to="/shop"
              data-ocid="hero.explore_button"
              className="btn-gold px-8 py-3.5 rounded-sm inline-flex items-center gap-2 min-w-[180px] justify-center"
            >
              Explore Collection
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/about"
              data-ocid="hero.story_button"
              className="btn-outline-gold px-8 py-3.5 rounded-sm inline-flex items-center gap-2 min-w-[180px] justify-center"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            delay: 1.5,
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          aria-hidden="true"
        >
          <span className="text-[0.6rem] tracking-[0.4em] uppercase text-foreground/40">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 text-foreground/40" />
        </motion.div>
      </section>

      {/* ── Section Divider ───────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ── Featured Watches ──────────────────────────────────────────── */}
      <section
        data-ocid="featured.section"
        className="py-24 px-6 bg-background"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.5em] uppercase text-accent-gold mb-3 font-body">
              Curated for Excellence
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Our Finest Timepieces
            </h2>
            <div className="section-divider w-24 mx-auto" />
          </motion.div>

          {/* Watch cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWatches.map((watch, index) => (
              <motion.div
                key={watch.id}
                data-ocid={`featured.item.${index + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index * 0.15}
              >
                <Link
                  to="/shop/$watchId"
                  params={{ watchId: watch.id }}
                  className="block card-watch rounded-sm overflow-hidden group"
                  data-ocid={`featured.card_link.${index + 1}`}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-card">
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {watch.isNew && (
                      <span
                        className="absolute top-3 right-3 text-[0.6rem] tracking-[0.3em] uppercase px-2.5 py-1 rounded-sm font-semibold"
                        style={{
                          background:
                            "linear-gradient(135deg, #D4AF37, #C9A227)",
                          color: "oklch(0.08 0 0)",
                        }}
                      >
                        New
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <p className="text-[0.65rem] tracking-[0.4em] uppercase text-accent-gold mb-1.5 font-body">
                      {watch.collection}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent-gold transition-colors duration-300">
                      {watch.name}
                    </h3>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-body font-semibold text-foreground/90 text-sm">
                        {watch.priceLabel}
                      </span>
                      <span className="text-[0.65rem] tracking-[0.3em] uppercase text-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                        View Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View all link */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0.3}
            className="text-center mt-12"
          >
            <Link
              to="/shop"
              data-ocid="featured.view_all_button"
              className="btn-outline-gold px-10 py-3.5 rounded-sm inline-flex items-center gap-2"
            >
              View All Watches
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Section Divider ───────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ── Brand Values ──────────────────────────────────────────────── */}
      <section
        data-ocid="values.section"
        className="py-24 px-6"
        style={{ background: "oklch(0.1 0 0)" }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.5em] uppercase text-accent-gold mb-3 font-body">
              The MQstore Promise
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Crafted Without Compromise
            </h2>
            <div className="section-divider w-24 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {brandValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  data-ocid={`values.item.${index + 1}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index * 0.15}
                  className="flex flex-col items-center text-center px-4"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-5 border"
                    style={{
                      borderColor: "oklch(var(--accent) / 0.3)",
                      background: "oklch(var(--accent) / 0.07)",
                    }}
                  >
                    <Icon className="w-6 h-6 text-accent-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section Divider ───────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ── Testimonials ──────────────────────────────────────────────── */}
      <section
        data-ocid="testimonials.section"
        className="py-24 px-6 bg-background"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.5em] uppercase text-accent-gold mb-3 font-body">
              Voices of Connoisseurs
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              What Our Patrons Say
            </h2>
            <div className="section-divider w-24 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.author}
                data-ocid={`testimonials.item.${index + 1}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index * 0.15}
                className="relative rounded-sm p-7 flex flex-col gap-4"
                style={{
                  background: "oklch(var(--card))",
                  border: "1px solid oklch(var(--accent) / 0.25)",
                }}
              >
                {/* Gold top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, oklch(var(--accent) / 0.6), transparent)",
                  }}
                  aria-hidden="true"
                />

                {/* Stars */}
                <div
                  className="flex gap-0.5"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={`star-${testimonial.author}-${i}`}
                      className="w-3.5 h-3.5 text-accent-gold fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-body text-sm text-foreground/70 leading-relaxed italic flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <figcaption className="font-body">
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-foreground/40 tracking-wide">
                    {testimonial.location}
                  </p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section Divider ───────────────────────────────────────────── */}
      <div className="section-divider" />

      {/* ── CTA Banner ────────────────────────────────────────────────── */}
      <section
        data-ocid="cta.section"
        className="py-24 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.1 0 0) 0%, oklch(0.13 0.02 85) 50%, oklch(0.1 0 0) 100%)",
        }}
      >
        {/* Decorative gradient orb */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(var(--accent) / 0.07) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-accent-gold font-body">
            Explore the Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Discover Your Perfect{" "}
            <span style={{ color: "oklch(var(--accent))" }}>Timepiece</span>
          </h2>
          <p className="font-body text-sm text-foreground/60 leading-relaxed max-w-md">
            Browse our full range of luxury men's watches — from classic dress
            pieces to bold sport chronographs. Each one a statement.
          </p>
          <Link
            to="/shop"
            data-ocid="cta.shop_button"
            className="btn-gold px-10 py-4 rounded-sm inline-flex items-center gap-2 text-sm mt-2"
          >
            Explore Full Collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
}
