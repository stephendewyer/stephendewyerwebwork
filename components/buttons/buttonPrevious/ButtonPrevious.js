import { useState } from 'react';
import styles from './ButtonPrevious.module.css';

const ButtonPrevious = (props) => {

    const Arrow = () => {
        return (
          <svg 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 500"
            fill="currentColor"
          >
            <polygon points="250 250 0 0 250 0 500 250 250 500 0 500 250 250"/>
          </svg>
        );
    };

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            className={styles.next_button_and_image}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <div 
                className={ isHovering ? styles.bouncyThumbnailImage : styles.thumbnailImage }
            >
                {props.children}
            </div> 
            <div 
                className={styles.button}
                style={{ color: isHovering ? '#90947E': '#575B46', borderColor: isHovering ? '#90947E': '#575B46' }}
            >
                <div className={styles.button_content}>
                    <div 
                        className={styles.arrow} 
                        style={{ marginRight: isHovering ? '24px' : '12px', color: isHovering ? '#90947E': '#575B46', borderColor: isHovering ? '#90947E': '#575B46' }}
                    >
                        <Arrow />
                    </div>
                    <span className={styles.caseStudyParagraphMobile}>previous<br />case<br />study</span>
                    <span className={styles.caseStudyParagraphDesktop}>previous case study</span>
                </div>
            </div>
        </div>
    );
};

export default ButtonPrevious;