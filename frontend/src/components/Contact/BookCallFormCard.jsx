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

const BookCallFormCard = ({ variants, data, onChange, onSubmit }) => (
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
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-black/80 mb-1">
          Preferred Date & Time
        </label>
        <Input
          name="datetime"
          type="datetime-local"
          value={data.datetime}
          onChange={onChange}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white ring-1 ring-black/10 transition-colors hover:bg-black/90"
        >
          Book a Call
        </button>
      </div>
    </form>
  </motion.div>
);

export default BookCallFormCard;
