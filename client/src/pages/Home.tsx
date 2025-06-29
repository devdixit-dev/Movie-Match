import ActiveServicePage from "../components/app/ActiveService";
import Header from "../components/app/Header";
import Hero from "../components/app/Hero";
import Navbar from "../components/app/Navbar";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
        <Navbar />
        <Header />
        <Hero />
        <ActiveServicePage />
    </div>
  );
};

export default Home;