import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookDetail from "./Components/BookDetail";
import { bookContext } from "./Context/BookCon";
import Home from "./Components/Home";
import SearchBook from "./Components/SearchBook";

function App() {

  const { setUserId} = useContext(bookContext);

  useEffect(()=>{
    const getUserData = () =>{
    
        fetch("http://bookapp-env.eba-hbgxrjud.us-east-1.elasticbeanstalk.com/auth/login/success",{
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
