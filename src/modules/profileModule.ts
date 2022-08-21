/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenPayload } from "types/TokenPayload";

type State = {
  isEditing: boolean;
  currentName: string | null;
  currentIat: number | null; // The time at which the token was issued. This is used to distinguish between tokens.
};

const initialState: State = {
  isEditing: false,
  currentName: "",
  currentIat: 0,
};

const profileModule = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeToEditing(state: State) {
      state.isEditing = true;
    },
    changeCurrentInfo(state: State, action: PayloadAction<TokenPayload>) {
      state.currentName = action.payload.currentName;
      state.currentIat = action.payload.currentIat;
      state.isEditing = false;
    },
    initialize(state: State) {
      state.currentName = null;
      state.currentIat = null;
    },
  },
});

export const { changeToEditing, changeCurrentInfo, initialize } =
  profileModule.actions;

export default profileModule;
