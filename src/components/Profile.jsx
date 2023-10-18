import { data } from "../data";

export const Profile = () => {
  return (
    <>
      <div className=" text-center justify-center w-full py-4">
        <a
          className=" dm-bg-rev dm-text-rev px-4 py-2 rounded-full hover:bg-black2 dark:hover:bg-white2"
          href="https://github.com/Pinaka-Pani-18/Contributors-Gallery"
        >
          Add Profile
        </a>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-10 dm-text mt-5">
          Contributors Profiles
        </h1>
      </div>
      <div className="flex h-[100vh] flex-col mx-8 z-10">
        <div>
          <div className=" relative grid lg:grid-cols-3 md:grid-cols-2 w-54 h-24 ">
            {/* card for profile */}
            {data.map((value, key) => (
              <div
                className="border  rounded-lg my-4 px-4 py-6 items-start flex gap-4 dm-bg mx-8 shadow-md"
                key={key}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/65086865?v=4"
                  alt="profile-image"
                  className="rounded-full w-1/6"
                />

                <div className="profile-details flex flex-col mx-4 my-4 flex-auto">
                  <div className="profie name w-full flex">
                    <h1 className=" lg:text-2xl text-xl font-bold dm-text">
                      {value.name}
                    </h1>
                  </div>

                  <p className="py-5 w-full flex dm-text lg:text-md text-sm">
                    {value.description}
                  </p>

                  <p className=" py-2 lg:text-md text-sm dm-text font-base uppercase">
                    {value.stack}
                  </p>
                  <div className="profile-link py-2 dm-text lg:text-md text-sm cursor pointer">
                    <a
                      href={value.socials}
                      className="dm-bg-rev dm-text-rev px-4 py-2 rounded-full hover:bg-black2 dark:hover:bg-white2 "
                    >
                      Connect{" "}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
