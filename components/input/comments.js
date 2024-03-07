import { useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import axios from "axios";

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler({ email, name, text }) {
    // send data to API
    axios({
      method: "POST",
      url: `/api/${eventId}`,
      data: {
        email,
        name,
        text,
      },
    }).then(
      (res) => {
        console.log(res);
      },
      () => {
        console.log("ERROR OCCURED");
      }
    );
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList id={eventId} />}
    </section>
  );
}

export default Comments;
