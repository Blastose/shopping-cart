import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "images/magnify.svg";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex items-center gap-1">
      <SearchIcon
        fill="white"
        className="cursor-pointer"
        onClick={() =>
          navigate(`/games?search=${encodeURIComponent(searchInput)}`)
        }
      />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate(`/games?search=${encodeURIComponent(searchInput)}`);
        }}
      >
        <input
          type="text"
          id="search"
          className="rounded-full px-3 py-1 bg-slate-500 focus:outline-none focus:ring focus:ring-violet-300"
          placeholder="Search games..."
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
        />
      </form>
    </div>
  );
};

export default SearchInput;
