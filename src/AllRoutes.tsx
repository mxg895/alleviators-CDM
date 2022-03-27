import { Route, Routes } from "react-router-dom";
import OnBoarding from "./components/onboarding";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoarding />}/>
      <Route path="resource/:resourceId" element={<div>1Resource</div>}/>
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Routes>
  );
};
export default AllRoutes;
