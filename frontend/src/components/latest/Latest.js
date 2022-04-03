import React, { useEffect, useState } from "react";
import LatestGridCard from "./LatestGridCard";
// import articleSecondData from "../../data/articlesecond";
import axios from "axios";
const Latest = () => {
  const [latestdata, setLatestdata] = useState([]);
  useEffect(() => {
    const latest = async () => {
      try {
        const latestDatas = await axios.get("http://localhost:3001/latest");
        setLatestdata(latestDatas.data);
      } catch (error) {
        console.log(`latest ${error}`);
      }
    };
    latest();
  });

  return (
    <>
      <div className="latest">
        <h2 className="latestHeading">
          <span>The</span> Latest
        </h2>
        <div className="latestGrid">
          {latestdata.map((item, index) => {
            return (
              <div className="latestGriditemCard">
                <LatestGridCard
                  key={index}
                  imgSrc={item.imgUrl}
                  headingFirst={item.title}
                  headingSecond={item.titleSecond}
                  latestPara={item.para}
                  bottomParaLeft={item.bottomFirst}
                  bottomParaRight={item.bottomSecond}
                />
              </div>
            );
          })}
          {/* {articleSecondData.map((item, index) => {
            return (
              <div className="latestGriditemCard">
                <LatestGridCard
                  key={index}
                  imgSrc={item.imgUrl}
                  headingFirst={item.title}
                  headingSecond={item.titleSecond}
                  latestPara={item.para}
                  bottomParaLeft={item.bottomFirst}
                  bottomParaRight={item.bottomSecond}
                />
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default Latest;
