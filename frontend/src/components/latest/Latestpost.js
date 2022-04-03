import React from "react";
import SmallCard from "./SmallCard";

const Latestpost = ({
  number,
  imgUrl,
  title,
  paraBottomFirst,
  paraBottomSecond,
}) => {
  return (
    <>
      <div className="rightBottomCard">
        <div className="rightBottomCardLeft">
          <SmallCard
            imgUrl={imgUrl}
            title={title}
            paraBottomFirst={paraBottomFirst}
            paraBottomSecond={paraBottomSecond}
          ></SmallCard>
        </div>
        <h1 className="twoNumber">{number}</h1>
      </div>
    </>
  );
};

export default Latestpost;
