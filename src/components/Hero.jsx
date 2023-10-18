const Hero = () => {
  return (
    <div className="min-h-[100vh-60px] max-w-[1200px] m-auto p-4 h-screen flex justify-center items-center flex-col gap-2  md:gap-4 lg:gap-5">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-10 dm-text">
        Meet the Open Source Heroes
      </h1>
      <h3 className="text-md -mt-3 md:mt-0 md:text-2xl lg:text-4xl font-medium dm-text">
        Inspiring the Digital World
      </h3>
      <p className="text-center text-sm md:text-lg text-gray2 leading-5">
        Welcome to the Contributors Gallery, where we celebrate the tireless
        efforts of open-source champions. Explore the profiles and impactful
        work of dedicated individuals shaping the digital world through their
        contributions. Join us in recognizing their commitment and be inspired
        to make your own mark in the open source community.
      </p>
      <a
        href="/profile"
        className="dm-bg-rev dm-text-rev px-4 py-2 rounded-full hover:bg-black2 dark:hover:bg-white2 "
      >
        Explore Contributors
      </a>
    </div>
  );
};

export default Hero;
