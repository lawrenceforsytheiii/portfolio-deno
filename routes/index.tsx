/** @jsx h */
import { h } from "preact";
import MuiThemeProvider from "../components/MuiThemeProvider.tsx";
import Button from "../components/Button.tsx";

export default function Home() {
  return (
    <MuiThemeProvider>
      <div>
        <h1>Welcome to My Fresh App</h1>
        <Button label="Go to About" color="primary" variant="contained" />
      </div>
    </MuiThemeProvider>
  );
}