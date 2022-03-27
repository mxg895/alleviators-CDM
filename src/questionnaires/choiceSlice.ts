import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ChoiceState {
  hasViewedSkip: boolean
};

const initialState: ChoiceState = {
  hasViewedSkip: false
};

const choiceSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    viewedSkip: (state) => {
      state.hasViewedSkip = true;
    }
  }
});

export default choiceSlice.reducer;
export const { viewedSkip } = choiceSlice.actions;

export const selectHasViewedSkip = (state: RootState) => state.choices.hasViewedSkip;
