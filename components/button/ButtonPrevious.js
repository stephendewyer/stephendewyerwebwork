import { useState } from 'react';
import styles from './ButtonPrevious.module.css';
import Image from 'next/image';
import previousButtonDefault from '../../public/images/arrows/arrow_links/arrow_previous_01.svg';
import previousButtonHover from '../../public/images/arrows/arrow_links/arrow_previous_02.svg';

const ButtonPrevious = (props) => {

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
                        {isHovering ? 
                                <Image src={previousButtonHover}  layout="responsive" alt="previous button arrow"/> :
                                <Image src={previousButtonDefault}  layout="responsive" alt="previous button arrow"/>
                            }
                    </div>
                    previous
                </div>
            </div>
        </div>
    );
};

export default ButtonPrevious;