"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2677A9]/5 rounded-l-[4rem] hidden lg:block"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="md:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about.jpg"
              alt="Property Management Team"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-[#2677A9]">Barb Holdings LLC</span>
          </h2>

          <p className="text-gray-700 leading-relaxed font-[Inter] mb-6">
            <strong>Barb Holdings LLC</strong> is a modern property management
            company committed to transparency, efficiency, and maximizing
            returns for our clients. We combine the reliability of local
            expertise with the innovation of modern technology to simplify
            property ownership.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            What Sets Us Apart
          </h3>

          <ul className="space-y-3 text-gray-700 font-[Inter]">
            <li className="flex items-start gap-2">
              <span className="text-[#2677A9] font-bold">•</span> Clear
              financial reporting and monthly statements
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2677A9] font-bold">•</span> Trusted
              maintenance and contractor network
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#2677A9] font-bold">•</span> Thorough
              tenant screening and lease management
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
