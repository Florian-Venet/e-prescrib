import LogoutIcon from '@mui/icons-material/Logout';
import { Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../firebase/authContext';
import styles from './styles.module.css';

export default function NavBarre() {
  const { signOut } = useContext(AuthContext)

  return (
    <div className={styles.navBarre}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} className={styles.logo} style={{ marginRight: '10px' }} alt="logo" />
          <Typography sx={{ fontFamily: 'Montserrat' }} style={{ color: 'white' }} variant="h5">ePrescrib</Typography>
        </Box>
        <IconButton aria-label="delete" style={{ color: 'white' }} onClick={signOut}>
          <LogoutIcon />
        </IconButton>
        </Box>
    </div>
  );
}
