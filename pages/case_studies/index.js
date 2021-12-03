import Head from 'next/head';
import { Fragment } from 'react';
import Button from '../../components/button/button.js';
import classes from './case_studies.module.css';
import Image from 'next/image';
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
            <div className={classes.case_studies}>
                <div className="header">
                    case studies
                </div>
                <div className='header_02'>
                    <p>client: Art in Tech Services Inc<br/>2021-present</p>
                </div>
                <div className={classes.grid_container}>
                    <div className={classes.grid_item}>
                        <div className={classes.case_study_image}>
                            <Image src={artinTechServicesScreengrab} layout="responsive" alt="Art in Tech Services Inc screenshot" />
                        </div>
                    </div> 
                    <div className={classes.grid_item}>
                        <Link href="/case_studies/artInTechServices" passHref >
                            <div className={classes.detail_button} >
                                <Button>
                                    details
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='header_02'>
                    <p>client: Public Arts Commission<br/>2017-present</p>
                </div>
                <div className={classes.grid_container}>
                    <div className={classes.grid_item}>
                        <div className={classes.case_study_image}>
                            <Image src={publicArtsCommissionScreengrab} layout="responsive" alt="Public Arts Commission screenshot" />  
                        </div>
                    </div> 
                    <div className={classes.grid_item}>
                        <Link href="/case_studies/publicArtsCommission" passHref >
                            <div className={classes.detail_button} >
                                <Button>
                                    details
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='header_02'>
                    <p>client: Infinite Mile LLC<br/>2013-2017</p>
                </div>
                <div className={classes.grid_container}>
                    <div className={classes.grid_item}>
                        <div className={classes.case_study_image}>
                            <Image src={infiniteMileScreengrab} layout="responsive" alt="Infinite Mile screenshot" />
                        </div>
                    </div> 
                    <div className={classes.grid_item}>
                        <Link href="/case_studies/infiniteMile" passHref >
                            <div className={classes.detail_button} >
                                <Button>
                                    details
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
            
    );
};

export default CaseStudiesPage;