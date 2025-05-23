import { useTaskContext } from '../../contexts/useTaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const { state } = useTaskContext();
  console.log(state);

  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}
