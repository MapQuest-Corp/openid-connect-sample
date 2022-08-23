import { combineReducers } from "@reduxjs/toolkit";
import profileModule from "./modules/profileModule";

const rootReducer = combineReducers({
  profile: profileModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
