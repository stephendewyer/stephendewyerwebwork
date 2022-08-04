import Head from 'next/head';
import React, { Fragment } from 'react';
import Image from 'next/image';
import classes from './joyfoodly.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JoyfoodlySlideCarousel from "../../../components/slide_carousel/JoyfoodlySlideCarousel";
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

const Joyfoodly = () => {

    return (
        <Fragment>
            <Head>
                <title>Joyfoodly - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="details of UX design and web development for Joyfoodly by stephen dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies/joyfoodly" />
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
                    Joyfoodly helps families learn to eat more fruits and vegetables, offering a downloadable cookbook called Joyful12.
                    <br /><br />
                    <div className={classes.inline_bold}>my role:</div> Founding Director of Art in Tech Services
                    <br /><br />
                    <div className={classes.inline_bold}>services I provided:</div>
                        <ul>
                            <li>
                                Designed, developed and deployed a responsive legacy website
                            </li>
                            <li>
                                Designed custom emails
                            </li>
                            <li>
                                Redirected users to the legacy website from existing domain names
                            </li>
                            <li>
                                Closed previous web program accounts
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
                            Busy parents want to cook healthy meals for their children, but sometimes don&#8217;t know how to make healthy meals with plenty of fruits and vegetables.  Joyfoodly was a culinary education company that helped busy parents learn to cook healthy meals with more fruits and vegetables.  As Joyfoodly came to a close, the company wanted to close all existing web accounts, provide the Joyfoodly community with a free version of the Joyful12 cookbook via a new legacy website and notify the community about the business closing and creation of the new legacy website via email.
                        </p>
                    </div>
                    <div label="2" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            define
                        </h2>
                        <p className={classes.process_paragraphs}>
                            Requirements:
                            <ul>
                                <li>
                                    Design, develop and deploy a legacy website where the Joyfoodly community can visit and download a free version of the Joyful12 cookbook
                                </li>
                                <li>
                                    Design emails using Mailchimp to notify Joyfoodly subscribers about the company closing and the launch of the legacy website
                                </li>
                                <li>
                                    Close previous web programs and redirect traffic to new legacy website from the joyfoodly.com and joyful12.com domain names
                                </li>
                            </ul>
                        </p>     
                    </div>
                    <div label="3" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            ideate
                        </h2>
                        <p className={classes.process_paragraphs}>
                            We agreed to create a simple, modern website using Next.js for the legacy website.  
                            I created quick sketches of possible desktop and mobile designs for the website.  
                        </p>
                        
                    </div>
                    <div label="4" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            prototype
                        </h2>
                        <p className={classes.process_paragraphs}>
                            I created high-fidelity mobile and desktop prototypes for the Joyfoodly legacy website using Figma with the content provided by Joyfoodly.  
                            The emails to subscribers were designed using Mailchimp with content provided by Joyfoodly.  
                            Prototypes for the website and emails were shared with stakeholders for approval.
                        
                            <Link href="https://www.figma.com/community/file/1067233911203456668" passHref={true} >
                                <a className={classes.view_prototype_button} target="_blank" rel="noopener noreferrer" >
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
                                <a className={classes.view_prototype_button} target="_blank" rel="noopener noreferrer" >
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
                        </p>
                    </div>
                    <div label="5" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            build
                        </h2>
                        <p className={classes.process_paragraphs}>
                            After stakeholders agreed to prototype designs, I developed the Joyfoodly website using Next.js.  
                            I added redirects from the domain names joyfoodly.com and joyful12.com to the Joyfoodly legacy website.  
                            I closed accounts for the web programs no longer needed for Joyfoodly.  
                            The emails were created using Mailchimp.
                        </p>
                    </div>
                    <div label="6" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            test
                        </h2>
                        <p className={classes.process_paragraphs}>
                            The Joyfoodly website was tested for cross-browser functionality and on multiple devices.  
                            By testing, we were able to observe slight differences between Android and iPhone browser versions of the legacy website.  
                            I was able to correct the website for compatibility with Android and iPhone browsers.
                        </p>
                    </div>
                </Tabs>

                <h2 className="header_02">
                    discoveries
                </h2>
                <div className='paragraphs' >
                    The project went very well.  
                    A key to the success of the project was writing a contract to set a timeline and expectations for deliverables.  
                    Art in Tech Services was a great vehicle for the project.
                </div>
                <div className={classes.visit_button}>
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
                </div>
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