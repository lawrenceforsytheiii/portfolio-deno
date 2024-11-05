import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import theme from "../theme/theme.ts";

type MuiThemeProviderProps = {
  children: ReactNode;
};

export default function MuiThemeProvider({ children }: MuiThemeProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}