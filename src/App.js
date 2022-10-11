import React, { useState, useEffect } from "react"
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import { BuilderComponent, BuilderContent, builder } from '@builder.io/react';
builder.init('9f450fb622bf4a49b9286042970bcf4a')

function App() {
  const [builderContentJson, setBuilderContentJson] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      builder.get('page', { url: window.location.pathname })
        .promise().then(setBuilderContentJson)
    }

    // return 
  }, [])
  console.log("builderContentJson",builderContentJson)
  return (
    <div className="bg-[#F6F6F6] ">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/shop" element={<BuilderComponent model="page" content={builderContentJson} />} exact />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
