import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "./components/resources/resourceSlice";
import authReducer from "./protectedRoutes/authSlice";
import choiceSlice from "./questionnaires/choiceSlice";
import qRReducer from "./questionnaires/questionnaireSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    questionnaireRes: qRReducer,
    resources: resourceReducer,
    choices: choiceSlice
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
