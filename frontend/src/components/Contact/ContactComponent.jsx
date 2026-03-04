// import React, { useContext, useState } from "react";
// import { motion } from "framer-motion";
// import { FiMail, FiTwitter, FiInstagram } from "react-icons/fi";
// import { toast } from "react-toastify";
// import axios from "axios";
// // import { userContext } from "../context/userContext";

// const fadeUp = {
//   hidden: { opacity: 0, y: 16 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
// };

// const stagger = { show: { transition: { staggerChildren: 0.08 } } };

// const ContactComponents = () => {
// //   const { token, backendUrl } = useContext(userContext);

//   // Contact form state
//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   // Booking form state
//   const [bookingData, setBookingData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     datetime: "",
//   });

//   const onChangeContact = (e) => {
//     const { name, value } = e.target;
//     setContactData((d) => ({ ...d, [name]: value }));
//   };

//   const onChangeBooking = (e) => {
//     const { name, value } = e.target;
//     setBookingData((d) => ({ ...d, [name]: value }));
//   };

//   const submitContact = async (e) => {
//     e.preventDefault();
//     // try {
//     //   const res = await axios.post(
//     //     `${backendUrl}/api/user/contact`,
//     //     contactData,
//     //     {
//     //       headers: {
//     //         Authorization: token ? `Bearer ${token}` : undefined,
//     //         "Content-Type": "application/json",
//     //       },
//     //     }
//     //   );
//     //   toast.success(res?.data?.message || "Message sent");
//     //   setContactData({ name: "", email: "", phone: "", message: "" });
//     // } catch (err) {
//     //   console.error(err);
//     //   toast.error(err?.response?.data?.message || err.message || "Failed");
//     // }
//   };

//   const submitBooking = async (e) => {
//     e.preventDefault();
//     // try {
//     //   const res = await axios.post(
//     //     `${backendUrl}/api/user/book-call`,
//     //     bookingData,
//     //     {
//     //       headers: {
//     //         Authorization: token ? `Bearer ${token}` : undefined,
//     //         "Content-Type": "application/json",
//     //       },
//     //     }
//     //   );
//     //   toast.success(res?.data?.message || "Call booked");
//     //   setBookingData({ name: "", email: "", phone: "", datetime: "" });
//     // } catch (err) {
//     //   console.error(err);
//     //   toast.error(err?.response?.data?.message || err.message || "Failed");
//     // }
//   };

//   return (
//     <main className="min-h-screen bg-white text-black">
//       {/* Contact Section */}
//       <section className="mx-auto w-[92%] md:w-[86%] max-w-6xl pt-20 pb-10">
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={stagger}
//           className="grid grid-cols-1 lg:grid-cols-5 gap-8"
//         >
//           <motion.div variants={fadeUp} className="lg:col-span-5">
//             <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
//               Get in Touch
//             </h1>
//             <p className="mt-2 text-sm md:text-base text-black/70">
//               We’d love to hear from you — reach out for any questions about investments, insurance, or mutual funds.
//             </p>
//           </motion.div>

//           {/* Contact form */}
//           <motion.div
//             variants={fadeUp}
//             className="lg:col-span-3 rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5 md:p-6"
//           >
//             <form onSubmit={submitContact} className="space-y-4">
//               <div>
//                 <label className="block text-sm text-black/80 mb-1">Name</label>
//                 <input
//                   name="name"
//                   value={contactData.name}
//                   onChange={onChangeContact}
//                   type="text"
//                   placeholder="Full name"
//                   className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm text-black/80 mb-1">Email</label>
//                   <input
//                     name="email"
//                     value={contactData.email}
//                     onChange={onChangeContact}
//                     type="email"
//                     placeholder="name@email.com"
//                     className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm text-black/80 mb-1">Phone</label>
//                   <input
//                     name="phone"
//                     value={contactData.phone}
//                     onChange={onChangeContact}
//                     type="tel"
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm text-black/80 mb-1">Message</label>
//                 <textarea
//                   name="message"
//                   value={contactData.message}
//                   onChange={onChangeContact}
//                   rows={4}
//                   placeholder="How can we help?"
//                   className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20"
//                 />
//               </div>

//               <div className="pt-2">
//                 <button
//                   type="submit"
//                   className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white ring-1 ring-black/10 transition-colors hover:bg-black/90"
//                 >
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </motion.div>

