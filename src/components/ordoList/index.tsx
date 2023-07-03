import React from 'react';
import { Typography, Box, Fab } from '@mui/material';
import styles from './styles.module.css';
import AddIcon from '@mui/icons-material/Add';



export default function App() {
  return (
    <Fab color="primary" aria-label="add" className={styles.addButton} onClick={event => window.location.href='/new'}
    >
  <AddIcon />
</Fab>
  );

}
