import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import medecin from '../../../assets/medecin.png';
import pharmacie from '../../../assets/parmacie.png';
import pharmacie2 from '../../../assets/parmacie2.png';
import styles from './styles.module.css';

const steps = [
  {
    label: 'Le médecin génère le QR Code',
    description: (
      <div className={styles.step}>
        <div className={styles.description}>
          <Typography variant="h6">Le médecin : </Typography><br/>
          <Typography variant="body1">Le médecin créé l'ordonnance et génère un QR Code contenant toues les informations, que le patients peut répuréper via son application.</Typography>
        </div>
        <img src={medecin} className={styles.img} alt="QR Code" />
      </div>
    ),
  },
  {
    label: 'Le patient le scanne et récupère les informations',
    description: (
      <div className={styles.step}>
        <img src={pharmacie} className={styles.img} alt="Scan du QR Code" />
        <div className={styles.description}>
          <Typography variant="h6">Le patient :</Typography><br/>
          <Typography variant="body1">Le patient scanne le QR Code via son application mobile et n'a plus qu'à se rendre en pharmacie pour récupérer ses médicaments.</Typography>
        </div>
      </div>
    ),
  },
  {
    label: 'La pharmacienne les récupère à son tour',
    description: (
      <div className={styles.step}>
        <div className={styles.description}>
          <Typography variant="h6">La pharmacienne :</Typography><br/>
          <Typography variant="body1">La pharmacienne scanne à son tour le QR Code via le téléphone du patient et peut récupères ainsi l'ordonnance.</Typography>
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', margin: 'auto', width: '90%'}}>
      <Box sx={{ p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
          style={{ backgroundColor: 'transparent', margin: '0 5rem'}}
          variant="dots"
          position='static'
          steps={maxSteps}
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              style={{ color: 'white', backgroundColor: 'transparent', opacity: activeStep === maxSteps - 1 ? 0.4 : 1}}
              >
              <KeyboardArrowRight />
            </Button>
          }
            backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              style={{ color: 'white', backgroundColor: 'transparent', opacity: activeStep === 0 ? 0.4 : 1 }}
              >
              <KeyboardArrowLeft />
            </Button>
        }/>
    </Box>
  );
}
