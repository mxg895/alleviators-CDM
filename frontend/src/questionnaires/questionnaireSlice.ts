import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type QuestionState = number | boolean[] | null;
export interface OnboardingResState {
  [index: number]: QuestionState
}

interface QuestionnaireResState {
  onboarding: OnboardingResState
}

const initialState: QuestionnaireResState = {
  onboarding: {}
};

export const questionnaireResSlice = createSlice({
  name: "questionnaire-response",
  initialState,
  reducers: {
    updateOnboarding: (state, action: PayloadAction<OnboardingResState>) => {
      state.onboarding = {...state.onboarding, ...action.payload};
    },
    clearOnboarding: (state) => {
      state.onboarding = {};
    }
  }
});

export default questionnaireResSlice.reducer;
export const {updateOnboarding, clearOnboarding} = questionnaireResSlice.actions;

// selectors
export const selectOnboardingState = (state: RootState) => state.questionnaireRes.onboarding;
