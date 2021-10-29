import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo/stephen_dewyer_web_logo_01.png';
import logo_hover from '../../../public/images/logo/stephen_dewyer_web_logo_02.png';
import aboutLink from '../../../public/images/links/blind_link_about_01.png';
import aboutLink_hover from '../../../public/images/links/blind_link_about_02.png';
import caseStudiesLink from '../../../public/images/links/blind_link_case_studies_01.png';
import caseStudiesLink_hover from '../../../public/images/links/blind_link_case_studies_02.png';
import contactLink from '../../../public/images/links/blind_link_contact_01.png';
import contactLink_hover from '../../../public/images/links/blind_link_contact_02.png';
import classes from './MainNavigation.module.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import MyLink from '../../../public/util/myLink';
import { debounce } from '../../../public/util/helpers';

<MyLink />

const Logo = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/" passHref >
                {isHovering ? (
                    <Image src={logo_hover} layout="responsive" alt="stephen dewyer web design and development logo"/> 
                    ) : (
                    <Image src={logo} layout="responsive" alt="stephen dewyer web design and development logo"/>
                )}
            </MyLink>    
        </div>
    );
};

const AboutLink = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/about" passHref >
                {isHovering ? (
                    <Image src={aboutLink_hover} layout="responsive" alt="about link"/> 
                    ) : (
                    <Image src={aboutLink} layout="responsive" alt="about link"/>
                )}
            </MyLink>    
        </div>
    );
};

const CaseStudiesLink = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/case_studies" passHref >
                {isHovering ? (
                    <Image src={caseStudiesLink_hover} layout="responsive" alt="case studies link"/> 
                    ) : (
                    <Image src={caseStudiesLink} layout="responsive" alt="case studies link"/>
                )}
            </MyLink>    
        </div>
    );
};

const ContactLink = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/contact" passHref >
                {isHovering ? (
                    <Image src={contactLink_hover} layout="responsive" alt="contact link"/> 
                    ) : (
                    <Image src={contactLink} layout="responsive" alt="contact link"/>
                )}
            </MyLink>    
        </div>
    );
};

const MainNavigation = (props) => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [visible, setVisible] = useState(true)

    const handleScroll = debounce(() => {
        // find current scroll position
        const currentScrollPos = window.pageYOffset;

        // set state based on location info (explained in more detail below)
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
        // timer set to 100 milliseconds:
    }, 100);

    // new useEffect:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    const navbarStyles = {
        position: 'fixed',
        width: '100%',
        height: '250px',
        top: '0',
        left: '0',
        right: '0',
        overflow: 'hidden',
        transition: 'top 0.6s',
    }

    return (
        <Fragment>
            <div className={classes.nav_bar} >
                <nav style={{ ...navbarStyles, top: visible ? '0' : '-250px' }} >
                
                    <div className={classes.blind_logo} >
                        <Logo />
                    </div>
                    <div className={classes.grid_container}>
                        <div className={classes.grid_item}>
                            <AboutLink />
                        </div>
                        <div className={classes.grid_item}>
                            <CaseStudiesLink />
                        </div>
                        <div className={classes.grid_item}>
                            <ContactLink />
                        </div>
                    </div>
                    <div className={classes.main_navigation_toggle_button}>
                        <DrawerToggleButton click={props.drawerClickHandler}/>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default MainNavigation;