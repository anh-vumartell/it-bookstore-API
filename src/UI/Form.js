import React from "react";
import classes from "./Form.module.css";
function Form(props) {
  return <form className={classes["form-control"]}>{props.children}</form>;
}

export default Form;
