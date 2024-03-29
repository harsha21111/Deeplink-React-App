import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;










// import React, { useEffect, useRef } from 'react';
// import Button from '@material-ui/core/Button';
// import CloseIcon from '@material-ui/icons/Close';
// import styles from './modal.css';

// const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
//     const modalRef = useRef(null);
//     useEffect(
//         () => {
//             if (show) {
//                 modalRef.current.classList.add(styles.visible);
//             }
//             else {
//                 modalRef.current.classList.remove(styles.visible);
//             }
//         },
//         [
//             show
//         ]
//     );
//     return (
//         <React.Fragment>
//             <div ref={modalRef} style={backdropStyle} className={`${styles.modal__wrap}`}>
//                 <Button
//                     onClick={onClose}
//                     style={{ width: 60, height: 40, position: 'absolute', top: 0, right: 0, margin: '1rem' }}
//                     className={styles.close__btn}
//                 >
//                     <CloseIcon height="20px" width="20px" className={styles.close__icon} />
//                 </Button>
//                 <div style={modalStyle} className={styles.modal}>
//                     {children}
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// };

// export default Modal;