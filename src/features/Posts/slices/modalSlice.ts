import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      return (state = true);
    },
    closeModal: (state) => {
      return (state = false);
    },
  },
});

const modalSliceReducer = modalSlice.reducer;
export default modalSliceReducer;
export const { showModal, closeModal } = modalSlice.actions;
