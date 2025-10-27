import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from '../components/ServiceDetail/servicesData.js'

export default function ServiceDetail() {
  const { servicename } = useParams();
  const service = servicesData.find((s) => s.slug === servicename);

  // If service not found, redirect to services overview or 404
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <main className="bg-white text-black">
      {/* Hero section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto w-[92%] max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full bg-black/5 px-4 py-1 text-xs font-medium text-black/70 mb-4">
              {service.badge}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-12 md:py-16">
        <div className="mx-auto w-[92%] max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Left: description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-black/70 leading-relaxed">{service.description}</p>
            </div>

            {/* Right: features */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">What's included</h2>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10 text-xs">
                      ✓
                    </span>
                    <span className="text-black/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              to={service.ctaLink}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-black text-white hover:bg-black/90 transition"
            >
              {service.ctaText}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-white text-black ring-1 ring-black/10 hover:bg-black/5 transition"
            >
              Ask a question
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ or related services (optional) */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto w-[92%] max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Explore other services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {servicesData
              .filter((s) => s.slug !== servicename)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black ring-1 ring-black/10 hover:bg-black hover:text-white transition"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
