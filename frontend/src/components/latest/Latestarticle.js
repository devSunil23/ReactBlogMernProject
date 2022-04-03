import React from "react";
import Advertisment from "./Advertisment";
import Article from "./Article";
import Articlehead from "./Articlehead";
import Toppost from "./Toppost";
const Latestarticle = () => {
  return (
    <div>
      <div className="latestArticles">
        <Articlehead span="Latest" Articles="Articles"></Articlehead>
        <div className="latArticlesGrid">
          <Article></Article>
          <div className="latArticlesGridRight">
            <Advertisment></Advertisment>
            <Toppost></Toppost>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestarticle;
