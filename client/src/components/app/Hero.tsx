import MovieComponent from "../ui/MovieComponent"

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <MovieComponent title="All Time Favourite Movies" message="These aren't just movies - they're milestones. Don't miss out." />
      {/* <MovieComponent title="Action/thrillers" message="These aren't just movies - they're milestones. Don't miss out." />
      <MovieComponent title="Comedy" message="These aren't just movies - they're milestones. Don't miss out." />
      <MovieComponent title="Horror/thrillers" message="These aren't just movies - they're milestones. Don't miss out." />
      <MovieComponent title="Underrated" message="These aren't just movies - they're milestones. Don't miss out." /> */}
    </div>
  )
}

export default Hero