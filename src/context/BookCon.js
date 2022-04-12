import axios from "axios";
import React, { createContext, useState } from "react";

export const bookContext = createContext();

const BookCon = ({ children }) => {

  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState([]);
  const [userId,setUserId] = useState()

  const searchHandler = async (e) =>{
    try {
      if (e.key === "Enter" || e.target.name === "search") {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCJGC-Le6P8uO6slAZvdUT1V7a4lEKCThs`
        );
        setSearchResult(response.data.items);
        const {_id} = userId
        const saveSearch = await axios.post(`http://bookapp-env.eba-hbgxrjud.us-east-1.elasticbeanstalk.com/user/${_id}/saveSearch`,{search,userId})
         console.log(saveSearch) 
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <bookContext.Provider
      value={{ searchHandler, searchResult, setSearchResult, setSearch ,setUserId}}
    >
      {children}
    </bookContext.Provider>
  );
};

export default BookCon;
