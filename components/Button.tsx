import { Button as MuiButton } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material";

type ButtonProps = MuiButtonProps & {
  label: string;
};

export default function Button({ label, ...props }: ButtonProps) {
  return <MuiButton {...props}>{label}</MuiButton>;
}
