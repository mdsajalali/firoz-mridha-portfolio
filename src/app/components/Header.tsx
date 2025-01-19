"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-blue-700 text-white">
      {/* Navbar */}
      <header className="bg-blue-800 text-white">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Brand */}
          <h1 className="text-lg font-semibold">Kayla Padilla</h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 w-3/4 bg-blue-700 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col h-full">
            <button
              className="self-end p-4 text-white focus:outline-none"
              onClick={toggleSidebar}
            >
              <X size={28} />
            </button>
            <ul className="space-y-6 text-lg px-6 mt-6">
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
