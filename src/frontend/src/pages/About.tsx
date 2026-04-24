import { Layout } from "@/components/Layout";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const milestones = [
  {
    year: "2018",
    label: "Founded",
    desc: "MQstore was born from a passion for fine horology and a vision to bring luxury timepieces to Pakistan.",
  },
  {
    year: "2019",
    label: "First Collection",
    desc: "Launched our debut curated selection of Swiss-inspired men's watches, earning instant acclaim.",
  },
  {
    year: "2021",
    label: "500+ Happy Customers",
    desc: "Reached a landmark milestone, building a loyal community of watch enthusiasts across Pakistan.",
  },
  {
    year: "2022",
    label: "Premium Partnerships",
    desc: "Established exclusive partnerships with premier international watch suppliers and distributors.",
  },
  {
    year: "2023",
    label: "1000+ Watches Sold",
    desc: "Surpassed a thousand timepieces delivered — each one a story of craftsmanship and elegance.",
  },
];

const craftsmanshipCards = [
  {
    icon: "💎",
    title: "Premium Materials",
    desc: "Every timepiece is crafted from the finest materials — sapphire crystal, stainless steel, genuine leather straps, and precision-engineered movements that stand the test of time.",
  },
  {
    icon: "🔍",
    title: "Expert Curation",
    desc: "Our team of horological experts meticulously handpicks each watch, ensuring only the most exceptional designs and mechanisms make it to our collection.",
  },
  {
    icon: "✦",
    title: "Quality Guarantee",
    desc: "Every watch comes with our MQstore Quality Seal — thoroughly inspected, authenticated, and backed by our dedicated after-sales service commitment.",
  },
];

const values = [
  {
    icon: "⬡",
    title: "Authenticity",
    desc: "We stand behind every piece we sell. No counterfeits, no shortcuts — every watch in our catalogue is genuine, verified, and carries the prestige you deserve.",
  },
  {
    icon: "◈",
    title: "Excellence",
    desc: "Mediocrity has no place in luxury. We set the bar high — in the watches we carry, the service we provide, and the experience we create for every customer.",
  },
  {
    icon: "◉",
    title: "Customer First",
    desc: "Your satisfaction is not just a priority — it's our purpose. From discovery to delivery, we go above and beyond to ensure your MQstore experience is extraordinary.",
  },
];

