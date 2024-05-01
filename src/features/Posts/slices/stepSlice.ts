import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  currentStep: number;
  preview_src: string | null;
};

type PreviewPayload = string;

const initialState: InitialState = {
  currentStep: 0,
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
    setPreview: (state, action: PayloadAction<PreviewPayload>) => {
      const { payload } = action;
      state.preview_src = payload;
      state.currentStep += 1;
    },
    clearStepProcess: (state) => {
      state.currentStep = 0;
      state.preview_src = null;
    },
  },
});

const stepSliceReducer = stepSlice.reducer;
export default stepSliceReducer;
export const { forward, back, setPreview, clearStepProcess } =
  stepSlice.actions;
