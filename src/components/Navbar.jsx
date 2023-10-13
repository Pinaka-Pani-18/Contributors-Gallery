import { FiGithub } from "react-icons/fi";
import DarkModeSwitcher from "./DarkModeSwitcher";

const Navbar = () => {
  return (
    <div className="w-full dm-shadow dm-bg">
      <div className="max-w-[85rem] m-auto flex items-center p-4">
        <h1 className="font-bold text-xl dm-text grow">
          <span className="text-red-500 text-2xl">C</span>ontributors{" "}
          <span className="text-red-500 text-2xl">G</span>allery
        </h1>
        <div className="flex items-center gap-4">
          <DarkModeSwitcher />
          <a
            href="https://github.com/Pinaka-Pani-18/Contributors-Gallery"
            target="blank"
            className="dm-text"
          >
            <FiGithub className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
