import Button, { ButtonProps } from "@mui/material/Button";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface TextButtonProps extends ButtonProps {
    alignToRight?: boolean
    btnText: string,
    btnIcon?: SvgIconProps,
}
const TextButton = ({alignToRight = false, btnText, btnIcon, ...rest}: TextButtonProps) => {
  return (
    <Button
      sx={{typography: "body1", justifyContent: `${alignToRight? "right" : "left"}`, textDecoration: "underline", paddingX: 0, width: "fit-content"}}
      {... rest}>
      {btnIcon}
      {btnText}
    </Button>
  );
};

export default TextButton;
