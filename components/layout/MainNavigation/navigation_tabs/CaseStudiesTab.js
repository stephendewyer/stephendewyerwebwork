import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import caseStudiesLinkPageInactive from '../../../../public/images/links/blind_link_case_studies_01.svg';
import caseStudiesLinkPageActive from '../../../../public/images/links/blind_link_case_studies_03.svg';
import caseStudiesLink_hover from '../../../../public/images/links/blind_link_case_studies_02.svg';
import styles from './navigation_tab.module.css';

const CaseStudiesTab = () => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === "/case_studies";

    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        (pageIsActive) ? 
            <div 
                className={styles.navigationTab}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                aria-current={pageIsActive}
            >
                <MyLink href="/case_studies" passHref aria-label="link to case studies page">
                    {isHovering ? (
                        <Image 
                            src={caseStudiesLink_hover} 
                            layout="responsive" 
                            alt="case studies link"
                            priority
                        /> 
                        ) : (
                        <Image 
                            src={caseStudiesLinkPageActive} 
                            layout="responsive" 
                            alt="case studies link"
                            priority
                        />
                    )}
                </MyLink>    
            </div>
        :
            <div 
                className={styles.navigationTab}
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                aria-current={pageIsActive}
            >
                <MyLink href="/case_studies" passHref aria-label="link to case studies page">
                    {isHovering ? (
                        <Image 
                            src={caseStudiesLink_hover} 
                            layout="responsive" 
                            alt="case studies link"
                            priority
                        /> 
                        ) : (
                        <Image 
                            src={caseStudiesLinkPageInactive} 
                            layout="responsive" 
                            alt="case studies link"
                            priority
                        />
                    )}
                </MyLink>    
            </div>
    );
};

export default CaseStudiesTab;