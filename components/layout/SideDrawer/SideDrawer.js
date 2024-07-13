import styles from './SideDrawer.module.css';
import { useRouter } from "next/router";
import { useEffect, useState, useRef, Fragment } from "react";
import MyLink from '../../../public/util/myLink';
import DrawerToggleButton from './DrawerToggleButton';
import NavData from "../../../public/data/navigation.json";

const SideDrawer = (props) => {

    const router = useRouter();
    const pagePath = router.pathname;

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

                                        <div className={styles.tabName}>
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
                                            className={styles.tabName}>
                                            {tab.name}
                                        </div>
                                    </MyLink>
                                            
                                            <div className={panelOpen ? styles.arrow_active : styles.arrow}>
                                                <Arrow />
                                            </div>
                                        </li> 
                                    <MyLink
                                        href={tab.pathname}
                                        onClick={props.click}
                                    >

                                    </MyLink>
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