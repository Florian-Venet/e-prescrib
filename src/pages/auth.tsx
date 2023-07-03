import AuthForm from "../components/authForm";
import Panel from "../components/infoPanel";
import useIsMobile from "../hooks/useIsMobile";

export default function Auth(){
  const { isMobile } = useIsMobile();
  
  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100vh"}}>
      <div style={{margin: "auto"}}>
        <AuthForm />
      </div>
      {!isMobile ? <Panel /> : null}
    </div>
  )
}