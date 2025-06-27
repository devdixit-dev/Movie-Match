import MovieSlider from "./MovieSlider"

interface SliderProps {
  message: string;
}

const MovieComponent = ({ message }: SliderProps) => {
  return (
    <div className="flex flex-col justify-center text-center text-gray-600">
      <div className="mt-10">
        <h3 className="flex px-10 text-xl font-medium">Top 10 All Time Favourite Movies</h3>
        <MovieSlider />
      </div>
      <div className="mt-2 mb-6">
        <p>{message}</p>
        <p className="font-medium">Admin</p>
      </div>
    </div>
  )
}

export default MovieComponent