'use client'
import { useState, useEffect } from 'react';
import styles from './ImageHoverCaption.module.css';

const ImageHoverCaption = ({ imagePlusCaption }) => {

    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [active, setActive] = useState(false);

    const onMouseEnter = () => {
        if (windowWidth > 720) {
            setActive(true);
        };
    };
    const onMouseLeave = () => {
        if (windowWidth > 720) {
            setActive(false);
        };
    };

    const clickHandler = () => {
        setActive(!active);
    };

    return (
        <figure 
            className={styles.imagePlusCaptionContainer}
            onClick={clickHandler}
            onBlur={onMouseLeave}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
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