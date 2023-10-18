import { useState } from "react";
import { Profile } from "./Profile";

const Search = () => {
  const [searchResult, setSearchResult] = useState("");

  function handleResult(value) {
    setSearchResult(value);
  }

  return (
    <div className="min-h-[40vh] flex justify-center items-center flex-col gap-3 mx-6">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-10 dm-text">
        Find Contributors
      </h1>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search by Name or Skill"
        className="outline-none min-w-[300px] max-w-[700px] w-full dm-bg-rev dm-text-rev p-4 rounded-full placeholder:text-center placeholder:text-lg focus:ring-3 ring-gray2 md:mt-4"
        value={searchResult}
        onChange={(e) => handleResult(e.target.value)}
      />
      <label
        htmlFor="search"
        className="text-center text-sm md:text-lg text-gray2"
      >
        Example: Varun or React or Javascript
      </label>

      {/* search display */}
      {/* <div className="py-2">{searchResult != 0 && <Profile />}</div> */}
    </div>
  );
};

export default Search;
