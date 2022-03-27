import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Question } from "../../questionnaires/types";
import CheckBoxGroup from "./formGroups/CheckBox";
import RadioGroup from "./formGroups/Radio";

const StyledFormControl = styled(FormControl)`
  &.MuiFormControl-root {
    width: 100%;
    > .MuiFormLabel-root {
      height: 2rem;
      padding-top: 3rem;
    }
    > .MuiFormHelperText-root, .MuiFormGroup-root {
      padding-top: 1rem;
      margin: 0;
    }
    > .MuiFormGroup-root {
      min-height: 25rem;
      > * {
        margin-bottom: 2rem;
      }
    }
      
  }
`;

interface FormProps {
  qIdx: number
  question: Question
}


const Form = ({qIdx, question}: FormProps) => {
  const formGroup = question.type === "checkbox"
    ? <CheckBoxGroup options={question.options} helperText="Select all that apply" qIdx={qIdx}></CheckBoxGroup>
    : <RadioGroup options={question.options} qIdx={qIdx}></RadioGroup>;

  return (
    <StyledFormControl>
      <FormLabel filled={false} focused={false} sx={{typography: "body2"}}>{question.description}</FormLabel>
      {formGroup}
    </StyledFormControl>
  );
};
export default Form;
