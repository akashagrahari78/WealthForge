// src/pages/Book.jsx
import React from "react";
import CalEmbed from "../components/CalEmbed";

const Book = () => {
  return (
    <main className="min-h-[100svh] bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      <section className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Book a Consultation
          </h1>
          <p className="mt-3 text-white/70">
            Choose a time and date that works best for you.
          </p>

         
        </header>

        <div className="mt-8 rounded-2xl ring-1 ring-white/10 shadow-2xl overflow-hidden bg-neutral-950">
          <CalEmbed theme="dark" height={720} />
        </div>

        <p className="mt-6 text-center text-xs text-white/50">
          Powered by Cal.com
        </p>
      </section>
    </main>
  );
};

export default Book;
