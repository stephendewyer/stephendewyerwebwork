import React, { useState } from 'react';
import Image from 'next/image';
import aboutLink from '../../../public/images/links/blind_link_about_01.png';
import aboutLink_hover from '../../../public/images/links/blind_link_about_02.png';
import caseStudiesLink from '../../../public/images/links/blind_link_case_studies_01.png';
import caseStudiesLink_hover from '../../../public/images/links/blind_link_case_studies_02.png';
import contactLink from '../../../public/images/links/blind_link_contact_01.png';
import contactLink_hover from '../../../public/images/links/blind_link_contact_02.png';
import styles from './SideDrawer.module.css';
import MyLink from '../../../public/util/myLink';

<MyLink />

const AboutLink = (props) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/about" passHref >
                <a>
                    {isHovering ? (
                        <Image src={aboutLink_hover} layout="responsive" alt="about link"/> 
                        ) : (
                        <Image src={aboutLink} layout="responsive" alt="about link"/>
                    )}
                </a>
            </MyLink>    
        </div>
    );
};

const CaseStudiesLink = (props) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/case_studies" passHref >
                <a>
                    {isHovering ? (
                        <Image src={caseStudiesLink_hover} layout="responsive" alt="case studies link"/> 
                        ) : (
                        <Image src={caseStudiesLink} layout="responsive" alt="case studies link"/>
                    )}
                </a>
            </MyLink>    
        </div>
    );
};

const ContactLink = (props) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/contact" passHref >
                <a>
                    {isHovering ? (
                        <Image src={contactLink_hover} layout="responsive" alt="contact link"/> 
                        ) : (
                        <Image src={contactLink} layout="responsive" alt="contact link"/>
                    )}
                </a>
            </MyLink>    
        </div>
    );
};

const sideDrawer = props => {

    return (

       <nav className={(props.show) ? styles.side_drawer_open : styles.side_drawer}>
            <div className={styles.grid_container} onClick={props.click}>
                <div className={styles.grid_item} >
                    <AboutLink />
                </div>
                <div className={styles.grid_item} >
                    <CaseStudiesLink />
                </div>
                <div className={styles.grid_item} >
                    <ContactLink />
                </div>
            </div>
        </nav> 

        
    );
};

export default sideDrawer;