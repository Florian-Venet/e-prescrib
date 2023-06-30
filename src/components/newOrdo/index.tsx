import React from 'react';
import { Typography, Box, IconButton, Button, Divider, TextField } from '@mui/material';
import styles from './styles.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import useIsMobile from '../../hooks/useIsMobile';


export default function NewOrdo(){
  const isMobile = useIsMobile();

  return (
    <div className={styles.content} style={{width: !isMobile ? "30vw" : "80vw"}}>
        <div className={styles.title}>
          <Typography sx={{fontFamily: "Montserrat"}} variant='h5'>
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
            '& .MuiTextField-root': { m: 2, width: '60ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>     
            <TextField
              id="outlined-multiline-static"
             multiline
              rows={8}
              defaultValue="Commentaire"
            />
          </div>
        </Box>


        <Button variant='contained' sx={{backgroundColor: "#4153EF", borderRadius: "15px"}} disableElevation>
            Créer l'ordonnance
        </Button>

    </div>
  )
};