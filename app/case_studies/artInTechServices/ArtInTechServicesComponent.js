'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import styles from './artInTechServices.module.css';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import InfoCards from "../../../components/infoCards/InfoCards";
import Link from 'next/link';
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import joyfoodlyThumbnail from "../../../public/images/thumbnails/Joyfoodly_desktop.jpg";
import publicArtsCommissionThumbnail from "../../../public/images/thumbnails/public_arts_commission_website_desktop_01.jpg";
import ArtInTechServicesBanner from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/background/Art_in_Tech_Services_background.jpg';
import ArtInTechServicesClientPortalMobileMockup from "../../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_client_portal_smartphone.png";
import ArtInTechServicesIndexLaptopMockup from "../../../public/images/case_studies/Art_in_Tech_Services_Inc/mockups/Art_in_Tech_Services_index_laptop.png";
import ArtInTechServicesClientPortalMessagingVideo from '../../../components/videos/ArtInTechServicesClientPortalMessagingVideo';
import ArtInTechServicesClientPortalOverviewVideo from '../../../components/videos/ArtInTechServicesClientPortalOverviewVideo';
import ArtInTechServicesClientPortalPayInvoiceVideo from '../../../components/videos/ArtInTechServicesClientPortalPayInvoiceVideo';
import ArtInTechServicesClientPortalStartProjectVideo from '../../../components/videos/ArtInTechServicesClientPortalStartProjectVideo';
import ArtInTechServicesPrototype from "../../../public/images/case_studies/Art_in_Tech_Services_Inc/process/prototype_Art_in_Tech_Services.jpg";
import ArtInTechServicesCode from "../../../public/images/case_studies/Art_in_Tech_Services_Inc/process/Art_in_Tech_Services_code.jpg";

