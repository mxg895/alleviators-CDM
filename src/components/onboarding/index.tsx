import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { selectPrivacyState } from "../../protectedRoutes/authSlice";
import OnboardingQuestionnaire from "../../questionnaires/onboarding";
import { OnboardingResState, selectOnboardingState } from "../../questionnaires/questionnaireSlice";
import PrivacyStatement from "../privacyStatement";
import Questionnaire from "../questionnaire";

const StyledGrid = styled(Grid)`
  &.MuiGrid-root {
    flex-flow: column nowrap;
    margin-bottom: 2vh;
    div:first-of-type {
      margin-top: auto;
    }
  }
`;

const OnBoarding = () => {
  const usePrivacy = useSelector(selectPrivacyState);
  const onBoardingState : OnboardingResState = useSelector(selectOnboardingState);
  return (
    // <Grid container marginX="auto" maxWidth="md" minHeight="100vh" justifyContent="center" px="2rem">
    <>
      {usePrivacy
        ?
        <Grid container alignSelf="start" mt="50px">
          <Questionnaire questionnaire={OnboardingQuestionnaire} onBoardingState={onBoardingState}/>
        </Grid>
        :
        <StyledGrid container>
          <PrivacyStatement />
        </StyledGrid>
      }
    </>
    // </Grid>
  );
};

export default OnBoarding;
