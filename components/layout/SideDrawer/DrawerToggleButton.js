import styles from './DrawerToggleButton.module.css';

const DrawerToggleButton = (props) => {
    return (
        <button 
            className={props.sideDrawerOpen ? styles.drawer_toggle_button_open : styles.drawer_toggle_button} 
            onClick={props.click}
            aria-label="sidedrawer navigation toggle button"
            aria-pressed={props.sideDrawerOpen}
        >
            <div className={props.sideDrawerOpen ? styles.bar1_open : styles.bar1} />
            <div className={props.sideDrawerOpen ? styles.bar2_open : styles.bar2} />
            <div className={props.sideDrawerOpen ? styles.bar3_open : styles.bar3} />
        </button>
    );
};

export default DrawerToggleButton;
