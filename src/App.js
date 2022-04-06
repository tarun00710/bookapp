import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SearchBook from "./SearchBook";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBook />} />
      </Routes>
    </div>
  );
}

export default App;
