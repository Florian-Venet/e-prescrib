import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import styles from './styles.module.css';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NewOrdo() {
  return (
    <div className={styles.navBarre}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="./src/assets/logo.png" style={{ marginRight: '10px' }} />
          <Typography sx={{ fontFamily: 'Montserrat' }} variant="h5">ePrescrib</Typography>
        </Box>
        <IconButton aria-label="delete">
        <LogoutIcon />
        </IconButton>
        </Box>
    </div>
  );
}
