import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./Router";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans"
  }
});