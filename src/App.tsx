import { ThemeProvider, createTheme } from "@mui/material";
import { useContext } from "react";
import Router from "./Router";
import { AuthContext, AuthProvider } from "./firebase/authContext";

function App() {
  const { currentUser } = useContext(AuthContext)
  
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router user={currentUser}/>
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