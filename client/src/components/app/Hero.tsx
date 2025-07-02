import MovieComponent from "../ui/MovieComponent"

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <MovieComponent route="/trending/movie/day" title="Trending Today" message="This weekend's must-watch movie experience." />
    </div>
  )
}

export default Hero