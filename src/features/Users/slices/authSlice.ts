import { createSlice } from "@reduxjs/toolkit";
import { AddUsertoFiretore } from "../services/AddUsertoFirestore";

type InitialState = {
  status: "idle" | "pending" | "succuss" | "fail";
  error: { message: string } | null;
  hasAccess: boolean;
  accessId: string | null;
};

const initialState = {
  status: "idle",
  error: null,
  hasAccess: false,
  accessId: null,
} satisfies InitialState as InitialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddUsertoFiretore.rejected, (state, action) => {
        state.error = {
          message: action.payload as string,
        };
        state.status = "fail";
      })
      .addCase(AddUsertoFiretore.fulfilled, (state, { payload }) => {
        state.accessId = payload;
        state.hasAccess = true;
        state.status = "succuss";
      })
      .addCase(AddUsertoFiretore.pending, (state) => {
        state.status = "pending";
      });
  },
});

const authSliceReducer = authSlice.reducer;
export default authSliceReducer;
