import { useRef } from "react";
import axios from "axios";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    const email = emailRef.current.value;
    // optional: validate input
    // send valid data to API
    axios({
      method: "POST",
      url: "/api/newsletter",
      data: {
        email,
      },
    }).then(
      (res) => {
        console.log(res);
      },
      () => {
        console.log("error occured");
      }
    );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
