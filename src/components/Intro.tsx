import Container from "./shared/Container";

const Intro = () => {
  return (
    <div className="bg-blue-700 text-white">
      <Container>
        <div className="flex flex-col gap-6 px-6 md:px-10 py-10 md:py-16">
          {/* Divider and Title */}
          <div className="flex items-center justify-between">
            <div className="w-24 md:w-48 h-1 bg-white"></div>
            <p className="text-lg font-medium">Intro</p>
            <div className="w-24 md:w-48 h-1 bg-white"></div>
          </div>

          {/* Text Content */}
          <p className="text-lg md:text-2xl leading-relaxed text-justify">
            I was born and raised in Southern California where I grew up in a
            Lakers town and always had good music playing around the house.
            These threads of family, basketball, and music have defined my life
            path and experiences. I received a Master of Science in
            Entrepreneurship and Innovation degree from the University of
            Southern California’s Marshall School of Business in tandem with
            being the starting point guard of the 2023-2024 Elite 8 and PAC-12
            Championship Trojans Women’s Basketball Team. This follows the
            completion of my undergraduate degree at the University of
            Pennsylvania where I earned a Bachelor of Science in Economics with
            concentrations in Finance and Management from the Wharton School of
            Business. At Penn, I was also a four-year member on the Quakers
            Women’s Basketball Team and two-time captain.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Intro;
