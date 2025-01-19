"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import Container from "./shared/Container";

const Testimonial = () => {
  return (
    <div className="bg-blue-700 text-white py-10">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold mb-4">What People Say</h2>
          <p className="text-lg">
            Hear from those who have experienced our services and offerings.
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-blue-600 p-6 rounded-lg">
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                <p className="text-lg lg:px-20 px-4">
                  "This platform has been a game-changer for me. The experience
                  was seamless, and I highly recommend it to anyone looking for
                  quality and professionalism."
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-blue-600 p-6 rounded-lg">
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
                <p className="text-lg lg:px-20 px-4">
                  "An incredible service with attention to detail. My
                  expectations were exceeded, and I couldn't be happier."
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonial;
