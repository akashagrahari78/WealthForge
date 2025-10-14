import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const BASE_FAQS = [
  { q: "How do you charge for your services?", a: "Transparent pricing with no hidden fees. Depending on the engagement, we work on either a fixed advisory fee or disclosed commissions as per AMFI/SEBI norms. You always see how we are compensated." },
  { q: "How do you select funds and other products?", a: "We use risk profiling, goal timelines, and research screens (cost, consistency, drawdown, mandate) to shortlist and rebalance. Portfolios are tailored to your goals, not to products." },
  { q: "Can I withdraw or pause my investments?", a: "Yes. SIPs can be paused and lumpsums redeemed as per the product’s exit rules. We help you plan liquidity and tax impact before any action." },
  { q: "How often do you review the plan?", a: "Quarterly touchpoints with on-demand reviews when life events change. Rebalancing is rule-based to maintain your target allocation." },
  { q: "Is my data secure?", a: "We follow industry best practices for data privacy and access control. Only essential information is collected and used strictly for onboarding and advice." },
];

const Chevron = ({ open, color = "#000" }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    animate={{ rotate: open ? 180 : 0 }}
    transition={{ duration: 0.2 }}
  >
    <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </motion.svg>
);

const Item = ({ i, q, a, open, onToggle, inverted }) => {
  const text = inverted ? "text-white" : "text-black";
  const sub = inverted ? "text-white/70" : "text-black/70";
  const sep = inverted ? "border-white/10" : "border-black/10";
  const hover = inverted ? "hover:bg-white/5" : "hover:bg-black/5";

  return (
    <div className={`border-b ${sep} last-of-type:border-b-0`}>
      <button
        aria-expanded={open}
        aria-controls={`faq-panel-${i}`}
        id={`faq-button-${i}`}
        onClick={onToggle}
        className={[
          "w-full flex items-start text-left justify-between gap-4 py-4 md:py-5 px-6 md:px-8",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          inverted ? "focus-visible:ring-white/30 focus-visible:ring-offset-black" : "focus-visible:ring-black/30 focus-visible:ring-offset-white",
          hover,
        ].join(" ")}
      >
        <span className={`text-base md:text-lg font-semibold ${text}`}>{q}</span>
        <span className={`inline-flex flex-shrink-0 h-8 w-8 items-center justify-center rounded-full ${inverted ? "bg-white/10" : "bg-black/5"}`}>
          <Chevron open={open} color={inverted ? "#fff" : "#000"} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-button-${i}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className={`pb-5 pr-8 md:pb-6 pl-6 md:pl-8 ${sub}`}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSectionPro = ({ inverted = false, data = BASE_FAQS }) => {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(-1); // Start with no items open

  const bg = inverted ? "bg-black" : "bg-white";
  const text = inverted ? "text-white" : "text-black";
  const sub = inverted ? "text-white/70" : "text-black/70";
  const chip = inverted ? "bg-white/10 text-white" : "bg-black/5 text-black";
  const gradient = inverted ? "from-black via-black to-transparent" : "from-white via-[#f7f7fb] to-transparent";

  const filtered = data.filter(
    (f) =>
      f.q.toLowerCase().includes(query.toLowerCase()) ||
      f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className={`${bg} py-16 md:py-20 relative`}>
      {/* soft backdrop */}
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${gradient}`} />

      <div className="relative mx-auto w-[92%] md:w-[86%] max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
          {/* Sticky intro panel */}
          <aside className="lg:sticky lg:top-20 h-fit">
            <p className={`text-sm md:text-base uppercase tracking-[0.18em] ${sub}`}>FAQ</p>
            <h2 className={`mt-2 text-3xl md:text-4xl font-semibold ${text}`}>Frequently asked questions</h2>
            <p className={`mt-3 text-sm md:text-base ${sub}`}>
              Quick answers about pricing, process, and support. Can’t find what you need?
            </p>

            {/* Search */}
            <div className="mt-5">
              <div className={`flex items-center gap-2 rounded-xl px-3 py-2 ring-1 ${inverted ? "ring-white/15 bg-white/5" : "ring-black/10 bg-white"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${sub}`} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79L20 21.49 21.49 20l-5.99-5.99Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" />
                </svg>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search FAQs"
                  className={`w-full bg-transparent outline-none text-sm md:text-base ${text} placeholder:${sub}`}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Pricing", "Process", "Security", "Tax"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t.toLowerCase())}
                    className={`rounded-full px-3 py-1 text-xs md:text-sm transition-colors ${chip} hover:bg-black/10 dark:hover:bg-white/20`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="/contact"
                  className={[
                    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium ring-1 transition",
                    inverted
                      ? "bg-white text-black ring-white/20 hover:bg-white/90"
                      : "bg-black text-white ring-black/10 hover:bg-black/90",
                  ].join(" ")}
                >
                  Still need help? Contact us
                </a>
              </div>
            </div>
          </aside>

          {/* Right column: accordion */}
          <div className="lg:col-span-2">
            {/* Divider on mobile */}
            <div className={`block lg:hidden -mt-4 mb-6 h-px ${inverted ? "bg-white/10" : "bg-black/10"}`} />

            <div className={`overflow-hidden rounded-2xl ${inverted ? "ring-white/10" : "ring-black/10"} ring-1 ${inverted ? "bg-transparent" : "bg-white"}`}>
              {filtered.length === 0 ? (
                <div className={`p-6 md:p-8 ${sub}`}>No results. Try different keywords.</div>
              ) : (
                filtered.map((f, i) => (
                  <Item
                    key={`${f.q}-${i}`}
                    i={i}
                    q={f.q}
                    a={f.a}
                    open={open === i}
                    onToggle={() => setOpen(open === i ? -1 : i)}
                    inverted={inverted}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionPro;

