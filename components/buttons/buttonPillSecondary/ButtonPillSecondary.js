'use client'
import styles from './ButtonPillSecondary.module.css';
import Image from 'next/image';
import { useState } from 'react';
import previousButtonDefault from '../../../public/images/arrows/arrow_links/arrow_previous_01.svg';
import previousButtonHover from '../../../public/images/arrows/arrow_links/arrow_previous_02.svg';

const ButtonAction = (props) => {

    const [buttonHovered, setButtonHovered] = useState(false);

    return (
        <button
            className={styles.next_button_and_image}
            onMouseEnter={(() => setButtonHovered(true))}
            onMouseOver={(() => setButtonHovered(true))}
            onMouseLeave={(() => setButtonHovered(false))}
            onMouseOut={(() => setButtonHovered(false))}
        >
            <div 
                className={styles.button}
                style={{ color: (props.buttonIsActive) || buttonHovered ? '#90947E': '#575B46', marginLeft: (props.buttonIsActive) || buttonHovered ? '12px' : '24px'}}
            >
                <div className={styles.button_content}>
                    <div 
                        className={styles.arrow}
                        style={{ marginRight: (props.buttonIsActive) || buttonHovered ? '24px' : '12px', color: (props.buttonIsActive) || buttonHovered ? '#90947E': '#575B46'}}
                    >
                        {(props.buttonIsActive) || buttonHovered ? 
                            <Image src={previousButtonHover}  layout="responsive" alt="next button arrow" priority /> :
                            <Image src={previousButtonDefault}  layout="responsive" alt="next button arrow" priority />
                        }
                    </div>
                    {props.children}
                </div>
            </div>
        </button>
        
    );
};

export default ButtonAction;