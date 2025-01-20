import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface SliderArrowBtnProps {
  direction: "left" | "right";
  className?: string;
}

const SliderArrowBtn = ({ direction, className }: SliderArrowBtnProps) => {
  return (
    <div
      className={`${className} flex h-9 w-9 cursor-pointer items-center justify-center rounded-full    bg-primary text-2xl text-white hover:bg-gray-300 transition-colors duration-300    hover:text-white sm:h-12 sm:w-12`}
    >
      {direction === "left" ? <GoArrowLeft /> : <GoArrowRight />}
    </div>
  );
};

export default SliderArrowBtn;
