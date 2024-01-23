import Head from 'next/head';
import { Fragment, useState } from 'react';
import Button from '../../components/button/button.js';
import styles from './case_studies.module.css';
import Image from 'next/image';
import joyfoodlyScreengrab from '../../public/images/case_studies/Joyfoodly/Joyfoodly_desktop.png';
import artinTechServicesScreengrab from '../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Services_screengrab.png';
import publicArtsCommissionScreengrab from '../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_website_desktop_01.jpg';
import infiniteMileScreengrab from '../../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_Screengrab.png';
import MyLink from '../../public/util/myLink';

const CaseStudiesPage = () => {
    const [joyfoodlyIsHovered, setJoyfoodlyIsHovered] = useState(false);
    const [artInTechServicesIsHovered, setArtInTechServicesIsHovered] = useState(false);
    const [publicArtsCommissionIsHovered, setPublicArtsCommissionIsHovered] = useState(false);
    const [infiniteMileIsHovered, setInfiniteMileIsHovered] = useState(false);
    return (
        <Fragment>
            <Head>
                <title>case studies - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="samples of web projects and programs designed and developed by stephen dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies" />
            </Head>
            <div className="container">
                <div className={styles.case_studies}>
                    <h1 className="header">
                        case studies
                    </h1>
                    <MyLink 
                        onMouseEnter={(() => setPublicArtsCommissionIsHovered(true))}
                        onMouseOver={(() => setPublicArtsCommissionIsHovered(true))}
                        onMouseLeave={(() => setPublicArtsCommissionIsHovered(false))}
                        onMouseOut={(() => setPublicArtsCommissionIsHovered(false))}
                        href="/case_studies/publicArtsCommission" 
                        passHref 
                    >
                        <div className={styles.case_studies_a}>
                        <div className={styles.case_study_image}>
                            <Image src={publicArtsCommissionScreengrab} layout="responsive" alt="Public Arts Commission screenshot" />              
                        </div>
                        <div className={styles.case_study_info_container}>
                            <div className={styles.case_study_info}>
                            <h3 className={styles.case_study_title}>
                                Public Arts Commission web platform<br/><span style={{color: "#52535E"}} >2017 &ndash; present</span>
                            </h3>
                            <div className={styles.case_study_subtitle}>
                                A web platform for a non-profit organization that is dedicated to expanding the political imagination for greater democracy within and outside art.
                            </div>
                            <div className={styles.view_button} >
                                <Button 
                                    buttonIsActive={publicArtsCommissionIsHovered}
                                    aria-label="link to view"
                                >
                                    view
                                </Button>
                            </div>
                            </div>
                        </div>
                    </div>
                    </MyLink>
                    
                    <MyLink 
                        onMouseEnter={(() => setArtInTechServicesIsHovered(true))}
                        onMouseOver={(() => setArtInTechServicesIsHovered(true))}
                        onMouseLeave={(() => setArtInTechServicesIsHovered(false))}
                        onMouseOut={(() => setArtInTechServicesIsHovered(false))}
                        href="/case_studies/artInTechServices" 
                        passHref 
                    >
                        <div className={styles.case_studies_b}>
                        <div className={styles.case_study_info_container}>
                            <div className={styles.case_study_info}>
                            <h3 className={styles.case_study_title}>
                                Art in Tech Services Inc web programs<br/><span style={{color: "#52535E"}} >2021 &ndash; present</span>
                            </h3>
                            <div className={styles.case_study_subtitle}>
                                Web programs for a company that uses advancements in art and digital technology to improve design for businesses and the public.
                            </div>
                            <div className={styles.view_button} >
                                <Button 
                                    buttonIsActive={artInTechServicesIsHovered}
                                    aria-label="link to view"
                                >
                                    view
                                </Button>
                            </div>
                            </div>
                        </div>
                        <div className={styles.case_study_image}>
                            <Image src={artinTechServicesScreengrab} layout="responsive" alt="Art in Tech Services Inc screenshot" />
                        </div>
                        </div>
                    </MyLink>
                    <MyLink 
                        onMouseEnter={(() => setJoyfoodlyIsHovered(true))}
                        onMouseOver={(() => setJoyfoodlyIsHovered(true))}
                        onMouseLeave={(() => setJoyfoodlyIsHovered(false))}
                        onMouseOut={(() => setJoyfoodlyIsHovered(false))}
                        href="/case_studies/joyfoodly" 
                        passHref 
                    >
                        <div className={styles.case_studies_a}>
                        <div className={styles.case_study_image}>  
                            <Image src={joyfoodlyScreengrab} layout="responsive" alt="Joyfoodly screenshot" /> 
                        </div>
                        <div className={styles.case_study_info_container}>
                            <div className={styles.case_study_info}>
                            <h3 className={styles.case_study_title}>
                                Joyfoodly legacy website<br /><span style={{color: "#52535E"}} >2022</span>
                            </h3>
                            <div className={styles.case_study_subtitle}>
                                A legacy website for a culinary education company serving families.
                            </div>
                            <div className={styles.view_button} >
                                <Button 
                                buttonIsActive={joyfoodlyIsHovered}
                                aria-label="link to view"
                                >
                                    view
                                </Button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </MyLink>
                    <MyLink 
                        onMouseEnter={(() => setInfiniteMileIsHovered(true))}
                        onMouseOver={(() => setInfiniteMileIsHovered(true))}
                        onMouseLeave={(() => setInfiniteMileIsHovered(false))}
                        onMouseOut={(() => setInfiniteMileIsHovered(false))}
                        href="/case_studies/infiniteMile" 
                        passHref 
                    >
                        <div className={styles.case_studies_b}>
                        <div className={styles.case_study_info_container}>
                            <div className={styles.case_study_info}>
                            <h3 className={styles.case_study_title}>
                            Infinite Mile LLC website<br/><span style={{color: "#52535E"}} >2013 &ndash; 2017</span>
                            </h3>
                            <div className={styles.case_study_subtitle}>
                            A website for an award-winning journal of art and culture(s) in Detroit, Michigan.
                            </div>
                            <div className={styles.view_button} >
                                <Button 
                                    buttonIsActive={infiniteMileIsHovered}
                                    aria-label="link to view"
                                >
                                    view
                                </Button>
                            </div>
                            </div>
                        </div>
                        <div className={styles.case_study_image}>
                        <Image src={infiniteMileScreengrab} layout="responsive" alt="Infinite Mile screenshot" />
                        </div>
                        </div>
                    </MyLink>
                </div>
            </div>
        </Fragment>
    );
};

export default CaseStudiesPage;