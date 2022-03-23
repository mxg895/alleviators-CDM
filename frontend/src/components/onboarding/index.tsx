import { useSelector } from "react-redux";
import { selectPrivacyState } from "../../protectedRoutes/authSlice";
import PrivacyStatement from "../privacyStatement";
import Questionnaire from "../questionnaire";


const OnBoarding = () => {
  const usePrivacy = useSelector(selectPrivacyState);
  return (
    // <Container /* component={Container} sx={{maxWidth: {xs: "80%", md: "70%"}}} */>
    usePrivacy
      ? <Questionnaire/>
      : <PrivacyStatement />
  // </Container>
  );
};

export default OnBoarding;
