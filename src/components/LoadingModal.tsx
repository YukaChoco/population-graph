import styles from '@/styles/LoadingModal.module.css';
import LoadingSpinner from './atom/LoadingSpinner';
import type LoadingModalProps from '@/types/LoadingModalProps';

export default function LoadingModal({
  onOpen = false
}: LoadingModalProps) {
  if (onOpen) {
    return (
      <div className={styles.sheet}>
        <span className={styles.text}>Loading...</span>
        <LoadingSpinner />
      </div>
    );
  }
  return <></>;
}
