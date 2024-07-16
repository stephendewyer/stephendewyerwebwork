import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import styles from './artInTechServices.module.css';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import ArtinTechServicesSlideCarousel from "../../../components/slide_carousel/ArtinTechServicesSlideCarousel";
import InfoCards from "../../../components/infoCards/InfoCards";
import ArtInTechServicesPrototype from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Services_prototype.png';
import ArtInTechServicesSiteMap from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Servicces_site_map.jpg';
import ArtinTechServicesLogo from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/process/Art_in_Tech_Services_logo_01.svg';
import Tabs from "../../../components/tabPanel/Tabs";
import Link from 'next/link';
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import joyfoodlyThumbnail from "../../../public/images/thumbnails/Joyfoodly_desktop.jpg";
import publicArtsCommissionThumbnail from "../../../public/images/thumbnails/public_arts_commission_website_desktop_01.jpg";
import ArtInTechServicesBanner from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/background/Art_in_Tech_Services_background.jpg';

const ArtinTechServices = () => {

    const imagePlusCaptionIdeate = {
        image: 
            <Image 
                src={ArtinTechServicesLogo} 
                layout="responsive" 
                alt="Art in Tech Services logo" 
                priority
            />,
        caption: 
            <p>
                Art in Tech Services logo
            </p>   
    }

    const imagePlusCaptionSiteMap = {
        image: 
            <Image
                src={ArtInTechServicesSiteMap}
                layout="responsive" 
                alt="Art in Tech Services site map"
                priority
            />,
        caption: 
            <p>
                site map for the Art in Tech Services website
            </p>
    }

    const imagePlusCaptionPrototype = {
        image: 
            <Image
                src={ArtInTechServicesPrototype}
                layout="responsive" 
                alt="Art in Tech Services prototype"
                priority
            />,
        caption: 
            <p>
                prototype for the Art in Tech Services website
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
                images: [ ],
                paragraphs: <p>Art often envisions technological discoveries before they happen.  At the same time, I noticed advancements in digital technology have largely become very alienating and fail to solve major problems facing humanity like climate change and economic inequality. In fact, some uses of digital technology exacerbated the issues.
                To solve the issue of very alienating digital technology that worsens the human condition, I launched Art in Tech Services as a way to bring art and technology together to envision digital products that improve the human condition.    
                <br /><br />
                As a practical matter, Art in Tech Services was using multiple channels of communication with clients, which became cumbersome to manage.  
                The company had no way of processing financial transactions such as invoices via the company web application.  The company needed a web application to streamline collaboration with clients.</p>
                ,
                buttons: []
            },
        }, {
            id: uuidv4(),
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>define</div>
                    <div className={styles.tabHeadingMobile}>2</div>
                </Fragment>
            ,
            content: {
                heading: "define",
                images: [ ],
                paragraphs: <p>
                    Goals: 
                    <br/><br/>1. Redesign the Art in Tech Services website and create a custom web application using modern web development technologies;
                    <br/><br/>2. Create client collaboration software as part of the redesign that would allow users with accounts to: 
                    a. Schedule consultations;
                    b. Start projects;
                    c. Receive project updates;
                    d. Receive, sign and send signed contracts;
                    e. Receive invoices and make payments;
                    <br /><br/>
                    3. Create public-facing forms to allow users without accounts to schedule consultations, start projects and contact Art in Tech Services via the web application;
                    4. Feature custom videos, graphics and animations as part of the web redesign.
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
                images: [ <ImageHoverCaption imagePlusCaption={imagePlusCaptionIdeate} key={1}/>, <ImageHoverCaption imagePlusCaption={imagePlusCaptionSiteMap} key={2}/>],
                paragraphs: <p>
                    The Art in Tech Services logo I created uses the 8 bars that comprise the IBM logo and IBM Sans Plex font to reflect tech history.  An arrow function expression above Art in Tech Services also signifies the equality sign as greater than the following value. I created several sketches of possible designs for the Art in Tech Services website and web application.  I sketched several graphics to use for content.  
                    I conducted research on similar software to help generate ideas.
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
                images: [ <ImageHoverCaption imagePlusCaption={imagePlusCaptionPrototype} key={1}/>],
                paragraphs: <p>
                    I created medium-fidelity desktop and mobile prototypes for the Art in Tech Services web application using Figma.  
                    I created custom graphics and animations for the prototypes.  
                    The prototypes received user testing from art and organizing experts.
                </p>
                ,
                buttons: [
                    <Link key={1} href="https://www.figma.com/community/file/1077736708672476518" passHref={true} >
                        <a className={styles.view_prototype_button} target="_blank" rel="noopener noreferrer" >
                            <ButtonExternalLink passHref={true} aria-label="link to view prototype">
                                <div>
                                    prototype
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
                images: [],
                paragraphs: <p>
                    The redesigned Art in Tech Services website and web application received user testing from individuals in my network.  
                    I am currently working on sending a survey to prospective users asking what problems art in technology could help solve for them, what technology they needed to improve their work and how Art in Tech Services could better serve their needs. 
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
                images: [],
                paragraphs: <p>
                    The process of developing the web application allowed me to discover capabilities that could improve the design, like adding animated chevrons to the navigation to tell users which navigation tab is open. <br /><br />
                    User feedback on forms that appeared once a form is submitted, when an input loses focus and on every key stroke. 
                    As part of the development process, I created several very useful interfaces including:
                </p>
                ,
                buttons: [
                    <Link href="https://animatedtabpanels.vercel.app/" passHref={true} key={1}>
                        <a className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                            <ButtonExternalLink passHref={true} aria-label="link to animated tab panels">
                                <div>
                                    animated tab panels
                                </div>
                                <div className={styles.external_link_icon} >
                                    <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                </div>
                            </ButtonExternalLink>
                        </a>
                    </Link>,
                    <Link href="https://accordion-with-arrows.vercel.app/" passHref={true} key={2}>
                        <a className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                            <ButtonExternalLink passHref={true} aria-label="link to accordion with arrows">
                                <div>
                                    accordion with arrows
                                </div>
                                <div className={styles.external_link_icon} >
                                    <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                </div>
                            </ButtonExternalLink>
                        </a>
                    </Link>,
                    <Link href="https://dynamicfooter.vercel.app/" passHref={true} key={3}>
                        <a className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                            <ButtonExternalLink passHref={true} aria-label="link to footer example website">
                                <div>
                                    dynamic footer
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
    ];

    const outcomeCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        streamlined client collaboration
                    </h4>
                    <p>
                        The web portal on the Art in Tech Services website has become a hub for communication with clients, making collaboration more efficient and effective.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        helping clients manage their accounts
                    </h4>
                    <p>
                        The Art in Tech Services client collaboration software enables clients to manage their accounts by allowing clients to schedule consultations, start projects, send and receive documents (forthcoming) and manage billing.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        modern web programs
                    </h4>
                    <p>
                        The Art in Tech Services web programs mostly use SvelteKit to create a modern web experience that is fast, responsive, accessible and dynamic.
                    </p>
                </Fragment>
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
                            <span className={styles.banner_heading}>The problem: </span>Technology that is not designed for human desire.
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
                <h1>
                    Art in Tech Services Inc web platform
                </h1>
                <h2>
                    2021 &ndash; present
                </h2>
                <div className={styles.slider_case_study}>
                    <ArtinTechServicesSlideCarousel />
                </div>

                <h3>
                        details
                </h3>
                <InfoCards infoCards={infoCards} />
                <h3>
                    process
                </h3>       
                <Tabs tabPanels={tabPanels} />
                <h3 className="header_02">
                    results
                </h3>
                <InfoCards outcomeCards={outcomeCards} />
                <div className={styles.caseStudyInfoSection}>
                    <h3 className="header_02">
                        discoveries
                    </h3>
                    <p>
                        Launching the Art in Tech Services web application was a huge accomplishment.  
                        The process of developing the application allowed me to design new interfaces.  
                        Creating the web application helped me to get a deeper understanding of modern web development.
                    </p>
                </div>
                <div className={styles.caseStudyInfoSection}>
                    <h3 className="header_02">
                        next steps
                    </h3>
                    <p>
                        As Art in Tech Services continues to evolve, I will talk with potential collaborators to see what their particular pain points are with technology and how Art in Tech Services can help solve their particular problems.
                    </p>
                </div>
            </div>
            <div className={styles.visit_button}>
                <Link href="https://www.artintechservices.com/" passHref={true} >
                    <a className={styles.visit_link} target="_blank" rel="noopener noreferrer">
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
                    </a>
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

export default ArtinTechServices;