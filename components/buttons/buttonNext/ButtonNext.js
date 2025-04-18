import { useState  } from 'react';
import styles from './ButtonNext.module.css';

const ButtonNext = (props) => {

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
                style={{ 
                    color: isHovering ? '#90947E': '#575B46', 
                    borderColor: isHovering ? '#90947E': '#575B46',
                    marginRight: isHovering ? "0" : "12px"
                }}
            >
                <div className={styles.button_content}>
                    <span className={styles.caseStudyParagraphMobile}>next<br />case<br />study</span>
                    <span className={styles.caseStudyParagraphDesktop}>next case study</span>
                    <div 
                        className={styles.arrow}
                        style={{ marginLeft: isHovering ? '24px' : '12px', color: isHovering ? '#90947E': '#575B46', borderColor: isHovering ? '#90947E': '#575B46' }}
                    >
                        <Arrow />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ButtonNext;