//           {/* Side info */}
//           <motion.aside
//             variants={fadeUp}
//             className="lg:col-span-2 rounded-2xl border border-black/[0.06] bg-white p-5 md:p-6"
//           >
//             <div className="space-y-5">
//               <div>
//                 <h3 className="text-sm font-semibold">Office</h3>
//                 <p className="mt-1 text-sm text-black/70">
//                   Pragya Financial Services
//                   <br /> 2nd Floor, Business Park
//                   <br /> Mumbai, Maharashtra 400001
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-sm font-semibold">WhatsApp</h3>
//                 <a
//                   href="https://wa.me/919999999999"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="mt-1 inline-block text-sm text-black hover:underline"
//                 >
//                   +91 99999 99999
//                 </a>
//               </div>

//               <div>
//                 <h3 className="text-sm font-semibold">Email</h3>
//                 <a
//                   href="mailto:hello@pragya-fin.com"
//                   className="mt-1 inline-block text-sm text-black hover:underline"
//                 >
//                   hello@pragya-fin.com
//                 </a>
//               </div>

//               <div className="pt-2">
//                 <div className="overflow-hidden rounded-xl border border-black/10">
//                   <iframe
//                     title="Office Map"
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160993329!2d72.7411!3d19.0822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b2a2!2sMumbai!5e0!3m2!1sen!2sin!4v0000000000000"
//                     width="100%"
//                     height="180"
//                     loading="lazy"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     referrerPolicy="no-referrer-when-downgrade"
//                   />
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 pt-2 text-black/70">
//                 <FiMail className="h-5 w-5" />
//                 <FiTwitter className="h-5 w-5" />
//                 <FiInstagram className="h-5 w-5" />
//               </div>
//             </div>
//           </motion.aside>
//         </motion.div>
//       </section>

//       {/* Book a Call Section */}
//       <section className="bg-gradient-to-b from-white to-[#f6f7fb] py-14">
//         <div className="mx-auto w-[92%] md:w-[86%] max-w-6xl">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.15 }}
//             variants={stagger}
//             className="grid grid-cols-1 lg:grid-cols-5 gap-8"
//           >
//             <motion.div variants={fadeUp} className="lg:col-span-5">
//               <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
//                 Book a Free Consultation Call
//               </h2>
//               <p className="mt-2 text-sm md:text-base text-black/70">
//                 Schedule a 15-minute call to discuss your investment goals.
//               </p>
//             </motion.div>

//             {/* Booking form (swap with Calendly embed if desired) */}
//             <motion.div
//               variants={fadeUp}
//               className="lg:col-span-3 rounded-2xl border border-black/[0.06] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-5 md:p-6"
//             >
//               <form onSubmit={submitBooking} className="space-y-4">
//                 <div>
//                   <label className="block text-sm text-black/80 mb-1">Name</label>
//                   <input
//                     name="name"
//                     value={bookingData.name}
//                     onChange={onChangeBooking}
//                     type="text"
//                     placeholder="Full name"
//                     className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm text-black/80 mb-1">Email</label>
//                     <input
//                       name="email"
//                       value={bookingData.email}
//                       onChange={onChangeBooking}
//                       type="email"
//                       placeholder="name@email.com"
//                       className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm text-black/80 mb-1">Phone</label>
//                     <input
//                       name="phone"
//                       value={bookingData.phone}
//                       onChange={onChangeBooking}
//                       type="tel"
//                       placeholder="+91 XXXXX XXXXX"
//                       className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm placeholder-black/40 outline-none focus:ring-2 focus:ring-black/20"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm text-black/80 mb-1">Preferred Date & Time</label>
//                   <input
//                     name="datetime"
//                     value={bookingData.datetime}
//                     onChange={onChangeBooking}
//                     type="datetime-local"
//                     className="w-full rounded-xl border border-black/10 bg-white px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-black/20"
//                   />
//                 </div>

//                 <div className="pt-2">
//                   <button
//                     type="submit"
//                     className="inline-flex h-10 items-center justify-center rounded-full bg-black px-5 text-sm font-medium text-white ring-1 ring-black/10 transition-colors hover:bg-black/90"
//                   >
//                     Book a Call
//                   </button>
//                 </div>
//               </form>
//             </motion.div>

//             <motion.div
//               variants={fadeUp}
//               className="lg:col-span-2 rounded-2xl border border-black/[0.06] bg-white p-5 md:p-6"
//             >
//               <ul className="space-y-3 text-sm text-black/75">
//                 <li>• No fees for the discovery call.</li>
//                 <li>• Conversations are private and secure.</li>
//                 <li>• Bring goals like retirement, education, or tax planning.</li>
//                 <li>• Get a simple next-step plan in 15 minutes.</li>
//               </ul>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ContactComponents;
