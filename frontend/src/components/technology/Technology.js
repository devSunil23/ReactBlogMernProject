import React, { useState } from "react";
import Advertisment from "../latest/Advertisment";
import Articlehead from "../latest/Articlehead";
import Latestarticlecard from "../latest/Latestarticlecard";
import Loadmore from "../latest/Loadmore";
import Toppost from "../latest/Toppost";
import articleData from "../../data/article";
const Technology = () => {
  const [show, setShow] = useState(false);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="latestArticles">
        <Articlehead span="Technology"></Articlehead>
        <div className="latArticlesGrid">
          <div className="latArticlesGridLeft">
            {articleData.map((item, index) => {
              if (item.type === "Technology") {
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
                {articleData.map((item, index) => {
                  if (item.type === "moreTechnology") {
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
          </div>
          <div className="latArticlesGridRight latestArticlesBollyWood">
            <Toppost></Toppost>
            <Advertisment></Advertisment>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
