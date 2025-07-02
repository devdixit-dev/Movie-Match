import { useEffect, useRef, useState } from "react";
import axios from 'axios';

interface SliderProps {
  route: string;
}

const Slider = ({ route }: SliderProps) => {

  const [images, setImages] = useState<string[]>([]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };

  const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: import.meta.env.VITE_KEY
    }
  })

  const renderMovies = async () => {
    const response = await tmdb.get(`${route}`);
    const movies = response.data.results

    const urls = []

    for (let i = 0; i <= movies.length; i++) {
      const poster_path = movies[i].poster_path
      const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
      urls.push(imageUrl);
      setImages(urls);
    }
  }

  useEffect(() => {
    renderMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full mb-1">
      <div
        ref={sliderRef}
        onWheel={handleWheel}
        className="flex overflow-x-auto scroll-auto scrollbar-hide space-x-4 px-10 py-4"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="min-w-[150px] h-[250px] shadow-lg rounded-lg overflow-hidden flex-shrink-0"
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