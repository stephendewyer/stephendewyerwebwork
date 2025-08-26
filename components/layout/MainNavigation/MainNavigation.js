'use client'
import { useState, useEffect, useRef } from 'react';
import BlindsIndex from './blindsIndex/BlindsIndex';
import classes from './MainNavigation.module.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import { debounce } from '../../../public/util/helpers';
import NavData from "../../../public/data/navigation.json";
import NavTabDesktop from './navigationTabDesktop/NavTabDesktop';

const MainNavigation = (props) => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [visible, setVisible] = useState(true);
    
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

    }, [prevScrollPos, handleScroll]);

    let leftTabs = [];

    let rightTabs = [];

    NavData.forEach((navItem, index) => {
        if (
            (index <= NavData.length/2) && 
            (navItem.name !== "stephen garrett dewyer")
        ) {
            leftTabs = [...leftTabs, navItem];
        };

        if (
            (index > NavData.length/2) &&
            (navItem.name !== "stephen garrett dewyer")
        ) {
            rightTabs = [...rightTabs, navItem];
        }
    });

    const blindsIndexRef = useRef(null);

    const [blindsIndexHeight, setBlindsIndexHeight] = useState(0);

    useEffect(() => {
        const blindsIndexHeightEffect = () => {
            if (blindsIndexRef.current !== null) {
                setBlindsIndexHeight(blindsIndexRef.current.clientHeight);
            };
        };

        blindsIndexHeightEffect();

        window.addEventListener("resize", blindsIndexHeightEffect);

        return () => {
            window.removeEventListener("resize", blindsIndexHeightEffect);
        };

    }, []);

    return (
        <nav 
            role="navigation"
            className={classes.nav_bar} 
            style={{ top: visible ? '0' : `-${blindsIndexHeight}px` }} 
        > 
            <div className={classes.nav_tabs_left}>
                {leftTabs.map((navItem, index) => {
                    return (
                        <div 
                            className={classes.navigation_tab}
                            key={index}
                        >
                            <NavTabDesktop navItem={navItem}/>
                        </div>
                    );
                })}
            </div>
            {NavData.map((navItem, index) => {
                if (navItem.name === "stephen garrett dewyer") {
                    return (
                        <div 
                            className={classes.blinds_index}
                            key={index}
                        >
                            <div ref={blindsIndexRef}>
                                <BlindsIndex 
                                    navItem={navItem}
                                />
                            </div>
                        </div>
                    );
                };
            })}
            <div className={classes.nav_tabs_right}>
                {rightTabs.map((navItem, index) => {
                    return (
                        <div 
                            className={classes.navigation_tab}
                            key={index}
                        >
                            <NavTabDesktop navItem={navItem}/>
                        </div>
                    );
                })}
            </div>
            <div className={classes.main_navigation_toggle_button}>
                <DrawerToggleButton 
                    click={props.drawerClickHandler} 
                    sideDrawerOpen={props.sideDrawerOpen}
                    aria-hidden={(!props.sideDrawerOpen) ? "true" : "false"} 
                />
            </div>
        </nav>
    )
}

export default MainNavigation;