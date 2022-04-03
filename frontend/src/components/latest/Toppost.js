import React, { useEffect, useState } from "react";
import Latestpost from "./Latestpost";
// import { imageDataFirst } from "../../data/topPost";
// import imageDataSecond from "../../data/topPost";
import axios from "axios";
const Toppost = () => {
  const [topPostData, settopPostData] = useState([]);
  useEffect(() => {
    const topPostfunc = async () => {
      const res = await axios.get("http://localhost:3001/toppost");
      settopPostData(res.data);
    };
    topPostfunc();
  });

  return (
    <>
      <div className="latArticlesGridRight2">
        <h2 className="topPost">
          <span>Top</span> Posts
        </h2>
        <div className="postRight">
          {topPostData.map((item, index) => {
            if (index < 1) {
              return (
                <>
                  <img src={item.imgUrl} alt="sky" className="skyImage" />
                  <div className="titleRight">
                    <h2 className="articleTitle">{item.title}</h2>
                    <h1 className="RightOne">{item.number}</h1>
                  </div>
                  <p className="articleParaBottom">
                    {item.paraBottomFirst}
                    <span>{item.paraBottomSecond}</span>
                  </p>
                </>
              );
            }
          })}
        </div>
        <div className="rightArticleTpost">
          {topPostData.map((item, index) => {
            if (index > 0) {
              return (
                <Latestpost
                  imgUrl={item.imgUrl}
                  number={item.number}
                  title={item.title}
                  paraBottomFirst={item.paraBottomFirst}
                  paraBottomSecond={item.paraBottomSecond}
                  key={index}
                />
              );
            }
          })}

          {/* <Latestpost number="3"></Latestpost>
          <Latestpost number="4"></Latestpost> */}
        </div>
      </div>
    </>
  );
};

export default Toppost;
