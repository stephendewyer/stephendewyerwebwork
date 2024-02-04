import { useState, useEffect, useRef } from "react";
import styles from './AccordionItem.module.css';
import Arrow from '../../../public/images/arrows/arrow_links/arrow_next_01.svg';
import Image from "next/image";

const AccordionItem = ({
    showPanelContent,
    fontWeightBold,
    item,
    index,
    activateTab,
    isActive,
}) => {

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
                    className={fontWeightBold ? styles.panel_label_bold : styles.panel_label}
                    onClick={ activateTab }
                >
                    <div className={styles.panel_label_image}>
                        {item.image}
                    </div>
                    {item.label}
                    <div className={fontWeightBold ? styles.arrow_container_active : styles.arrow_container}>
                        <Image 
                            src={Arrow} 
                            alt="arrow"
                            objectFit="contain"
                            layout="fill"
                        />
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
                    {item.content}
                </div>
            </dd>
        </div>
    )
};

export default AccordionItem;