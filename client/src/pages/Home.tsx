import ActiveServicePage from "../components/app/ActiveService";
import Footer from "../components/app/Footer";
import Header from "../components/app/Header";
import Hero from "../components/app/Hero";
import Navbar from "../components/app/Navbar";

const Home = () => {
  return (
    <div className="w-[95%] m-auto">
        <Navbar />
        <Header />
        <Hero />
        <ActiveServicePage />
        <Footer />
    </div>
  );
};

export default Home;