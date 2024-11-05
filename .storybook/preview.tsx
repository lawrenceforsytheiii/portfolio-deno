import { Decorator } from "@storybook/react";
import MuiThemeProvider from "../components/MuiThemeProvider.tsx";

const withMuiThemeProvider: Decorator = (Story) => (
  <MuiThemeProvider>
    <Story />
  </MuiThemeProvider>
);

export const decorators = [withMuiThemeProvider];