import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import PostThirdCardSecond from "./PostThirdCardSecond";
import axios from "axios";
// import dataPost from "../../data/postdata";
const PostThird = () => {
  const [dataPostserver, setdataPostserver] = useState([]);
  useEffect(() => {
    const postDatafunc = async () => {
      try {
        const postData = await axios.get("http://localhost:3001/postdata");
        setdataPostserver(postData.data);
      } catch (error) {
        console.log(`latest ${error}`);
      }
    };
    postDatafunc();
  });
  return (
    <>
      <div className="postThird">
        <div className="postThirdItems">
          <h3 className="postThirdHead">More From The Siren</h3>
          <div className="postThirdCard">
            {dataPostserver.map((item, index) => {
              return (
                <PostCard
                  paraTop={item.paraTop}
                  imgUrl={item.imgUrl}
                  heading={item.heading}
                  name={item.name}
                  readTime={item.readTime}
                />
              );
            })}
          </div>
          <div className="postThirdCardSecond">
            <PostThirdCardSecond></PostThirdCardSecond>
            <PostThirdCardSecond></PostThirdCardSecond>
            <PostThirdCardSecond></PostThirdCardSecond>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostThird;
