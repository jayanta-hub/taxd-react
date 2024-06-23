import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/assessmentSlice";
import { taxdApi } from "./api";

export const store = configureStore({
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(taxdApi.middleware),
  reducer: {
    [taxdApi.reducerPath]: taxdApi.reducer,
    userReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
