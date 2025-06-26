import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import img1 from "../../assets/slider_images/avatar.jpg";
import img2 from "../../assets/slider_images/avg_endgame.jpg";
import img3 from "../../assets/slider_images/titanic.jpg";
import img4 from "../../assets/slider_images/inception.jpg";
import img5 from "../../assets/slider_images/lion_king.jpg";
import img6 from "../../assets/slider_images/star_wars.jpg";
import img7 from "../../assets/slider_images/fight_club.jpg";
import img8 from "../../assets/slider_images/avg_endgame.jpg";
import img9 from "../../assets/slider_images/dark_knight.jpg";
import img10 from "../../assets/slider_images/shawshank_red.jpg";

// ...up to img10

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];


const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (sliderRef.current) {
      const scrollAmount = 220;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full cursor-pointer"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide space-x-4 px-10 py-4"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="min-w-[200px] h-[300px] shadow-lg rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src={img}
              alt={`Image ${idx + 1}`}
              className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-md"
            />
          </div>
        ))}

      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md p-2 rounded-full cursor-pointer"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default Slider;