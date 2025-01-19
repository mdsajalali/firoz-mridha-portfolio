import Container from "./shared/Container";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="bg-blue-700 text-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-4  py-10">
          {/* Image 1 */}
          <a
            href="#"
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <Image
              src="/champ.jpg"
              alt="Gallery 1"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </a>

          {/* Image 2 */}
          <a
            href="#"
            className="w-full md:w-1/2 flex items-center justify-center"
          >
            <Image
              src="/leaning.jpeg"
              alt="Gallery 2"
              width={500}
              height={500}
              className="rounded-lg object-cover lg:mt-[200px]"
            />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
