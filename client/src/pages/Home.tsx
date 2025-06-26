import Hero from "../components/app/Hero";
import Navbar from "../components/app/Navbar";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
        <Navbar />
        <Hero />
    </div>
  );
};

export default Home;