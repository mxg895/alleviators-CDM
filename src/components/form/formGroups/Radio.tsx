import FormControlLabel from "@mui/material/FormControlLabel";
import RadioControl from "@mui/material/Radio";
import MUIRadioGroup from "@mui/material/RadioGroup";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOnboardingState, updateOnboarding } from "../../../questionnaires/questionnaireSlice";
import { AnswerOption } from "../../../questionnaires/types";

interface RadioOptionProps {
    options: Array<AnswerOption>
    qIdx: number
}

const RadioGroup = ({options, qIdx}: RadioOptionProps) => {
  const onBoardingState = useSelector(selectOnboardingState);
  const dispatch = useDispatch();

  const updateChecked = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateOnboarding({[qIdx]: Number(e?.target?.value)}));
  };

  return (
    <MUIRadioGroup defaultValue={-1}>
      {options.map((opt, i) => {
        return <FormControlLabel
          key={`${qIdx}-${i}`}
          control={<RadioControl
            key={`${qIdx}-${i}`}
            checked={onBoardingState?.[qIdx] === i}
            color="default"
            sx={{"&.Mui-checked": {color: "common.black"}}}
            value={i}
            onChange={updateChecked}
          />}
          label={opt.label}
        />;
      })}
    </MUIRadioGroup>
  );
};

export default RadioGroup;
