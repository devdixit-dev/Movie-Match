import { useRef } from "react";

import img1 from "../../assets/slider_images/avatar.jpg";
import img2 from "../../assets/slider_images/avg_endgame.jpg";
import img3 from "../../assets/slider_images/titanic.jpg";
import img4 from "../../assets/slider_images/inception.jpg";
import img5 from "../../assets/slider_images/lion_king.jpg";
import img6 from "../../assets/slider_images/star_wars.jpg";
import img7 from "../../assets/slider_images/fight_club.jpg";
import img8 from "../../assets/slider_images/blade_runner.jpg";
import img9 from "../../assets/slider_images/dark_knight.jpg";
import img10 from "../../assets/slider_images/shawshank_red.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="w-full mx-auto">
      <div
        ref={sliderRef}
        onWheel={handleWheel}
        className="flex overflow-x-auto scroll-auto scrollbar-hide space-x-4 px-10 py-4"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="min-w-[200px] h-[300px] shadow-lg rounded-lg overflow-hidden flex-shrink-0"
          >
            <img
              src={img}
              alt={`Image ${idx + 1}`}
              className="w-full h-full cursor-pointer object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;