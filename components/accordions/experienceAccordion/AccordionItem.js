import { useState, useEffect, useRef } from "react";
import styles from './AccordionItem.module.css';

const AccordionItem = ({
    showPanelContent,
    fontWeightBold,
    item,
    index,
    activateTab,
    isActive,
}) => {

    const Arrow = () => {
        return (
          <svg 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 500"
            fill="currentColor"
          >
            <polygon points="250 250 0 0 250 0 500 250 250 500 0 500 250 250"/>
          </svg>
        );
    };

    // set the panel height state to 0

    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    useEffect(() => {

        setHeight(content.current.scrollHeight);

    }, [isActive]);

    return (
        <div 
            className={styles.panel} 
            key={item.index}
            role='tabpanel'
        >
            <dt>
                <div
                    id={`panel${index + 1}_label`}
                    aria-controls={`panel${index + 1}_label`}
                    className={styles.panel_label}
                    style={{fontWeight: fontWeightBold ? "bold" : "normal"}}
                    onClick={ activateTab }

                >
                    <div className={styles.label_paragraphs}>
                        <span className={styles.label_item}>{item.length}</span>
                        <span className={styles.position}>{item.position}</span>
                        <span className={styles.label_item}>{item.company}</span>
                        <span className={styles.label_item}>{item.location}</span>
                    </div>
                    <div 
                        className={fontWeightBold ? styles.arrow_container_active : styles.arrow_container}
                    >
                        <Arrow />
                    </div>
                </div>
            </dt>
            <dd
                ref={content}
                className={styles.panel_inner}
                style={showPanelContent ? { height: `${height}px` } : { height: '0px' }}
                aria-hidden={ !isActive }
            >
                <div
                    id={`panel${index + 1}_content`}
                    className={styles.panel_content}
                    style={showPanelContent ? {opacity: '1'} : {opacity: '0'}} 
                >
                    {item.responsibilities}
                </div>
            </dd>
        </div>
    )
};

export default AccordionItem;