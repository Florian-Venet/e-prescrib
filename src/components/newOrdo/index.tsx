import { Add } from '@mui/icons-material';
import { Box, Button, FormControl, IconButton, InputLabel, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import { useState } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import { Prescription } from '../../pages/new';
import styles from './styles.module.css';

const medicaments = [
  { id: "3314", name: "Aucun" },
  { id: "2313", name: "Paracétamol" },
  { id: "3453", name: "Ibuprofène" },
  { id: "6576", name: "Tramadol" },
  { id: "4534", name: "Amoxicilline" },
  { id: "4367", name: "Cholécalciférol" },
  { id: "9087", name: "Phloroglucinol" },
  { id: "3246", name: "Martinmeniole" }
];

const quantity = [
  { id: "3314", name: "0" },
  { id: "2313", name: "1" },
  { id: "3453", name: "2" },
  { id: "6576", name: "3" },
  { id: "4534", name: "4" },
  { id: "4367", name: "5" },
  { id: "9087", name: "6" },
  { id: "3246", name: "7" }
];

type NewOrdoProps = {
  fn: string;
  ln: string;
  comment: string;
  setFn(s: string): void;
  setLn(s: string): void;
  setContent: React.Dispatch<React.SetStateAction<Prescription[]>>;
  setComment(s: string): void
  handleGenerate(): void;
}

export default function NewOrdo(props : NewOrdoProps) {
  const { fn, ln, comment, setFn, setLn, setComment, setContent, handleGenerate } = props;
  const { isTablet }  = useIsMobile();
  const [selectedMed, setSelectedMed] = useState<{id: string; name:string} | null>(null);
  const [selectedQ, setSelectedQ] = useState<{id: string; name:string} | null>(null);

  function addPrescription() {
    if(!selectedMed || !selectedQ) return;
    let presc:Prescription = {
      id: selectedMed.id,
      name: selectedMed.name,
      quantity: parseInt(selectedQ.name, 10)
    };
    setContent((current) => [...current, presc])
  }

  return (
    <div className={styles.content} style={{width: isTablet ? "90%" : "35%"}}>
      <Typography variant='h4'>Nouvelle ordonnance</Typography>
      <div className={styles.form}>
        <div className={styles.row}>
          <TextField
            label="Prénom"
            variant="outlined"
            value={fn}
            onChange={(e) => setFn(e.target.value)}
          />
          <TextField
            label="Nom"
            variant="outlined"
            value={ln}
            onChange={(e) => setLn(e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <BasicSelect name={"Médicaments"} items={medicaments} value={selectedMed} setValue={setSelectedMed}/>
          <BasicSelect name={"Quantité"} items={quantity} value={selectedQ} setValue={setSelectedQ}/>
          <IconButton sx={{width: '3rem', height: '3rem'}} onClick={addPrescription}>
            <Add/>
          </IconButton>
        </div>

        <TextField fullWidth label="Commentaires" multiline rows={6} value={comment} onChange={(e) => setComment(e.target.value)}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
        <Button variant='contained' sx={{backgroundColor: "#4153EF", borderRadius: "15px"}} disableElevation onClick={handleGenerate}>
          Signer et générer
        </Button>
      </div>
    </div>
  );
}



type SelectProps = {
  name: string;
  items: {id: string, name: string}[];
  value: {
    id: string;
    name: string;
  } | null;
  setValue: React.Dispatch<React.SetStateAction<{
    id: string;
    name: string;
  } | null>>;
}

const BasicSelect = ({name,items, value, setValue} : SelectProps) => {

  const handleChange = (event: SelectChangeEvent) => {
    setValue({id: "4546", name: event.target.value});
  };

  return (
    <Box sx={{ minWidth: name === 'Quantité' ? 120 : 150 }}>
      <FormControl fullWidth>
        <InputLabel>{name}</InputLabel>
        <Select
          value={value?.name}
          label={name}
          onChange={handleChange}
        >
          {items.map((item) => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}