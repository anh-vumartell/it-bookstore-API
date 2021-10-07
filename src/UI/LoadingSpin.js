import React from "react";
import classes from "./LoadingSpin.module.css";
function LoadingSpin(props) {
  return <div className={classes["loading-spin"]}>{props.children}</div>;
}

export default LoadingSpin;
