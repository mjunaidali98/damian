// import React, { useState, useEffect } from "react"
// import Home from "./pages/home";
// import About from "./pages/about";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NotFound from "./pages/404"
// import { BuilderComponent, builder } from '@builder.io/react';
// builder.init('9f450fb622bf4a49b9286042970bcf4a')

// function App() {
//   const [builderContentJson, setBuilderContentJson] = useState(null)

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       builder.get('page', { url: window.location.pathname })
//         .promise().then(setBuilderContentJson)
//     }
//     // return 
//   }, [])
// return (
//   <div className="bg-[#F6F6F6] ">
//     <Router>
//       <Routes>
//         <Route path="/home" element={<Home />} exact />
//         <Route path="/" element={<Home />} exact />
//         <Route path="/about" element={<About />} exact />
//         <Route path="/shop" element={<BuilderComponent model="page" content={builderContentJson} />} exact />

//       </Routes>
//     </Router>
//   </div>
// );
// }

// export default App;



import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
// Put your API key here
builder.init("19a078a546e8451b8f93e16018bc04da");

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("homepage", {
          url: window.location.pathname
        })
        .promise();
      console.log(content)
      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, [window.location.pathname]);

  // if no page is found, return a 404 page
  if (notFound && !isPreviewingInBuilder) {
    return <div>Sorry! Page not found</div>
  }

  // return the page when found
  return (
    <>
      <head>
        <title>{content?.data.title}</title>
      </head>
      {/* Render the Builder page */}
      <div className="bg-[#F6F6F6] ">
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
          </Routes>
        </Router>
      </div>
      <BuilderComponent model="page" content={content} />
    </>
  );
}