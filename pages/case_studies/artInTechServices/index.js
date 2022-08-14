import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import styles from './artInTechServices.module.css';
import { v4 as uuidv4 } from 'uuid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtinTechServicesSlideCarousel from "../../../components/slide_carousel/ArtinTechServicesSlideCarousel";
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

const ArtinTechServices = () => {

    const tabPanels = [
        {
            id: uuidv4(),
            label: "1",
            content:
                <div className={styles.panelContent}>
                    <h2 className={styles.panelHeading}>
                        empathize
                    </h2>             
                    <p className={styles.panelParagraphs}>
                        Art in Tech Services was using multiple channels of communication with clients, which became cumbersome to manage.  
                        The company had no way of processing financial transactions such as invoices via the company web application.  
                        The company needed a web application to streamline collaboration with clients.
                    </p>
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
                                Redesign the Art in Tech Services website and create a custom web application using modern web development technologies including Next.js, SendGrid, Stripe and MongoDB
                            </li>
                            <li>
                                Create client collaboration software as part of the redesign that would allow users with accounts to:
                                <ul>
                                    <li>
                                        schedule consultations
                                    </li>
                                    <li>
                                        start projects
                                    </li>
                                    <li>
                                        receive project updates
                                    </li>
                                    <li>
                                        receive, sign and send signed contracts 
                                    </li>
                                    <li>
                                        receive invoices and make payments
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Create public-facing forms to allow users without accounts to schedule consultations, start projects and contact Art in Tech Services via the web application
                            </li>
                            <li>
                                Feature custom videos, graphics and animations as part of the web redesign
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
                        First, I designed the Art in Tech Services logo, running through multiple iterations before selecting one.  
                        As part of the logo design process, I consulted with graphic designers within my network.<br /><br />
                        I created several sketches of possible designs for the Art in Tech Services website and web application.  I sketched several graphics to use for content.  
                        I conducted research on similar software to help generate ideas.
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
                        I created medium-fidelity desktop and mobile prototypes for the Art in Tech Services web application using Figma.  
                        I created custom graphics and animations for the prototypes.  
                        The prototypes received user testing from individuals within my network 
                            <Link href="https://www.figma.com/community/file/1077736708672476518" passHref={true} >
                                <a className={styles.view_prototype_button} target="_blank" rel="noopener noreferrer" >
                                    <ButtonExternalLink passHref={true} aria-label="link to view prototype">
                                        <div>
                                            view prototype
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
                        I developed the redesigned Art in Tech Services web application using Next.js, MongoDB, SendGrid and Stripe.  
                        The process of developing the web application allowed me to discover capabilities that could improve the design, like adding animated chevrons to the navigation to tell users which navigation tab is open. 
                        <br /><br />
                        As part of the development process, I created several very interfaces including:
                        <ul>
                            <li>
                                Dynamic, responsive and accessible tab panels
                            </li>
                            <li>
                                A dynamic, responsive, accessible, variable height and smooth transitioning accordion with arrows<br />
                                <Link href="https://accordion-with-arrows.vercel.app/" passHref={true} >
                                    <a className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                                        <ButtonExternalLink passHref={true} aria-label="link to accordion with arrows">
                                            <div>
                                                view
                                            </div>
                                            <div className={styles.external_link_icon} >
                                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                            </div>
                                        </ButtonExternalLink>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                User feedback on forms that appeared once a form is submitted, when an input loses focus and on every key stroke
                            </li>
                        </ul>
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
                        The redesigned Art in Tech Services website and web application received user testing from individuals in my network.  
                        I am currently working on sending a survey to prospective users asking what problems art in technology could help solve for them, what technology they needed to improve their work and how Art in Tech Services could better serve their needs. 
                    </div>
                </div>,
        },
    ];

    return (
        <Fragment>
            <Head>
                <title>Art in Tech Services Inc - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="details of UX design and web development for Art in Tech Services Inc by stephen dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies/artInTechServices" />
            </Head>
            <div className="container">
                <h1 className="header">
                    client: Art in Tech Services Inc<br/>
                    2021 &ndash; present
                </h1>
                <div className={styles.slider_case_study}>
                    <ArtinTechServicesSlideCarousel />
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
                            Art in Tech Services Inc is a company that uses advancements in art and digital technology to improve design for businesses and the public.
                        </p>
                        <h3 className={styles.detail_heading}>
                            my role and company:
                        </h3>
                        <p>
                            Founding Director of Art in Tech Services
                        </p>
                    </div>
                    <div className={styles.detail}>
                        <h3 className={styles.detail_heading}>
                            services I provided:
                        </h3>
                        <p>
                            <ul>
                                <li>
                                    Designed, developed and deployed an enterprise web application featuring client collaboration software                            
                                </li>
                                <li>
                                    Designed brand identity including logo
                                </li>
                                <li>
                                    Created custom graphics, animations and videos
                                </li>
                                <li>
                                    Conducting user research
                                </li>
                                <li>
                                    Built the web application using Next.js, MongoDB, SendGrid and Stripe
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='paragraphs_container' >
                    <h2 className="header_02">
                        process
                    </h2>       
                    <Tabs tabPanels={tabPanels} />
                    <h2 className="header_02">
                        discoveries
                    </h2>
                    <div className='paragraphs' >
                        Launching the Art in Tech Services web application was a huge accomplishment.  
                        The process of developing the application allowed me to design new interfaces.  
                        Creating the web application helped me to get a deeper understanding of modern web development.
                    </div>
                    <h2 className="header_02">
                        next steps
                    </h2>
                    <div className='paragraphs' >
                        As Art in Tech Services continues to evolve, I will talk with potential collaborators to see what their particular pain points are with technology and how Art in Tech Services can help solve their particular problems.
                    </div>
                </div>
                <div className={styles.visit_button}>
                    <Link href="https://www.artintechservices.com/" passHref={true} >
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