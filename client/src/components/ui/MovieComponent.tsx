import MovieSlider from "./MovieSlider"

interface SliderProps {
  title: string,
  message: string;
  route: string
}

const MovieComponent = ({ route, title, message }: SliderProps) => {

  return (
    <div className="flex flex-col justify-center text-center text-gray-600">
      <div className="mt-10">
        <h3 className="flex px-10 text-xl font-medium">{title}</h3>
        <MovieSlider route={route} />
      </div>
      <div className="mb-4 font-medium">
        <p>{message}</p>
      </div>
    </div>
  )
}

export default MovieComponent