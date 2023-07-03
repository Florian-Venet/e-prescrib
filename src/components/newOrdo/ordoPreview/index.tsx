import { Paper, Typography } from '@mui/material';
import { Ordonnance } from '../../../pages/new';
import styles from '../styles.module.css';

export default function OrdoPreview({ordonnance}: {ordonnance: Ordonnance}) {
  return (
    <div className={styles.preview}>
      <Paper sx={{height: "75vh", margin: "0 15%", width: "40vw", padding: "3rem 2rem"}} elevation={6} className={styles.ordoFile}>
        <div>
          <Typography variant='h6' textAlign={"center"}>Ordonnance du {ordonnance.date.toLocaleDateString()}</Typography>
          <Typography variant='subtitle1' textAlign={"center"}>{ordonnance.name}</Typography>
        </div>
        <div className={styles.body}>
          <div className={styles.bodyPresc}>
            {ordonnance.content.map((presc) => (
              <div key={presc.id} className={styles.bodyRow}>
                <Typography>{presc.name}</Typography>
                <Typography>x{presc.quantity}</Typography>
              </div>
            ))}
          </div>
          <Typography>{ordonnance.comment}</Typography>
        </div>
        <Typography>Docteur Dominique Hourriez</Typography>
      </Paper>
    </div>
  )
}