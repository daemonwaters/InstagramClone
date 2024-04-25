import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  currentStep: number;
  file: File | null;
  preview_src: string | null;
};

type FilePayload = {
  file: File;
  preview_src: string;
};
const initialState: InitialState = {
  currentStep: 0,
  file: null,
  preview_src: null,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    forward: (state) => {
      state.currentStep += 1;
    },
    back: (state) => {
      state.currentStep -= 1;
    },
    setFile: (state, action: PayloadAction<FilePayload>) => {
      const { payload } = action;
      state.file = payload.file;
      state.preview_src = payload.preview_src;
      state.currentStep += 1;
    },
  },
});

const stepSliceReducer = stepSlice.reducer;
export default stepSliceReducer;
export const { forward, back, setFile } = stepSlice.actions;
