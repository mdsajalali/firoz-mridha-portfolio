"use client";
import { useState } from "react";
import { Menu, X, Mail, Twitter, Linkedin } from "lucide-react";
import Container from "./shared/Container";
import Link from "next/link";

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
          <Link href="/" className="text-lg font-semibold">
            Firoz Mridha
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:underline">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="resume" className="hover:underline">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/internship" className="hover:underline">
                  Resources
                </Link>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link
                href="mailto:example@gmail.com"
                className="hover:text-gray-300"
                aria-label="Gmail"
              >
                <Mail size={20} />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
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
          className={`fixed inset-y-0 right-0 w-3/4 bg-primary text-white transform ${
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
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:underline">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:underline">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/internship" className="hover:underline">
                  Resources
                </Link>
              </li>
            </ul>

            {/* Social Icons in Sidebar */}
            <div className="flex space-x-4 px-6 mt-8">
              <Link
                href="mailto:example@gmail.com"
                className="hover:text-gray-300"
                aria-label="Gmail"
              >
                <Mail size={24} />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
}
