import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import styles from './styles.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../assets/logo.png'

export default function NavBarre() {
  return (
    <div className={styles.navBarre}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} className={styles.logo} style={{ marginRight: '10px' }} alt="logo" />
          <Typography sx={{ fontFamily: 'Montserrat' }} variant="h5">ePrescrib</Typography>
        </Box>
        <IconButton aria-label="delete">
        <LogoutIcon />
        </IconButton>
        </Box>
    </div>
  );
}
