'use client';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './joyfoodly.module.css';
import InfoCards from "../../../components/infoCards/InfoCards";
import JoyfoodlySlideCarousel from "../../../components/slide_carousel/JoyfoodlySlideCarousel";
import familyCooking from '../../../public/images/case_studies/Joyfoodly/process/family_cooking.jpg';
import JoyfoodlyPrototypes from "../../../public/images/case_studies/Joyfoodly/process/Joyfoodly_prototypes.jpg";
import Link from 'next/link';
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import artinTechServicesThumbnail from "../../../public/images/thumbnails/Art_in_Tech_Services_website_screenshot.jpg";
import infiniteMileThumbnail from "../../../public/images/thumbnails/Infinite_Mile_Screengrab.jpg";
import JoyfoodlyBanner from '../../../public/images/case_studies/Joyfoodly/background/Joyfoodly_background.jpg';
import JoyfoodlyCode from "../../../public/images/case_studies/Joyfoodly/process/Joyfoodly_code.jpg";

const JoyfoodlyComponent = () => {

    const infoCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        about the client
                    </h4>
                    <p>
                        Joyfoodly helps families learn to eat more fruits and vegetables, offering a downloadable cookbook called Joyful12.
                    </p>
                    <h4>
                        my role
                    </h4>
                    <p>
                        Founding Director of Art in Tech Services Inc
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        services I provided
                    </h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Designed, developed and deployed a responsive legacy website
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Designed custom emails
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Redirected users to the legacy website from existing domain names
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Closed previous web program accounts
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        tools I used
                    </h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Figma
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Next.js, React.js
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Adobe Creative Cloud
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
        },
        
    ];

    const outcomeCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        new website featuring Joyful12 cookbook
                    </h4>
                    <p>
                        The Joyfoodly community given free access to the Joyful12 cookbook.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        saved money by closing unnecessary accounts
                    </h4>
                    <p>
                        By using a free Vercel account and closing the WordPress account, I was able to save the client hundreds of dollars a year.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        informed Joyfoodly community
                    </h4>
                    <p>
                        The Joyfoodly community received custom emails about the business closing and access to the Joyful12 cookbook via a new website.
                    </p>
                </Fragment>
        },
        
    ];

    return (
        <Fragment>
            <div className={styles.banner_container}>
                <Image 
                    src={JoyfoodlyBanner} 
                    priority 
                    objectFit="cover"
                    layout="fill"
                    alt="busy parent cooking with child"
                />
                <div className={styles.banner_overlay} />
                <div className={styles.problem_and_solution_container}>
                    <div className={styles.problem_container}>
                        <p>
                            <span className={styles.banner_heading}>The problem: </span><span style={{fontWeight: "bold"}}>No website where users can go to download the Joyfoodly cookbook once the Joyfoodly business closes.  Old websites will become obsolete once business closes.</span>
                        </p>
                    </div>
                    <div className={styles.solution_container}>
                        <p className={styles.banner_heading}>
                            The solution:
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.solution}>
                <h1 style={{textAlign: "center", paddingLeft: "1rem", paddingRight: "1rem"}}>
                    Joyfoodly legacy website
                </h1>
                <h2 style={{textAlign: "center", paddingLeft: "1rem", paddingRight: "1rem"}}>
                    2022
                </h2>
                <div className={styles.slider_case_study}>
                    <JoyfoodlySlideCarousel />
                </div>
                <h3>
                    details
                </h3>
                <InfoCards infoCards={infoCards} />
                <div className={styles.process}>
                    <h3>
                        process
                    </h3>
                    <ol className={styles.process_steps}>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={familyCooking} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="busy family cooking" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        1. Empathizing with busy parents who want their kids to eat healthy meals
                                    </h4>
                                    <p>
                                        Busy parents want to cook healthy meals for their children, but sometimes don’t know how to make healthy meals with plenty of fruits and vegetables. Joyfoodly was a culinary education company that helped busy parents learn to cook healthy meals with more fruits and vegetables.   As Joyfoodly came to a close, the company wanted to close all existing web accounts, provide the Joyfoodly community with a free version of the Joyful12 cookbook via a new legacy website and notify the community about the business closing and creation of the new legacy website via email.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_C}>
                            <div className={styles.process_paragraphs_container} style={{width: "100%"}}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        2. Setting goals
                                    </h4>
                                    <p>
                                        I worked with Joyfoodly to set goals for accomplishing the project.  The goals included dates for deliverables and scope of the project.  The style of the website would be simple and modern.                                    
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={JoyfoodlyPrototypes} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Joyfoodly prototypes" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        3. Prototyping the designs
                                    </h4>
                                    <p>
                                        After creating some quick sketches of possible desktop and mobile designs, I used Figma to create prototypes for the Joyfoodly website.  Joyfoodly provided the content for the prototypes.                                    
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_B}>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        4. Creating and launching the website
                                    </h4>
                                    <p>
                                        After the client approved of the Joyfoodly prototypes, I built the Joyfoodly website using Next.js and deployed the website on Vercel.  After Joyfoodly approved of the website, emails were sent to the Joyfoodly community letting them know the cookbook is available for download via the new website.                                  
                                    </p>
                                </div>
                            </div>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={JoyfoodlyCode} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Joyfoodly code" 
                                />
                            </div>
                        </li>
                    </ol>
                </div>
                <h3>
                    results
                </h3>
                <InfoCards outcomeCards={outcomeCards} />
                <h3>
                    discoveries
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    The project went very well.  
                    A key to the success of the project was writing a contract to set a timeline and expectations for deliverables.  
                    Art in Tech Services was a great vehicle for the project.
                </p>
                <h3>
                    next steps
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    Create a client portal for clients to avoid missed emails and allow clients to manage their accounts from one location via the Art in Tech Services website..
                </p>
            </div>
            <div className={styles.visit_button}>
                <Link href="https://joyfoodly.vercel.app/" passHref={true} className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                    <ButtonExternalLink passHref={true} aria-label="link to visit">
                        <div>
                            Joyfoodly website
                        </div>
                        <div className={styles.external_link_icon} >
                            <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                        </div>
                    </ButtonExternalLink>
                </Link>
            </div>
            <div className={styles.case_studies_nav}>
                <MyLink href="/case_studies/artInTechServices" passHref={true} >
                    <ButtonPrevious passHref={true} aria-label="link to previous case study">
                        <div className={styles.caseStudyThumbnailOverlay} >
                            <h4 className={styles.caseStudyThumbnailHeading} >
                                Art in Tech Services web programs
                            </h4>
                        </div>
                        <Image 
                            src={artinTechServicesThumbnail} 
                            layout="responsive" 
                            alt="Art in Tech Services desktop screengrab thumbnail" 
                            priority
                        />
                    </ButtonPrevious>
                </MyLink>
                <MyLink href="/case_studies/infiniteMile" passHref={true} >
                    <ButtonNext passHref={true} aria-label="link to next case study" >
                        <div className={styles.caseStudyThumbnailOverlay} >
                            <h4 className={styles.caseStudyThumbnailHeading} >
                                Infinite Mile website
                            </h4>
                        </div>
                        <Image 
                            src={infiniteMileThumbnail} 
                            layout="responsive" 
                            alt="Infinite Mile desktop screengrab thumbnail" 
                            priority
                        />
                    </ButtonNext>
                </MyLink>
            </div>
        </Fragment> 
    );
};

export default JoyfoodlyComponent;