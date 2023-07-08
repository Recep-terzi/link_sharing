import { configureStore } from "@reduxjs/toolkit";
import linkSlice from "./linkSlice";
export const store = configureStore({
  reducer: {
    link: linkSlice,
  },
});
