import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

import styles from './styles.module.css';


export default function OrdoList() {
  const models = ["Mon modèle 1", "Mon modèle 2", "Mon modèle 3"];

  return (
    <div className={styles.container}>
      <Typography variant='h4'>Mes modèles :</Typography>
      <List>
        {models.map((item, index) => (
          <OrdoRaw med={item} key={index}/>
        ))}
      </List>
    </div>
  );
}


function OrdoRaw({med} : {med:string}) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={med} />
      </ListItemButton>
    </ListItem>
  )
}