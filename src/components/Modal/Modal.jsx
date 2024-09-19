import React from "react";
import styles from './Modal.module.css';

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
};

export default Modal;