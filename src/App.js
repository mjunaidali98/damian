import React from "react"
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";

function App() {
  return (
    <div className="bg-[#F6F6F6] ">
     <Router>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
