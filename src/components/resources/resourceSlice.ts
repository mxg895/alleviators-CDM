import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import ResourceDetail, { ResourceDetailsMap, ResourceSummary } from "./types";

interface ResourceState {
  resourceDetails: ResourceDetailsMap,
  orderedResources: ResourceSummary[]
}

// const getSummariesFromSession = () => {
//   const summaries = window.sessionStorage.getItem("orderedSummaries");
//   console.log("orderedSummaries: ", summaries);
//   return JSON.parse(summaries || "{}");
// };

const initialState : ResourceState = {
  resourceDetails: {} /* getSummariesFromSession() */,
  orderedResources: []
};

export const resourceSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateSummaries: (state, action: PayloadAction<Array<ResourceSummary>>) => {
      window.sessionStorage.setItem("orderedSummaries", JSON.stringify(action.payload));
      state.orderedResources = action.payload;
    },
    updateResourceDetails: (state, action: PayloadAction<{id: string, content: ResourceDetail}>) => {
      state.resourceDetails[action.payload.id] = action.payload.content;
    }
  }
});

export default resourceSlice.reducer;
export const {updateSummaries, updateResourceDetails} = resourceSlice.actions;

// selectors
const selectOrderedResources = (state: RootState) => state.resources.orderedResources;
const selectDetailById = (id: string) => (state: RootState) => state.resources.resourceDetails?.[id];
const selectSummaryById = (id: string) => (state: RootState) => {
  return state.resources.orderedResources.filter((r)=> r.id === id)?.[0];
};

export { selectOrderedResources, selectDetailById, selectSummaryById };
