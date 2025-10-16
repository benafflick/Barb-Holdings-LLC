"use client";
import { Wrench, Users, FileText } from "lucide-react"; // Using lucide-react icons

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
          Our <span className="text-[#2677A9]">Services</span>
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[Inter]">
          Comprehensive property management solutions tailored to simplify
          ownership and maximize returns.
        </p>

        {/* SERVICE CARDS */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2677A9]">
            <div className="flex justify-center mb-5">
              <Users className="text-[#2677A9]" size={40} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 ">
              Tenant Management
            </h4>
            <p className="mt-3 text-gray-600 text-sm font-[Inter] leading-relaxed">
              From screening to rent collection, we handle every aspect of
              tenant management — ensuring smooth and professional
              communication.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2677A9]">
            <div className="flex justify-center mb-5">
              <Wrench className="text-[#2677A9]" size={40} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 ">
              Maintenance & Repairs
            </h4>
            <p className="mt-3 text-gray-600 text-sm font-[Inter] leading-relaxed">
              We coordinate with trusted professionals to keep your property in
              top condition — prompt, reliable, and efficient service.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2677A9]">
            <div className="flex justify-center mb-5">
              <FileText className="text-[#2677A9]" size={40} />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 ">
              Financial Reporting
            </h4>
            <p className="mt-3 text-gray-600 text-sm font-[Inter] leading-relaxed">
              Receive detailed statements and transparent expense tracking —
              keeping you informed with accurate, timely insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
