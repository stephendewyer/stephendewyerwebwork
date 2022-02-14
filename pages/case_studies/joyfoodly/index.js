import Head from 'next/head';
import { Fragment } from 'react';
import classes from './joyfoodly.module.css';
import Image from 'next/image';
import joyfoodlyPrototypeMobile from '../../../public/images/case_studies/Joyfoodly/prototypes/joyfoodly_mobile_prototype_final.jpg';
import joyfoodlyPrototypeDesktop from '../../../public/images/case_studies/Joyfoodly/prototypes/joyfoodly_desktop_prototype_final.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JoyfoodlySlideCarousel from "../../../components/slide_carousel/JoyfoodlySlideCarousel";
import Link from 'next/link';
import Button from '../../../components/button/button';

const Joyfoodly = () => {
    return (
        <Fragment>
            <Head>
                <title>Joyfoodly - stephen dewyer web design and development</title>
                <meta name="description" content="details of web design and development for Joyfoodly by stephen dewyer" />
            </Head>
            <div className="container" role="main">
                <h1 className="header">
                    client: Joyfoodly<br />
                    2022
                </h1>
                <div className={classes.slider_case_study}>
                    <JoyfoodlySlideCarousel />
                </div>
                <div className='paragraphs_container' >
                    <div className='paragraphs' >
                        Joyfoodly helps families learn to eat more fruits and vegetables, offering a downloadable cookbook called Joyful12.<br /><br />
                        Services and features:
                        <ul>
                            <li>
                                Responsive website redesign
                            </li>
                            <li>
                                Custom email designs
                            </li>
                            <li>
                                Redirection of domain names
                            </li>
                        </ul>
                        The website redesign process, which uses a variation of the 5 Stage Design Thinking method:
                        <ol>
                            <li>
                                Empathize - users want to learn from Joyful12 how to eat more fruits and vegetables
                            </li>
                            <li>
                                Define - users need a website to download Joyful12 cookbook using joyfoodly.com and joyful12.com domain names
                            </li>
                            <li>
                                Ideate - create mobile and desktop designs of joyfoodly.com website
                            </li>
                            <li>
                                Prototype - create prototypes using Figma
                            </li>
                            <li>
                                Build - use Next.js, React, GIT to build website
                            </li>
                            <li>
                                Test - test for cross-browser compatibility
                            </li>
                        </ol>
                    </div>        
                </div>
                <div className={classes.prototypes_container}>
                    <h3 className={classes.prototypes_heading}>
                        prototypes
                    </h3>
                    <div className={classes.prototypes}>
                        <div className={classes.prototype_mobile}>
                            <Image src={joyfoodlyPrototypeMobile} layout="responsive" alt="Joyfoodly mobile prototype" />
                        </div>
                        <div className={classes.prototype_desktop}>
                            <Image src={joyfoodlyPrototypeDesktop} layout="responsive" alt="Joyfoodly desktop prototype" />
                        </div>
                    </div>
                </div>
                <Link href="https://joyfoodly.vercel.app/" passHref={true} >
                    <div className={classes.visit_link}>
                        <Button passHref={true}>
                            visit
                        </Button>
                    </div>
                </Link>
                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/infiniteMile" passHref={true} >
                        <div className={classes.prev_case_study}>
                            <Button passHref={true}>
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/artInTechServices" passHref={true} >
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

export default Joyfoodly;