import Image from "next/image";
import React from "react";
import Container from "./shared/Container";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center gap-5 px-6 md:px-10 py-10 md:py-20">
        <Image
          src="/firoz-mridha.png"
          alt="Firoz mridha"
          width={500}
          height={500}
          className="rounded-md"
        />
        <p className="text-2xl md:text-4xl font-medium text-center md:text-left">
          Graduate of USC’s Master of Science in Entrepreneurship and Innovation
          program and UPenn alum, passionate about a career in tech, sports, and
          music.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
