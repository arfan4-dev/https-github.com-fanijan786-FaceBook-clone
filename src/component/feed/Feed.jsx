import React, { useEffect, useState } from "react";
import { Posts } from "../../data";
import Post from "../Post/Post";
import Share from "../Share/Share";
import Stories from "../stories/Stories";
import "./feed.scss";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
const Feed = () => {
  const [posts,setPosts]=useState([])


  useEffect(()=>{

    const unSub = onSnapshot(collection(db, "Posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
         <Share />
         {posts
          .sort((a, b) => b.data.timestamp - a.data.timestamp)
          .map((p) => (
            <Post key={p.id} post={p} />
          ))}
      </div>
    </div>
  );
};

export default Feed;