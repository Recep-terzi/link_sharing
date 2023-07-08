import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  imageUrl: null,
  data: {
    firstName: null,
    lastName: null,
    email: null,
  },
};

export const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setStep, setImageUrl, setData } = linkSlice.actions;

export default linkSlice.reducer;
