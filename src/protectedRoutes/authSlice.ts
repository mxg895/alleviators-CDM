import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface AuthState {
    hasPrivacyAgreement: boolean
}

const initialState: AuthState = {
  hasPrivacyAgreement: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    acceptAgreement: (state) => {
      state.hasPrivacyAgreement = true;
    }
  }
});

export default authSlice.reducer;
export const { acceptAgreement } = authSlice.actions;

// selectors:
export const selectPrivacyState = (state: RootState) => state.auth.hasPrivacyAgreement;
