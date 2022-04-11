import { configureStore } from "@reduxjs/toolkit";
import resourceSlice from "./components/resources/resourceSlice";
import authSlice from "./protectedRoutes/authSlice";
import choiceSlice from "./questionnaires/choiceSlice";
import qRSlice from "./questionnaires/questionnaireSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    questionnaireRes: qRSlice,
    resources: resourceSlice,
    choices: choiceSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
