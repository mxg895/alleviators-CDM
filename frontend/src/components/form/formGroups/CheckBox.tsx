import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormHelperText from "@mui/material/FormHelperText";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OnboardingResState, selectOnboardingState, updateOnboarding } from "../../../questionnaires/questionnaireSlice";
import { AnswerOption } from "../../../questionnaires/types";

interface CheckBoxProps {
  qIdx: number,
  options: Array<AnswerOption>
  helperText?: string
}

const CheckBoxGroup = ({qIdx, options, helperText}: CheckBoxProps) => {
  const onBoardingState = useSelector(selectOnboardingState);
  const dispatch = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState(onBoardingState?.[qIdx] as boolean[] || new Array<boolean>(options.length).fill(false));


  // Reflect changes to checkbox on both the local and the reducer state
  const toggleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("calling toggleChecked!");
    // console.log("original selected options" + JSON.stringify);
    const updatedSelections = selectedOptions.map((_, i) => {
      if (e?.target?.value === i.toString()) {
        // console.log(`Found matching checkbox at index: ${i}`);
        return !selectedOptions[i];
      }
      return selectedOptions[i];
    });
    setSelectedOptions(updatedSelections);
    dispatch(updateOnboarding({[qIdx]: updatedSelections} as OnboardingResState));
  };


  useEffect(() => {
    setSelectedOptions(onBoardingState?.[qIdx] as boolean[] || new Array<boolean>(options.length).fill(false));
  }, [onBoardingState, options.length, qIdx]);

  return (
    <>
      {helperText &&
        <FormHelperText sx={{typography: "subtitle1", marginX: 0}}>
          {helperText}
        </FormHelperText>}
      <FormGroup>
        {options.map((opt, i) => {
          return <FormControlLabel key={`${qIdx}-${i}`} control={
            <Checkbox
              color="default"
              checked={selectedOptions[i]}
              sx={{"&.Mui-checked": {color: "common.black"}}}
              value={i}
              onChange={toggleChecked}
            />}
          label={opt.label}
          />;
        })}
      </FormGroup>
    </>
  );
};

export default CheckBoxGroup;
