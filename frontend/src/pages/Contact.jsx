import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactHeader from "../components/contact/ContactHeader";
import ContactFormCard from "../components/contact/ContactFormCard";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import BookCallHeader from "../components/contact/BookCallHeader";
import BookCallFormCard from "../components/contact/BookCallFormCard";
import BookCallTipsCard from "../components/contact/BookCallTipsCard";
import Navbar from "../components/Hero/Navbar";
import Footer from "../components/Footer/Footer";

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
  });

  // Booking form state
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    datetime: "",
  });

  const onChangeContact = (e) => {
    const { name, value } = e.target;
    setContactData((d) => ({ ...d, [name]: value }));
  };

  const onChangeBooking = (e) => {
    const { name, value } = e.target;
    setBookingData((d) => ({ ...d, [name]: value }));
  };

  const submitContact = async (e) => {
    e.preventDefault();
    // TODO: call API
    // reset example
    setContactData({ name: "", email: "", phone: "", message: "" });
  };

  const submitBooking = async (e) => {
    e.preventDefault();
    // TODO: call API
    // reset example
    setBookingData({ name: "", email: "", phone: "", datetime: "" });
  };

  return (
    <>
     <Navbar/>
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

            <BookCallFormCard
              variants={fadeUp}
              data={bookingData}
              onChange={onChangeBooking}
              onSubmit={submitBooking}
            />

            <BookCallTipsCard variants={fadeUp} />
          </motion.div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
