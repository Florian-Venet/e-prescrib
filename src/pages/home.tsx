import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import OrdoList from "../components/ordoList";

export default function Home(){
  const navigate = useNavigate();

  const goNew = () => {
    navigate('/new');
  }
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "4rem"}}>
      <NavBar/>
      <OrdoList/>
      <IconButton style={{
        position: "absolute",
        bottom: "3rem",
        right: "3rem",
        width: "3.5rem",
        height: "3.5rem",
        backgroundColor: "#4153EF"
      }} onClick={goNew}>
        <Add sx={{color: "white", width: "2rem", height: "2rem"}}/>
      </IconButton>
    </div>
  )
}