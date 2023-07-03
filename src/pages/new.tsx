import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import QRCode from "react-qr-code";
import NavBar from "../components/navBar/navBar";
import NewOrdo from "../components/newOrdo";
import OrdoPreview from "../components/newOrdo/ordoPreview";
import useIsMobile from "../hooks/useIsMobile";

export type Ordonnance = {
  name: string;
  date: Date;
  content: Prescription[];
  comment: string;
}

export type Prescription = {
  id: string;
  name: string;
  quantity: number;
}

export default function New(){
    const { isTablet } = useIsMobile();

    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [comment, setComment] = useState('');
    const [content, setContent] = useState<Prescription[]>([]);

    var ordonnance:Ordonnance|null = null;
    const [qrCode, setQrCode] = useState<string | null>(null);

    function createOrdo() {
      let ordo:Ordonnance = {
        name: prenom + ' ' + nom,
        date: new Date(),
        content: content,
        comment: comment
      }
      ordonnance = ordo;
      return ordo;
    }

    function generateOrdo() {
      let ordo = ordonnance;
      if (!ordo) return;
      let prescData = "[";
      for(const prescription of content){
        prescData += `${prescription.name}-${prescription.quantity}`
      }
      prescData += ']';
      let data = `${ordo.name}/${ordo.date.getTime()}/${ordo.comment}/${prescData}`;
      setQrCode(data);
    }

    return (
      <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <NavBar/>
        <div style={{display: "flex", flexDirection: "row", height: '90vh'}}>
          { qrCode ?
              <div style={{ height: "auto", margin: "auto", width: "30%", display: 'flex', position: 'relative'}}>
                <IconButton sx={{position: "absolute", top: 0}} onClick={() => setQrCode(null)}>
                  <ArrowBack />
                </IconButton>
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%", margin: "0 0 8rem 8rem" }}
                  value={qrCode}
                  viewBox={`0 0 256 256`}
                />
              </div>
            :
            <NewOrdo fn={prenom} ln={nom} comment={comment} setFn={setPrenom} setLn={setNom} setComment={setComment} setContent={setContent} handleGenerate={generateOrdo}/>
          }
          {!isTablet && (
            <OrdoPreview ordonnance={createOrdo()}/>
          )}
        </div>
      </div>
    )
  }