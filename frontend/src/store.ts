import { configureStore } from "@reduxjs/toolkit";
import resourceReducer from "./components/resources/resourceSlice";
import authReducer from "./protectedRoutes/authSlice";
import qRReducer from "./questionnaires/questionnaireSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    questionnaireRes: qRReducer,
    resources: resourceReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
