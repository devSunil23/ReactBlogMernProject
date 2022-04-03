import React, { useEffect, useState } from "react";
import Storiescard from "./Storiescard";
import axios from "axios";
// import storiesData from "../../data/stories";
const Lateststories = () => {
  const [storiesServer, setstoriesServer] = useState([]);
  useEffect(() => {
    const stories = async () => {
      try {
        const storiesDataserver = await axios.get(
          "http://localhost:3001/stories"
        );
        setstoriesServer(storiesDataserver.data);
      } catch (error) {
        console.log(`latest ${error}`);
      }
    };
    stories();
  });
  return (
    <>
      <div className="latestStories">
        <h2 className="latestStoriesHead">
          <span>Latest</span> Stories
        </h2>
        <div className="latestStoriesCardContainer">
          {storiesServer.map((item, index) => {
            return (
              <Storiescard
                title={item.title}
                para={item.para}
                paraFirst={item.paraFirst}
                paraSecond={item.paraSecond}
              />
            );
          })}
        </div>
        <div className="viewMore">
          <span className="viewMoreHead">view more</span>
          <i className="fa-solid fa-arrow-right rightArrow"></i>
        </div>
      </div>
    </>
  );
};

export default Lateststories;
