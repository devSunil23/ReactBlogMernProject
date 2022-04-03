import React, { useState } from "react";
import Bollywood from "./components/bollywood/Bollywood";
import Fitness from "./components/fitness/Fitness";
import Food from "./components/food/Food";
import Hollywood from "./components/hollywood/Hollywood";
import Home from "./components/Home";
import Navigationmenu from "./components/Navigationmenu";
import Technology from "./components/technology/Technology";
import Topheader from "./components/Topheader";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostHeading from "./components/postpage/PostHeading";
import Postpage from "./components/postpage/Postpage";
import Resheading from "./components/Resheading";
import Navigationmenures from "./components/Navigationmenures";
const App = () => {
  const [toggle, settoggle] = useState(false);
  const [imagePost, setImagePost] = useState();
  const showToggle = () => {
    settoggle(!toggle);
  };
  const showPostItems = (naturalImg) => {
    setImagePost(naturalImg);
    console.log("clicked");
  };
  return (
    <>
      <Router>
        <div className="container">
          <Topheader className="container"></Topheader>
          <Resheading toggleMenu={showToggle}></Resheading>
          <Navigationmenu></Navigationmenu>
          {toggle ? <Navigationmenures></Navigationmenures> : ""}
          <Routes>
            <Route path="/" element={<Home showItems={showPostItems} />} />
            <Route path="/post" element={<Postpage imagePost={imagePost} />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
