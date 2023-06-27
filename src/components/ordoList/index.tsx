import React from 'react';
import { Typography, Box, Fab } from '@mui/material';
import styles from './styles.module.css';
import { LogoutOutlined } from '@mui/icons-material/';
import AddIcon from '@mui/icons-material/Add';
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function renderRow(props: { index: any; style: any; }) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }
export default function App() {
  return (
    
    <div className={styles.title}>
        <Typography sx={{fontFamily: "Montserrat"}} variant='h5'>
          Mes ordonnances
        </Typography>
        <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={20}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
        </Fab>
        </Box>

    </div>
  );
}
