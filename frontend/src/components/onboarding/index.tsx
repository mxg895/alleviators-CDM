import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { selectPrivacyState } from "../../protectedRoutes/authSlice";
import OnboardingQuestionnaire from "../../questionnaires/Onboarding";
import { OnboardingResState, selectOnboardingState } from "../../questionnaires/questionnaireSlice";
import PrivacyStatement from "../privacyStatement";
import Questionnaire from "../questionnaire";

const OnBoarding = () => {
  const usePrivacy = useSelector(selectPrivacyState);
  const onBoardingState : OnboardingResState = useSelector(selectOnboardingState);
  return (
    <Grid container height="100%" justifyContent="center">
      {usePrivacy
        ?
        <Grid container direction="column" /* justifyContent="center" alignSelf="end" */ sx={{maxWidth: {xs: "90%", md: "70%", lg: "50%"}}}>
          <Questionnaire questionnaire={OnboardingQuestionnaire} onBoardingState={onBoardingState}/>
        </Grid>
        :
        <Grid container justifyContent="center" minHeight="70%" alignContent="start" alignSelf="end" sx={{maxWidth: {xs: "90%", md: "70%", lg: "50%"}}}>
          <PrivacyStatement />
        </Grid>
      }
    </Grid>
  );
};

export default OnBoarding;
