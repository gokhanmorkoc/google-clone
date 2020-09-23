import { act } from "@testing-library/react";
import React, { useReducer } from "react";

const initialState = {
  number: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return {
        number: action.payload,
      };
    case "dec":
      return {
        number: action.payload,
      };
    default:
      throw new Error();
  }
};

const Test = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => dispatch({ type: "inc", payload: state.number + 1 })}
      >
        Incremenet
      </button>
      {state.number}
      <button
        onClick={() => dispatch({ type: "dec", payload: state.number - 1 })}
      >
        Decremement
      </button>
    </div>
  );
};

export default Test;
