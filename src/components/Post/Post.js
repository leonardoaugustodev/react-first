import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "./Post.css";
import AuthorAvatar from "../../assets/AuthorAvatar.svg";

function Post({ data }) {
  return (
    <div className="card">
      <div className="post">
        <div className="author">
          <img src={data.author.avatar} alt="Author avatar"></img>
          <div>
            <div className="name">{data.author.name}</div>
            <div className="date">{data.date}</div>
          </div>
        </div>
        <div className="text">{data.content}</div>
      </div>
      <hr></hr>
      <div className="comments">
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