const ArtinTechServicesComponent = () => {

    const infoCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        about the client
                    </h4>
                    <p>
                        Art in Tech Services Inc is a company that brings the vision and technical expertise to create groundbreaking digital products.
                    </p>
                    <h4>
                        my role
                    </h4>
                    <p>
                        Founding Director, Full-Stack Web Developer and UX Designer at Art in Tech Services
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
                                    Designed, developed and deployed an enterprise web application featuring client collaboration software
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Designed brand identity including logo
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Created custom graphics, animations and videos
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Conducting user research
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
                                    SvelteKit
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    TypeScript
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    MySQL2
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Stripe
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Twilio SendGrid
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Video.js
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Auth.js
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Adobe Creative Cloud
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Canon EOS 70D Digital SLR camera
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
        },
        
    ];

    return (
        <Fragment>
            <div className={styles.banner_container}>
                <Image 
                    src={ArtInTechServicesBanner} 
                    priority 
                    objectFit="cover"
                    layout="fill"
                    alt="scene of Hal from 2001: A Space Odyssey directed by Stanley Kubrick"
                />
                <div className={styles.banner_overlay} />
                <div className={styles.problem_and_solution_container}>
                    <div className={styles.problem_container}>
                        <p>
                            <span className={styles.banner_heading}>The problem: </span><span style={{fontWeight: "bold"}}>Technology that is not designed for human desire.</span>
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
                    Art in Tech Services Inc web platform
                </h1>
                <h2 style={{textAlign: "center", paddingLeft: "1rem", paddingRight: "1rem"}}>
                    2021 &ndash; present
                </h2>
                <div className={styles.mockups}>
                    <div className={styles.desktop_mockup}>
                        <Image 
                            src={ArtInTechServicesIndexLaptopMockup} 
                            priority 
                            layout="responsive" 
                            alt="Art in Tech Services index page laptop mockup" 
                        />
                    </div>
                    <div className={styles.mobile_mockup}>
                        <Image
                            src={ArtInTechServicesClientPortalMobileMockup}
                            priority
                            layout="responsive"
                            alt="Art in Tech Services client portal laptop mockup"
                        />
                    </div>
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
                        <li className={styles.process_C}>
                            <div className={styles.process_paragraphs_container} style={{width: "100%"}}>
                                <div className={styles.process_paragraphs}>    
                                    <h4 className={styles.process_step_heading}>
                                        1. Reviewing first project completion
                                    </h4>
                                    <p>
                                        After completing a project for a client in which I designed, developed and deployed a custom website, the main hurdles became keeping track of communications.  Emails would get lost in spam filters and processing payments became cumbersome.                                     
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_C}>
                            <div className={styles.process_paragraphs_container} style={{width: "100%"}}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        2. Defining the problem
                                    </h4>
                                    <p>
                                        Although the project exceeded client expectations, the process of using different platforms to manage the client’s project caused accidental miscommunications .  The problem was that Art in Tech Services had no streamlined system for handling client projects.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={ArtInTechServicesPrototype} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Art in Tech Services prototype" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        3. Iterating a better way to serve clients
                                    </h4>
                                    <p>
                                        To streamline collaborations with clients, I designed client and administrator portals to handle all aspects of managing a client’s project including messages, invoices, payments, project requests, project tracking and consultation scheduling. I used Figma to design the prototypes.                                    
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_C}>
                            <div className={styles.process_paragraphs_container} style={{width: "100%"}}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        4. Interviewing users on the prototypes
                                    </h4>
                                    <p>
                                        I interviewed several users to get their thoughts on the client collaboration portal to make any changes as necessary to improve the experience.                                    
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={ArtInTechServicesCode}
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Art in Tech Services code screengrab" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        5.  Building the client collaboration portal
                                    </h4>
                                    <p>
                                        To build the client collaboration portal, I used technologies like SvelteKit, TypeScript, Stripe, MySQL, SendGrid and Node.                                     
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className={styles.results}>
                    <h3 className="header_02">
                        results
                    </h3>
                    <div className={styles.result_A}>
                        <div className={styles.result_video_container}>
                            <ArtInTechServicesClientPortalOverviewVideo />
                        </div>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                Streamlined collaboration with clients using custom client and administrator web portals.
                            </h4>
                        </div>
                    </div>
                    <div className={styles.result_B}>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                Secure messaging via custom messaging system between clients and administrators.
                            </h4>
                        </div>
                        <div className={styles.result_video_container}>
                            <ArtInTechServicesClientPortalMessagingVideo />
                        </div>
                    </div>
                    <div className={styles.result_A}>
                        <div className={styles.result_video_container}>
                            <ArtInTechServicesClientPortalPayInvoiceVideo />
                        </div>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                Pay invoices using secure payment methods.
                            </h4>
                        </div>
                    </div>
                    <div className={styles.result_B}>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                Keep track of projects and consultations by custom project and consultation software.
                            </h4>
                        </div>
                        <div className={styles.result_video_container}>
                            <ArtInTechServicesClientPortalStartProjectVideo />
                        </div>
                    </div>
                </div>
                <h3 className="header_02">
                    discoveries
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    Launching the Art in Tech Services web application was a huge accomplishment.  
                    The process of developing the application allowed me to design new interfaces.  
                    Creating the web application helped me to get a deeper understanding of modern web development.
                </p>
                <h3 className="header_02">
                    next steps
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    As Art in Tech Services continues to evolve, I will talk with potential collaborators to see what their particular pain points are with technology and how Art in Tech Services can help solve their particular problems.
                </p>
            </div>
            <div className={styles.visit_button}>
                <Link href="https://www.artintechservices.com/" passHref={true} className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                        <ButtonExternalLink passHref={true} aria-label="link to visit">
                            <div>
                                Art in Tech Services website
                            </div>
                            <div className={styles.external_link_icon} >
                                <Image 
                                    src={externalLinkIcon} 
                                    layout="responsive" 
                                    alt="external link icon" 
                                    priority
                                />
                            </div>
                        </ButtonExternalLink>
                </Link>
            </div>
            <div className={styles.case_studies_nav}>
                <MyLink href="/case_studies/publicArtsCommission" passHref={true} >
                    <ButtonPrevious passHref={true} aria-label="link to previous case study">
                        <div className={styles.caseStudyThumbnailOverlay} >
                            <h4 className={styles.caseStudyThumbnailHeading} >
                                Public Arts Commission web platform
                            </h4>
                        </div>
                        <Image src={publicArtsCommissionThumbnail} layout="responsive" alt="Public Arts Commission desktop screengrab thumbnail" />
                    </ButtonPrevious>
                </MyLink>
                <MyLink href="/case_studies/joyfoodly" passHref={true} >
                    <ButtonNext passHref={true} aria-label="link to next case study" >
                        <div className={styles.caseStudyThumbnailOverlay} >
                            <h4 className={styles.caseStudyThumbnailHeading} >
                                
                                Joyfoodly website
                            </h4>
                        </div>
                        <Image 
                            src={joyfoodlyThumbnail} 
                            layout="responsive" 
                            alt="Joyfoodly desktop screengrab thumbnail" 
                            priority
                        />
                    </ButtonNext>
                </MyLink>
            </div>
        </Fragment>
    );
};

export default ArtinTechServicesComponent;