import axios from "axios";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookDetail from "./BookDetail";
import { bookContext } from "./context/BookCon";
import Home from "./Home";
import SearchBook from "./SearchBook";

function App() {

  const { setUserId} = useContext(bookContext);

  useEffect(()=>{
    const getUserData = () =>{
    
        fetch("http://localhost:5000/auth/login/success",{
          method:"GET",
          credentials:'include',
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            "Access-Control-Allow-Credentials":true
          }
      }).then(response => {
        if(response.status===200)
        return response.json();
        throw new Error("auth failed")
      }).then(resObj => {
        setUserId(resObj.user)
      }).catch((err)=>{
        console.log(err)
      })
    }
    getUserData()
  },[])
    


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBook />} />
        <Route path="/book/:id" element={<BookDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
