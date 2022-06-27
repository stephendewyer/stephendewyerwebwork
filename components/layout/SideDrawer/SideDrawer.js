import AboutTab from '../MainNavigation/navigation_tabs/AboutTab';
import CaseStudiesTab from '../MainNavigation/navigation_tabs/CaseStudiesTab';
import ContactTab from '../MainNavigation/navigation_tabs/ContactTab';
import styles from './SideDrawer.module.css';

const sideDrawer = (props) => {

    return (

       <nav className={(props.show) ? styles.side_drawer_open : styles.side_drawer} aria-hidden={(props.show)? "true" : "false"}>
            <div className={styles.grid_container} onClick={props.click}>
                <div className={styles.grid_item} >
                    <AboutTab />
                </div>
                <div className={styles.grid_item} >
                    <CaseStudiesTab />
                </div>
                <div className={styles.grid_item} >
                    <ContactTab />
                </div>
            </div>
        </nav> 

    );
};

export default sideDrawer;