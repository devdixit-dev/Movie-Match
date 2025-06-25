import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import blade_runner from '../../assets/slider_images/blade_runner.jpg'

const posters = [
  `${blade_runner}`,
  "/images/inception.jpg",
  "/images/interstellar.jpg",
  "/images/dune.jpg",
  "/images/avatar.jpg",
  "/images/matrix.jpg",
  "/images/tenet.jpg",
  "/images/john_wick.jpg",
  "/images/mad_max.jpg",
  "/images/the_dark_knight.jpg",
];

const MovieSlider = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < posters.length - 1) setIndex(index + 1);
  };

  return (
    <div className="flex items-center justify-center overflow-y-hidden">
      <button
        onClick={prev}
        className="bg-white p-2 rounded-full shadow mx-2 hover:bg-gray-200"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="w-[250px] h-[370px] overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {posters.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`poster-${i}`}
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      <button
        onClick={next}
        className="bg-white p-2 rounded-full shadow mx-2 hover:bg-gray-200"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default MovieSlider;