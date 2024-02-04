import styles from './ButtonAction.module.css';
import Image from 'next/image';
import { useState } from 'react';
import nextButtonDefault from '../../../public/images/arrows/arrow_links/arrow_next_01.svg';
import nextButtonHover from '../../../public/images/arrows/arrow_links/arrow_next_02.svg';

const ButtonAction = (props) => {

    const [buttonHovered, setButtonHovered] = useState(false);

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
                        {(props.buttonIsActive) || buttonHovered ? 
                            <Image src={nextButtonHover}  layout="responsive" alt="next button arrow" priority /> :
                            <Image src={nextButtonDefault}  layout="responsive" alt="next button arrow" priority />
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ButtonAction;