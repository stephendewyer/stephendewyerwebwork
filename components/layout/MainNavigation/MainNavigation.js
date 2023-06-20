import React, { useState, useEffect } from 'react';
import Logo from './logo/Logo';
import AboutTab from './navigationTabsDesktop/AboutTabDesktop';
import CaseStudiesTab from './navigationTabsDesktop/CaseStudiesTabDesktop';
import ContactTab from './navigationTabsDesktop/ContactTabDesktop';
import classes from './MainNavigation.module.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { debounce } from '../../../public/util/helpers';

const MainNavigation = (props) => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [visible, setVisible] = useState(true)

    const handleScroll = debounce(() => {
        // find current scroll position
        const currentScrollPos = window.scrollY;

        // set state based on location info
        setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);

        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
        // timer set to 100 milliseconds:
    }, 100);

    // new useEffect:
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos]);

    return (
        <nav 
            role="navigation"
            className={classes.nav_bar} 
            style={{ top: visible ? '0' : '-250px' }} 
        > 
            <div className={classes.logo}>
                <Logo />
            </div>
            <div className={classes.navigation_tabs}>
                <div className={classes.navigation_tab}>
                    <AboutTab />
                </div>
                <div className={classes.navigation_tab}>
                    <CaseStudiesTab />
                </div>
                <div className={classes.navigation_tab}>
                    <ContactTab />
                </div>
            </div>
            <div className={classes.main_navigation_toggle_button}>
                <DrawerToggleButton click={props.drawerClickHandler} aria-hidden={(props.click) ? "true" : "false"} />
            </div>
        </nav>
    )
}

export default MainNavigation;