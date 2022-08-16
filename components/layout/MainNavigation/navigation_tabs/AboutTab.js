import { useState } from 'react';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import aboutLink from '../../../../public/images/links/blind_link_about_01.svg';
import aboutLink_hover from '../../../../public/images/links/blind_link_about_02.svg';
import styles from './navigation_tab.module.css';

const AboutTab = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            className={styles.navigationTab}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/about" passHref aria-label="link to about page">
                {isHovering ? (
                    <Image src={aboutLink_hover} layout="responsive" alt="about link"/> 
                    ) : (
                    <Image src={aboutLink} layout="responsive" alt="about link"/>
                )}
            </MyLink>    
        </div>
    );
};

export default AboutTab;