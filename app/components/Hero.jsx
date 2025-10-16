"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center"
      style={{ backgroundImage: "url('/hero.jpg')" }} //
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center md:text-left text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-[Playfair_Display]">
          Defining a New Standard of{" "}
          <span className="text-[#2677A9]">Property Management</span>
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-xl leading-relaxed font-[Inter] max-w-2xl">
          At <strong>Barb Holdings LLC</strong>, we manage your property with
          precision, reliability, and care. From operations to tenant
          communication — we make ownership effortless.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-block bg-[#2677A9] text-white px-8 py-3 rounded-md shadow-md hover:bg-[#1f5f86] transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="inline-block border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#2677A9] transition-all duration-200"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
