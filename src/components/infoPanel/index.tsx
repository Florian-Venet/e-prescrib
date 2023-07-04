import { Box, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
import Carousel from './carousel';
import styles from './styles.module.css';


export default function Panel(){
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} className={styles.logo} style={{ marginRight: '10px' }} alt="logo" />
            <Typography sx={{ fontFamily: 'Montserrat' }} style={{ color: 'white' }} variant="h3">ePrescrib</Typography>
          </Box><br/>
          <div>
            <Typography variant="h5">Votre santé, simplifiée </Typography>
            <Typography variant="body1">ePrescrib est une solution pensée pour changer notre rapport aux ordonnances en les rendant numérique. Terminé l'utilisation du papier et de l'encre.</Typography>
          </div>
      </div>
      <Carousel/>
    </div>
  )
}