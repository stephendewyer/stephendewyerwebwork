import { useState  } from 'react';
import styles from './ButtonNext.module.css';
import Image from 'next/image';
import nextButtonDefault from '../../public/images/arrows/arrow_links/arrow_next_01.svg';
import nextButtonHover from '../../public/images/arrows/arrow_links/arrow_next_02.svg';

const ButtonNext = (props) => {

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
                    next
                    <div 
                        className={styles.arrow}
                        style={{ marginLeft: isHovering ? '24px' : '12px', color: isHovering ? '#90947E': '#575B46', borderColor: isHovering ? '#90947E': '#575B46' }}
                    >
                        {isHovering ? 
                            <Image src={nextButtonHover}  layout="responsive" alt="next button arrow" priority /> :
                            <Image src={nextButtonDefault}  layout="responsive" alt="next button arrow" priority />
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ButtonNext;