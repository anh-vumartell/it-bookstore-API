import useInput from "../hooks/use-input";
import { useState } from "react";
import classes from "./SubcribeForm.module.css";
function SubcribeForm(props) {
  const [formIsValid, setFormIsValid] = useState(false);
  //FOR NAME
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetValue: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmail,
  } = useInput((value) => value.includes("@"));
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!nameIsValid && !emailIsValid) {
      return;
    }
    setFormIsValid(true);

    resetName();
    resetEmail();
  };
  return (
    <div>
      <form
        className={classes["form-subcribe"]}
        onSubmit={formSubmissionHandler}
      >
        <div className={classes["form-header"]}>
          <h1>Join us and get your first book for free!</h1>
          <p>
            Get the latest IT books with special membership prices. The first
            book is on us!
          </p>
        </div>
        <div className={classes["form-control"]}>
          <label>Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="e.g John Dohn"
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <span className={classes["error-text"]}>This must be filled!</span>
          )}
        </div>
        <div className={classes["form-control"]}>
          <label>Email address</label>
          <input
            type="text"
            id="email"
            placeholder="e.g: mailme@mail.com"
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <span className={classes["error-text"]}>
              Please enter a valid email!
            </span>
          )}
        </div>

        <button>Join now</button>
      </form>
    </div>
  );
}

export default SubcribeForm;
