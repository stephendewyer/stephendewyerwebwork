import { useState  } from 'react';
import styles from './ImageHoverCaption.module.css';

const ImageHoverCaption = ({ imagePlusCaption }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const clickHandler = () => {
        if (isHovering) {
            setIsHovered(false);
        } else {
            setIsHovered(true);
        }
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
                className={ (isHovering) ? styles.overlay : styles.overlayHidden }
                aria-hidden={!isHovering}
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