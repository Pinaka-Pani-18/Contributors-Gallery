import { data } from "../data";

export const Profile = () => {
  return (
    <>
      <div className="flex h-[100vh] flex-col mx-8 z-10">
        <div>
          {/* todo */}
          {/* search for profiles */}

          <div className=" relative grid lg:grid-cols-3 md:grid-cols-2 w-54 h-16 ">
            {/* card for profile */}
            {data.map((value, key) => (
              <div
                className="border  rounded-lg my-8 px-4 py-6 items-start flex gap-4 dm-bg-rev"
                key={key}
              >
                <img
                  src="https://avatars.githubusercontent.com/u/65086865?v=4"
                  alt="profile-image"
                  className="rounded-full w-1/6"
                />

                <div className="profile-details flex flex-col mx-4 my-4 flex-auto">
                  <div className="profie name w-full flex">
                    <h1 className=" lg:text-2xl text-xl text-bold dm-text-rev">
                      {value.name}
                    </h1>
                  </div>

                  <p className="py-5 w-full flex dm-text-rev lg:text-md text-sm">
                    {value.description}
                  </p>

                  <p className="profile-description py-2 lg:text-md text-sm dm-text-rev">
                    {value.stack}
                  </p>
                  <div className="profile-link py-2 dm-text-rev lg:text-md text-sm cursor pointer">
                    Connect
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
