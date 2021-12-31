import { combineReducers, createStore } from "redux";

import { reducer as todoReducer } from "./reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export const store = createStore(rootReducer);