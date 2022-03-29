import CheveronLeft from "@mui/icons-material/ChevronLeft";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BASEURL from "../../baseURL";
import { selectHasViewedSkip, viewedSkip } from "../../questionnaires/choiceSlice";
import { OnboardingResState, QuestionState, selectOnboardingState, updateOnboarding } from "../../questionnaires/questionnaireSlice";
import QuestionnaireType, { Aspect, Goal, SubCategory, TagGroup } from "../../questionnaires/types";
import Form from "../form";
import Modal from "../modal";
import { updateSummaries } from "../resources/resourceSlice";
import TextButton from "../textButton";

interface QuestionnaireProps{
  questionnaire: QuestionnaireType
  onBoardingState?: OnboardingResState
}

const Questionnaire = ({questionnaire = []/* , onBoardingState */}: QuestionnaireProps) => {
  const [currIdx, setIdx] = useState(0);
  const hasViewedSkip = useSelector(selectHasViewedSkip);
  const qLen = questionnaire.length;
  const [progress, setProgress] = useState((currIdx + 1)/qLen * 100);
  const [readyToFetch, setReadyToFetch] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onBoardingState : OnboardingResState = useSelector(selectOnboardingState);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(viewedSkip());
    setOpen(false);
  };

  const handleModalSkip = () => {
    dispatch(viewedSkip());
    dispatch(updateOnboarding({[currIdx]: null} as OnboardingResState));
    setOpen(false);
    if (currIdx < qLen - 1) {
      setIdx(currIdx + 1);
    } else if (currIdx === qLen - 1) {
      setReadyToFetch(true);
    } else {
      console.error("SHOULD NOT HAPPEN: currIdx < 0 in Questionnaire");
    }
  };

  const handleModalAnswer = () => {
    setOpen(false);
    dispatch(viewedSkip());
  };

  const handlePrevious = () => {
    if (currIdx > 0) {
      setIdx(currIdx - 1);
    }
  };

  const buildTagPreferences = useCallback(() => {
    let tagGroup: TagGroup = {
      aspect: new Set<Aspect>(),
      goal: new Set<Goal>(),
      subcategory: new Set<SubCategory>()
    };

    // For each questions's response
    Object.entries(onBoardingState).forEach(([qIdx, selections] : [string, QuestionState]) => {
      // If this is a multi-selection (E.g. checkbox) question
      if (Array.isArray(selections)) {
        // For each selection
        selections.forEach((isSelectedState, i) => {
          // If the selection is selected
          if (isSelectedState) {
            // Find the matching option's value from questionnaire that corresponds to the currently iterating selection
            const optionVal = questionnaire[Number(qIdx)].options[i].value;
            if (!!optionVal) {
              // Add tags from each type into tagGroup
              Object.entries(optionVal).forEach(([valType, valTags]) => {
                valTags.forEach((tag) => {
                  tagGroup[valType].add(tag);
                });
              });
            }
          }
        });
      } else if (typeof selections === "number") {
        // if the question is a single selection, then selections represent the index of the option of question qIdx
        const optionVal = questionnaire[Number(qIdx)].options[selections].value;
        if (!!optionVal) {
          Object.entries(optionVal).forEach(([valType, valTags]) => {
            valTags.forEach((tag) => {
              tagGroup[valType].add(tag);
            });
          });
        }
      }
    });
    return tagGroup;
  }, [onBoardingState, questionnaire]);

  const handleSkip = () => {
    if (!hasViewedSkip) {
      setOpen(true);
      // dispatch(updateOnboarding({[currIdx]: null} as OnboardingResState));
    } else {
      dispatch(updateOnboarding({[currIdx]: null} as OnboardingResState));
      if (currIdx < qLen - 1) {
        setIdx(currIdx + 1);
      } else if (currIdx === qLen - 1) {
        setReadyToFetch(true);
      } else {
        console.error("SHOULD NOT HAPPEN: currIdx < 0 in Questionnaire");
      }
    }};

  const handleNext = () => {
    if (currIdx < qLen - 1) {
      setIdx(currIdx + 1);
    } else if (currIdx === qLen - 1) {
      setReadyToFetch(true);
    } else {
      console.error("SHOULD NOT HAPPEN: currIdx < 0 in Questionnaire");
    }
  };

  useEffect(() => {
    if (currIdx + 1 === qLen && readyToFetch) {
      // fetchWithPreference();
      const tagPrefs = buildTagPreferences();
      console.log(tagPrefs);
      axios.post(`${BASEURL}/resource`, {
        aspect: Array.from(tagPrefs.aspect),
        goal: Array.from(tagPrefs.goal),
        subcategory: Array.from(tagPrefs.subcategory)
      }).then((res) => {
        // TODO: remove this once ready!
        console.log(res.data);
        dispatch(updateSummaries(res.data));
        navigate("/resources");
        // console.log(JSON.stringify(res.data, null, 2));
      }).catch((err) => {
        console.error(
          "Unexpected error while trying to fetch curated content from backend: ", err);
      });
    }
    setReadyToFetch(false);

  }, [buildTagPreferences, currIdx, dispatch, navigate, onBoardingState, qLen, readyToFetch]);

  useEffect(() => {
    setProgress((currIdx + 1)/qLen * 100);
  }, [currIdx, qLen]);

  return (
    <>
      <Stack justifyContent="end" width="100%" id="nav+progress-grid" spacing={2}>
        <Stack direction="row">
          {currIdx > 0 &&
          <Grid item xs textAlign="left">
            <TextButton btnText="Previous" btnIcon={<CheveronLeft />} onClick={handlePrevious}></TextButton>
          </Grid>
          }
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
      </Stack>
      <Grid container>
        <Form qIdx={currIdx} question={questionnaire[currIdx]}/>
      </Grid>
      <Grid container direction="column"justifyContent="center" sx={{paddingBottom: "2rem"}}>
        <Button variant="contained" color="secondary" sx={{alignSelf: "center"}} onClick={handleNext}>
          <Typography variant="h6">Next</Typography>
        </Button>
      </Grid>
      <Modal
        isOpen={!hasViewedSkip && open}
        title="Wait!"
        content="The more questions you answer, the better we can tailor the resources to fit your requirements."
        handleClose={closeModal}
        actionButtons={
          <><Button onClick={handleModalAnswer}>Answer</Button>
            <Button onClick={handleModalSkip} color="info">Skip</Button>
          </>}
      />
    </>
  );
};

export default Questionnaire;
