import Carousel from './carousel';
import styles from './styles.module.css';


export default function Panel(){
  return (
    <div className={styles.panel}>
      <Carousel/>
    </div>
  )
}