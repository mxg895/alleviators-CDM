import CheveronLeft from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { OnboardingResState, updateOnboarding } from "../../questionnaires/questionnaireSlice";
import QuestionnaireType from "../../questionnaires/types";
import Form from "../form";
import TextButton from "../textButton";

interface QuestionnaireProps{
  questionnaire: QuestionnaireType
}

const Questionnaire = ({questionnaire = []}: QuestionnaireProps) => {
  const [currIdx, setIdx] = useState(0);
  const qLen = questionnaire.length;
  const [progress, setProgress] = useState((currIdx + 1)/qLen * 100);

  const dispatch = useDispatch();
  const handlePrevious = () => {
    if (currIdx > 0) {
      setIdx(currIdx - 1);
    }
  };

  const handleSkip = () => {
    if (currIdx < qLen - 1) {
      dispatch(updateOnboarding({[currIdx]: null} as OnboardingResState));
      setIdx(currIdx + 1);
    }
  };

  const handleNext = () => {
    if (currIdx < qLen - 1) {
      setIdx(currIdx + 1);
    }
  };

  useEffect(() => {
    setProgress((currIdx + 1)/qLen * 100);
  }, [currIdx, qLen]);

  return (
    <>
      <Grid container direction="column" justifyContent="end" sx={{height: "15vh"}} id="nav+progress-grid">
        <Stack direction="row">
          {currIdx > 0 &&
          <Grid item xs textAlign="left">
            <TextButton btnText="Previous" btnIcon={<CheveronLeft />} onClick={handlePrevious}></TextButton>
          </Grid>
          }
          {/* TODO: add a modal when user clicks on "Skip" => check if this modal is one time, or every time they are on fist question */}
          <Grid item xs textAlign="right">
            <TextButton alignToRight={true} btnText="Skip" onClick={handleSkip}></TextButton>
          </Grid>
        </Stack>
        <Stack>
          <Stack alignItems="center" direction="row" spacing={1}>
            <Typography variant="h6">
              {`${currIdx + 1}`}
            </Typography>
            <Typography variant="subtitle2">
              {`of ${qLen}`}
            </Typography>
          </Stack>
          <LinearProgress variant="determinate" value={progress}/>
        </Stack>
      </Grid>
      <Grid container>
        <Form qIdx={currIdx} question={questionnaire[currIdx]}/>
      </Grid>
      <Grid container direction="column"justifyContent="center" sx={{paddingBottom: "2rem"}}>
        <Button variant="contained" color="secondary" sx={{alignSelf: "center"}} onClick={handleNext}>
          <Typography variant="h6">Next</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default Questionnaire;
