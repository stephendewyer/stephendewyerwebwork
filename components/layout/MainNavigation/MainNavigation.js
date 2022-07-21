import React, { Fragment, useState, useEffect } from 'react';
import Logo from './logo/Logo';
import AboutTab from './navigation_tabs/AboutTab';
import CaseStudiesTab from './navigation_tabs/CaseStudiesTab';
import ContactTab from './navigation_tabs/ContactTab';
import classes from './MainNavigation.module.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { debounce } from '../../../public/util/helpers';

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
            <nav className={classes.nav_bar} >
                <div style={{ ...navbarStyles, top: visible ? '0' : '-250px' }} > 
                    <div aria-hidden={(props.click) ? "true" : "false"}>
                        <Logo />
                    </div>
                    <div className={classes.grid_container} aria-hidden={(props.click) ? "true" : "false"}>
                        <div className={classes.grid_item}>
                            <AboutTab />
                        </div>
                        <div className={classes.grid_item}>
                            <CaseStudiesTab />
                        </div>
                        <div className={classes.grid_item}>
                            <ContactTab />
                        </div>
                    </div>
                    <div className={classes.main_navigation_toggle_button}>
                        <DrawerToggleButton click={props.drawerClickHandler} aria-hidden={(props.click) ? "true" : "false"} />
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default MainNavigation;