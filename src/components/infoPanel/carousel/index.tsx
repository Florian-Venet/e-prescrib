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
    description: <img src={medecin} className={styles.img} />,
  },
  {
    label: 'Le patient le scanne et récupère les informations',
    description: <img src={pharmacie} className={styles.img} />,
  },
  {
    label: 'La pharmacienne les récupère à son tour',
    description: <img src={pharmacie2} className={styles.img} />,
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
      <div className={styles.carousel}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div>
          <Typography variant="h5">ePrescrib</Typography>
          <Typography variant="subtitle1">Votre santé dans votre poche !</Typography>
        </div>
      </div>

      <Box sx={{ height: 456, maxWidth: 300, width: '100%', p: 2 }}>
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


