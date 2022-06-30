import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import classes from './artInTechServices.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArtinTechServicesSlideCarousel from "../../../components/slide_carousel/ArtinTechServicesSlideCarousel";
import Tabs from "../../../components/tabs/Tabs";
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
                    Art in Tech Services Inc is a company that uses advancements in art and digital technology to improve design for businesses and the public.
                    <br/><br/>
                    <div className={classes.inline_bold}>my role:</div> Founding Director of Art in Tech Services
                    <br /><br />
                    <div className={classes.inline_bold}>services I provided:</div>
                        <ul>
                            <li>
                                Designed, developed and deployed an enterprise website and web application featuring client management software
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
                                Built the website and web application using Next.js, MongoDB, SendGrid and Stripe
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
                            Art in Tech Services is a company that uses advancements in art and digital technology to improve design for businesses and the public.  
                            The company was using multiple channels of communication with clients, which became cumbersome to manage.  
                            The company had no way of processing financial transactions such as invoices via the company web application.  
                        </p>
                    </div>
                    <div label="2" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            define
                        </h2>
                        <p className={classes.process_paragraphs}>
                            Art in Tech Services needed a redesign of the company&apos;s website and web application to feature client management software that would allow users with accounts to:
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
                                    receive, sign and send contracts
                                </li>
                                <li>
                                    receive invoices and make payments
                                </li>
                            </ul>
                            The website needed to use advanced web technologies including Next.js, SendGrid, Stripe and MongoDB to improve performance.
                        </p>     
                    </div>
                    <div label="3" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            ideate
                        </h2>
                        <p className={classes.process_paragraphs}>
                            I created several sketches of possible designs for the Art in Tech Services website and web application.  
                            I sketched several graphics to use for content.  
                            I conducted research on similar software to help generate ideas.
                        </p>
                    </div>
                    <div label="4" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            prototype
                        </h2>
                        <p className={classes.process_paragraphs}>
                            I created medium-fidelity desktop and mobile prototypes for the Art in Tech Services website and web application using Figma.  
                            I created custom graphics and animations for the prototypes.  
                            The prototypes received user testing from individuals within my network.  
                            <Link href="https://www.figma.com/community/file/1077736708672476518" passHref={true} >
                                <a className={classes.view_prototype_button} target="_blank" rel="noopener noreferrer" >
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
                        </p>
                    </div>
                    <div label="5" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            build
                        </h2>
                        <p className={classes.process_paragraphs}>
                            I developed the redesigned Art in Tech Services website and web application using Next.js, MongoDB, SendGrid and Stripe.  
                            The process of developing the website and web application allowed me to discover capabilities that could improve the design, like adding animated chevrons to the navigation to tell users which navigation tab is open.  
                            I created flash messages to give users feedback on forms.  
                            I also was able to add accessibility features in the development.  
                        </p>
                    </div>
                    <div label="6" className={classes.step}>
                        <h2 className={classes.process_heading}>
                            test
                        </h2>
                        <p className={classes.process_paragraphs}>
                            The redesigned Art in Tech Services website and web application received user testing from individuals in my network.  
                            I am currently working on sending a survey to prospective users asking what problems art in technology could help solve for them, what technology they needed to improve their work and how Art in Tech Services could better serve their needs. 
                        </p>
                    </div>
                </Tabs>
                <h2 className="header_02">
                    challenges
                </h2>
                <div className='paragraphs' >
                    The development of the redesigned Art in Tech Services website and web application required a thorough understanding of advanced web technologies such as Next.js and MongoDB.  
                    As part of the process, I needed to gain a thorough understanding of how to use Next.js, MongoDB, SendGrid and Stripe in the development of a relatively complex website and web application.
                </div>
                <h2 className="header_02">
                    discoveries
                </h2>
                <div className='paragraphs' >
                    Launching the redesigned Art in Tech Services website and web application was a huge accomplishment.  
                    However, users are relatively unclear on how Art in Tech Services would solve their particular problems.  
                    I will need to conduct research on pain points for users that Art in Tech Services is particularly adept at solving.
                </div>
                <div className={classes.visit_button}>
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
                </div>
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