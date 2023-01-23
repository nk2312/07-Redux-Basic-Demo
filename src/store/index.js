import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import AuthReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer.reducer, auth: AuthReducer.reducer },
});


// const reducerFunction = (state = { counter: 0, show: true }, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, show: state.show };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, show: state.show };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       show: state.show,
//     };
//   }
//   if ((action.type = "toogle")) {
//     return {
//       counter: state.counter,
//       show: !state.show,
//     };
//   }
//   return state;
// };

// const store = createStore(reducerFunction);

export default store;
