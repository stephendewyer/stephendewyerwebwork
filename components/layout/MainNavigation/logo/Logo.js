import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import indexPageIsInactive from '../../../../public/images/logo/stephen_dewyer_web_logo_01.svg';
import logo_hover from '../../../../public/images/logo/stephen_dewyer_web_logo_02.svg';
import indexPageIsActive from '../../../../public/images/logo/stephen_dewyer_web_logo_03.svg';
import classes from './Logo.module.css';

const IndexTab = () => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === "/";

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    
    return (
        (pageIsActive) ? 
            <div className={classes.blind_logo}
                aria-current={pageIsActive}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
            >
                <MyLink href="/" passHref aria-label="link to index page">
                    {isHovering ? (
                        <Image 
                            src={logo_hover} 
                            layout="responsive" 
                            alt="stephen dewyer web design and development logo"
                            priority
                        /> 
                        ) : (
                        <Image 
                            src={indexPageIsActive} 
                            layout="responsive" 
                            alt="stephen dewyer web design and development logo"
                            priority
                        />
                    )}
                </MyLink>    
            </div> 
        :
            <div className={classes.blind_logo}
                aria-current={pageIsActive}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
            >
                <MyLink href="/" passHref aria-label="link to index page">
                    {isHovering ? (
                        <Image 
                            src={logo_hover} 
                            layout="responsive" 
                            alt="stephen dewyer web design and development logo"
                            priority
                        /> 
                        ) : (
                        <Image 
                            src={indexPageIsInactive} 
                            layout="responsive" 
                            alt="stephen dewyer web design and development logo"
                            priority
                        />
                    )}
                </MyLink>    
            </div>

    );
};

export default IndexTab;