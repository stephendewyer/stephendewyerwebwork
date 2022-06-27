import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import classes from './joyfoodly.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JoyfoodlySlideCarousel from "../../../components/slide_carousel/JoyfoodlySlideCarousel";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

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
                            <li>
                                Custom build using Next.js
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

                <Link href="https://joyfoodly.vercel.app/" passHref={true} >
                    <a className={classes.visit_link} target="_blank" rel="noopener noreferrer">
                        <ButtonExternalLink passHref={true} aria-label="link to visit">
                            <div>
                                visit
                            </div>
                            <div className={classes.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </a>
                </Link>

                <Link href="https://www.figma.com/community/file/1067233911203456668" passHref={true} >
                    <a className={classes.visit_link} target="_blank" rel="noopener noreferrer" >
                        <ButtonExternalLink passHref={true} aria-label="link to desktop prototype">
                            <div>
                                view desktop prototype
                            </div>
                            <div className={classes.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </a>
                </Link>

                <Link href="https://www.figma.com/community/file/1067232787737440923" passHref={true} >
                    <a className={classes.visit_link} target="_blank" rel="noopener noreferrer" >
                        <ButtonExternalLink passHref={true} aria-label="link to mobile prototype">
                            <div>
                                view mobile prototype
                            </div>
                            <div className={classes.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </a>
                </Link>

                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/infiniteMile" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to previous case study">
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/artInTechServices" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to next case study">
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