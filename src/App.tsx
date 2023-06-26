import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Router from "./Router";

function App() {
  const nav = useNavigate();

  const goHome = () => {
    nav('/home');
  }

  const goAuth = () => {
    nav('auth');
  }

  return (
    <div>
      <ul>
        <li><Button onClick={goAuth}>Auth</Button></li>
        <li><Button onClick={goHome}>Home</Button></li>
      </ul>
      <Router />
    </div>
  );
}

export default App;
