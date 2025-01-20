import Container from "@/components/shared/Container";
import Link from "next/link";
import React from "react";

const page = () => {
  const images = [
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 1",
      description: "This is the first sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",  
    },
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 2",
      description: "This is the second sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",
    },
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 3",
      description: "This is the third sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",
    },
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 4",
      description: "This is the fourth sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",
    },
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 5",
      description: "This is the fifth sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",
    },
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 6",
      description: "This is the sixth sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",
    },
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 7",
      description: "This is the seventh sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",
    },
    {
      src: "/penntoday.jpeg",
      alt: "Sample Image 8",
      description: "This is the eighth sample image description.",
      link: "https://penntoday.upenn.edu/news/kayla-padilla-leads-example-penn-basketball",
    },
  ];

  return (
    <div className="py-10">
      <Container>
        <h1 className="text-2xl font-bold text-center ">Media</h1>
        <p className="text-[18px] font-medium text-center mb-8">
          Click on each picture to learn more
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Link href={image.link} target="_blank">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4">
                <p className="text-sm text-gray-700">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default page;
