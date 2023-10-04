import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import aboutLinkPageInactive from '../../../../public/images/links/blind_link_about_01.svg';
import aboutLinkPageActive from '../../../../public/images/links/blind_link_about_03.svg';
import aboutLink_hover from '../../../../public/images/links/blind_link_about_02.svg';
import styles from './navigation_tab.module.css';

const AboutTab = () => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === "/about";

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        (pageIsActive) ? 
            <div 
                aria-current={pageIsActive}
                className={styles.navigationTab}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
            >
                <MyLink href="/about" passHref aria-label="link to about page">
                    {isHovering ? (
                        <Image 
                            src={aboutLink_hover} 
                            layout="responsive" 
                            alt="about link"
                            priority
                        /> 
                        ) : (
                        <Image 
                            src={aboutLinkPageActive} 
                            layout="responsive" 
                            alt="about link"
                            priority
                        />
                    )}
                </MyLink>    
            </div> 
        :
            <div 
            aria-current={pageIsActive}
                className={styles.navigationTab}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
            >
                <MyLink href="/about" passHref aria-label="link to about page">
                    {isHovering ? (
                        <Image 
                            src={aboutLink_hover} 
                            layout="responsive" 
                            alt="about link"
                            priority
                            /> 
                        ) : (
                        <Image 
                            src={aboutLinkPageInactive} 
                            layout="responsive" 
                            alt="about link"
                            priority
                        />
                    )}
                </MyLink>    
            </div>  
    );
};

export default AboutTab;