import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import styles from './artInTechServices.module.css';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import ArtinTechServicesSlideCarousel from "../../../components/slide_carousel/ArtinTechServicesSlideCarousel";
import InfoCards from "../../../components/infoCards/InfoCards";
import StarFormingRegionJamesWebb from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/process/main_image_star-forming_region_carina_nircam_final-5mb.jpg';
import ArtInTechServicesSiteMap from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Servicces_site_map.jpg';
import ArtinTechServicesLogo from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/process/Art_in_Tech_Services_logo_01.svg';
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import ButtonNext from '../../../components/button/ButtonNext';
import ButtonPrevious from '../../../components/button/ButtonPrevious';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import joyfoodlyScreengrab from '../../../public/images/case_studies/Joyfoodly/Joyfoodly_desktop.png';
import publicArtsCommissionScreengrab from '../../../public/images/case_studies/Public_Arts_Commission/Public_Arts_Commission_screengrab.png';

const ArtinTechServices = () => {

    const imagePlusCaptionEmpathize = {
        image: 
            <Image 
                src={StarFormingRegionJamesWebb} 
                layout="responsive" 
                alt="James Webb Space Telescope reveals emerging stellar nurseries and individual stars in the Carina Nebula that were previously obscured" 
                priority
            />,
        caption: 
            <div>
                an example of art in tech: NASA&#8217;s James Webb Space Telescope reveals emerging stellar nurseries and individual stars in the Carina Nebula that were previously obscured, 2022, Image credit: NASA, ESA, CSA and STScI
            </div>,                  
    }

    const imagePlusCaptionIdeate = {
        image: 
            <Image 
                src={ArtinTechServicesLogo} 
                layout="responsive" 
                alt="Art in Tech Services logo" 
                priority
            />,
        caption: 
            <div>
                Art in Tech Services logo
            </div>   
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
            <div>
                site map for the Art in Tech Services website
            </div>,
    }

    const infoCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        about the client
                    </h3>
                    <p>
                        Art in Tech Services Inc is a company that uses advancements in art and digital technology to improve design for businesses and the public.
                    </p>
                    <h3 className={styles.detail_heading}>
                        my role
                    </h3>
                    <p>
                        Founding Director of Art in Tech Services
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
                            Next.js, Node.js, React.js, Video.js
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            Stripe
                        </li>
                        <li>
                            Twilio SendGrid
                        </li>
                        <li>
                            Adobe Creative Cloud
                        </li>
                        <li>
                            Canon EOS 70D Digital SLR camera
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
                        <div 
                            className={styles.panelImage} 
                        >
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionEmpathize} />
                        </div>   
                        <p className={styles.panelParagraphsWithImage}>
                            In 2021, I launched Art in Tech Services to optimize human experiences of technology by using art in the design of digital programs.  
                            Art in Tech Services works with clients to create digital products that optimize human experiences of technology in design.
                            <br /><br />
                            As a practical matter, Art in Tech Services was using multiple channels of communication with clients, which became cumbersome to manage.  
                            The company had no way of processing financial transactions such as invoices via the company web application.  The company needed a web application to streamline collaboration with clients.
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
            label: 
                <Fragment>
                    <div className={styles.tabHeadingDesktop}>ideate</div>
                    <div className={styles.tabHeadingMobile}>3</div>
                </Fragment>
            ,
            content:
                <div className={styles.panelContentParagraphsWithImage}>
                    <h2 className={styles.panelHeadingMobile}>
                        ideate
                    </h2>
                    <div className={styles.panelImageAndParagraphs}>
                        <div className={styles.panelImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionIdeate} />
                            <p>
                                The Art in Tech Services logo I created uses the 8 bars that comprise the IBM logo and IBM Sans Plex font to reflect tech history.  An arrow function expression above Art in Tech Services also signifies the equality sign as greater than the following value.
                            </p>
                        </div>   
                        <div className={styles.panelParagraphsWithImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionSiteMap} />
                            <p>
                                I created several sketches of possible designs for the Art in Tech Services website and web application.  I sketched several graphics to use for content.  
                                I conducted research on similar software to help generate ideas.
                            </p>                            
                        </div>
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
                        I created medium-fidelity desktop and mobile prototypes for the Art in Tech Services web application using Figma.  
                        I created custom graphics and animations for the prototypes.  
                        The prototypes received user testing from individuals within my network 
                        <Link href="https://www.figma.com/community/file/1077736708672476518" passHref={true} >
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
                        The process of developing the web application allowed me to discover capabilities that could improve the design, like adding animated chevrons to the navigation to tell users which navigation tab is open. 
                        <br /><br />
                        As part of the development process, I created several very useful interfaces including:
                        <ul>
                            <li>
                                 <Link href="https://animatedtabpanels.vercel.app/" passHref={true} >
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
                                </Link>
                            </li>
                            <li>
                                <Link href="https://accordion-with-arrows.vercel.app/" passHref={true} >
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
                                </Link>
                            </li>
                            <li>
                                <Link href="https://dynamicfooter.vercel.app/" passHref={true} >
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
                        The redesigned Art in Tech Services website and web application received user testing from individuals in my network.  
                        I am currently working on sending a survey to prospective users asking what problems art in technology could help solve for them, what technology they needed to improve their work and how Art in Tech Services could better serve their needs. 
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
                        streamlined client collaboration
                    </h3>
                    <p>
                        The web portal on the Art in Tech Services website has become a hub for communication with clients, making collaboration more efficient and effective.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        helping clients manage their accounts
                    </h3>
                    <p>
                        The Art in Tech Services client collaboration software enables clients to manage their accounts by allowing clients to schedule consultations, start projects, send and receive documents (forthcoming) and manage billing.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        modern web programs
                    </h3>
                    <p>
                        The Art in Tech Services web programs mostly use Next.js to create a modern web experience that is fast, responsive, accessible and dynamic.
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
            <div className="container">
                <h1 className="header">
                    Art in Tech Services Inc web programs<br/>
                    <span style={{color: "#545451"}} >2021 &ndash; present</span>
                </h1>
                <div className={styles.slider_case_study}>
                    <ArtinTechServicesSlideCarousel />
                </div>

                <h2 className="header_02">
                        details
                </h2>
                <InfoCards infoCards={infoCards} />
                <div className='paragraphs_container' >
                    <h2 className="header_02">
                        process
                    </h2>       
                    <Tabs tabPanels={tabPanels} />
                    <h2 className="header_02">
                        results
                    </h2>
                    <InfoCards outcomeCards={outcomeCards} />
                    <div className={styles.caseStudyInfoSection}>
                        <h2 className="header_02">
                            discoveries
                        </h2>
                        <div className='paragraphs' >
                            Launching the Art in Tech Services web application was a huge accomplishment.  
                            The process of developing the application allowed me to design new interfaces.  
                            Creating the web application helped me to get a deeper understanding of modern web development.
                        </div>
                    </div>
                    <div className={styles.caseStudyInfoSection}>
                        <h2 className="header_02">
                            next steps
                        </h2>
                        <div className='paragraphs' >
                            As Art in Tech Services continues to evolve, I will talk with potential collaborators to see what their particular pain points are with technology and how Art in Tech Services can help solve their particular problems.
                        </div>
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
                                    <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                                </div>
                            </ButtonExternalLink>
                        </a>
                    </Link>
                </div>
                <div className={styles.case_studies_nav}>
                    <MyLink href="/case_studies/joyfoodly" passHref={true} >
                        <ButtonPrevious passHref={true} aria-label="link to previous case study">
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Joyfoodly website
                                </h4>
                            </div>
                            <Image src={joyfoodlyScreengrab} layout="responsive" alt="Infinite Mile desktop screengrab thumbnail" />
                        </ButtonPrevious>
                    </MyLink>
                    <MyLink href="/case_studies/publicArtsCommission" passHref={true} >
                        <ButtonNext passHref={true} aria-label="link to next case study" >
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Public Arts Commission web programs
                                </h4>
                            </div>
                            <Image src={publicArtsCommissionScreengrab} layout="responsive" alt="Art in Tech Services desktop screengrab thumbnail" />
                        </ButtonNext>
                    </MyLink>
                </div>
            </div>
        </Fragment>
        
    );
};

export default ArtinTechServices;