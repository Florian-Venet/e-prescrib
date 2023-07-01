import React from 'react';
import { Typography, Box, IconButton, Button, Divider, TextField, Grid } from '@mui/material';
import styles from './styles.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import useIsMobile from '../../hooks/useIsMobile';
import MenuItem from "@mui/material/MenuItem";

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

export default function NewOrdo(){
  const isMobile = useIsMobile();

  return (
    <div className={styles.content} style={{width: !isMobile ? "30vw" : "80vw"}}>
        <div className={styles.title}>
          <Typography sx={{fontFamily: "Montserrat", m: 2}} variant='h5'>
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
          <TextField id="outlined-basic" label="Prénom" variant="outlined" />
          <TextField id="outlined-basic" label="Nom" variant="outlined" />
        </Box>
         

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
    >
      <Grid container spacing={9}>
        <Grid item xs={6}>
          <TextField
            id="outlined-select-médicaments"
            select
            label="Médicaments"
            defaultValue="aucun"
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
      </Grid>
    </Box>
        


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
      </Grid>
    </Box>


        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '60ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>     
            <TextField
              id="outlined-multiline-static"
             multiline
              rows={7}
              defaultValue="Commentaire"
            />
          </div>
        </Box>


        <Button variant='contained' sx={{backgroundColor: "#4153EF", borderRadius: "15px", m: 2}} disableElevation>
            Créer l'ordonnance
        </Button>

    </div>
  )
};