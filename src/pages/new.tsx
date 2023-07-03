import NavBar from "../components/navBar/navBar";
import NewOrdo from "../components/newOrdo";
import useIsMobile from "../hooks/useIsMobile";

export default function New(){
    const isMobile = useIsMobile();
    
    return (
      <div>
        <NavBar/>
        <NewOrdo/>
      </div>
    )
  }