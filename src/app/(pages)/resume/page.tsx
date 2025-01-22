"use client";
import { useState } from "react";

const Accordion = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full py-4 text-left text-lg font-medium text-white"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-white">{children}</div>}
    </div>
  );
};

export default function Home() {
  return (
    <div className="md:pt-10 md:pb-20 pb-10 text-white">
      {/* Header */}
      <header className="text-center py-10">
        <div className="text-4xl md:text-5xl font-bold">My Resume</div>
        <p className="mt-4 text-lg md:text-xl">
          A collection of my education, experience, and skills
        </p>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-6 lg:px-20">
        {/* Accordion Section */}
        <section className="md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Accordion title="Education">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">
                    University of Pennsylvania - Class of 2023
                  </h3>
                  <p>
                    Bachelor of Science in Economics with a concentration in
                    Finance and Management
                  </p>
                  <p>Cumulative GPA: 3.5</p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    University of Southern California - Class of 2024
                  </h3>
                  <p>Master of Science in Entrepreneurship and Innovation</p>
                  <p>Cumulative GPA: 3.68</p>
                </div>
              </div>
            </Accordion>

            <Accordion title="Courses I’ve Taken">
              <ul className="list-disc pl-5 space-y-2">
                <li>Corporate Finance</li>
                <li>Investment Management</li>
                <li>Entrepreneurship and Innovation</li>
                <li>Business Strategy</li>
                <li>Data Analytics</li>
              </ul>
            </Accordion>

            <Accordion title="Work Experience">
              <p>Details about my professional experience here.</p>
            </Accordion>

            <Accordion title="Leadership & Extracurriculars">
              <p>
                Details about my leadership roles and extracurricular activities
                here.
              </p>
            </Accordion>

            <Accordion title="Skills">
              <ul className="list-disc pl-5 space-y-2">
                <li>Financial Analysis</li>
                <li>Excel & Data Visualization</li>
                <li>Entrepreneurial Mindset</li>
                <li>Project Management</li>
                <li>Leadership & Teamwork</li>
              </ul>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
}
