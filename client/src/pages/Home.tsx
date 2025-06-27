import Header from "../components/app/Header";
import Hero from "../components/app/Hero";
import Navbar from "../components/app/Navbar";

const Home = () => {
  return (
    <div className="w-[70%] m-auto">
        <Navbar />
        <Header />
        <Hero />
    </div>
  );
};

export default Home;