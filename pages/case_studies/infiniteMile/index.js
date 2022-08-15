import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import styles from './infiniteMile.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteMileSlideCarousel from "../../../components/slide_carousel/InfiniteMileSlideCarousel";
import BreakfastClubViewDetroit from '../../../public/images/case_studies/Infinite_Mile_LLC/process/citings_issue_28_May_2016_06.jpg';
import ArtAndRaceConference from '../../../public/images/case_studies/Infinite_Mile_LLC/process/Art_and_Race_Conference_2016.jpg';
import InfiniteMileLogo from '../../../public/images/case_studies/Infinite_Mile_LLC/process/Infinite_Mile_logo.svg';
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import Button from '../../../components/button/button';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';

const InfiniteMile = () => {
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
                            <Image src={BreakfastClubViewDetroit} layout="responsive" alt="View of Detroit as seen from the 22nd floor of the Fisher Building."/>  
                            <figcaption className={styles.figCaption}>
                                View of Detroit as seen from the 22nd floor of the Fisher Building.
                            </figcaption>   
                        </figure>   
                        <p className={styles.panelParagraphsWithImage}>
                            Despite having an active art community, no journals covered art and culture(s) in Detroit, Michigan from Detroit.  
                            As a result, the art community in Detroit did not have a platform from which it could voice issues affecting the community.
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
                            <Image src={ArtAndRaceConference} layout="responsive" alt="Infinite Mile + University of Michigan Stamps School of Art and Deign Art and Race Conference at MOCAD in May of 2016"/>  
                            <figcaption className={styles.figCaption}>
                                Infinite Mile + University of Michigan Stamps School of Art and Deign Art and Race Conference at MOCAD in May of 2016.  Photograph by Sarah Nesbitt.
                            </figcaption>   
                        </figure>   
                        <p className={styles.panelParagraphsWithImage}>
                            Detroit, Michigan needed a monthly, web-based journal of art and culture(s) to voice issues affecting the Detroit art community.  
                            The journal would have to bridge demographic groups in a very segregated region by class and race.
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
                            <Image src={InfiniteMileLogo} layout="responsive" alt="Infinite Mile logo"/>  
                            <figcaption className={styles.figCaption}>
                                Infinite Mile logo
                            </figcaption>   
                        </figure>   
                        <p className={styles.panelParagraphsWithImage}>
                            Rapid iterations of logo and name ideas were shared amongst stakeholders.  
                            The process was one of the best I&#39;ve seen, with stakeholders working together to find the best design solution instead of defending their own ideas.
                            <br />
                            <br />
                            Once the name and logo were decided, I began sketching ideas for the Infinite Mile website.  Stakeholders agreed to use a custom website because the website needed to have a different look than all the rest of the websites and have strong aesthetics because the journal was focusing on art and culture(s).
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
                        I created a password-protected website as a prototype to share with stakeholders, who shared feedback.
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
                        I built the Infinite Mile website using HTML, CSS, JavaScript, jQuery, MailChimp, VideoJS and WowSlider.  
                        Later, I added APIs for events using EventBrite and to handle sales of annual print anthologies and merchandise using PayPal.
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
                        User tests were conducted for the Infinite Mile website.  
                        Google Chrome Developer was used to test the code. 
                    </div>
                </div>,
        },
    ];
    return (
        <Fragment>
            <Head>
                <title>Infinite Mile - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="details of UX design and web development for Infinite Mile by stephen dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies/infiniteMile" />
            </Head>
            <div className="container">
                <h1 className="header">
                    client: Infinite Mile (∞ mile)<br />
                    2013 &ndash; 2017
                </h1>
                <div className={styles.slider_case_study}>
                    <InfiniteMileSlideCarousel />
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
                            Infinite Mile LLC was an award-winning journal of art and culture(s) in Detroit, Michigan that published monthly online issues and annual print anthologies.
                        </p>
                        <h3 className={styles.detail_heading}>
                            my role and company:
                        </h3>
                        <p>
                            Co-Founding Editor of Infinite Mile
                        </p>
                    </div>
                    <div className={styles.detail}>
                        <h3 className={styles.detail_heading}>
                            services I provided:
                        </h3>
                        <p>
                            <ul>
                                <li>
                                    Designed, developed and deployed an enterprise website
                                </li>
                                <li>
                                    Designed brand identity including logo
                                </li>
                                <li>
                                    Designed graphics
                                </li>
                                <li>
                                    Maintained and updated website to publish monthly issues
                                </li>
                                <li>
                                    Designed, developed and deployed a shop feature to allow users to purchase annual print anthologies and merchandise using a PayPal API
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
                        Infinite Mile was a huge success and some of the most rewarding work I have done in my life.  
                        Infinite Mile was an important lesson in how web programs can bring communities together.  
                        As a result, I decided to deeply learn web development and UX design.
                    </div>
                </div>
                <div className={styles.visit_button}>
                    <Link href="https://www.infinitemiledetroit.com/" passHref={true} >
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
                    <Link href="/case_studies/publicArtsCommission" passHref={true} >
                        <div>
                            <Button passHref={true} aria-label="link to previous case study">
                                previous
                            </Button>
                        </div>
                    </Link>
                    <Link href="/case_studies/joyfoodly" passHref={true} >
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

export default InfiniteMile;