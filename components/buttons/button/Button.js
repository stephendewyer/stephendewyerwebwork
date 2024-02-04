import classes from './button.module.css';

const Button = (props) => {
    return (
        <div className={(props.buttonIsActive) ? classes.button_active : classes.button}>
            {props.children}
        </div>
    );
};

export default Button;