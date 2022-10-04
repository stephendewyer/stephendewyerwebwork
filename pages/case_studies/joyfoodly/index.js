import Head from 'next/head';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './joyfoodly.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfoCards from "../../../components/infoCards/InfoCards";
import JoyfoodlySlideCarousel from "../../../components/slide_carousel/JoyfoodlySlideCarousel";
import familyCooking from '../../../public/images/case_studies/Joyfoodly/process/family_cooking.jpg';
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import ButtonNext from '../../../components/button/ButtonNext';
import ButtonPrevious from '../../../components/button/ButtonPrevious';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import artinTechServicesScreengrab from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Services_screengrab.png';
import infiniteMileScreengrab from '../../../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_Screengrab.png';

const Joyfoodly = () => {

    const infoCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        about the client
                    </h3>
                    <p>
                        Joyfoodly helps families learn to eat more fruits and vegetables, offering a downloadable cookbook called Joyful12.
                    </p>
                    <h3 className={styles.detail_heading}>
                        my role
                    </h3>
                    <p>
                        Founding Director of Art in Tech Services Inc
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        services I provided
                    </h3>
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
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        tools I used
                    </h3>
                    <ul>
                        <li>
                            Figma
                        </li>
                        <li>
                            Next.js, React.js
                        </li>
                        <li>
                            Adobe Creative Cloud
                        </li>
                    </ul>
                </Fragment>
        },
        
    ];

    const tabPanels = [
        {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>empathize</div>
                    <div className={styles.tabHeadingMobile}>1</div>
                </Fragment>
            ,
            content:
                <div className={styles.panelContentParagraphsWithImage}>
                    <h2 className={styles.panelHeadingMobile}>
                        empathize
                    </h2>
                    <div className={styles.panelImageAndParagraphs}>
                        <div className={styles.panelImage}>
                            <Image 
                                src={familyCooking} 
                                layout="responsive" 
                                alt="family cooking a meal"
                                priority
                            />     
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
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>define</div>
                    <div className={styles.tabHeadingMobile}>2</div>
                </Fragment>
            ,
            content:
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeadingMobile}>
                        define
                    </h2>
                    <div className={styles.panelParagraphs}>
                        Goals:
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
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>ideate</div>
                    <div className={styles.tabHeadingMobile}>3</div>
                </Fragment>
            ,
            content:
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeadingMobile}>
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
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>prototype</div>
                    <div className={styles.tabHeadingMobile}>4</div>
                </Fragment>
            ,
            content: 
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeadingMobile}>
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
                                        desktop prototype
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
                                        mobile prototype
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
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>build</div>
                    <div className={styles.tabHeadingMobile}>5</div>
                </Fragment>
            ,
            content: 
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeadingMobile}>
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
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>test</div>
                    <div className={styles.tabHeadingMobile}>6</div>
                </Fragment>
            ,
            content:
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeadingMobile}>
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

    const outcomeCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        new website featuring Joyful12 cookbook
                    </h3>
                    <p>
                        The Joyfoodly community given free access to the Joyful12 cookbook.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        saved money by closing unnecessary accounts
                    </h3>
                    <p>
                        By using a free Vercel account and closing the WordPress account, I was able to save the client hundreds of dollars a year.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        informed Joyfoodly community
                    </h3>
                    <p>
                        The Joyfoodly community received custom emails about the business closing and access to the Joyful12 cookbook via a new website.
                    </p>
                </Fragment>
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
                    Joyfoodly legacy website<br />
                    <span style={{color: "#545451"}} >2022</span>
                </h1>
                <div className={styles.slider_case_study}>
                    <JoyfoodlySlideCarousel />
                </div>
                <h2 className="header_02">
                    details
                </h2>
                <InfoCards infoCards={infoCards} />
                <h2 className="header_02">
                    process
                </h2>
                <Tabs tabPanels={tabPanels} />
                <h2 className="header_02">
                    results
                </h2>
                <InfoCards outcomeCards={outcomeCards} />
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
                                    Joyfoodly website
                                </div>
                                <div className={styles.external_link_icon} >
                                    <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                </div>
                            </ButtonExternalLink>
                        </a>
                    </Link>
                </div>
                <div className={styles.case_studies_nav}>
                    <MyLink href="/case_studies/infiniteMile" passHref={true} >
                        <ButtonPrevious passHref={true} aria-label="link to previous case study">
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Infinite Mile website
                                </h4>
                            </div>
                            <Image src={infiniteMileScreengrab} layout="responsive" alt="Infinite Mile desktop screengrab thumbnail" />
                        </ButtonPrevious>
                    </MyLink>
                    <MyLink href="/case_studies/artInTechServices" passHref={true} >
                        <ButtonNext passHref={true} aria-label="link to next case study" >
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Art in Tech Services web programs
                                </h4>
                            </div>
                            <Image src={artinTechServicesScreengrab} layout="responsive" alt="Art in Tech Services desktop screengrab thumbnail" />
                        </ButtonNext>
                    </MyLink>
                </div>
            </div>
        </Fragment> 
    );
};

export default Joyfoodly;