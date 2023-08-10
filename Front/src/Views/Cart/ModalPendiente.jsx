/* eslint-disable react/prop-types */

import styles from './ModalPendiente.module.css';

const ModalPendiente = ({isOpen, onClose, ticket}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <iframe
          src={ticket}
          title="Contenido del Ticket"
          className={styles.iframe}
        />
      </div>
    </div>
  );
};

export default ModalPendiente;
