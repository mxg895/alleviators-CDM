import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import ResourceDetail, { ResourceDetailsMap, ResourceSummary } from "./types";

interface ResourceState {
  resourceDetails: ResourceDetailsMap,
  orderedResources: ResourceSummary[]
}

const initialState : ResourceState = {
  resourceDetails: {},
  orderedResources: []
};

export const resourceSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    updateSummaries: (state, action: PayloadAction<Array<ResourceSummary>>) => {
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
const selectDetailById = (id: string, state:RootState) => state.resources.resourceDetails[id];
export { selectOrderedResources, selectDetailById };
