"use client";
import { useState } from "react";
import { Menu, X, Mail, Twitter, Linkedin } from "lucide-react";
import Container from "./shared/Container";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <header className="text-white">
        <nav className="flex items-center justify-between py-4">
          {/* Brand */}
          <h1 className="text-lg font-semibold">Firoz Mridha</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
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

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="mailto:example@gmail.com"
                className="hover:text-gray-300"
                aria-label="Gmail"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

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
          className={`fixed inset-y-0 right-0 w-3/4 bg-blue-700 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
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

            {/* Social Icons in Sidebar */}
            <div className="flex space-x-4 px-6 mt-8">
              <a
                href="mailto:example@gmail.com"
                className="hover:text-gray-300"
                aria-label="Gmail"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}
