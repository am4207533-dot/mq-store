import { Layout } from "@/components/Layout";
import {
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const SUBJECTS = [
  { value: "watch-inquiry", label: "Watch Inquiry" },
  { value: "order-support", label: "Order Support" },
  { value: "general-question", label: "General Question" },
  { value: "partnership", label: "Partnership" },
];

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["47-B, Model Town Extension", "Lahore, Punjab, Pakistan"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["info@mqstore.pk"],
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+92 300 1234567"],
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Sat: 10:00 AM – 8:00 PM", "Sunday: Closed"],
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  function resetForm() {
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setSubmitted(false);
  }

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-accent-gold text-xs tracking-[0.35em] uppercase mb-4">
              We&apos;d love to hear from you
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Get in <span className="text-accent-gold italic">Touch</span>
            </h1>
            <div className="section-divider w-24 mx-auto my-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Whether you're looking for your first luxury timepiece or have a
              question about an order, our team is here to assist you with
              personalized service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content: Two-column */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="flex flex-col gap-8"
              data-ocid="contact.info_panel"
            >
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                  Our Contact Details
                </h2>
                <div className="section-divider w-16 mb-6" />
              </div>

              {/* Detail Cards */}
              <div className="flex flex-col gap-5">
                {contactDetails.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-smooth group"
                    data-ocid={`contact.info_item.${i + 1}`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-accent/30 group-hover:border-accent/60 group-hover:bg-accent/10 transition-smooth">
                      <item.icon size={16} className="text-accent-gold" />
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="text-foreground text-sm leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3" data-ocid="contact.social_links">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    data-ocid="contact.instagram_link"
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-border hover:border-accent/60 hover:bg-accent/10 text-muted-foreground hover:text-accent-gold transition-smooth"
                  >
                    <Instagram size={17} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    data-ocid="contact.facebook_link"
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-border hover:border-accent/60 hover:bg-accent/10 text-muted-foreground hover:text-accent-gold transition-smooth"
                  >
                    <Facebook size={17} />
                  </a>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    data-ocid="contact.whatsapp_link"
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-border hover:border-accent/60 hover:bg-accent/10 text-muted-foreground hover:text-accent-gold transition-smooth"
                  >
                    <SiWhatsapp size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              data-ocid="contact.form_panel"
            >
              <div className="rounded-2xl bg-card border-2 border-accent/20 p-8 md:p-10 shadow-luxury relative overflow-hidden">
                {/* Decorative gold glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-5"
                  style={{
                    background: "radial-gradient(circle, #D4AF37, transparent)",
                    transform: "translate(40%, -40%)",
                  }}
                  aria-hidden="true"
                />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-5"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-accent/50 bg-accent/10">
                      <CheckCircle2 size={32} className="text-accent-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                        Thank you! We'll get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={resetForm}
                      data-ocid="contact.send_another_button"
                      className="btn-gold px-6 py-2.5 rounded-lg text-xs mt-2"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Fill in the form and we'll respond promptly.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                      data-ocid="contact.form"
                    >
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-name"
                          className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                        >
                          Full Name <span className="text-accent-gold">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          data-ocid="contact.name_input"
                          className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth"
                        />
                      </div>

                      {/* Email + Phone row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-email"
                            className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                          >
                            Email <span className="text-accent-gold">*</span>
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            data-ocid="contact.email_input"
                            className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label
                            htmlFor="contact-phone"
                            className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                          >
                            Phone{" "}
                            <span className="text-muted-foreground/50 normal-case tracking-normal">
                              (optional)
                            </span>
                          </label>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+92 300 0000000"
                            data-ocid="contact.phone_input"
                            className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth"
                          />
                        </div>
                      </div>

                      {/* Subject select */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-subject"
                          className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                        >
                          Subject <span className="text-accent-gold">*</span>
                        </label>
                        <select
                          id="contact-subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          data-ocid="contact.subject_select"
                          className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth appearance-none cursor-pointer"
                          style={{ colorScheme: "dark" }}
                        >
                          <option
                            value=""
                            disabled
                            className="bg-popover text-muted-foreground"
                          >
                            Select a subject
                          </option>
                          {SUBJECTS.map((s) => (
                            <option
                              key={s.value}
                              value={s.value}
                              className="bg-popover text-foreground"
                            >
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="contact-message"
                          className="text-xs tracking-[0.15em] uppercase text-muted-foreground"
                        >
                          Message <span className="text-accent-gold">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you…"
                          data-ocid="contact.message_textarea"
                          className="w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={
                          submitting ||
                          !form.name ||
                          !form.email ||
                          !form.subject ||
                          !form.message
                        }
                        data-ocid="contact.submit_button"
                        className="btn-gold w-full py-4 rounded-lg flex items-center justify-center gap-2 mt-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                      >
                        {submitting ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-current/30 border-t-current animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={14} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Store Map Placeholder */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border-2 border-accent/20 bg-card shadow-luxury"
            data-ocid="contact.store_map"
          >
            {/* Decorative Map Background */}
            <div
              className="h-64 md:h-80 flex items-center justify-center relative"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.12 0 0) 0%, oklch(0.1 0 0) 100%)",
              }}
            >
              {/* Grid lines */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 40px)",
                }}
                aria-hidden="true"
              />

              {/* Center marker */}
              <div className="relative flex flex-col items-center gap-4 z-10">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center shadow-luxury">
                    <MapPin size={24} className="text-accent-gold" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent animate-ping opacity-75" />
                </div>
                <div className="text-center px-6 py-4 rounded-xl bg-background/70 backdrop-blur-sm border border-accent/20">
                  <p className="text-xs tracking-[0.25em] uppercase text-accent-gold mb-1">
                    Our Store
                  </p>
                  <p className="font-display text-lg font-semibold text-foreground">
                    MQstore — Lahore
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    47-B, Model Town Extension, Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
