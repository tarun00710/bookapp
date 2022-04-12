import React, { useContext } from "react";
import SearchResult from "./SearchResult";
import { bookContext } from "../Context/BookCon";

const SearchBook = () => {
  const { setSearch, searchHandler} = useContext(bookContext);
  const logout = () => {
    window.open("http://bookapp-env.eba-hbgxrjud.us-east-1.elasticbeanstalk.com/auth/logout", "_self");
  };

  return (
    <div className="search_book">
      <div className="search_top">
        <p className="search_heading">SearchBook</p>
        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="input_section">
        <input
        placeholder="type and press enter..."
          onChange={(e) => setSearch(e.target.value)}
          className="input_field"
          onKeyPress={(e) => searchHandler(e)}
        />
        <button
          onClick={(e) => searchHandler(e)}
          name="search"
          className="search_btn"
        >
          Search
        </button>
      </div>
      <SearchResult />
    </div>
  );
};

export default SearchBook;
