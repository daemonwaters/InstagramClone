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
type CustomClass = { filter: string } | {};
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
  filtersInteraction: boolean;
  customClass: CustomClass;
};

const initialState: InitialState = {
  activeTab: "filters",
  activeFilter: "",
  adjustments: {},
  filtersInteraction: false,
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
    setAdjustments: (state, action: PayloadAction<Adjustments<number>>) => {
      state.adjustments = action.payload;
    },
    setFilterInteraction: (state, action: PayloadAction<boolean>) => {
      state.filtersInteraction = action.payload;
    },
    createCustomClass: (state, action: PayloadAction<CustomClass>) => {
      state.customClass = action.payload;
    },
  },
});

const editSliceReducer = editSlice.reducer;
export default editSliceReducer;
export const {
  activateTab,
  activateFilter,
  setAdjustments,
  setFilterInteraction,
  mutateAdjustments,
  createCustomClass,
} = editSlice.actions;
