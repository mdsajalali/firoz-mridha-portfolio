import React from "react";
import Hero from "../components/Hero";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Gallery />
      <Testimonial />
    </>
  );
};

export default page;
