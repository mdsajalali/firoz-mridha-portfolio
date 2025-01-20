import Container from "@/components/shared/Container";
import Link from "next/link";
import React from "react";

const page = () => {
  const projects = [
    {
      title: "The Sideline Post",
      role: "Founder, Editor-in-Chief",
      description: `The Sideline Post is the first-ever centralized platform for college athletes, like me, to share their stories through their own words. Inspired by the Players’ Tribune. The Sideline Post was born in April of 2020 during my freshman year at Penn. Since its inception, we have published 50+ full-length stories from athletes around the world, representing a wide range of universities and sports.`,
      link: "https://www.thesidelinepost.com/",
    },
    {
      title: "Project Alpha",
      role: "Lead Developer",
      description:
        "Project Alpha is a cutting-edge platform that revolutionizes the way data is processed in real-time.",
      link: "/project-alpha",
    },
    {
      title: "AppX",
      role: "UI/UX Designer",
      description:
        "AppX is a mobile app designed to enhance user experience with intuitive navigation and modern aesthetics.",
      link: "/appx",
    },
    {
      title: "Team Tracker",
      role: "Product Manager",
      description:
        "Team Tracker helps teams manage their projects, deadlines, and communication all in one place.",
      link: "/team-tracker",
    },
    {
      title: "Smart Home Hub",
      role: "Backend Developer",
      description:
        "A system that connects and controls smart home devices to streamline home automation.",
      link: "/smart-home-hub",
    },
  ];

  return (
    <Container>
      <div className="py-10 md:py-20">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <h2 className="text-xl font-medium">(both serious and fun!)</h2>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center p-6 shadow-lg rounded-lg"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <h4 className="text-lg font-medium text-gray-300">
                  {project.role}
                </h4>
                <p className="mt-4 text-sm  ">{project.description}</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-4">
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Visit Website
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default page;
