import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface SliderArrowBtnProps {
  direction: "left" | "right";
  className?: string;
}

const SliderArrowBtn = ({ direction, className }: SliderArrowBtnProps) => {
  return (
    <div
      className={`${className} flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-black hover:bg-blue-600 bg-[#F4F8FF] text-2xl text-black transition-colors duration-300 hover:bg-primary hover:text-white sm:h-12 sm:w-12`}
    >
      {direction === "left" ? <GoArrowLeft /> : <GoArrowRight />}
    </div>
  );
};

export default SliderArrowBtn;
