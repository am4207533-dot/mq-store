import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (prevPathRef.current !== location.pathname) {
    prevPathRef.current = location.pathname;
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-luxury border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              data-ocid="header.logo_link"
              className="flex items-center gap-2 group"
            >
              <div className="flex flex-col leading-none">
                <span className="font-display text-2xl font-bold tracking-[0.15em] text-foreground">
                  MQ
                </span>
                <span className="text-[0.6rem] font-body tracking-[0.35em] text-accent-gold uppercase">
                  STORE.PK
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-10"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={`header.nav_${link.label.toLowerCase()}`}
                    className={`relative text-xs font-body font-medium tracking-[0.2em] uppercase transition-smooth hover-accent ${
                      isActive ? "text-accent-gold" : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-px gradient-gold"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Search"
                data-ocid="header.search_button"
                className="hidden md:flex items-center justify-center w-9 h-9 rounded-full text-muted-foreground hover:text-accent-gold transition-smooth"
              >
                <Search size={16} />
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                data-ocid="header.hamburger_button"
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-foreground hover:text-accent-gold transition-smooth"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Gold accent line at bottom when scrolled */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px">
            <div className="section-divider" />
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              data-ocid="header.mobile_drawer"
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-card border-l border-border shadow-elevated md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex flex-col leading-none">
                  <span className="font-display text-xl font-bold tracking-[0.15em]">
                    MQ
                  </span>
                  <span className="text-[0.55rem] tracking-[0.3em] text-accent-gold uppercase">
                    STORE.PK
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  data-ocid="header.mobile_close_button"
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-accent-gold transition-smooth"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex-1 p-6 flex flex-col gap-1">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07 + 0.1 }}
                    >
                      <Link
                        to={link.to}
                        data-ocid={`header.mobile_nav_${link.label.toLowerCase()}`}
                        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium tracking-[0.15em] uppercase transition-smooth ${
                          isActive
                            ? "text-accent-gold bg-accent/5 border-l-2 border-accent-gold pl-3"
                            : "text-foreground/70 hover:text-accent-gold hover:bg-accent/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-6 border-t border-border">
                <p className="text-xs text-muted-foreground tracking-wider text-center">
                  Luxury Timepieces Since 2018
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
