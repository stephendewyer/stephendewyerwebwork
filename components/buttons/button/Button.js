import classes from './button.module.css';

const Button = (props) => {
    return (
        <button className={(props.buttonIsActive) ? classes.button_active : classes.button}>
            {props.children}
        </button>
    );
};

export default Button;