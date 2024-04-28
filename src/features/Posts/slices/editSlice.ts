import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type ActiveTab = "filters" | "adjustments";
export type ActiveFilter =
  | "bw"
  | "hudson"
  | "aden"
  | "brooklyn"
  | "earlybird"
  | "hefe"
  | "lofi"
  | "crema"
  | "nashville"
  | "";
export type CustomClass = { filter: string } | {};
export type Adjustments<T> = {
  brightness?: T;
  saturate?: T;
  contrast?: T;
  invert?: T;
  sepia?: T;
};

type AdjustmentPayload = {
  title: string;
  value: number;
};

type InitialState = {
  activeTab: ActiveTab;
  activeFilter: ActiveFilter;
  adjustments: Adjustments<number>;
  customClass: CustomClass;
};

const initialState: InitialState = {
  activeTab: "filters",
  activeFilter: "",
  adjustments: {},
  customClass: {},
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    activateTab: (state, action: PayloadAction<ActiveTab>) => {
      state.activeTab = action.payload;
    },
    activateFilter: (state, action: PayloadAction<ActiveFilter>) => {
      state.activeFilter = action.payload;
    },
    mutateAdjustments: (state, action: PayloadAction<AdjustmentPayload>) => {
      state.adjustments = {
        ...state.adjustments,
        [action.payload.title]: action.payload.value,
      };
    },
    createCustomClass: (state, action: PayloadAction<CustomClass>) => {
      state.customClass = action.payload;
    },
    clearAdjustments: (state) => {
      state.adjustments = {};
      state.customClass = {};
    },
    clearFilters: (state) => {
      state.activeFilter = "";
    },
    clearEditProcess: (state) => {
      state = initialState;
    },
  },
});

const editSliceReducer = editSlice.reducer;
export default editSliceReducer;
export const {
  activateTab,
  activateFilter,
  mutateAdjustments,
  createCustomClass,
  clearFilters,
  clearAdjustments,
  clearEditProcess,
} = editSlice.actions;
