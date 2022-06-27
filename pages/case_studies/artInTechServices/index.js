import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import classes from './artInTechServices.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtinTechServicesSlideCarousel from "../../../components/slide_carousel/ArtinTechServicesSlideCarousel";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

const ArtinTechServices = () => {
    return (
        <Fragment>
            <Head>
                <title>Art in Tech Services Inc - stephen dewyer web design and development</title>
                <meta name="description" content="details of web design and development for Art in Tech Services Inc by stephen dewyer" />
            </Head>
            <div className="container" role="main">
                <h1 className="header">
                    client: Art in Tech Services Inc<br/>
                    2021 &ndash; present
                </h1>
                <div className={classes.slider_case_study}>
                    <ArtinTechServicesSlideCarousel />
                </div>
                <div className='paragraphs_container' >
                    <div className='paragraphs' >
                        Art in Tech Services Inc is a company that works to include art workers who have skills in digital technology in the tech field in the belief that tech is better with art.<br/><br/>
                        Services and features:
                        <ul>
                            <li>
                                Brand identity design
                            </li>
                            <li>
                                Client relationship management software
                            </li>
                            <li>
                                Custom images and videos
                            </li>
                            <li>
                                Interactivity and responsiveness
                            </li>
                            <li>
                                Custom build using Next.js, MongoDB, SendGrid and Stripe
                            </li>
                        </ul>
                    </div>        
                </div>
                <Link href="https://www.artintechservices.com/" passHref={true} >
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

                <Link href="https://www.figma.com/community/file/1077736708672476518" passHref={true} >
                    <a className={classes.visit_link} target="_blank" rel="noopener noreferrer" >
                        <ButtonExternalLink passHref={true} aria-label="link to view prototype">
                            <div>
                                view prototype
                            </div>
                            <div className={classes.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </a>
                </Link>
                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/joyfoodly" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to previous case study">
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/publicArtsCommission" passHref={true} >
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

export default ArtinTechServices;