function AnimatedBlock({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -40 }
      : direction === "right"
        ? { opacity: 0, x: 40 }
        : { opacity: 0, y: 30 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <Layout>
      {/* ── Hero ── */}
      <section
        data-ocid="about.hero.section"
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.62 0.23 85 / 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.62 0.23 85) 1px, transparent 1px), linear-gradient(90deg, oklch(0.62 0.23 85) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <AnimatedBlock delay={0}>
            <span className="inline-block text-xs tracking-[0.4em] text-accent-gold uppercase mb-6">
              Est. 2018 · Pakistan
            </span>
          </AnimatedBlock>
          <AnimatedBlock delay={0.15}>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Our <span className="text-accent-gold italic">Story</span>
            </h1>
          </AnimatedBlock>
          <AnimatedBlock delay={0.25}>
            <div className="section-divider w-24 mx-auto mb-6" />
          </AnimatedBlock>
          <AnimatedBlock delay={0.35}>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              Born from a deep reverence for horological artistry, MQstore is
              Pakistan's premier destination for luxury timepieces that embody
              prestige, precision, and timeless elegance.
            </p>
          </AnimatedBlock>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section data-ocid="about.brand_story.section" className="py-24 bg-card">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedBlock direction="left">
            <span className="text-xs tracking-[0.35em] text-accent-gold uppercase mb-4 block">
              The MQstore Legacy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crafting Moments,
              <br />
              <span className="text-accent-gold">Defining Time</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              MQstore was founded in 2018 by a team of passionate horologists
              who believed that every man deserves to mark his journey with a
              timepiece of unmatched quality. Rooted in Lahore and reaching
              across Pakistan, we set out to challenge the notion that
              world-class watches were inaccessible locally.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              Drawing inspiration from the grand Swiss watchmaking tradition, we
              partnered with premier global suppliers to bring Swiss-inspired
              movements, Japanese precision, and Italian design sensibilities
              under one roof. Our promise: authentic luxury, delivered to your
              door.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Today, MQstore is more than a watch retailer — we are curators of
              a lifestyle. A lifestyle defined by confidence, achievement, and
              an unwavering commitment to the finer things in life.
            </p>
          </AnimatedBlock>

          {/* Decorative quote panel */}
          <AnimatedBlock direction="right">
            <div
              className="relative rounded-sm p-10 w-full max-w-sm mx-auto"
              style={{
                background: "oklch(0.1 0 0)",
                border: "1px solid oklch(0.62 0.23 85 / 0.3)",
                boxShadow: "0 0 60px oklch(0.62 0.23 85 / 0.08)",
              }}
            >
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent-gold opacity-70" />
              <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent-gold opacity-70" />
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent-gold opacity-70" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent-gold opacity-70" />

              <p className="font-display text-2xl italic text-accent-gold leading-snug text-center mb-6">
                "Time is the most precious luxury of all."
              </p>
              <div className="section-divider w-16 mx-auto mb-6" />
              <p className="text-center text-xs tracking-[0.35em] text-muted-foreground uppercase">
                MQstore Founding Principle
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                {[
                  ["1000+", "Watches Sold"],
                  ["500+", "Happy Customers"],
                ].map(([num, lbl]) => (
                  <div key={lbl}>
                    <p className="font-display text-3xl font-bold text-accent-gold">
                      {num}
                    </p>
                    <p className="text-xs text-muted-foreground tracking-wider mt-1">
                      {lbl}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedBlock>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section
        data-ocid="about.timeline.section"
        className="py-24 bg-background"
      >
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedBlock className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] text-accent-gold uppercase mb-3 block">
              Our Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Milestones of Excellence
            </h2>
            <div className="section-divider w-24 mx-auto" />
          </AnimatedBlock>

          <div className="relative">
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, oklch(0.62 0.23 85 / 0.5), transparent)",
              }}
            />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                data-ocid={`about.timeline.item.${i + 1}`}
                className={`relative flex gap-8 md:gap-0 mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
              >
                <div
                  className={`flex-1 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} pl-14 md:pl-0`}
                >
                  <span className="font-display text-5xl font-bold text-accent-gold opacity-30 leading-none block">
                    {m.year}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground -mt-2 mb-2">
                    {m.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs ml-auto">
                    {m.desc}
                  </p>
                </div>

                <div className="absolute left-6 md:left-1/2 top-3 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full gradient-gold shadow-luxury" />
                  <div
                    className="absolute w-7 h-7 rounded-full"
                    style={{ border: "1px solid oklch(0.62 0.23 85 / 0.4)" }}
                  />
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Craftsmanship ── */}
      <section
        data-ocid="about.craftsmanship.section"
        className="py-24 bg-card"
      >
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedBlock className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] text-accent-gold uppercase mb-3 block">
              The MQstore Standard
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Craftsmanship
            </h2>
            <div className="section-divider w-24 mx-auto" />
          </AnimatedBlock>

          <div className="grid md:grid-cols-3 gap-8">
            {craftsmanshipCards.map((card, i) => (
              <motion.div
                key={card.title}
                data-ocid={`about.craftsmanship.card.${i + 1}`}
                className="card-watch rounded-sm p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-sm flex items-center justify-center text-3xl"
                  style={{
                    background: "oklch(0.62 0.23 85 / 0.1)",
                    border: "1px solid oklch(0.62 0.23 85 / 0.25)",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <div className="section-divider w-12 mx-auto mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section data-ocid="about.values.section" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedBlock className="text-center mb-16">
            <span className="text-xs tracking-[0.35em] text-accent-gold uppercase mb-3 block">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <div className="section-divider w-24 mx-auto" />
          </AnimatedBlock>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                data-ocid={`about.values.card.${i + 1}`}
                className="group relative rounded-sm p-8"
                style={{ border: "1px solid oklch(0.2 0 0)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
              >
                <div
                  className="absolute top-0 left-8 right-8 h-px transition-all duration-500 group-hover:left-0 group-hover:right-0"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, oklch(0.62 0.23 85 / 0.7), transparent)",
                  }}
                />
                <div
                  className="w-12 h-12 mb-6 rounded-sm flex items-center justify-center text-xl font-bold text-accent-gold"
                  style={{
                    background: "oklch(0.62 0.23 85 / 0.08)",
                    border: "1px solid oklch(0.62 0.23 85 / 0.2)",
                  }}
                >
                  {val.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent-gold transition-colors duration-300">
                  {val.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        data-ocid="about.cta.section"
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.1 0 0) 0%, oklch(0.12 0 0) 100%)",
          borderTop: "1px solid oklch(0.62 0.23 85 / 0.15)",
        }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedBlock delay={0}>
            <span className="text-xs tracking-[0.4em] text-accent-gold uppercase mb-4 block">
              Begin Your Journey
            </span>
          </AnimatedBlock>
          <AnimatedBlock delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Discover Timepieces
              <br />
              <span className="text-accent-gold">Worth Wearing</span>
            </h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <div className="section-divider w-24 mx-auto mb-6" />
          </AnimatedBlock>
          <AnimatedBlock delay={0.3}>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Browse our exclusive collection of luxury men's watches — each one
              selected to elevate your presence and mark your milestones.
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.4}>
            <Link
              to="/shop"
              data-ocid="about.cta.primary_button"
              className="btn-gold inline-block px-10 py-4 rounded-sm tracking-widest text-xs font-semibold uppercase"
            >
              Explore Our Collection
            </Link>
          </AnimatedBlock>
        </div>
      </section>
    </Layout>
  );
}
