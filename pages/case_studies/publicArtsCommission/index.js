import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import styles from './publicArtsCommission.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PublicArtsCommissionSlideCarousel from "../../../components/slide_carousel/PublicArtsCommissionSlideCarousel";
import ArtAtDemonstration from '../../../public/images/case_studies/Public_Arts_Commission/process/art_at_demonstration.JPG';
import EndorsedByPublicArtsCommission from '../../../public/images/case_studies/Public_Arts_Commission/process/endorsement_image.jpg';
import PublicArtsCommissionLogo from '../../../public/images/case_studies/Public_Arts_Commission/process/public_arts_commission_logo.svg';
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

const PublicArtsCommission = () => {
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
                        <figure className={styles.panelImage}>
                            <Image src={ArtAtDemonstration} layout="responsive" alt="Art at a demonstration for equity"/>  
                            <figcaption className={styles.figCaption}>
                                Art at a demonstration for equity
                            </figcaption>   
                        </figure>   
                        <p className={styles.panelParagraphsWithImage}>
                            Public Arts Commission is a grass-roots, 501(c)(4) non-profit organization that connects the art community to democratic movements.  
                            The non-profit organization launched in 2017.  
                            The organization was contacting campaigns and handling campaign applications for endorsement mostly through email, which became cumbersome.  
                            The organization is planning to use a subscription service for campaigns to connect with individuals in the Public Arts Commission network.  
                            The organization is also planning to offer individuals free accounts to enable grass-roots organizing across the United States via a web application.
                        </p>
                    </div>
                </div>,
            },
        {
            id: uuidv4(),
            label: "2",
            content:
                <div className={styles.panelContentParagraphsWithImage}>
                    <h2 className={styles.panelHeading}>
                        define
                    </h2>
                    <div className={styles.panelImageAndParagraphs}>
                        <figure className={styles.panelImage}>
                            <Image src={EndorsedByPublicArtsCommission} layout="responsive" alt="Graphic by Katie for Ward 10 campaign in Minneapolis, Minnesota"/>  
                            <figcaption className={styles.figCaption}>
                                Graphic by Katie for Ward 10 campaign in Minneapolis, Minnesota
                            </figcaption>   
                        </figure>   
                        <p className={styles.panelParagraphsWithImage}>
                            Public Arts Commission needed a website to display endorsed campaigns by election cycle and by state.  
                            The website also needed to give important information about the organization.  
                            The organization needed a web application to allow campaigns with accounts to apply for an endorsement and receive status updates.  Eventually, the organization will need a web application for campaigns to connect with individuals in the Public Arts Commission network.  
                            Public Arts Commission will also need a web application for individuals to connect and organize for free.
                        </p>
                    </div>
                </div>,
        },
        {
            id: uuidv4(),
            label: "3",
            content:
                <div className={styles.panelContentParagraphsWithImage}>
                    <h2 className={styles.panelHeading}>
                        ideate
                    </h2>
                    <div className={styles.panelImageAndParagraphs}>
                        <figure className={styles.panelImage}>
                            <Image src={PublicArtsCommissionLogo} layout="responsive" alt="Public Arts Commission logo"/>  
                            <figcaption className={styles.figCaption}>
                                Public Arts Commission logo
                            </figcaption>   
                        </figure>   
                        <p className={styles.panelParagraphsWithImage}>
                            I generated drawings for the Public Arts Commission website and web application for campaigns to apply for endorsements.
                        </p>
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
                        I created low-fidelity desktop and mobile prototypes for the Public Arts Commission web application for individuals to connect and organize.  
                        I worked with the Public Arts Commission Board of Directors on the prototypes.  
                        The Board of Directors aided in user testing the prototypes.
                        
                        <Link href="https://www.figma.com/community/file/1021815144303041374" passHref={true} >
                            <a className={styles.view_prototype_button} target="_blank" rel="noopener noreferrer" >
                                <ButtonExternalLink passHref={true} aria-label="link to desktop prototype">
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
                        To build the web application for campaigns to apply for endorsement, I used PHP, MySQL, CSS, JavaScript and HTML.  
                        I built the Public Arts Commission website using HTML, CSS and JavaScript.  
                        The build for Public Arts Commission campaign web application and individual application will use Svelte as a framework.  
                        Eventually, all the Public Arts Commission web applications and website will build using Svelte.
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
                        Testing on the Public Arts Commission website and web application used Google Chrome Developer.   
                        User testing was conducted with individuals in my network.
                    </div>
                </div>,
        },
    ];
    return (
        <Fragment>
            <Head>
                <title>Public Arts Commission - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="details of UX design and web development for Public Arts Commission by stephen dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies/publicArtsCommission" />
            </Head>
            <div className="container">
                <h1 className="header">
                    client: Public Arts Commission<br/>
                    2017 &ndash; present
                </h1>
                <div className={styles.slider_case_study}>
                    <PublicArtsCommissionSlideCarousel />
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
                            Public Arts Commission is a grass-roots, 501(c)(4) non-profit organization that connects the art community to democratic movements.
                        </p>
                        <h3 className={styles.detail_heading}>
                            my role and company:
                        </h3>
                        <p>
                            Founder of Public Arts Commission
                        </p>
                    </div>
                    <div className={styles.detail}>
                        <h3 className={styles.detail_heading}>
                            services I provided:
                        </h3>
                        <p>
                            <ul>
                                <li>
                                    Designed brand identity including logo
                                </li>
                                <li>
                                    Designed, developed and deployed an enterprise website and web application
                                </li>
                                <li>
                                    Created custom graphics
                                </li>
                                <li>
                                    Created campaign management software
                                </li>
                                <li>
                                    Prototyping web applications for individuals to connect and organize and for campaigns to purchase subscriptions to connect with individuals in the Public Arts Commission network
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
                        challenges
                    </h2>
                    <div className='paragraphs' >
                        Revenue generation is a challenge facing the Public Arts Commission web programs.  
                        The subscription-based web application for campaigns will likely help generate revenue.
                    </div>
                    <h2 className="header_02">
                        discoveries
                    </h2>
                    <div className='paragraphs' >
                        Launching the Public Arts Commission website and web application was a huge accomplishment.  
                        However, they were done before I had learned about modern web development frameworks like Svelte and Next.js.  
                        Using Svelte in the future will help with creating a modern website and modern web applications for Public Arts Commission.  
                    </div>
                </div>
                <div className={styles.visit_button}>
                    <Link href="https://www.publicartscommission.org/" passHref={true} >
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
                    <Link href="/case_studies/artInTechServices" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to previous case study">
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/infiniteMile" passHref={true} >
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

export default PublicArtsCommission;