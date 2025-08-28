'use client'
import { useState  } from 'react';
import styles from './ImageHoverCaption.module.css';

const ImageHoverCaption = ({ imagePlusCaption }) => {
    const [active, setActive] = useState(false);
    const onMouseEnter = () => setActive(true);
    const onMouseLeave = () => setActive(false);

    const clickHandler = () => {
        setActive(!active);
    };

    return (
        <figure 
            className={styles.imagePlusCaptionContainer}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            onClick={clickHandler}
            onBlur={onMouseLeave}
        >
            <div 
                className={styles.imageContainer}
            >
                {imagePlusCaption.image}
            </div>
            <div 
                className={ (active) ? styles.overlay : styles.overlayHidden }
                aria-hidden={!active}
            >
                <div className={styles.overlayContainer}>
                    <div className={styles.overlayCaptionAndBackground}>
                        <div className={styles.overlayContainer}>
                            <figcaption className={styles.captionContainer}>
                                {imagePlusCaption.caption}
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </figure>
    );
}

export default ImageHoverCaption;