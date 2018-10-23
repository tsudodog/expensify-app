import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({decrementBy = 1}={}) => ({ 
    type:"DECREMENT",
    decrementBy
})

const setCount = ({count = 0}={}) => ({
    type: "SET"
    , count
})

const resetCount = () => ({
    type: "RESET"
})

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
});

console.log(store.getState());

// Action - than an object that gets sent to the store

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
//increment
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});
store.dispatch(incrementCount({ incrementBy: 10000 }));
//Id like to reset the count to 0
store.dispatch(decrementCount({decrementBy : 1000}))
store.dispatch({
  type: "DECREMENT",
  decrementBy: 100
});
store.dispatch({
  type: "INCREMENT"
});

store.dispatch(setCount({count: 666}))

store.dispatch({
  type: "RESET"
});

console.log(store.getState());
