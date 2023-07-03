import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./Router";
import { AuthProvider } from "./firebase/authContext";

function App() {
  
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans"
  }
});