import classes from './ButtonPill.module.css';

const ButtonPill = (props) => {
    return (
        <button className={classes.pill_button}>
            {props.children}
        </button>
    );
};

export default ButtonPill;