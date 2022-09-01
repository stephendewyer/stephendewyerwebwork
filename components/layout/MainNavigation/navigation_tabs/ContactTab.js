import { useState } from 'react';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import contactLink from '../../../../public/images/links/blind_link_contact_01.svg';
import contactLink_hover from '../../../../public/images/links/blind_link_contact_02.svg';
import styles from './navigation_tab.module.css';

const ContactTab = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            className={styles.navigationTab}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/contact" passHref aria-label="link to contact page">
                {isHovering ? (
                    <Image 
                        src={contactLink_hover} 
                        layout="responsive" 
                        alt="contact link"
                        priority
                    /> 
                    ) : (
                    <Image 
                        src={contactLink} 
                        layout="responsive" 
                        alt="contact link"
                        priority
                    />
                )}
            </MyLink>    
        </div>
    );
};

export default ContactTab;