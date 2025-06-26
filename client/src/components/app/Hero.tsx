import MovieSlider from "../ui/MovieSlider"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center text-center text-gray-600">
      <div className="w-full mt-10 py-8 font-medium">
        <h2 className="text-5xl">Discover Your Next Favourite Movie</h2>
        <p className="mt-2 text-lg">no more endless scrolling - just great movies</p>
      </div>
      <div className="mt-10">
        <h3 className="flex px-10 text-xl font-medium">Top 10 All Time Favourite Movies</h3>
        <MovieSlider />
        <div className="mt-6">
          <p>These aren't just movies - they're milestones. Don't miss out.</p>
          <p className="font-medium">Admin</p>
        </div>
      </div>
    </div>
  )
}

export default Hero