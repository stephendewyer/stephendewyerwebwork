import { useState } from 'react';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import caseStudiesLink from '../../../../public/images/links/blind_link_case_studies_01.svg';
import caseStudiesLink_hover from '../../../../public/images/links/blind_link_case_studies_02.svg';
import styles from './navigation_tab.module.css';

const CaseStudiesTab = () => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div 
            className={styles.navigationTab}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
        >
            <MyLink href="/case_studies" passHref aria-label="link to case studies page">
                {isHovering ? (
                    <Image src={caseStudiesLink_hover} layout="responsive" alt="case studies link"/> 
                    ) : (
                    <Image src={caseStudiesLink} layout="responsive" alt="case studies link"/>
                )}
            </MyLink>    
        </div>
    );
};

export default CaseStudiesTab;