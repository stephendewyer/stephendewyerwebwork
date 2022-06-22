import React, { useState, useRef } from 'react';
import MainNavigation from './MainNavigation/MainNavigation';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Container from '../layout/Container/Container';

const Layout = () => {

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

    return (
        <div>
            <MainNavigation drawerClickHandler={drawerToggleClickHandler} />
            <SideDrawer show={sideDrawerOpen} click={linkClickHandler} />
            {backdrop}
            <Container />
        </div>
    )

}

export default Layout;