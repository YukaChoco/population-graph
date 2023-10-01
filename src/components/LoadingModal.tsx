import styles from '@/styles/LoadingModal.module.css';
import LoadingSpinner from './atom/LoadingSpinner';

interface Props {
  onOpen: boolean;
}

export default function LoadingModal(props: Props) {
  if (props.onOpen) {
    return (
      <div className={styles.sheet}>
        <span className={styles.text}>Loading...</span>
        <LoadingSpinner />
      </div>
    );
  }
  return <></>;
}
