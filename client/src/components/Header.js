import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Calendar, ArrowRight } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(true);
  };

  // Helper function for active/inactive desktop navigation link styles
  const navLinkStyles = ({ isActive }) =>
    `relative py-2 text-sm font-semibold tracking-wide transition-all duration-300 outline-none
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#A66E28] after:origin-center after:transition-transform after:duration-300
    ${
      isActive
        ? "text-[#A66E28] after:scale-x-100"
        : "text-gray-600 hover:text-gray-900 after:scale-x-0 hover:after:scale-x-100"
    }`;

  // Helper function for mobile links
  const mobileLinkStyles = ({ isActive }) =>
    `text-lg font-bold tracking-wider transition-all duration-200 block py-2 px-6 rounded-xl
    ${
      isActive
        ? "text-[#A66E28] bg-amber-50/60"
        : "text-gray-700 hover:text-gray-950 hover:bg-gray-50"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all">
      {/* 1. Subtle, High-Conversion Top Announcement Banner */}
      <div className="bg-gradient-to-r from-[#A66E28] via-[#C58B3A] to-[#A66E28] text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 font-medium">
          <Calendar className="h-4 w-4 shrink-0 opacity-90" />
          <span>Upcoming Session on 15 March</span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 font-bold underline hover:text-amber-100 transition ml-1"
          >
            Register Now <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Soniya Pachauri Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="group flex items-center py-1"
          >
            <span className="text-xl sm:text-2xl font-serif font-semibold tracking-wide text-gray-900 group-hover:text-[#A66E28] transition-colors duration-300">
              Soniya Pachauri
            </span>
          </Link>

          {/* Desktop Navigation Link List */}
          <nav className="hidden md:flex items-center gap-x-8">
            <NavLink className={navLinkStyles} end to="/">
              Home
            </NavLink>
            <NavLink className={navLinkStyles} to="/sessions">
              Sessions
            </NavLink>
            <NavLink className={navLinkStyles} to="/aboutus">
              About
            </NavLink>
            <NavLink className={navLinkStyles} to="/contact">
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Toggle Action */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none transition"
            >
              {!open ? (
                <X className="h-6 w-6 stroke-[2.5]" />
              ) : (
                <Menu className="h-6 w-6 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Dropdown Mobile Overlay */}
      {!open && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-300 ease-out md:hidden z-40">
          <ul className="flex flex-col gap-y-3 px-6 py-8">
            <li>
              <NavLink
                className={mobileLinkStyles}
                end
                to="/"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={mobileLinkStyles}
                to="/sessions"
                onClick={handleLinkClick}
              >
                Sessions
              </NavLink>
            </li>
            <li>
              <NavLink
                className={mobileLinkStyles}
                to="/aboutus"
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={mobileLinkStyles}
                to="/contact"
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
