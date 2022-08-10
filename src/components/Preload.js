import React, { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import { types } from "../context/PostsReducer";
const Preload = () => {
  const [store, dispatch] = useContext(PostsContext);
  const getInitialPosts = async () => {
    const data = await localStorage.getItem("postsValue");
    const posts = JSON.parse(data);
    posts &&
      dispatch({
        type: types.preload,
        payload: posts,
      });
    return posts;
  };

  useEffect(() => {
    getInitialPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
};

export default Preload;
