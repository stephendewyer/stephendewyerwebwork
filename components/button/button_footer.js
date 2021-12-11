import classes from './button_footer.module.css';

const ButtonFooter = (props) => {
    return (
        <div className={classes.button_footer}>
            {props.children}
        </div>
    );
};

export default ButtonFooter;