import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="dm-bg">
        <Hero />
        <Search />
      </div>
      <Footer />
    </>
  );
};

export default Home;
