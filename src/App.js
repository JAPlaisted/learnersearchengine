import "./App.css";
import "./normalize.css/normalize.css";
import Home from "./pages/Home";
import SearchItem1 from "./components/SearchItem1";
import SearchItem2 from "./components/SearchItem2";
import SearchItem3 from "./components/SearchItem3";
import SearchItem4 from "./components/SearchItem4";
import SearchItem5 from "./components/SearchItem5";
import SearchItem6 from "./components/SearchItem6";
import SearchItem7 from "./components/SearchItem7";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/searchitem1" element={<SearchItem1 />}></Route>
        <Route exact path="/searchitem2" element={<SearchItem2 />}></Route>
        <Route exact path="/searchitem3" element={<SearchItem3 />}></Route>
        <Route exact path="/searchitem4" element={<SearchItem4 />}></Route>
        <Route exact path="/searchitem5" element={<SearchItem5 />}></Route>
        <Route exact path="/searchitem6" element={<SearchItem6 />}></Route>
        <Route exact path="/searchitem7" element={<SearchItem7 />}></Route>
        <Route exact path="/search" element={<SearchPage />}></Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
