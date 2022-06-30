import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import classes from './infiniteMile.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteMileSlideCarousel from "../../../components/slide_carousel/InfiniteMileSlideCarousel";
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

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
                    Infinite Mile LLC was an award-winning journal of art and culture(s) in Detroit, Michigan that published monthly online issues and annual print anthologies.
                    <br /><br />
                    <div className={classes.inline_bold}>my role: </div>Co-Founding Editor
                    <br /><br />
                    <div className={classes.inline_bold}>services I provided:</div>
                        <ul>
                            <li>
                                Designed, developed and deployed an enterprise website
                            </li>
                            <li>
                                Designed brand identity including logo
                            </li>
                            <li>
                                Designed graphics
                            </li>
                            <li>
                                Maintained and updated website to publish monthly issues
                            </li>
                            <li>
                                Designed, developed and deployed a shop feature to allow users to purchase annual print anthologies and merchandise using a PayPal API
                            </li>
                        </ul>
                    </div> 
                    <h2 className="header_02">
                        the process
                    </h2>       
                </div>
                <Tabs>
                    <div label="1" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            empathize
                        </h2>
                        <p className={classes.process_paragraphs}>
                            Despite having an active art community, no journals covered art and culture(s) in Detroit, Michigan from Detroit.  
                            As a result, the art community in Detroit did not have a platform from which it could voice issues affecting the community.
                        </p>
                    </div>
                    <div label="2" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            define
                        </h2>
                        <p className={classes.process_paragraphs}>
                            Detroit, Michigan needed a monthly, web-based journal of art and culture(s) to voice issues affecting the Detroit art community.  
                            The journal would have to bridge demographic groups in a very segregated region by class and race.
                        </p>     
                    </div>
                    <div label="3" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            ideate
                        </h2>
                        <p className={classes.process_paragraphs}>
                            Rapid iterations of logo and name ideas were shared amongst stakeholders.  
                            The process was one of the best I&#39;ve seen, with stakeholders working together to find the best design solution instead of defending their own ideas.
                            <br />
                            <br />
                            Once the name and logo were decided, I began sketching ideas for the Infinite Mile website.  Stakeholders agreed to use a custom website because the website needed to have a different look than all the rest of the websites and have strong aesthetics because the journal was focusing on art and culture(s).
                        </p>
                    </div>
                    <div label="4" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            prototype
                        </h2>
                        <p className={classes.process_paragraphs}>
                            I created a password-protected website as a prototype to share with stakeholders, who shared feedback.
                        </p>
                    </div>
                    <div label="5" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            build
                        </h2>
                        <p className={classes.process_paragraphs}>
                            I built the Infinite Mile website using HTML, CSS, JavaScript, jQuery, MailChimp, VideoJS and WowSlider.  
                            Later, I added APIs for events using EventBrite and to handle sales of annual print anthologies and merchandise using PayPal.
                        </p>
                    </div>
                    <div label="6" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            test
                        </h2>
                        <p className={classes.process_paragraphs}>
                            User tests were conducted for the Infinite Mile website.  
                            Google Chrome Developer was used to test the code.
                        </p>
                    </div>
                </Tabs>

                <h2 className="header_02">
                    challenges
                </h2>
                <div className='paragraphs' >
                    Setting the direction for the Infinite Mile website was a challenge.  
                    Many discussions about whether or not to create a custom website or use WordPress were had.  
                    Procedures to change the website lacked a formal process.  
                    The website was missing key functionality like responsiveness.
                </div>

                <h2 className="header_02">
                    discoveries
                </h2>
                <div className='paragraphs' >
                    Infinite Mile was a huge success and some of the most rewarding work I have done in my life.  
                    Infinite Mile was an important lesson in how web programs can bring communities together.  
                    As a result, I decided to deeply learn web development and UX design.
                </div>
                <div className={classes.visit_button}>
                    <Link href="https://www.infinitemiledetroit.com/" passHref={true} >
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
                </div>
                <div className={classes.case_studies_nav}>
                    <Link href="/case_studies/publicArtsCommission" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to previous case study">
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/joyfoodly" passHref={true} >
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

export default InfiniteMile;