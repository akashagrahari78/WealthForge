import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import api from "../hooks/api.js";
import ContactHeader from "../components/Contact/ContactHeader.jsx";
import ContactFormCard from "../components/Contact/ContactFormCard.jsx";
import ContactInfoCard from "../components/Contact/ContactInfoCard.jsx";
import BookCallHeader from "../components/Contact/BookCallHeader.jsx";
import BookCallTipsCard from "../components/Contact/BookCallTipsCard.jsx";
import Navbar from "../components/Hero/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const stagger = { show: { transition: { staggerChildren: 0.08 } } };

export default function ContactPage() {
  // Contact form state
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  }); const [isSubmitting, setIsSubmitting] = useState(false);

  const onChangeContact = (e) => {
    const { name, value } = e.target;
    setContactData((d) => ({ ...d, [name]: value }));
  };

  const submitContact = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requestPromise = api.post(
      "/user/contact",
      contactData,
      { headers: { "Content-Type": "application/json" } }
    );

    toast.promise(requestPromise, {
      loading: "Sending your message...",
      success: () => {
        setContactData({ name: "", email: "", phone: "", message: "" });
        setIsSubmitting(false);
        return "Message sent successfully!";
      },
      error: (error) => {
        setIsSubmitting(false);
        return error.response?.data?.message || "Something went wrong!";
      },
    });
  };

  // --- submitBooking REMOVED ---

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black">
        {/* Contact Section */}
        <section className="mx-auto w-[92%] md:w-[86%] max-w-6xl pt-20 pb-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          >
            <ContactHeader variants={fadeUp} />

            <ContactFormCard
              variants={fadeUp}
              data={contactData}
              onChange={onChangeContact}
              onSubmit={submitContact}
              isSubmitting={isSubmitting}
            />

            <ContactInfoCard variants={fadeUp} />
          </motion.div>
        </section>

        {/* Book a Call Section */}
        <section className="bg-gradient-to-b from-white to-[#f6f7fb] py-14">
          <div className="mx-auto w-[92%] md:w-[86%] max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8"
            >
              <BookCallHeader variants={fadeUp} />


              <motion.div
                variants={fadeUp}
                className="lg:col-span-3 bg-white p-8 rounded-lg shadow-lg flex flex-col items-start justify-center h-full"
              >
                <h3 className="text-2xl font-semibold mb-4 text-black">
                  Ready to Talk?
                </h3>
                <p className="text-gray-600 mb-8">
                  Use our automated calendar to instantly find a time that
                  works for you. No more waiting for email replies.
                </p>
                <Link
                  to="/book"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white ring-1 ring-black/10 transition-colors hover:bg-black/90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Free Call
                </Link>
              </motion.div>


              <BookCallTipsCard variants={fadeUp} />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}