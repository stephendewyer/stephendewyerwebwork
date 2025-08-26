import classes from './ButtonFooter.module.css';

const ButtonFooter = (props) => {
    return (
        <div className={classes.button_footer}>
            {props.children}
        </div>
    );
};

export default ButtonFooter;