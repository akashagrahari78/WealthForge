import React from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "./faq.data";
import { Link } from "react-router-dom";

const FAQSection = ({ inverted = false, singleOpen = true }) => {
  const [openIndex, setOpenIndex] = React.useState(singleOpen ? 0 : -1);
  const [openSet, setOpenSet] = React.useState(new Set([0])); // for multi-open if needed

  const toggle = (i) => {
    if (singleOpen) {
      setOpenIndex((cur) => (cur === i ? -1 : i));
    } else {
      setOpenSet((cur) => {
        const next = new Set(cur);
        next.has(i) ? next.delete(i) : next.add(i);
        return next;
      });
    }
  };

  const bg = inverted ? "bg-black" : "bg-white";
  const headingMuted = inverted ? "text-white/70" : "text-black/70";
  const headingText = inverted ? "text-white" : "text-black";

  return (
    <section className={`${bg} py-16 md:py-20`}>
      <div className="mx-auto w-[92%] md:w-[86%] max-w-5xl">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <p
            className={`text-sm md:text-base uppercase tracking-[0.18em] ${headingMuted}`}
          >
            FAQ
          </p>
          <h2
            className={`mt-2 text-3xl md:text-4xl font-semibold font-bricolage ${headingText}`}
          >
            Frequently asked questions
          </h2>
          <p className={`mt-3 text-sm md:text-base ${headingMuted} font-quicksand`}>
            Answers to common questions about pricing, process, and support.
          </p>
        </div>

        {/* List */}
        <div className="space-y-4 md:space-y-5">
          {faqs.map((f, i) => {
            const isOpen = singleOpen ? openIndex === i : openSet.has(i);
            return (
              <AccordionItem
                key={i}
                id={i}
                isOpen={isOpen}
                onToggle={() => toggle(i)}
                q={f.q}
                a={f.a}
                inverted={inverted}
              />
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className={[
              "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium ring-1 transition",
              inverted
                ? "bg-white text-black ring-white/20 hover:bg-white/90"
                : "bg-black text-white ring-black/10 hover:bg-black/90",
            ].join(" ")}
          >
            Still need help? Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
