import classes from './button.module.css';

const Button = (props) => {
    return (
        <div className={classes.button}>
            {props.children}
        </div>
    );
};

export default Button;