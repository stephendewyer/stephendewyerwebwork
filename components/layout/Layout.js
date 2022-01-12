import React, { Component } from 'react';
import MainNavigation from './MainNavigation/MainNavigation';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import Container from '../layout/Container/Container';

class Layout extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    }

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    linkClickHandler = () => {
        console.log('link has been clicked');
        this.setState({sideDrawerOpen: false});
    }

    render () {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }

        return (
            <div>
                <MainNavigation drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} click={this.linkClickHandler} />
                {backdrop}
                <Container />
            </div>
        )

    }

}

export default Layout;