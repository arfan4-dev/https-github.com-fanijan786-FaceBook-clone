import React from "react";
import { Posts } from "../../data";
import Post from "../Post/Post";
import Share from "../Share/Share";
import Stories from "../stories/Stories";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
         <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} 
      </div>
    </div>
  );
};

export default Feed;