import React from "react";

const Loadmore = ({ shomoreArticle, show }) => {
  return (
    <>
      <div className="loadMore1">
        {show ? (
          <i
            className="fa-solid fa-arrow-up downArow"
            onClick={shomoreArticle}
          ></i>
        ) : (
          <i
            className="fa-solid fa-arrow-down downArow"
            onClick={shomoreArticle}
          ></i>
        )}
        <div className="loadHead" onClick={shomoreArticle}>
          {show ? "show Less" : "Load More"}
        </div>
      </div>
    </>
  );
};

export default Loadmore;
