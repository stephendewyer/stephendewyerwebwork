'use client'
import styles from './SideDrawer.module.css';
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, Fragment } from "react";
import MyLink from '../../../public/util/myLink';
import DrawerToggleButton from './DrawerToggleButton';
import NavData from "../../../public/data/navigation.json";

const SideDrawer = (props) => {

    const pagePath = usePathname();

    const Arrow = () => {
        return (
          <svg 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 500"
            fill="currentColor"
          >
            <polygon points="250 250 0 0 250 0 500 250 250 500 0 500 250 250"/>
          </svg>
        );
    };

    const [panelOpen, setPanelOpen] = useState(false);
    // set the panel height state to 0

    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    useEffect(() => {
        if (content.current) {
            setHeight(content.current.scrollHeight);
        };
    }, [panelOpen]);

    return (
        <nav 
            id={styles["sidedrawer"]}
            className={(props.show) ? styles.side_drawer_open : styles.side_drawer} 
            aria-hidden={(props.show)? "true" : "false"}
        >
           <ul className={styles.nav_tabs_mobile}>
                {NavData.map((tab, index) => {
                    if (tab.name !== "stephen garrett dewyer") {
                        if (tab.sub_navigation === null) {
                            return (
                                <MyLink
                                    href={tab.pathname}
                                    key={index}
                                    className={styles.tab_container}
                                    onClick={props.click}
                                >
                                    <li
                                        className={styles.tab}
                                    >

                                        <div 
                                            className={styles.tabName}
                                            style={(pagePath === tab.pathname || pagePath.includes(tab.pathname)) ? {color: "#FFE9C0"} : {color: "#EDEFFF"}}
                                        >
                                            {tab.name}
                                        </div>
                                    </li>     
                                </MyLink>
                            );
                        } else if (tab.sub_navigation !== null && tab.sub_navigation.length > 0) {
                            return (
                                <Fragment
                                    key={index}
                                >
                                    <li
                                        className={styles.tab}
                                    >
                                        <MyLink
                                            href={tab.pathname}
                                            className={styles.tab_container}
                                            onClick={props.click}
                                        >
                                            <div 
                                                className={styles.tabName}
                                                style={(pagePath === tab.pathname || pagePath.includes(tab.pathname)) ? {color: "#FFE9C0"} : {color: "#EDEFFF"}}
                                            >
                                                {tab.name}
                                            </div>
                                        </MyLink>
                                        <div 
                                            className={panelOpen ? styles.arrow_active : styles.arrow}
                                            onClick={() => setPanelOpen(!panelOpen)}
                                            onKeyUp={() => setPanelOpen(!panelOpen)}
                                        >
                                            <Arrow />
                                        </div>
                                    </li>
                                    <div 
                                        className={styles.panel_container}
                                        ref={content}
                                        style={(panelOpen) ? { height: `${height}px` } : { height: '0px' }}
                                    >
                                        {tab.sub_navigation.map((tab_sub, index) => {
                                            return (
                                                <MyLink
                                                    key={index}
                                                    href={tab_sub.pathname}
                                                    onClick={props.click}
                                                >
                                                    <li 
                                                        className={styles.tab_sub}
                                                        style={(panelOpen) ? {opacity: "100%"} : {opacity: "0%"}}
                                                        aria-current={pagePath === tab_sub.pathname ? "page" : undefined}
                                                    >
                                                        {tab_sub.name}
                                                    </li>
                                                </MyLink>
                                            );
                                        })}
                                    </div>
                                </Fragment>
                                
                            );
                        };
                    };
                })}
           </ul>
           <div className={styles.drawer_toggle_button_container}>
                <DrawerToggleButton 
                    sideDrawerOpen={props.show} 
                    click={props.click}
                /> 
            </div>
        </nav> 
    );
};

export default SideDrawer;