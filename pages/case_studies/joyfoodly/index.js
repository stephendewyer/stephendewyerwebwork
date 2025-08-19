import Head from 'next/head';
import React, { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './joyfoodly.module.css';
import InfoCards from "../../../components/infoCards/InfoCards";
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import JoyfoodlySlideCarousel from "../../../components/slide_carousel/JoyfoodlySlideCarousel";
import familyCooking from '../../../public/images/case_studies/Joyfoodly/process/family_cooking.jpg';
import JoyfoodlyDesktopPrototype from '../../../public/images/case_studies/Joyfoodly/Joyfoodly_desktop_prototype.jpg';
import JoyfoodlyMobilePrototype from '../../../public/images/case_studies/Joyfoodly/Joyfoodly_mobile_desktop.jpg';
import Tabs from "../../../components/tabPanel/Tabs";
import Link from 'next/link';
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import artinTechServicesThumbnail from "../../../public/images/thumbnails/Art_in_Tech_Services_website_screenshot.jpg";
import infiniteMileThumbnail from "../../../public/images/thumbnails/Infinite_Mile_Screengrab.jpg";
import JoyfoodlyBanner from '../../../public/images/case_studies/Joyfoodly/background/Joyfoodly_background.jpg';

const Joyfoodly = () => {

    const imagePlusCaptionDesktopPrototype = {
        image: 
            <Image
                src={JoyfoodlyDesktopPrototype}
                layout="responsive" 
                alt="Art in Tech Services desktop prototype"
                priority
            />,
        caption: 
            <p>
                prototype for the Joyfoodly website for desktop device
            </p>
    }

    const imagePlusCaptionMobilePrototype = {
        image: 
            <Image
                src={JoyfoodlyMobilePrototype}
                layout="responsive" 
                alt="Art in Tech Services mobile prototype"
                priority
            />,
        caption: 
            <p>
                prototype for the Joyfoodly website for mobile device
            </p>
    }

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

    const tabPanels = [
        {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>empathize</div>
                    <div className={styles.tabHeadingMobile}>1</div>
                </Fragment>
            ,
            content: {
                heading: "empathize",
                images: [ 
                    <Image 
                        key={1}
                        src={familyCooking} 
                        layout="responsive" 
                        alt="family cooking a meal"
                        priority
                    />    
                ],
                paragraphs: <p>
                    Busy parents want to cook healthy meals for their children, but sometimes don&#8217;t know how to make healthy meals with plenty of fruits and vegetables.  
                    Joyfoodly was a culinary education company that helped busy parents learn to cook healthy meals with more fruits and vegetables.  
                    As Joyfoodly came to a close, the company wanted to close all existing web accounts, provide the Joyfoodly community with a free version of the Joyful12 cookbook via a new legacy website and notify the community about the business closing and creation of the new legacy website via email.
                </p>
                ,
                buttons: []
            },
        },
        {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>define</div>
                    <div className={styles.tabHeadingMobile}>2</div>
                </Fragment>
            ,
            content: {
                heading: "empathize",
                images: [ ],
                paragraphs: <p>
                    Goals: 
                    <br/><br />
                    1. Design, develop and deploy a legacy website where the Joyfoodly community can visit and download a free version of the Joyful12 cookbook;
                    <br/><br />
                    2. Design emails using Mailchimp to notify Joyfoodly subscribers about the company closing and the launch of the legacy website;
                    <br/><br />
                    3. Close previous web programs and redirect traffic to new legacy website from the joyfoodly.com and joyful12.com domain names.<br /><br/>
                </p>
                ,
                buttons: []
            }
        },
        {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>ideate</div>
                    <div className={styles.tabHeadingMobile}>3</div>
                </Fragment>
            ,
            content: {
                heading: "ideate",
                images: [ ],
                paragraphs: <p>
                    We agreed to create a simple, modern website using Next.js for the legacy website.  
                    I created quick sketches of possible desktop and mobile designs for the website.
                </p>
                ,
                buttons: []
            }
        },
        {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>prototype</div>
                    <div className={styles.tabHeadingMobile}>4</div>
                </Fragment>
            ,
            content: {
                heading: "prototype",
                images: [ <ImageHoverCaption key={1} imagePlusCaption={imagePlusCaptionMobilePrototype} />, <ImageHoverCaption key={1} imagePlusCaption={imagePlusCaptionDesktopPrototype} /> ],
                paragraphs: <p>
                    I created high-fidelity mobile and desktop prototypes for the Joyfoodly legacy website using Figma with the content provided by Joyfoodly.  
                    The emails to subscribers were designed using Mailchimp with content provided by Joyfoodly.  
                    Prototypes for the website and emails were shared with stakeholders for approval.
                </p>
                ,
                buttons: [
                    <Link key={1} href="https://www.figma.com/community/file/1067232787737440923" passHref={true} >
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
                    </Link>,
                    <Link key={2} href="https://www.figma.com/community/file/1067233911203456668" passHref={true} >
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
                ]
            }
        },
        {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>test</div>
                    <div className={styles.tabHeadingMobile}>6</div>
                </Fragment>
            ,
            content: {
                heading: "test",
                images: [ ],
                paragraphs: <p>
                    The Joyfoodly website was tested for cross-browser functionality and on multiple devices.  
                    By testing, we were able to observe slight differences between Android and iPhone browser versions of the legacy website.  
                    I was able to correct the website for compatibility with Android and iPhone browsers.
                </p>
                ,
                buttons: []
            }
        },
        {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>build</div>
                    <div className={styles.tabHeadingMobile}>5</div>
                </Fragment>
            ,
            content: {
                heading: "build",
                images: [ ],
                paragraphs: <p>
                    After stakeholders agreed to prototype designs, I developed the Joyfoodly website using Next.js.  
                    I added redirects from the domain names joyfoodly.com and joyful12.com to the Joyfoodly legacy website.  
                    I closed accounts for the web programs no longer needed for Joyfoodly.  
                    The emails were created using Mailchimp.
                </p>
                ,
                buttons: []
            }
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
            <Head>
                <title>Joyfoodly - Stephen Dewyer software development and UX design</title>
                <meta name="description" content="details of UX design and web development for Joyfoodly by Stephen Dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies/joyfoodly" />
            </Head>
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
                            <span className={styles.banner_heading}>The problem: </span>No website where users can go to download the Joyfoodly cookbook once the Joyfoodly business closes.  Old websites will become obsolete once business closes.
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
                <h3>
                    process
                </h3>
                <Tabs tabPanels={tabPanels} />
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

export default Joyfoodly;