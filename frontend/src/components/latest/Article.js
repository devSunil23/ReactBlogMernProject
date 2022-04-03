import React, { useState, useEffect } from "react";
import BigverticalImage from "./BigverticalImage";
import Latestarticlecard from "./Latestarticlecard";
import Loadmore from "./Loadmore";
// import articleData from "../../data/article";
import axios from "axios";
const Article = () => {
  const [show, setShow] = useState(false);
  const [articledataserver, setArticledataServer] = useState([]);
  useEffect(() => {
    const article = async () => {
      try {
        const latestDatas = await axios.get("http://localhost:3001/article");
        setArticledataServer(latestDatas.data);
      } catch (error) {
        console.log(`latest ${error}`);
      }
    };
    article();
  });
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="latArticlesGridLeft">
        {articledataserver.map((item, index) => {
          if (item.latest === "latest") {
            return (
              <Latestarticlecard
                imgCard={item.imgUrl}
                key={index}
                headingTitle={item.title}
                articlePara={item.para}
                paraBottomFirst={item.travelName}
                paraBottomSecond={item.travelTime}
              />
            );
          }
        })}
        {show ? (
          <div className="latArticlesGridLeft">
            {articledataserver.map((item, index) => {
              if (item.type === "show") {
                return (
                  <Latestarticlecard
                    imgCard={item.imgUrl}
                    key={index}
                    headingTitle={item.title}
                    articlePara={item.para}
                    paraBottomFirst={item.travelName}
                    paraBottomSecond={item.travelTime}
                  />
                );
              }
            })}
          </div>
        ) : (
          ""
        )}

        <Loadmore shomoreArticle={showMore} show={show}></Loadmore>
        <BigverticalImage></BigverticalImage>
      </div>
    </>
  );
};

export default Article;
