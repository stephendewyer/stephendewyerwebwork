'use client'
import { useState } from "react";
import AccordionItem from "./AccordionItem";

import styles from './Accordion.module.css';

const Accordion = ({ experience }) => {

    const testClick = () => {
        console.log("clicked!");
    }

    // create a state for the tabs

    const [ activeTab, setActiveTab ] = useState(0);

    // map the accordion panels with item and index as parameters

    const panels = experience.map((item, index) => {

        // if index is the same as the activeTab, load the showPanelContent variable with the string "show-panel-content", else ""
        const showPanelContent = index === activeTab ? "show-panel-content" : "";
        // if index is the same as the activeTab, load the fontWeightBold variable with the string "font-weight-bold", else ""
        const fontWeightBold = index === activeTab ? "font-weight-bold" : "";
        // if index is the same as the activeTab, load the ariaExpanded variable with the string "true", else "false"
        const ariaExpanded = index === activeTab ? "true" : "false";
        // load isActive with activeTab
        const isActive = activeTab;

        return (
            <AccordionItem
                showPanelContent={showPanelContent}
                fontWeightBold={fontWeightBold}
                ariaExpanded={ariaExpanded}
                item={item}
                index={index}
                key={index}
                activateTab={() => setActiveTab(activeTab === index ? -1 : index) }
                isActive={isActive}
            />
        );
    });

    return (
        <div className={styles.accordion_container} >
            <dl className={styles.accordion_list}>{panels}</dl>
        </div>
        
    );
};

export default Accordion;