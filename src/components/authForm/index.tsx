import { Button, Divider, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { signInUser, signUpUser } from '../../firebase/firebase';
import useIsMobile from '../../hooks/useIsMobile';

import styles from './styles.module.css';


export default function AuthForm(){
  const { isMobile } = useIsMobile();
  const navigate = useNavigate()

  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setLogin(!login);
  }
  
  const handleSubmit = async () => {
    try {
      // Send the email and password to firebase
      const userCredential = login ? await signInUser(email, password) : await signUpUser(email, password);

      if (userCredential) {
        navigate('/home');
      }
    } catch (error:any) {
      console.log('User Sign In Failed', error.message);
    }
  };

  return (
    <div className={styles.content} style={{width: !isMobile ? "30vw" : "80vw"}}>
      <div className={styles.title}>
        <Typography sx={{fontFamily: "Montserrat"}} variant='h5'>
          {!login ? "Inscrivez vous dès maintenant" : "Connectez vous à votre compte"}
        </Typography>
        <Typography sx={{fontFamily: "Montserrat", opacity: "0.7"}} variant='subtitle2'>Simplifions les ordonnances ensemble</Typography>
      </div>

      <Button variant='outlined' sx={{borderColor: "", borderRadius: "15px"}} disableElevation>
        <FcGoogle style={{padding:"4px"}}/> {!login ? "S'inscrire" : "Se connecter"} avec Goggle
      </Button>

      <Divider sx={{margin: "32px 0"}}>ou</Divider>

      <div className={styles.form}>
        {!login ? 
          <TextField id="name" label="Prénom" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
        : null}
        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField id="password" label="Mot de passe" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <Button variant='contained' sx={{backgroundColor: "#4153EF", borderRadius: "15px"}} disableElevation onClick={handleSubmit}>
        {login ? "Se connecter" : "S'inscrire"}
      </Button>
      <Typography variant='caption' sx={{marginTop: "8px"}}>
        Vous avez déjà un compte ? 
        <span onClick={handleToggle} className={styles.button}> Se connecter</span>
      </Typography>
    </div>
  )
}