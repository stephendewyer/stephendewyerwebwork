import classes from './Backdrop.module.css';

const backdrop = (props) => (
    <div className={classes.backdrop} onClick={props.back_drop_clicked}>
    </div>
);

export default backdrop;