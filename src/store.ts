import { configureStore } from "@reduxjs/toolkit";
import { load, save } from "redux-localstorage-simple";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: load(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(save()),
});

export type AppDispatch = typeof store.dispatch;

export default store;
