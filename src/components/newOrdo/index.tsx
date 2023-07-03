import React from 'react';
import { Typography, Box, TextField, Grid, Fab, Button } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import useIsMobile from '../../hooks/useIsMobile';
import styles from './styles.module.css';

const médicaments = [
  { value: "aucun", label: "Aucun" },
  { value: "paracétamol", label: "Paracétamol" },
  { value: "ibuprofène", label: "Ibuprofène" },
  { value: "tramadol ", label: "Tramadol " },
  { value: "amoxicilline", label: "Amoxicilline" },
  { value: "cholécalciférol", label: "Cholécalciférol" },
  { value: "phloroglucinol", label: "Phloroglucinol" },
  { value: "martinmeniole", label: "Martinmeniole" }
];

const boites = [
  { value: "0", label: "0" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" }
];

export default function NewOrdo() {
  const isMobile = useIsMobile();
  const [formRows, setFormRows] = useState([{ médicaments: 'aucun', boite: '0' }]);
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [ordonnance, setOrdonnance] = useState('Patient :');

  const handleAddRow = () => {
    const newRow = { médicaments: 'aucun', boite: '0' };
    setFormRows([...formRows, newRow]);
  };

  const generateOrdonnanceString = () => {
    const patient = `Patient: ${prenom} ${nom}`;
    const medicaments = formRows.map((row) => `Médicament: ${row.médicaments}, Boîtes: ${row.boite}`);
    const ordonnanceString = `${patient}\n${medicaments.join('\n')}`;
    setOrdonnance(ordonnanceString);
  };

  return (
    <div className={styles.content} style={{ width: !isMobile ? "30vw" : "80vw" }}>
      <div className="split left">
        <div className={styles.title}>
          <Typography sx={{ fontFamily: "Montserrat", m: 2 }} variant='h5'>
            Nouvelle ordonnance
          </Typography>
        </div>

        <Box
          component="form"
          sx={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '16px', m: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Prénom"
            variant="outlined"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Nom"
            variant="outlined"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </Box>

        {formRows.map((row, index) => (
          <Grid container spacing={9} key={index}>
            <Grid item xs={6}>
              <TextField
                id={`outlined-select-médicaments-${index}`}
                select
                label="Médicaments"
                value={row.médicaments}
                onChange={(e) => {
                  const updatedFormRows = [...formRows];
                  updatedFormRows[index].médicaments = e.target.value;
                  setFormRows(updatedFormRows);
                }}
                variant="outlined"
              >
                {médicaments.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id={`outlined-select-boites-native-${index}`}
                select
                label="Nombres de boîtes"
                value={row.boite}
                onChange={(e) => {
                  const updatedFormRows = [...formRows];
                  updatedFormRows[index].boite = e.target.value;
                  setFormRows(updatedFormRows);
                }}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {boites.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        ))}

        



        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <Grid container spacing={9} alignItems="center">
          <Grid item xs={6}>
            <TextField id="outlined-search" label="Autre médicament" type="search" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-select-boites-native"
              select
              label="Nombres de boîtes"
              defaultValue="0"
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {boites.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
        </Box>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Fab color="primary" aria-label="add" onClick={handleAddRow}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>

        <Button
          variant='contained'
          sx={{ backgroundColor: "#4953EF", borderRadius: "15px", m: 2 }}
          disableElevation
          onClick={generateOrdonnanceString}
        >
          Créer l'ordonnance
        </Button>

      </div>
      <div className="split right">
        <Box
          component="div"
          sx={{
            bgcolor: '#f9ede3',
            height: '90vh',
            width: '80vh',
            padding: '16px',
            overflow: 'auto'
          }}
        >
          <Typography variant="body1">{ordonnance}</Typography>
        </Box>
      </div>
    </div>
  );
}



