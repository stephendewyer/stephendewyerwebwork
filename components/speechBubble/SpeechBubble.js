import styles from './SpeechBubble.module.css';

const SpeechBubble = (props) => {
    return (
        <blockquote className={styles.bubble + ' ' + styles.speech } > 
            {props.children}
        </blockquote>
    )
}

export default SpeechBubble;