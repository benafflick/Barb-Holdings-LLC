"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#f9fafb] py-20">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('/images/contact-bg.jpg')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Get in <span className="text-[#2677A9]">Touch</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[Inter]">
          We’re here to answer your questions and help you manage your property
          with confidence.
        </p>

        {/* CONTACT GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* ADDRESS */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <MapPin className="text-[#2677A9]" size={32} />
            <h4 className="mt-4 font-semibold text-gray-900 ">
              Office Address
            </h4>
            <p className="mt-2 text-sm text-gray-600 font-[Inter] leading-relaxed">
              Address: 122 Cutters Ln, Clinton, TN 37716
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <Phone className="text-[#2677A9]" size={32} />
            <h4 className="mt-4 font-semibold text-gray-900 ">Call Us</h4>
            <p className="mt-2 text-sm text-gray-600 font-[Inter] leading-relaxed">
              +1 (443) 735-1393 <br /> Mon–Sat, 8:00 AM – 6:00 PM
            </p>
          </div>

          {/* EMAIL */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <Mail className="text-[#2677A9]" size={32} />
            <h4 className="mt-4 font-semibold text-gray-900 ">Email</h4>
            <p className="mt-2 text-sm text-gray-600 font-[Inter] leading-relaxed">
              info@barbholdllc.com
            </p>
          </div>

          {/* HOURS */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
            <Clock className="text-[#2677A9]" size={32} />
            <h4 className="mt-4 font-semibold text-gray-900 ">Office Hours</h4>
            <p className="mt-2 text-sm text-gray-600 font-[Inter] leading-relaxed">
              Monday – Friday <br /> 8:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="mt-16">
          <a
            href="tel:+14437351393"
            className="inline-block bg-[#2677A9] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1d5c84] transition-colors duration-300 font-[Inter]"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
