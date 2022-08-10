import React, { useReducer } from "react";
import { PostsContext } from "./PostsContext";
import PostsReducer, { initialPosts } from "./PostsReducer";

const PostsProvider = ({ children }) => {
  const [store, dispatch] = useReducer(PostsReducer, initialPosts);
  return (
    <PostsContext.Provider value={[store, dispatch]}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
