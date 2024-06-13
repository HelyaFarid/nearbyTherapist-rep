import "./style.css";
import Nav from "../Navbar";
import Form from "../Form";
import Search from "../Search";
import Footer from "../Footer";
import { useState, createContext } from "react";
import Error from "../../Error.js";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export const SearchContext = createContext();
const App = () => {
  const [query, setQuery] = useState([]);

  const addToQuery = (search) => {
    console.log("App-query", search);
    setQuery(search);
  };

  const newDataContext = {
    query,
    addToQuery
  };
  return (
    <div className="App">
      <Router>
        <SearchContext.Provider value={newDataContext}>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route exact path="/Search" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SearchContext.Provider>
      </Router>
    </div>
  );
};

export default App;
