import { useState, useEffect, useRef } from 'react';
import styles from './Tabs.module.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Tabs = ({ tabPanels }) => {

    const [activeTab, setActiveTab] = useState(tabPanels[0].label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    }
    
    const content = useRef(null);

    const [height, setHeight] = useState('0px');

    useEffect(() => {
        
        setHeight(height = content.current.scrollHeight) 
        console.log('height: ', content.current.scrollHeight)
    });  

    return (
        
        <ul 
            className={styles.tabs_container}
        >
            <li 
                className={styles.tabs}
            >
                {tabPanels.map((tab) => {
                    const label = tab.label;
                    const id = tab.id;
                    return (
                        <dt 
                            className={label == activeTab ? styles.current : "" } 
                            key={id}
                            onClick={(e) => handleClick(e, label)}
                        >
                            <a href="#">{label}</a>
                        </dt>
                    )
                })}
            </li>
            <div 
                className={styles.panelItemContainer}
                style={{ 'height': `${height}px` }}
            >
                <TransitionGroup >
                    {tabPanels.map((panelItem) => {
                        // if panel is the same as the activeTab, load showPanelContent as true
                        const panelItemId = panelItem.id;
                        const panelItemContent = panelItem.content;
                        if (panelItem.label == activeTab)
                            return (
                                <CSSTransition
                                    timeout={500}
                                    unmountOnExit
                                    classNames={
                                        {
                                            enterActive: styles.itemEnter,
                                            enterDone: styles.itemEnterActive,
                                            exitActive: styles.itemExit,
                                            exitDone: styles.itemExitActive,
                                        }
                                    }
                                    key={panelItemId}
                                >
                                    <dd 
                                        className={styles.item}
                                        ref={content} 
                                    >
                                        {panelItemContent}
                                    </dd>
                                </CSSTransition>       
                        );
                    })}
                </TransitionGroup>
            </div>
        </ul>
    )
}

export default Tabs;