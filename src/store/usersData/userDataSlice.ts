import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  userInfo: {},
};
export const userDataSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: any) => {
      state.userInfo = action.payload;
    },
  },
});
export const { addUser } = userDataSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userDataSlice.reducer;
