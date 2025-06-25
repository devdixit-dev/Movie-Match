import MovieSlider from "../ui/MovieSlider"

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/2 overflow-x-scroll hide-scrollbar">
        <MovieSlider />
      </div>
    </div>
  )
}

export default Hero
