"use client";
import Container from "@/components/shared/Container";
import { useState } from "react";

const Accordion = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-4 text-left text-lg font-medium text-gray-800"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-600">{children}</div>}
    </div>
  );
};

export default function Home() {
  return (
    <div className=" lg:py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-4 md:space-y-0 md:space-x-6">
          <img
            src="/google_logo.png"
            alt="Google Logo"
            className="w-24 md:w-32 h-auto"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-white">Internships</h1>
            <p className="text-lg text-gray-300 mt-2">
              A resource for all students looking to intern for Google and for
              general tips/advice
            </p>
          </div>
        </div>
      </Container>
      <div className=" pb-10  text-white">
        {/* Header */}
        <header className="text-center py-10">
          <div className="text-5xl font-bold">Internships</div>
          <p className="mt-4 px-1 text-lg">
            A resource for all students looking to intern for Google and for
            general tips/advice
          </p>
        </header>

        {/* Main Section */}
        <main className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Section */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">My Experiences</h2>
              <p className="text-lg mb-6">
                I have interned for both Allied Universal and City National Bank
                in finance-based roles. I participated in Google&apos;s BOLD
                Immersion program in the summer of 2021 and interned full-time
                for their Large Customer Sales team in Chicago in the summer of
                2022.
              </p>
              <a
                href="#"
                className="text-blue-200 underline hover:text-blue-100"
              >
                Hope to intern for Google one day? Here&apos;s a step-by-step
                outline of my process.
              </a>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="/google.jpeg"
                alt="Google Intern"
                className="rounded-lg shadow-md w-80"
              />
            </div>

            {/* Accordion Section */}
            <section className="mt-16">
              <h2 className="text-3xl font-semibold mb-6">Helpful Resources</h2>
              <Accordion title="Getting the Internship">
                <p>
                  <a
                    href="#"
                    className="text-blue-200 underline hover:text-blue-100"
                  >
                    My step-by-step guide to getting a Google Internship
                  </a>
                </p>
              </Accordion>
              <Accordion title="Interview Prep">
                <p>
                  Detailed preparation tips and resources to ace your
                  interviews.
                </p>
              </Accordion>
              <Accordion title="General Advice">
                <p>
                  Insights and tips for making the most of your internship
                  journey.
                </p>
              </Accordion>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
