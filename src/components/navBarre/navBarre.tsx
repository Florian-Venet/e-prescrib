import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './styles.module.css';
import { LogoutOutlined } from '@mui/icons-material/';

export default function NavBarre() {
  return (
    <div className={styles.navBarre}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="./src/assets/logo.png" style={{ marginRight: '10px' }} />
          <Typography sx={{ fontFamily: 'Montserrat' }} variant="h5">ePrescrib</Typography>
        </Box>
        <LogoutOutlined sx={{ color: '#c94d3a' }} />
      </Box>
    </div>
  );
}
