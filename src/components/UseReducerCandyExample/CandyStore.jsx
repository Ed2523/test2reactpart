import { useReducer } from "react";
import "./CandyStore.sass";

const initialState = {
  candies: 0,
  totalEaten: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EAT CANDY":
      return {
        ...state,
        candies: state.candies - 1,
        totalEaten: state.totalEaten + 1,
      };
    case "ADD CANDY":
      return {
        ...state,
        candies: state.candies + 1,
      };
    default:
      return state;
  }
};

const CandyStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const eatCandy = () => {
    if (state.candies > 0) {
      dispatch({ type: "EAT CANDY" });
    } else {
      console.log("no more candies");
    }
  };
  const addCandy = () => {
    dispatch({ type: "ADD CANDY" });
  };

  return (
    <div className='candy-section'>
      <p>Candies: {state.candies}</p>
      <p>Total Eaten: {state.totalEaten}</p>
      <div className='button-container'>
        <button onClick={eatCandy}>Eat Candy</button>
        <button onClick={addCandy}>Add Candy</button>
      </div>
    </div>
  );
};

export default CandyStore;
