import Hero from "../components/Hero";
import { Profile } from "../components/Profile";
import Search from "../components/Search";

const Home = () => {
  return (
    <>
      <div className="dm-bg">
        <Hero />
        <Search />
        <Profile />
      </div>
    </>
  );
};

export default Home;
