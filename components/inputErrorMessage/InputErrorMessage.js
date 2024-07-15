import styles from './InputErrorMessage.module.css';
import Image from 'next/image';
import errorIcon from '../../public/images/icons/error_icon.svg';

const InputErrorMessage = (props) => {

    const ErrorIcon = () => {
        return (
            <svg 
                id="Layer_1" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 790.56 709.04"
            >
                <path d="M395.28,501.79c9.63,0,17.84,3.4,24.64,10.2s10.2,15.11,10.2,24.92-3.4,17.89-10.2,24.78-15.01,10.34-24.64,10.34-17.84-3.45-24.64-10.34-10.2-15.15-10.2-24.78,3.4-18.12,10.2-24.92,15.01-10.2,24.64-10.2Zm20.11-364.77V459.87h-41.06V137.02h41.06Z"/>
                <path d="M698.41,709.04H92.15c-33.26,0-63.04-17.2-79.67-46s-16.63-63.2,0-92L315.61,46C332.24,17.2,362.02,0,395.28,0h0c33.26,0,63.04,17.2,79.67,46l303.13,525.04c16.63,28.8,16.63,63.2,0,92s-46.42,46-79.67,46ZM326,52l10.39,6L33.26,583.04c-12.29,21.29-12.29,46.71,0,68,12.29,21.29,34.31,34,58.89,34H698.41c24.58,0,46.6-12.71,58.89-34,12.29-21.29,12.29-46.71,0-68L454.17,58c-12.29-21.29-34.31-34-58.89-34s-46.6,12.71-58.89,34l-10.39-6Z"/>
            </svg>
        );
    };
    return (
        <div className={styles.inputErrorMessage}>
            <p className={styles.inputErrorParagraph}>
                {props.children}
            </p> 
            <div className={styles.inputErrorIcon}>
                <ErrorIcon />
            </div>
        </div>
    )
}

export default InputErrorMessage;