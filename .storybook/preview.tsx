import { addDecorator } from "@storybook/react";
import MuiThemeProvider from "../components/MuiThemeProvider.tsx";

addDecorator((story) => <MuiThemeProvider>{story()}</MuiThemeProvider>);
