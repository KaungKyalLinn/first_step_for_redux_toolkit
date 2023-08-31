import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice/CounterSlice";


const store = configureStore({
  reducer : {
    counter : counterReducer
  }
})

export default store;