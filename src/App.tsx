import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./Router";
import { AuthProvider, useAuth } from "./firebase/authProvider";

function App() {
  const auth = useAuth();
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router user={auth.user} />
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