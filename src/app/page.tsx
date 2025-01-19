import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Intro from "@/components/Intro";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
};

export default page;
