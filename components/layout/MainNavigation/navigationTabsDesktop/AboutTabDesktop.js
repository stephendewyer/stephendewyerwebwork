import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import aboutLinkPageInactive from '../../../../public/images/links/desktop/blindLinkAboutDesktop01.svg';
import aboutLinkPageActive from '../../../../public/images/links/desktop/blindLinkAboutDesktop03.svg';
import aboutLink_hover from '../../../../public/images/links/desktop/blindLinkAboutDesktop02.svg';
import styles from './navigationTabDesktop.module.css';

const AboutTabDesktop = () => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === "/about";

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        (pageIsActive) ? 
            <div 
                className={styles.navigationTab}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                aria-current={pageIsActive}
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
                className={styles.navigationTab}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                aria-current={pageIsActive}
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

export default AboutTabDesktop;