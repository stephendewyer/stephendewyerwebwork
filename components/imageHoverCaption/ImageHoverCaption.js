import { useState  } from 'react';
import styles from './ImageHoverCaption.module.css';

const ImageHoverCaption = ({ imagePlusCaption }) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <figure 
            className={styles.imagePlusCaptionContainer}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}

            onClick={onMouseEnter}
            onBlur={onMouseLeave}
        >
            <div 
                className={styles.imageContainer}
            >
                {imagePlusCaption.image}
            </div>
            <div 
                className={ (isHovering) ? styles.overlay : styles.overlayHidden }
            >
                <figcaption className={styles.captionContainer}>
                    {imagePlusCaption.caption}
                </figcaption>
            </div>
        </figure>
    );
}

export default ImageHoverCaption;