import React from "react";
import { motion } from "framer-motion";

const Input = (props) => (
  <input
    {...props}
    className={
      "w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm text-black placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20 " +
      (props.className || "")
    }
  />
);

const TextArea = (props) => (
  <textarea
    {...props}
    className={
      "w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm text-black placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20 " +
      (props.className || "")
    }
  />
);

const ContactFormCard = ({ variants, data, onChange, onSubmit, isSubmitting }) => {
  return (
    <motion.div
      variants={variants}
      className="lg:col-span-3 rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5 md:p-6"
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-black/80 mb-1">Name</label>
          <Input
            name="name"
            value={data.name}
            onChange={onChange}
            placeholder="Full name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-black/80 mb-1">Email</label>
            <Input
              name="email"
              type="email"
              value={data.email}
              onChange={onChange}
              placeholder="name@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm text-black/80 mb-1">Phone</label>
            <Input
              name="phone"
              type="tel"
              value={data.phone}
              onChange={onChange}
              placeholder="+91 XXXXX XXXXX"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-black/80 mb-1">Message</label>
          <TextArea
            name="message"
            rows={4}
            value={data.message}
            onChange={onChange}
            placeholder="How can we help?"
            disabled={isSubmitting}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors ${isSubmitting
                ? "bg-black/60 text-white/90 cursor-not-allowed"
                : "bg-black text-white hover:bg-black/90 ring-1 ring-black/10"
              }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactFormCard;
