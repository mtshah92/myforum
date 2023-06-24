import { useContext, useState } from "react";
import "../App.css";
import { ForumContext } from "../dbContext";
export const Post = () => {
  const { state, dispatch } = useContext(ForumContext);

  return (
    <div>
      <h1>Post </h1>
      {state.map((item) => {
        const {
          username,
          post,
          postDescription,
          upvotes,
          downvotes,
          tags,
          isBookmarked,
          comments,
          postId,
          picUrl,
        } = item;
        return (
          <div className="post-card">
            Votes:{upvotes - downvotes}
            <button onClick={() => dispatch({ type: "upvote", id: postId })}>
              Upvote
            </button>
            <button onClick={() => dispatch({ type: "downvote", id: postId })}>
              Downvote
            </button>
            <p>
              <img src={picUrl} width="20" height="20" />
              Posted by @{username}
            </p>
            <h2>{post}</h2>
            <p>tags: {tags.toString()}</p>
            <h4>{postDescription}</h4>
            <hr />
            <button className="comment">Comment</button>
            <button className="bookmark">Bookmark</button>
            <button className="share">Share</button>
          </div>
        );
      })}
    </div>
  );
};
