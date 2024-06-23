import { createSlice } from "@reduxjs/toolkit";
import { taxdApi } from "../api";

const initialState: any = {
  assessmentList: {},
};
export const assessmentDataSlice = createSlice({
  name: "assessmentDataSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(taxdApi.endpoints.getAssessment.matchFulfilled, (state, { payload }) => {
      state.assessmentList = payload;
    });
    // builder.addMatcher(taxdApi.endpoints.assessment.matchFulfilled, (state, { payload }) => {
    //   state.assessmentList = payload;
    // });
  },
  reducers: {},
});
export default assessmentDataSlice.reducer;
