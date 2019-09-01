import React, { Component } from "react";
import Avatar from "../../assets/PostProfile.svg";
import "./Comment.css";
class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <img src={this.props.data.author.avatar} alt="post avatar" />
        <div className="comment-container">
          <strong>{this.props.data.author.name}</strong>{" "}
          {this.props.data.content}
        </div>
      </div>
    );
  }
}

Comment.defaulProps = {
  avatar: Avatar
};

export default Comment;
