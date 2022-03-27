import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectPrivacyState } from "./authSlice";

const ProtectedRoutes = () => {
  const usePrivacy = useSelector(selectPrivacyState);
  return (
    usePrivacy
      ? <Outlet />
      : <Navigate to="/" />
  );

};
export default ProtectedRoutes;
