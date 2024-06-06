import styles from './SideDrawer.module.css';
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState, useRef } from "react";
import MyLink from '../../../public/util/myLink';

const SideDrawer = (props) => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === "/about";

    const blindsHeightRef = useRef(0);

    const [blindsHeight, setBlindsHeight] = useState(0);

    useEffect(() => {
        setBlindsHeight(blindsHeightRef.current.clientHeight);
    }, []);

    useLayoutEffect(() => {
        const measure = () => {
            setBlindsHeight(blindsHeightRef.current.clientHeight);
        };
        window.addEventListener("resize", measure );
        return () => {
            window.removeEventListener("resize", measure );
        };
    }, []);

    const BlindsTop = () => {
        return (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1078.65 110" fill="currentColor">
                <path  d="m1078.63,73.87c-.97-23.08.54-46.21-1.51-69.29-.24-2.73-.9-4-2.06-4.58H3C.72,1-.16,3.12.03,6.53c.49,8.66.73,17.3.4,26.01-.32,8.23,1.53,16.55,1.26,24.78-.6,17.61,1.56,35.07,1.97,52.62v.06h1007.07c36.82-.19,58.95-.3,60.5-.32,2.2-.03,5.66.72,4.9-3.06-2.25-11.2,2.96-21.72,2.5-32.75Z"/>
            </svg>
        );
    };

    const BlindsBottom = () => {
        return (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1051.81 76.68" fill="currentColor">
                <path  d="m1051.16,51.72c-2.79-15.23-6.36-30.31-9.24-45.54-.88-4.72-3.04-6.27-7.6-6.18C1024.62.2,41.88.8,11.07,1c-4.36.03-6.1,1.96-6.26,5.81-.89,21.07-7.55,41.71-3.53,63.29.59,3.14,1.19,5.24,2.31,6.58h1046.46c1.14-8.3,2.64-16.65,1.11-24.96Z"/>
            </svg>
        );
    };

    const navigationTabs = [
        {
            href: "/about",
            name: "about",
            sub_tabs: null
        },
        {
            href: "/case_studies",
            name: "case studies",
            sub_tabs: [
                {
                    href: "/case_studies/publicArtsCommission",
                    name: "Public Arts Commission web platform",
                    subTabs: null
                },
                {
                    href: "/case_studies/artInTechServices",
                    name: "Art in Tech Services web programs",
                    subTabs: null
                },
                {
                    href: "/case_studies/joyfoodly",
                    name: "Joyfoodly website",
                    subTabs: null
                }
                ,
                {
                    href: "/case_studies/infiniteMile",
                    name: "Infinite Mile website",
                    subTabs: null
                }
            ]
        },
        {
            href: "/contact",
            name: "contact",
            subTabs: null
        }
    ];

    return (
       <nav className={(props.show) ? styles.side_drawer_open : styles.side_drawer} aria-hidden={(props.show)? "true" : "false"}>
           <ul className={styles.blinds}>
                <BlindsTop />
                {navigationTabs.map((tab, index) => {
                    return (
                        <MyLink
                            href={tab.href}
                            key={index}
                            className={styles.tab_container}
                            onClick={props.click}
                        >
                           <li
                                className={styles.tab}
                                style={{height: `${blindsHeight}px`}}
                            >
                                <div className={styles.blindsTabBackground} ref={blindsHeightRef}>
                                    <div className={styles.blind} />
                                    <div className={styles.blind} />
                                </div>
                                <div className={styles.tabName}>
                                    {tab.name}
                                </div>
                            </li>     
                        </MyLink>
                    )
                })}
                <BlindsBottom />
           </ul>
        </nav> 
    );
};

export default SideDrawer;