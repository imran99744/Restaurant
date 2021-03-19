import React from "react";
import dateFormate from "dateformat";

function LoadComments(props) {
  return props.comments.map((comment) => {
    return (
      <div key={comment.id}>
        <h5>{comment.author}</h5>
        <p>{comment.comment}</p>
        <p>Rating: {comment.rating}</p>
        <p>{dateFormate(comment.date, "dddd, yyyy, h:MM TT")}</p>
      </div>
    );
  });
}

export default LoadComments;
