import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f8fafc] border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        {/* Logo + Tagline */}
        <div className="flex items-center gap-4">
          {/* Replace with your actual logo */}
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.png"
              alt="Barb Holdings Logo"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Barb Holdings LLC
            </h3>
            <p className="text-sm text-gray-600">
              Managing properties with precision and care.
            </p>
          </div>
        </div>

        {/* Quick Links (optional but professional) */}
        <div className="hidden md:flex flex-col text-sm text-gray-600 space-y-2">
          <a href="#home" className="hover:text-[#2677A9] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#2677A9] transition-colors">
            About
          </a>
          <a
            href="#services"
            className="hover:text-[#2677A9] transition-colors"
          >
            Services
          </a>
          <a href="#contact" className="hover:text-[#2677A9] transition-colors">
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-600 text-center md:text-right">
          <p>
            © {new Date().getFullYear()} Barb Holdings LLC. All rights reserved.
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:info@barbholdings.com"
              className="text-[#2677A9] hover:underline transition-colors"
            >
              info@barbholdings.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
