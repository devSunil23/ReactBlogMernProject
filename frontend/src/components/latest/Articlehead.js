import React from "react";

const Articlehead = (props) => {
  return (
    <>
      <h2 className="headLatestArticles">
        <span>{props.span}</span> {props.Articles}
      </h2>
    </>
  );
};

export default Articlehead;
