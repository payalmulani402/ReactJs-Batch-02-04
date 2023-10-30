import { useReducer } from "react";

/* state as an object */

const initialState = {
  firstCounter: 0,
  secondCounter: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Use_Reducer_Multiple_3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="button">First Counter - {count.firstCounter}</div>
      <div className="button">Second Counter - {count.secondCounter}</div>
      <button
        className="button"
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        First Increment
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        First Decrement
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        Increment 5
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        Decrement 5
      </button>
      <div>
        <button
          className="button"
          onClick={() => dispatch({ type: "increment2", value: 1 })}
        >
        Second Increment
        </button>
        <button
          className="button"
          onClick={() => dispatch({ type: "decrement2", value: 1 })}
        >
          Second Decrement
        </button>
      </div>
      <button className="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default Use_Reducer_Multiple_3;
