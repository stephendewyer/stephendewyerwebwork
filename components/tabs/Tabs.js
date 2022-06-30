import { useState } from 'react';
import styles from './Tabs.module.css';


const Tabs = ({ children}) => {

    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    }

    return (
        <div className={styles.tabs_container}>
            <ul className={styles.tabs}>
                {children.map((tab) => {
                    const label = tab.props.label;
                    return (
                        <li 
                            className={label == activeTab ? styles.current : "" } 
                            key={label}
                        >
                            <a href="#" className={styles.tab_link} onClick={(e) => handleClick(e, label)} >
                                {label}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {children.map((one) => {
                if (one.props.label == activeTab)
                    return (
                        <div key={one.props.label == activeTab } className={styles.content}>
                            {one.props.children}
                        </div>    
                    );
            })}
            
        </div>
    )
}

export default Tabs;