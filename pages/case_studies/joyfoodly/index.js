import Head from 'next/head';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import styles from './joyfoodly.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JoyfoodlySlideCarousel from "../../../components/slide_carousel/JoyfoodlySlideCarousel";
import familyCooking from '../../../public/images/case_studies/Joyfoodly/process/family_cooking.jpg';
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

const Joyfoodly = () => {
    const tabPanels = [
        {
            id: uuidv4(),
            label: "1",
            content:
                <div className={styles.panelContentParagraphsWithImage}>
                    <h2 className={styles.panelHeading}>
                        empathize
                    </h2>
                    <div className={styles.panelImageAndParagraphs}>
                        <div className={styles.panelImage}>
                            <Image src={familyCooking} layout="responsive" alt="family cooking a meal"/>     
                        </div>   
                        <p className={styles.panelParagraphsWithImage}>
                            Busy parents want to cook healthy meals for their children, but sometimes don&#8217;t know how to make healthy meals with plenty of fruits and vegetables.  
                            Joyfoodly was a culinary education company that helped busy parents learn to cook healthy meals with more fruits and vegetables.  
                            As Joyfoodly came to a close, the company wanted to close all existing web accounts, provide the Joyfoodly community with a free version of the Joyful12 cookbook via a new legacy website and notify the community about the business closing and creation of the new legacy website via email.
                        </p>
                    </div>
                </div>,
            },
        {
            id: uuidv4(),
            label: "2",
            content:
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeading}>
                        define
                    </h2>
                    <div className={styles.panelParagraphs}>
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
                    </div>
                </div>,
        },
        {
            id: uuidv4(),
            label: "3",
            content:
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeading}>
                        ideate
                    </h2> 
                    <div className={styles.panelParagraphs}>
                        We agreed to create a simple, modern website using Next.js for the legacy website.  
                        I created quick sketches of possible desktop and mobile designs for the website.
                    </div>
                </div>,
        },
        {
            id: uuidv4(),
            label: "4",
            content: 
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeading}>
                        prototype
                    </h2> 
                    <div className={styles.panelParagraphs}>
                        I created high-fidelity mobile and desktop prototypes for the Joyfoodly legacy website using Figma with the content provided by Joyfoodly.  
                        The emails to subscribers were designed using Mailchimp with content provided by Joyfoodly.  
                        Prototypes for the website and emails were shared with stakeholders for approval.
                        
                        <Link href="https://www.figma.com/community/file/1067233911203456668" passHref={true} >
                            <a className={styles.view_prototype_button} target="_blank" rel="noopener noreferrer" >
                                <ButtonExternalLink passHref={true} aria-label="link to desktop prototype">
                                    <div>
                                        view desktop prototype
                                    </div>
                                    <div className={styles.external_link_icon} >
                                        <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                    </div>
                                </ButtonExternalLink>
                            </a>
                        </Link>

                        <Link href="https://www.figma.com/community/file/1067232787737440923" passHref={true} >
                            <a className={styles.view_prototype_button} target="_blank" rel="noopener noreferrer" >
                                <ButtonExternalLink passHref={true} aria-label="link to mobile prototype">
                                    <div>
                                        view mobile prototype
                                    </div>
                                    <div className={styles.external_link_icon} >
                                        <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                    </div>
                                </ButtonExternalLink>
                            </a>
                        </Link>
                    </div>
                </div>,
        },
        {
            id: uuidv4(),
            label: "5",
            content: 
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeading}>
                        build
                    </h2> 
                    <div className={styles.panelParagraphs}>
                        After stakeholders agreed to prototype designs, I developed the Joyfoodly website using Next.js.  
                        I added redirects from the domain names joyfoodly.com and joyful12.com to the Joyfoodly legacy website.  
                        I closed accounts for the web programs no longer needed for Joyfoodly.  
                        The emails were created using Mailchimp.
                    </div>
                </div>,
        },
        {
            id: uuidv4(),
            label: "6",
            content:
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeading}>
                        test
                    </h2>  
                    <div className={styles.panelParagraphs}>
                        The Joyfoodly website was tested for cross-browser functionality and on multiple devices.  
                        By testing, we were able to observe slight differences between Android and iPhone browser versions of the legacy website.  
                        I was able to correct the website for compatibility with Android and iPhone browsers.
                    </div>
                </div>,
        },
    ];
    return (
        <Fragment>
            <Head>
                <title>Joyfoodly - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="details of UX design and web development for Joyfoodly by stephen dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies/joyfoodly" />
            </Head>
            <div className="container">
                <h1 className="header">
                    client: Joyfoodly<br />
                    2022
                </h1>
                <div className={styles.slider_case_study}>
                    <JoyfoodlySlideCarousel />
                </div>
                <h2 className="header_02">
                    details
                </h2>
                <div className={styles.case_study_details}>
                    <div className={styles.detail}>
                        <h3 className={styles.detail_heading}>
                            about the client:
                        </h3>
                        <p>
                            Joyfoodly helps families learn to eat more fruits and vegetables, offering a downloadable cookbook called Joyful12.
                        </p>
                        <h3 className={styles.detail_heading}>
                            my role and company:
                        </h3>
                        <p>
                            Founding Director of Art in Tech Services Inc
                        </p>
                    </div>
                    <div className={styles.detail}>
                        <h3 className={styles.detail_heading}>
                            services I provided:
                        </h3>
                        <p>
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
                        </p>
                    </div>
                </div>
                <h2 className="header_02">
                    process
                </h2>
                <Tabs tabPanels={tabPanels} />
                <h2 className="header_02">
                    discoveries
                </h2>
                <div className='paragraphs' >
                    The project went very well.  
                    A key to the success of the project was writing a contract to set a timeline and expectations for deliverables.  
                    Art in Tech Services was a great vehicle for the project.
                </div>
                <div className={styles.visit_button}>
                    <Link href="https://joyfoodly.vercel.app/" passHref={true} >
                        <a className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                            <ButtonExternalLink passHref={true} aria-label="link to visit">
                                <div>
                                    visit
                                </div>
                                <div className={styles.external_link_icon} >
                                    <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                </div>
                            </ButtonExternalLink>
                        </a>
                    </Link>
                </div>
                <div className={styles.case_studies_nav}>
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