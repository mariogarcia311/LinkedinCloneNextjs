import React from "react";

export const initialPosts = {
  posts: [],
};
export const types = {
  add: "add post",
  delete: "delete post",
  sort: "sort posts",
  preload: "preload posts",
};
const PostsReducer = (state, action) => {
  switch (action.type) {
    case types.add:
      localStorage.setItem(
        "postsValue",
        JSON.stringify([...state.posts, action.payload])
      );
      return { ...state, posts: [...state.posts, action.payload] };
      break;
    case types.delete:
      localStorage.setItem(
        "postsValue",
        JSON.stringify(state.posts.filter((e) => e.id !== action.payload))
      );
      return {
        ...state,
        posts: state.posts.filter((e) => e.id !== action.payload),
      };
      break;
    case types.preload:
      return { ...state, posts: action.payload };
      break;
    default:
      break;
  }
};

export default PostsReducer;
