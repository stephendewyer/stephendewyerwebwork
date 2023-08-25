import React, { Fragment, useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import styles from './Layout.module.css';
import Footer from './Footer/Footer';
import MainNavigation from './MainNavigation/MainNavigation';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Container from '../layout/Container/Container';

const Layout = (props) => {

    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);        
    }
    
    const backdropClickHandler = () => {
        setSideDrawerOpen(false);
    }

    const linkClickHandler = () => {
        setSideDrawerOpen(false);
    }
        
    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop  back_drop_clicked={backdropClickHandler} />;
    }

    // store the referenced element in a variable

    // load different height states in a variable and set the default height state to "0px"

    const [footerHeight, setFooterHeight] = useState(0); 

    // calculate the height the panel content 

    // store the referenced element in a varialbe

    const footerContainer = useRef(null);

    // get 'height' after the initial render and every time the list changes

    useEffect(() => {

        // get current scrollHeight data on element with ref only if value is contained in the variable

        if (footerContainer.current !== null) {

            setFooterHeight(footerContainer.current.scrollHeight);

        }

    }, [footerHeight]);

    // update the height when window resizes

    // *IMPORTANT* use useCallback and not useEffect to ensure that even if a child component displays the measured node later (e.g. in response to a click), we still get notified about it in the parent component and can update the measurements.

    const [node, setNode] = useState(null);

    const measuredRef = useCallback(node => {

        if (node !== null) {

            setNode(node);

        }

    }, []);

    // *IMPORTANT* use useLayoutEffect for synchronous rendering in the client. DO NOT USE useEffect, which uses asynchronous rendering

    useLayoutEffect(() => {

        if (node) {
            
            const measure = () => {

                setFooterHeight(node.getBoundingClientRect().height);

            }
            
            window.addEventListener("resize", measure );

            return () => {

                window.removeEventListener("resize", measure );

            };

       }

    }, [node]);

    return (
        <Fragment>
            <MainNavigation drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} click={linkClickHandler} />
            {backdrop}
            <Container />
            <div
                className={styles.page_container}
            >
                <div 
                    role="main"
                    style={{ 'paddingBottom': `${footerHeight}px` }}
                >
                    {props.children}
                </div>
                <div 
                    role="contentinfo"
                    ref={footerContainer} 
                    className={styles.footer_container}
                    style={{ 'height': `${footerHeight}px` }}
                >
                    <div 
                        ref={measuredRef}
                    >
                        <Footer />
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Layout;