import { createSlice } from "@reduxjs/toolkit";

const MockInitialState = {
  activeTab: "filters",
  activeFilter: "",
  adjustments: {},
  filtersInteraction: false,
  customClass: {},
};

const MockEditSlice = createSlice({
  name: "edit",
  initialState: MockInitialState,
  reducers: {},
});

const MockEditSliceReducer = MockEditSlice.reducer
export default MockEditSliceReducer