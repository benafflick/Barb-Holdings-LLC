"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')", // Replace with your preferred image in /public
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Redefining{" "}
            <span className="text-[#2677A9]">Property Management</span> with
            Excellence
          </h1>
          <p className="mt-6 text-gray-200 max-w-lg mx-auto md:mx-0">
            At{" "}
            <span className="font-semibold text-white">Barb Holdings LLC</span>,
            we simplify property ownership — handling maintenance, tenants, and
            operations while maximizing your investment returns.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-block bg-[#2677A9] text-white px-8 py-3 rounded-md shadow-md hover:bg-[#1f5f87] transition"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="inline-block border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#2677A9] transition"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        {/* Right Side Image (Optional secondary image or floating card) */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-2.jpg"
              alt="Luxury Property"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
