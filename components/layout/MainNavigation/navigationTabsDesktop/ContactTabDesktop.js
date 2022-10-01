import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import contactLinkPageInactive from '../../../../public/images/links/desktop/blindLinkContact01.svg';
import contactLinkPageActive from '../../../../public/images/links/desktop/blindLinkContact03.svg';
import contactLink_hover from '../../../../public/images/links/desktop/blindLinkContact02.svg';
import styles from './navigationTabDesktop.module.css';

const ContactTabDesktop = () => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === "/contact";

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        (pageIsActive) ? 
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
                            src={contactLinkPageActive} 
                            layout="responsive" 
                            alt="contact link"
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
                            src={contactLinkPageInactive} 
                            layout="responsive" 
                            alt="contact link"
                            priority
                        />
                    )}
                </MyLink>    
            </div>
    );
};

export default ContactTabDesktop;