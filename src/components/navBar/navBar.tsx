import LogoutIcon from '@mui/icons-material/Logout';
import { Box, IconButton, Typography } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../firebase/authContext';
import styles from './styles.module.css';

export default function NavBar() {
  const { signOut } = useContext(AuthContext)
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home');
  }

  return (
    <div className={styles.navBar}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <div onClick={goHome}>
          <img src={logo} className={styles.logo} style={{ marginRight: '10px' }} alt="logo" />
        </div>
        <Typography sx={{ fontFamily: 'Montserrat' }} style={{ color: 'white' }} variant="h5">ePrescrib</Typography>
      </Box>
      <IconButton aria-label="delete" style={{ color: 'white' }} onClick={signOut}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
}
