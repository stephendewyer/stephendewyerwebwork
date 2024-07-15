import { Fragment, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import MyLink from "../../../../public/util/myLink";
import styles from "./navigationTabDesktop.module.css";
import PublicArtsCommissionThumbnail from "../../../../public/images/thumbnails/public_arts_commission_website_desktop_01.jpg";
import ArtInTechServicesThumbnail from "../../../../public/images/thumbnails/Art_in_Tech_Services_website_screenshot.jpg";
import JoyfoodlyThumbnail from "../../../../public/images/thumbnails/Joyfoodly_desktop.jpg";
import InfiniteMileThumbnail from "../../../../public/images/thumbnails/Infinite_Mile_Screengrab.jpg";
import Image from 'next/image';

const NavTabDesktop = (props) => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === props.navItem.pathname;

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

    let caseStudiesData = [];

    if (props.navItem.name === "case studies") {
        props.navItem.sub_navigation.forEach((subNavItem, index) => {
            if (subNavItem.name === "Public Arts Commission") {
                caseStudiesData = [...caseStudiesData, {...subNavItem, thumbnailImage: <Image src={PublicArtsCommissionThumbnail} alt={`thumbnail ${subNavItem.name}`} layout="responsive"/>}];
            } else if (subNavItem.name === "Art in Tech Services") {
                caseStudiesData = [...caseStudiesData, {...subNavItem, thumbnailImage: <Image src={ArtInTechServicesThumbnail} alt={`thumbnail ${subNavItem.name}`} layout="responsive"/>}];
            } else if (subNavItem.name === "Joyfoodly") {
                caseStudiesData = [...caseStudiesData, {...subNavItem, thumbnailImage: <Image src={JoyfoodlyThumbnail} alt={`thumbnail ${subNavItem.name}`} layout="responsive"/>}];
            } else if (subNavItem.name === "Infinite Mile") {
                caseStudiesData = [...caseStudiesData, {...subNavItem, thumbnailImage: <Image src={InfiniteMileThumbnail} alt={`thumbnail ${subNavItem.name}`} layout="responsive"/>}];
            };
        });
    };

    const [panelHovered, setPanelHovered] = useState(false);
    const [tabHovered, setTabHovered] = useState(false);

    // set the panel height state to 0

    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    useEffect(() => {
        if (content.current) {
            setHeight(content.current.scrollHeight);
        };
    }, [tabHovered]);

    if (props.navItem.name !== "stephen garrett dewyer") {
        return (
            <Fragment>
                {(props.navItem.sub_navigation === null) ?
                    <MyLink 
                        href={props.navItem.pathname} 
                        passHref 
                        aria-label={`link to ${props.navItem.name} page`}
                    >
                        <ul className={styles.tab_container} >
                            <li 
                                className={styles.tab}
                                aria-current={ pageIsActive ? "page" : undefined }
                            >
                                {props.navItem.name}
                            </li>
                        </ul> 
                    </MyLink>
                : props.navItem.sub_navigation.length > 0 &&
                    <ul className={styles.tab_panel_container} >
                        <MyLink 
                            href={props.navItem.pathname} 
                            passHref 
                            aria-label={`link to ${props.navItem.name} page`}
                        >
                            <li 
                                className={styles.tab_expandable}
                                aria-current={ (pageIsActive || pagePath.includes("/case_studies")) ? "page" : undefined }
                                style={{background: panelHovered && "#636B5F"}}
                                onMouseEnter={(() => setTabHovered(true))}
                                onMouseOver={(() => setTabHovered(true))}
                                onMouseLeave={(() => setTabHovered(false))}
                                onMouseOut={(() => setTabHovered(false))}
                                onClick={() => setTabHovered(!panelHovered)}
                                onKeyUp={() => setTabHovered(!panelHovered)}
                            >
                                {props.navItem.name}
                                <div className={(tabHovered || panelHovered) ? styles.arrow_active : styles.arrow}>
                                    <Arrow/>
                                </div>
                            </li>
                        </MyLink>
                        <div className={styles.panel_container} >
                            <div 
                                className={styles.panel}
                                ref={content}
                                style={(tabHovered || panelHovered) ? { height: `${height}px` } : { height: '0px' }}
                                onMouseEnter={(() => setPanelHovered(true))}
                                onMouseOver={(() => setPanelHovered(true))}
                                onMouseLeave={(() => setPanelHovered(false))}
                                onMouseOut={(() => setPanelHovered(false))} 
                            >
                                {caseStudiesData.map((subNavItem, index) => {
                                    return (
                                        <MyLink 
                                            href={subNavItem.pathname} 
                                            passHref 
                                            aria-label={`link to ${subNavItem.name} page`}
                                            key={index} 
                                        >
                                            <li 
                                                
                                                className={styles.subnav_tab}
                                                style={ (tabHovered || panelHovered) ? {opacity: "100%"} : {opacity: "0%"}}
                                            >
                                                <div className={styles.subnav_text} style={(pagePath === subNavItem.pathname) ? {textDecoration: "underline"}: {textDecoration: ""}}>
                                                    {subNavItem.name}
                                                </div>
                                                <div className={styles.subnav_image}>
                                                    {subNavItem.thumbnailImage}
                                                </div>
                                            </li>
                                        </MyLink>
                                    )})    
                                }
                            </div>
                        </div>
                    </ul> 
                }
            </Fragment>
        );
    };
}

export default NavTabDesktop;