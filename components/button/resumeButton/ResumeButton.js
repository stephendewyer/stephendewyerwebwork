import { useState  } from 'react';
import styles from './ResumeButton.module.css';
import Image from 'next/image';
import PDFIconDefault from '../../../public/images/icons/PDF_icon_default.svg';
import PDFIconHover from '../../../public/images/icons/PDF_icon_hover.svg';

const ButtonNext = () => {

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            className={styles.button_and_PDFIcon}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <div 
                className={styles.button}
                style={{ color: isHovering ? '#90947E': '#575B46', borderColor: isHovering ? '#90947E': '#575B46' }}
            >
                <div className={styles.button_content}>
                    view resume
                    <div 
                        className={styles.PDFIconMobile}
                        style={{ color: isHovering ? '#90947E': '#575B46', borderColor: isHovering ? '#90947E': '#575B46' }}
                    >
                        {isHovering ? 
                            <Image src={PDFIconHover}  layout="responsive" alt="PDF icon hover"/> :
                            <Image src={PDFIconDefault}  layout="responsive" alt="PDF icon default"/>
                        }
                    </div>
                </div>
            </div>
            <div 
                className={ isHovering ? styles.bouncyPDFIcon : styles.PDFIcon } 
            >
                {isHovering ? 
                    <Image src={PDFIconHover}  layout="responsive" alt="PDF icon hover"/> :
                    <Image src={PDFIconDefault}  layout="responsive" alt="PDF icon default"/>
                }
            </div> 
        </div>
        
    );
};

export default ButtonNext;