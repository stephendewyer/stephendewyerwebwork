import Head from 'next/head';
import { Fragment } from 'react';
import classes from './publicArtsCommission.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PublicArtsCommissionSlideCarousel from "../../../components/slide_carousel/PublicArtsCommissionSlideCarousel";
import Link from 'next/link';
import Button from '../../../components/button/button';

const PublicArtsCommission = () => {
    return (
        <Fragment>
            <Head>
                <title>Public Arts Commission - stephen dewyer web design and development</title>
                <meta name="description" content="details of web design and development for Public Arts Commission by stephen dewyer" />
            </Head>
            <div className="container">
                <div className="header">
                    client: Public Arts Commission<br/>
                    2017-present
                </div>
                <div className={classes.slider_case_study}>
                    <PublicArtsCommissionSlideCarousel />
                </div>
                <div className='paragraphs_container' >
                    <div className='paragraphs' >
                        Public Arts Commission is a grassroots, 501(c)(4) non-profit organization that combines art and politics for greater democracy.<br /><br/> 
                        Services and features:<br />
                            <ul>
                                <li>
                                    Brand identity design;
                                </li>
                                <li>
                                    Custom images;
                                </li>
                                <li>
                                    Online portal for campaigns to apply for endorsement;
                                </li>
                                <li>
                                    Email newsletter subscription form;
                                </li>
                                <li>
                                    Endorsed campaigns by state and country;
                                </li>
                                <li>
                                    Interactivity and responsiveness.
                                </li>
                            </ul>
                        Forthcoming:<br />
                            <ul>
                                <li>
                                    Web application for individuals in the art community to connect and organize at the grassroots level.
                                </li>
                            </ul>
                    </div>
                </div>
                <Link href="https://publicartscommission.org/" passHref={true} >
                    <div className={classes.visit_link}>
                        <Button>
                            visit
                        </Button>
                    </div>
                </Link>
                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/artInTechServices" passHref={true} >
                        <div className={classes.prev_case_study}>
                            <Button>
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/infiniteMile" passHref={true} >
                        <div className={classes.next_case_study}>
                            <Button>
                                next
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
        
    );
};

export default PublicArtsCommission;