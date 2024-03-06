import { createStore } from "redux";

const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + action.amount
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return state;
} // end of const counterReducer = (state = {counter: 0}, action)

const store = createStore(counterReducer);

export default store;