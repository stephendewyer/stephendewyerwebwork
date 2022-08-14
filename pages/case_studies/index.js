import Head from 'next/head';
import { Fragment } from 'react';
import Button from '../../components/button/button.js';
import classes from './case_studies.module.css';
import Image from 'next/image';
import joyfoodlyScreengrab from '../../public/images/case_studies/Joyfoodly/Joyfoodly_desktop.png';
import artinTechServicesScreengrab from '../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Services_screengrab.png';
import publicArtsCommissionScreengrab from '../../public/images/case_studies/Public_Arts_Commission/Public_Arts_Commission_screengrab.png';
import infiniteMileScreengrab from '../../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_Screengrab.png';
import Link from 'next/link';
import MyLink from '../../public/util/myLink';

const CaseStudiesPage = () => {

    return (
        <Fragment>
            <Head>
                <title>case studies - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="samples of web projects and programs designed and developed by stephen dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies" />
            </Head>
            <div className="container">
                <div className={classes.case_studies}>
                    <h1 className="header">
                        case studies
                    </h1>
                    <div className={classes.case_studies_a}>
                        <div className={classes.case_study_image}>
                            <MyLink href="/case_studies/joyfoodly" passHref >
                                <Image src={joyfoodlyScreengrab} layout="responsive" alt="Joyfoodly screenshot" />
                            </MyLink>
                        </div>
                        <div className={classes.case_study_info_container}>
                            <div className={classes.case_study_info}>
                                <div className={classes.case_study_title}>
                                    client: Joyfoodly<br />2022
                                </div>
                                <div className={classes.case_study_subtitle}>
                                    A legacy website for a culinary education company serving families.
                                </div>
                                <Link href="/case_studies/joyfoodly" passHref >
                                    <div className={classes.view_button} >
                                        <Button aria-label="link to view">
                                            view
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.case_studies_b}>
                        <div className={classes.case_study_info_container}>
                            <div className={classes.case_study_info}>
                                <div className={classes.case_study_title}>
                                    client: Art in Tech Services Inc<br/>2021 &ndash; present
                                </div>
                                <div className={classes.case_study_subtitle}>
                                    A website and web application for a company that uses advancements in art and digital technology to improve design for businesses and the public.
                                </div>
                                <Link href="/case_studies/artInTechServices" passHref >
                                    <div className={classes.view_button} >
                                        <Button aria-label="link to view">
                                            view
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.case_study_image}>
                            <MyLink href="/case_studies/artInTechServices" passHref >
                                <Image src={artinTechServicesScreengrab} layout="responsive" alt="Art in Tech Services Inc screenshot" />
                            </MyLink>
                        </div>
                    </div>
                    <div className={classes.case_studies_a}>
                        <div className={classes.case_study_image}>
                            <MyLink href="/case_studies/publicArtsCommission" passHref >
                                <Image src={publicArtsCommissionScreengrab} layout="responsive" alt="Public Arts Commission screenshot" />
                            </MyLink>                    
                        </div>
                        <div className={classes.case_study_info_container}>
                            <div className={classes.case_study_info}>
                                <div className={classes.case_study_title}>
                                    client: Public Arts Commission<br/>2017 &ndash; present
                                </div>
                                <div className={classes.case_study_subtitle}>
                                A website and web applications for a non-profit organization that connects the art community to democratic movements.
                                </div>
                                <Link href="/case_studies/publicArtsCommission" passHref >
                                    <div className={classes.view_button} >
                                        <Button aria-label="link to view">
                                            view
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={classes.case_studies_b}>
                        <div className={classes.case_study_info_container}>
                            <div className={classes.case_study_info}>
                                <div className={classes.case_study_title}>
                                    client: Infinite Mile LLC<br/>2013 &ndash; 2017
                                </div>
                                <div className={classes.case_study_subtitle}>
                                    A website for an award-winning journal of art and culture(s) in Detroit, Michigan.
                                </div>
                                <Link href="/case_studies/infiniteMile" passHref >
                                    <div className={classes.view_button} >
                                        <Button aria-label="link to view">
                                            view
                                        </Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={classes.case_study_image}>
                            <MyLink href="/case_studies/infiniteMile" passHref >
                                <Image src={infiniteMileScreengrab} layout="responsive" alt="Infinite Mile screenshot" />
                            </MyLink>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CaseStudiesPage;