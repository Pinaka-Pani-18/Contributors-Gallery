import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="dm-bg">
        <div className=" h-screen max-w-[1200px] m-auto p-4">
          <Hero />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
