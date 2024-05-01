import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  file: File | null;
  caption: string | "";
};

const initialState: InitialState = {
  file: null,
  caption: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<File>) => {
      state.file = action.payload;
    },
    setCaption: (state, action: PayloadAction<string>) => {
      state.caption = action.payload;
    },
    clearPostData: (state) => {
      state.file = null;
      state.caption = "";
    },
  },
});

const postSlideReducer = postSlice.reducer;
export const { setFile, setCaption, clearPostData } = postSlice.actions;
export default postSlideReducer;
