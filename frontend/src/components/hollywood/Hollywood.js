import React, { useState } from "react";
import Articlehead from "../latest/Articlehead";
import Latestarticlecard from "../latest/Latestarticlecard";
import Advertisment from "../latest/Advertisment";
import Toppost from "../latest/Toppost";
import Loadmore from "../latest/Loadmore";
import articleData from "../../data/article";
const Hollywood = () => {
  const [show, setShow] = useState(false);
  const showMore = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="latestArticles">
        <Articlehead span="Hollywood"></Articlehead>
        <div className="latArticlesGrid">
          <div className="latArticlesGridLeft">
            {articleData.map((item, index) => {
              if (item.type === "Hollywood") {
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
                  if (item.type === "moreHollywood") {
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

export default Hollywood;
