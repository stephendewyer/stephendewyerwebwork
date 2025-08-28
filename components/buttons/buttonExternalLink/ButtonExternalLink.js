import classes from './ButtonExternalLink.module.css';

const ButtonExternalLink = (props) => {
    return (
        <button className={classes.button_external_link}>
            {props.children}
        </button>
    );
};

export default ButtonExternalLink;