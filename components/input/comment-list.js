import { useEffect, useState } from "react";
import axios from "axios";

import classes from "./comment-list.module.css";

function CommentList({ id }) {
  const [comments, setComments] = useState([]);
  console.log(id);

  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/${id}`,
    }).then(
      (res) => {
        console.log(res);
      },
      () => {
        console.log("ERROR FETCHING COMMENTS");
      }
    );
  }, []);
  return (
    <ul className={classes.comments}>
      {
        /* Render list of comments - fetched from API */
        comments.map((el) => (
          <li key={el._id}>
            <p>{li.text}</p>
            <div>
              By <address>{el.name}</address>
            </div>
          </li>
        ))
      }
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
      <li>
        <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
    </ul>
  );
}

export default CommentList;
