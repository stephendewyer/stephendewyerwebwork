import classes from './DrawerToggleButton.module.css';


const drawerToggleButton = (props) => (
    <button className={classes.toggle_button} onClick={props.click} aria-label="sidedrawer navigation toggle button">
        <div className={classes.toggle_button__line}></div>
        <div className={classes.toggle_button__line}></div>
        <div className={classes.toggle_button__line}></div>
    </button>
);

export default drawerToggleButton;