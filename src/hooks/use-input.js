import { useReducer } from "react";
const initialInputState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "RESET":
      return { value: "", isTouched: false };
    default:
      throw new Error("Something went wrong!");
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = inputState.isTouched && !valueIsValid;

  const inputChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const resetValue = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetValue,
  };
};
export default useInput;
