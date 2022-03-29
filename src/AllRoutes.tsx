import Grid from "@mui/material/Grid";
import { Route, Routes } from "react-router-dom";
import OnBoarding from "./components/onboarding";
import ResourceList from "./components/resources";

const AllRoutes = () => {
  return (
    <Grid container marginX="auto" maxWidth="md" minHeight="100vh" justifyContent="center" px="2rem">
      <Routes>
        <Route path="/" element={<OnBoarding />}/>
        <Route path="resources" element={<ResourceList />} />
        <Route path="resource/:resourceId" element={<div>1Resource</div>}/>
        <Route path="*" element={<div>Page Not Found!</div>} />
      </Routes>
    </Grid>
  );
};
export default AllRoutes;
