import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-stone-50 border-t border-gray-200/60 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Directory Links Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 border-b border-gray-200/60 text-center md:text-left">
          {/* Column 1: Core Branding Info */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start gap-y-3">
            <Link to="/" className="group inline-block">
              <span className="text-2xl font-serif font-semibold tracking-wide text-gray-900 group-hover:text-[#A66E28] transition-colors duration-300">
                Soniya Pachauri
              </span>
            </Link>
            <p className="text-xs sm:text-sm font-medium text-gray-500 leading-relaxed max-w-sm">
              Reiki Healer • Graphologist • Life Coach • ICH • NLP
            </p>
          </div>

          {/* Column 2: Directory - Top Sessions */}
          <div className="flex flex-col gap-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Top Sessions
            </h3>
            <div className="flex flex-col gap-y-2 text-sm">
              <Link
                to="/sessions/healingandselftransform"
                className="text-gray-500 hover:text-[#A66E28] transition-all duration-200 hover:translate-x-0.5 transform inline-block"
              >
                Self Transformation
              </Link>
            </div>
          </div>

          {/* Column 3: Directory - Services / Platform */}
          <div className="flex flex-col gap-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Services
            </h3>
            <div className="flex flex-col gap-y-2 text-sm">
              <Link
                to="/aboutus"
                className="text-gray-500 hover:text-[#A66E28] transition-all duration-200 hover:translate-x-0.5 transform inline-block"
              >
                About us
              </Link>
            </div>
          </div>

          {/* Column 4: Directory - Support / Connections */}
          <div className="flex flex-col gap-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Connect
            </h3>
            <div className="flex flex-col gap-y-2 text-sm">
              <Link
                to="/contact"
                className="text-gray-500 hover:text-[#A66E28] transition-all duration-200 hover:translate-x-0.5 transform inline-block"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
          {/* Copyright Metadata */}
          <div>© {currentYear} Soniya Pachauri. All rights reserved.</div>

          {/* Creative Accent Badges */}
          <div className="flex items-center gap-1.5 font-medium text-gray-600">
            <span>Made with ❤️ in India</span>
          </div>

          {/* Social Profiles Wrapper */}
          <div className="flex items-center gap-x-4">
            <Link
              to="https://www.instagram.com/soniyapachauri12/"
              target="_blank"
            >
              <img
                src="../../images/instagramsvg.svg"
                alt="instagram"
                className="w-[25px] h-[25px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
