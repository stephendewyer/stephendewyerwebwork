import { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import styles from './Tabs.module.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const Tabs = ({ tabPanels }) => {

    // load the tab states in a variable and set the first tabPanel as active by default

    const [activeTab, setActiveTab] = useState(tabPanels[0].label);

    // set a tab as active when corresponding tab is clicked

    const handleClick = (e, newActiveTab) => {

        e.preventDefault();

        setActiveTab(newActiveTab);

    }

    // load different height states in a variable and set the default height state to "0px"

    const [height, setHeight] = useState(0);    

    // calculate the height the panel content 

    // store the referenced element in a varialbe

    const panelItemContentContainer = useRef(null);

    // get 'height' after the initial render and every time the list changes

    useEffect(() => {

        // get current scrollHeight data on element with ref only if value is contained in the variable

        if (panelItemContentContainer.current !== null) {

            setHeight(panelItemContentContainer.current.scrollHeight);

        }

    }, [activeTab]);

    // update the height when window resizes

    // *IMPORTANT* use useCallback and not useEffect to ensure that even if a child component displays the measured node later (e.g. in response to a click), we still get notified about it in the parent component and can update the measurements.

    const [node, setNode] = useState(null);

    const measuredRef = useCallback(node => {

        if (node !== null) {

            setNode(node);

        }

    }, []);

    // *IMPORTANT* use useLayoutEffect for synchronous rendering in the client. DO NOT USE useEffect, which uses asynchronous rendering

    useLayoutEffect(() => {

        if (node) {
            
            const measure = () => {

                setHeight(node.getBoundingClientRect().height);

            }
            
            window.addEventListener("resize", measure );

            return () => {

                window.removeEventListener("resize", measure );

            };

       }

    }, [node]);

    // console.log('height: ', height)
    
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
                                        ref={panelItemContentContainer}
                                    >
                                        <div
                                            ref={measuredRef}
                                            className={styles.item}
                                        >
                                            {panelItemContent}
                                        </div>
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