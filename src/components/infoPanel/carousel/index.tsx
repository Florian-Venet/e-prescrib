import styles from './styles.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import medecin from '../../../assets/medecin.png';
import pharmacie from '../../../assets/parmacie.png';
import pharmacie2 from '../../../assets/parmacie2.png';
import logo from '../../../assets/logo.png';

const steps = [
  {
    label: 'Le médecin génère le QR Code',
    description: (
      <div className={styles.step}>
        <div className={styles.description}>
          <Typography variant="h6">Le médecin : </Typography><br/>
          <Typography variant="body1">Le médecin créé l'ordonnance et génère un QR Code contenant toues les informations, que le patients peut répuréper via son application</Typography>
        </div>
        <img src={medecin} className={styles.img} alt="QR Code" />
      </div>
    ),
  },
  {
    label: 'Le patient le scanne et récupère les informations',
    description: (
      <div className={styles.step}>
        <div className={styles.description}>
          <Typography variant="h6">Le patient :</Typography><br/>
          <Typography variant="body1">Le patient scanne le QR Code via son application mobile et n'a plus qu'à se rendre en pharmacie pour récupérer ses médicaments</Typography>
        </div>
        <img src={pharmacie} className={styles.img} alt="Scan du QR Code" />
      </div>
    ),
  },
  {
    label: 'La pharmacienne les récupère à son tour',
    description: (
      <div className={styles.step}>
        <div className={styles.description}>
          <Typography variant="h6">La pharmacienne :</Typography><br/>
          <Typography variant="body1">La pharmacienne scanne à son tour le QR Code via le téléphone du patient et peut récupères ainsi l'ordonnance</Typography>
        </div>
        <img src={pharmacie2} className={styles.img} alt="Récupération par la pharmacienne" />
      </div>
    ),
  },
];

export default function Carousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 750, flexGrow: 1 }}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} className={styles.logo} style={{ marginRight: '10px' }} alt="logo" />
            <Typography sx={{ fontFamily: 'Montserrat' }} style={{ color: 'white' }} variant="h5">ePrescrib</Typography>
          </Box><br/>
          <Typography variant="h6">Votre santé dans votre poche !</Typography>
          <Typography variant="body1">ePrescrib est une solution pensée pour changer notre rapport aux ordonnances en les rendant numérique. Terminé l'uttilisation du papier et de l'encre.</Typography>
        </div>
      </div>

      <Box sx={{ p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
          </Button>
        }
      />
    </Box>
  );
}
