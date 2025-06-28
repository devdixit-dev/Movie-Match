import Header from "../components/app/Header";
import Hero from "../components/app/Hero";
import Navbar from "../components/app/Navbar";
import SubscriptionPage from "../components/app/SubscriptionPage";

const Home = () => {
  return (
    <div className="w-[90%] m-auto">
        <Navbar />
        <Header />
        <Hero />
        <SubscriptionPage />
    </div>
  );
};

export default Home;