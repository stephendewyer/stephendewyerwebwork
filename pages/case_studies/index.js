import Head from 'next/head';
import { Fragment } from 'react';
import Button from '../../components/button/button.js';
import classes from './case_studies.module.css';
import Image from 'next/image';
import joyfoodlyScreengrab from '../../public/images/case_studies/Joyfoodly/Joyfoodly_desktop.jpg';
import artinTechServicesScreengrab from '../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Services_screengrab.JPG';
import publicArtsCommissionScreengrab from '../../public/images/case_studies/Public_Arts_Commission/Public_Arts_Commission_screengrab.JPG';
import infiniteMileScreengrab from '../../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_Screengrab.JPG';
import Link from 'next/link';

const CaseStudiesPage = () => {

    return (
        <Fragment>
            <Head>
                <title>case studies - stephen dewyer web design and development</title>
                <meta name="description" content="sample overview of web projects and programs designed and developed by stephen dewyer" />
            </Head>
            <div className={classes.case_studies} role="main">
                <h1 className="header">
                    case studies
                </h1>
                <div className={classes.case_studies_a}>
                    <div className={classes.case_study_image}>
                        <Image src={joyfoodlyScreengrab} layout="responsive" alt="Joyfoodly screenshot" />
                    </div>
                    <div className={classes.case_study_info_container}>
                        <div className={classes.case_study_info}>
                            <h2 className={classes.case_study_description}>
                                client: Joyfoodly<br />2022
                            </h2>
                            <Link href="/case_studies/joyfoodly" passHref >
                                <div className={classes.view_button} >
                                    <Button>
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
                            <h2 className={classes.case_study_description}>
                                client: Art in Tech Services Inc<br/>2021 &ndash; present
                            </h2>
                            <Link href="/case_studies/artInTechServices" passHref >
                                <div className={classes.view_button} >
                                    <Button>
                                        view
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.case_study_image}>
                        <Image src={artinTechServicesScreengrab} layout="responsive" alt="Art in Tech Services Inc screenshot" />
                    </div>
                </div>
                <div className={classes.case_studies_a}>
                    <div className={classes.case_study_image}>
                        <Image src={publicArtsCommissionScreengrab} layout="responsive" alt="Public Arts Commission screenshot" />
                    </div>
                    <div className={classes.case_study_info_container}>
                        <div className={classes.case_study_info}>
                            <h2 className={classes.case_study_description}>
                                client: Public Arts Commission<br/>2017 &ndash; present
                            </h2>
                            <Link href="/case_studies/publicArtsCommission" passHref >
                                <div className={classes.view_button} >
                                    <Button>
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
                            <h2 className={classes.case_study_description}>
                                client: Infinite Mile LLC<br/>2013 &ndash; 2017
                            </h2>
                            <Link href="/case_studies/infiniteMile" passHref >
                                <div className={classes.view_button} >
                                    <Button>
                                        view
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.case_study_image}>
                        <Image src={infiniteMileScreengrab} layout="responsive" alt="Infinite Mile screenshot" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default CaseStudiesPage;