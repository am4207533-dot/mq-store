import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const collectionsLinks = [
  { label: "GMT-Master Gold", to: "/shop" },
  { label: "Stellar Obsidian", to: "/shop" },
  { label: "Legacy Aurum", to: "/shop" },
  { label: "Chronograph Pro", to: "/shop" },
  { label: "Prestige Noir", to: "/shop" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className="bg-card border-t border-border mt-0"
      data-ocid="footer.section"
    >
      {/* Gold divider */}
      <div className="section-divider" />

      <div className="container mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex flex-col leading-none mb-6">
              <span className="font-display text-3xl font-bold tracking-[0.15em] text-foreground">
                MQ
              </span>
              <span className="text-[0.6rem] tracking-[0.35em] text-accent-gold uppercase">
                STORE.PK
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Curating exceptional timepieces for the discerning gentleman since
              2018. Each watch tells a story of craftsmanship and heritage.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid={`footer.social_${label.toLowerCase()}`}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-accent-gold hover:border-accent-gold transition-smooth"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid={`footer.quick_${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                    className="text-sm text-muted-foreground hover:text-accent-gold transition-smooth flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-smooth -ml-4 group-hover:ml-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent-gold mb-6">
              Collections
            </h4>
            <ul className="space-y-3">
              {collectionsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    data-ocid={`footer.collection_${link.label.toLowerCase().replace(/[- ]/g, "_")}`}
                    className="text-sm text-muted-foreground hover:text-accent-gold transition-smooth flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-smooth -ml-4 group-hover:ml-0"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-body font-semibold tracking-[0.25em] uppercase text-accent-gold mb-6">
              Stay Informed
            </h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Subscribe to receive new arrivals, exclusive offers, and
              horological insights.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Your email address"
                data-ocid="footer.newsletter_input"
                className="flex-1 bg-background border border-border rounded-l-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent-gold transition-smooth"
              />
              <button
                type="submit"
                data-ocid="footer.newsletter_submit"
                className="btn-gold px-4 py-2.5 rounded-r-lg text-xs"
                aria-label="Subscribe to newsletter"
              >
                JOIN
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {year} MQ Store.pk — All rights reserved
          </p>
          <p className="text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-gold transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
