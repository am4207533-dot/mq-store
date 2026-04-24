import { R as React, r as reactExports, j as jsxRuntimeExports } from "./index-DZfbxrNQ.js";
import { c as createLucideIcon, L as Layout, m as motion, I as Instagram, F as Facebook } from "./Layout-BE7aCRPw.js";
import { C as CircleCheck } from "./circle-check-BYWx5eCe.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = React.createContext && /* @__PURE__ */ React.createContext(DefaultContext);
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ React.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ React.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ React.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ React.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ React.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}
function SiWhatsapp(props) {
  return GenIcon({ "attr": { "role": "img", "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }, "child": [] }] })(props);
}
const SUBJECTS = [
  { value: "watch-inquiry", label: "Watch Inquiry" },
  { value: "order-support", label: "Order Support" },
  { value: "general-question", label: "General Question" },
  { value: "partnership", label: "Partnership" }
];
const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    lines: ["47-B, Model Town Extension", "Lahore, Punjab, Pakistan"]
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["info@mqstore.pk"]
  },
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+92 300 1234567"]
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon – Sat: 10:00 AM – 8:00 PM", "Sunday: Closed"]
  }
];
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [submitting, setSubmitting] = reactExports.useState(false);
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  async function handleSubmit(e) {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-36 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 pointer-events-none",
          "aria-hidden": "true",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10",
              style: {
                background: "radial-gradient(ellipse at center, #D4AF37 0%, transparent 70%)"
              }
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-8 text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: "easeOut" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent-gold text-xs tracking-[0.35em] uppercase mb-4", children: "We'd love to hear from you" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight", children: [
              "Get in ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-gold italic", children: "Touch" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider w-24 mx-auto my-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed", children: "Whether you're looking for your first luxury timepiece or have a question about an order, our team is here to assist you with personalized service." })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, ease: "easeOut" },
          className: "flex flex-col gap-8",
          "data-ocid": "contact.info_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold text-foreground mb-2", children: "Our Contact Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-divider w-16 mb-6" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", children: contactDetails.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.1, duration: 0.5 },
                className: "flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-smooth group",
                "data-ocid": `contact.info_item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-accent/30 group-hover:border-accent/60 group-hover:bg-accent/10 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { size: 16, className: "text-accent-gold" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1", children: item.label }),
                    item.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-foreground text-sm leading-relaxed",
                        children: line
                      },
                      line
                    ))
                  ] })
                ]
              },
              item.label
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4", children: "Follow Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", "data-ocid": "contact.social_links", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://instagram.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Instagram",
                    "data-ocid": "contact.instagram_link",
                    className: "w-11 h-11 rounded-full flex items-center justify-center border border-border hover:border-accent/60 hover:bg-accent/10 text-muted-foreground hover:text-accent-gold transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 17 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://facebook.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Facebook",
                    "data-ocid": "contact.facebook_link",
                    className: "w-11 h-11 rounded-full flex items-center justify-center border border-border hover:border-accent/60 hover:bg-accent/10 text-muted-foreground hover:text-accent-gold transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 17 })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://wa.me/923001234567",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "WhatsApp",
                    "data-ocid": "contact.whatsapp_link",
                    className: "w-11 h-11 rounded-full flex items-center justify-center border border-border hover:border-accent/60 hover:bg-accent/10 text-muted-foreground hover:text-accent-gold transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiWhatsapp, { size: 16 })
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, ease: "easeOut" },
          "data-ocid": "contact.form_panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border-2 border-accent/20 p-8 md:p-10 shadow-luxury relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-5",
                style: {
                  background: "radial-gradient(circle, #D4AF37, transparent)",
                  transform: "translate(40%, -40%)"
                },
                "aria-hidden": "true"
              }
            ),
            submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.4 },
                className: "flex flex-col items-center justify-center py-12 text-center gap-5",
                "data-ocid": "contact.success_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center border-2 border-accent/50 bg-accent/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 32, className: "text-accent-gold" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Message Sent!" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto", children: "Thank you! We'll get back to you within 24 hours." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: resetForm,
                      "data-ocid": "contact.send_another_button",
                      className: "btn-gold px-6 py-2.5 rounded-lg text-xs mt-2",
                      children: "Send Another Message"
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-1", children: "Send a Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Fill in the form and we'll respond promptly." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: handleSubmit,
                  className: "flex flex-col gap-5",
                  "data-ocid": "contact.form",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "contact-name",
                          className: "text-xs tracking-[0.15em] uppercase text-muted-foreground",
                          children: [
                            "Full Name ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-gold", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "contact-name",
                          name: "name",
                          type: "text",
                          required: true,
                          autoComplete: "name",
                          value: form.name,
                          onChange: handleChange,
                          placeholder: "Your full name",
                          "data-ocid": "contact.name_input",
                          className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            htmlFor: "contact-email",
                            className: "text-xs tracking-[0.15em] uppercase text-muted-foreground",
                            children: [
                              "Email ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-gold", children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "contact-email",
                            name: "email",
                            type: "email",
                            required: true,
                            autoComplete: "email",
                            value: form.email,
                            onChange: handleChange,
                            placeholder: "you@example.com",
                            "data-ocid": "contact.email_input",
                            className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            htmlFor: "contact-phone",
                            className: "text-xs tracking-[0.15em] uppercase text-muted-foreground",
                            children: [
                              "Phone",
                              " ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50 normal-case tracking-normal", children: "(optional)" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            id: "contact-phone",
                            name: "phone",
                            type: "tel",
                            autoComplete: "tel",
                            value: form.phone,
                            onChange: handleChange,
                            placeholder: "+92 300 0000000",
                            "data-ocid": "contact.phone_input",
                            className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth"
                          }
                        )
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "contact-subject",
                          className: "text-xs tracking-[0.15em] uppercase text-muted-foreground",
                          children: [
                            "Subject ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-gold", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          id: "contact-subject",
                          name: "subject",
                          required: true,
                          value: form.subject,
                          onChange: handleChange,
                          "data-ocid": "contact.subject_select",
                          className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth appearance-none cursor-pointer",
                          style: { colorScheme: "dark" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "option",
                              {
                                value: "",
                                disabled: true,
                                className: "bg-popover text-muted-foreground",
                                children: "Select a subject"
                              }
                            ),
                            SUBJECTS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "option",
                              {
                                value: s.value,
                                className: "bg-popover text-foreground",
                                children: s.label
                              },
                              s.value
                            ))
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "label",
                        {
                          htmlFor: "contact-message",
                          className: "text-xs tracking-[0.15em] uppercase text-muted-foreground",
                          children: [
                            "Message ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-gold", children: "*" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          id: "contact-message",
                          name: "message",
                          required: true,
                          rows: 5,
                          value: form.message,
                          onChange: handleChange,
                          placeholder: "Tell us how we can help you…",
                          "data-ocid": "contact.message_textarea",
                          className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-smooth resize-none"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "submit",
                        disabled: submitting || !form.name || !form.email || !form.subject || !form.message,
                        "data-ocid": "contact.submit_button",
                        className: "btn-gold w-full py-4 rounded-lg flex items-center justify-center gap-2 mt-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none",
                        children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 rounded-full border-2 border-current/30 border-t-current animate-spin" }),
                          "Sending…"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 14 }),
                          "Send Message"
                        ] })
                      }
                    )
                  ]
                }
              )
            ] })
          ] })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "relative rounded-2xl overflow-hidden border-2 border-accent/20 bg-card shadow-luxury",
        "data-ocid": "contact.store_map",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "h-64 md:h-80 flex items-center justify-center relative",
            style: {
              background: "linear-gradient(135deg, oklch(0.12 0 0) 0%, oklch(0.1 0 0) 100%)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-[0.06]",
                  style: {
                    backgroundImage: "repeating-linear-gradient(0deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #D4AF37 0, #D4AF37 1px, transparent 1px, transparent 40px)"
                  },
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-4 z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-accent/20 border-2 border-accent/50 flex items-center justify-center shadow-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 24, className: "text-accent-gold" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent animate-ping opacity-75" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center px-6 py-4 rounded-xl bg-background/70 backdrop-blur-sm border border-accent/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-accent-gold mb-1", children: "Our Store" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold text-foreground", children: "MQstore — Lahore" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1", children: "47-B, Model Town Extension, Lahore, Punjab, Pakistan" })
                ] })
              ] })
            ]
          }
        )
      }
    ) }) })
  ] });
}
export {
  Contact as default
};
