import { FiGithub } from "react-icons/fi";
import DarkModeSwitcher from "./DarkModeSwitcher";
import { LuGalleryHorizontalEnd } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 dm-bg">
      <div className="max-w-[1200px] m-auto flex items-center p-4">
        <h1 className="font-bold text-xl dm-text grow flex items-center select-none">
          <LuGalleryHorizontalEnd className="mr-1" />
          Contributors Gallery
        </h1>
        <div className="flex items-center gap-4">
          <DarkModeSwitcher />
          <a
            href="https://github.com/Pinaka-Pani-18/Contributors-Gallery"
            target="blank"
            className="dm-text"
          >
            <FiGithub className="text-lg text-gray2 hover:text-black1 dark:hover:text-white1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
