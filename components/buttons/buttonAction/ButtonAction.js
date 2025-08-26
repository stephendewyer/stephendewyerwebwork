'use client'
import styles from './ButtonAction.module.css';
import { useState } from 'react';

const ButtonAction = (props) => {

    const [buttonHovered, setButtonHovered] = useState(false);

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

    return (
        <div 
            className={styles.next_button_and_image}
            onMouseEnter={(() => setButtonHovered(true))}
            onMouseOver={(() => setButtonHovered(true))}
            onMouseLeave={(() => setButtonHovered(false))}
            onMouseOut={(() => setButtonHovered(false))}
        >
            <div 
                className={styles.button}
                style={{ color: (props.buttonIsActive) || buttonHovered ? '#90947E': '#575B46', marginRight: (props.buttonIsActive) || buttonHovered ? '12px' : '24px'}}
            >
                <div className={styles.button_content}>
                    {props.children}
                    <div 
                        className={styles.arrow}
                        style={{ marginLeft: (props.buttonIsActive) || buttonHovered ? '24px' : '12px', color: (props.buttonIsActive) || buttonHovered ? '#90947E': '#575B46'}}
                    >
                        <Arrow />
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ButtonAction;