import Head from 'next/head';
import { Fragment } from 'react';
import classes from './infiniteMile.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteMileSlideCarousel from "../../../components/slide_carousel/InfiniteMileSlideCarousel";
import Link from 'next/link';
import Button from '../../../components/button/button';

const InfiniteMile = () => {
    return (
        <Fragment>
            <Head>
                <title>Infinite Mile - stephen dewyer web design and development</title>
                <meta name="description" content="details of web design and development for Infinite Mile by stephen dewyer" />
            </Head>
            <div className="container" role="main">
                <h1 className="header">
                    client: Infinite Mile (∞ mile)<br />
                    2013 &ndash; 2017
                </h1>
                <div className={classes.slider_case_study}>
                    <InfiniteMileSlideCarousel />
                </div>
                <div className='paragraphs_container' >
                    <div className='paragraphs' >
                        Infinite Mile LLC was an award-winning journal of art and culture(s) in Detroit, Michigan that published monthly online issues and annual print anthologies.<br /><br/>
                        Services and features:
                        <ul>
                            <li>
                                Brand identity design
                            </li>
                            <li>
                                Custom images and videos
                            </li>
                            <li>
                                Email newsletter subscription form
                            </li>
                            <li>
                                Custom serial publication and conference pages in partnership with the University of Michigan Stamps School of Art and Design 
                            </li>
                            <li>
                                Interactivity
                            </li>
                        </ul>
                    </div>        
                </div>
                <Link href="https://www.infinitemiledetroit.com/" passHref={true} >
                    <div className={classes.visit_link}>
                        <Button passHref={true}>
                            visit
                        </Button>
                    </div>
                </Link>
                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/publicArtsCommission" passHref={true} >
                        <div className={classes.prev_case_study}>
                            <Button passHref={true}>
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/joyfoodly" passHref={true} >
                        <div className={classes.next_case_study}>
                            <Button passHref={true}>
                                next
                            </Button>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment>
        
    );
};

export default InfiniteMile;