import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './infiniteMile.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import InfiniteMileSlideCarousel from "../../../components/slide_carousel/InfiniteMileSlideCarousel";
import InfoCards from "../../../components/infoCards/InfoCards";
import BreakfastClubViewDetroit from '../../../public/images/case_studies/Infinite_Mile_LLC/process/citings_issue_28_May_2016_06.jpg';
import ArtAndRaceConference from '../../../public/images/case_studies/Infinite_Mile_LLC/team/Art_and_Race_Conference.jpg';
import InfiniteMileStaff from '../../../public/images/case_studies/Infinite_Mile_LLC/team/Infinite_Mile_staff.jpg';
import InfiniteMileLogo from '../../../public/images/case_studies/Infinite_Mile_LLC/process/Infinite_Mile_logo.svg';
import InfiniteMileSiteMap from '../../../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_site_map.jpg';
import Tabs from "../../../components/tabs/Tabs";
import Link from 'next/link';
import ButtonNext from '../../../components/button/ButtonNext';
import ButtonPrevious from '../../../components/button/ButtonPrevious';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import joyfoodlyScreengrab from '../../../public/images/case_studies/Joyfoodly/Joyfoodly_desktop.png';
import publicArtsCommissionScreengrab from '../../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_website_desktop_01.jpg';

const InfiniteMile = () => {

    const imagePlusCaptionEmpathize = {
        image: 
            <Image 
                src={BreakfastClubViewDetroit} 
                layout="responsive" 
                alt="View of Detroit as seen from the 22nd floor of the Fisher Building."
                priority
            />,
        caption: 
            <div>
                view of Detroit as seen from the 22nd floor of the Fisher Building
            </div>,                  
    }

    const imagePlusCaptionArtAndRaceConference = {
        image: 
            <Image 
                src={ArtAndRaceConference} 
                layout="responsive" 
                alt="Infinite Mile + University of Michigan Stamps School of Art and Design Art and Race Conference at MOCAD in May of 2016.  Photograph by Sarah Nesbitt."
                priority
            />,
        caption: 
            <div>
                Infinite Mile + University of Michigan Stamps School of Art and Design Art and Race Conference at MOCAD in May of 2016.  Photograph by Sarah Nesbitt.
            </div>,
    }

    const imagePlusCaptionInfiniteMileStaff = {
        image: 
            <Image 
                src={InfiniteMileStaff} 
                layout="responsive" 
                alt="Infinite Mile Co-Founding Editor Jennifer Junkermeier, Infinite Mile Co-Founding Editor stephen dewyer and Infinite Mile Associate Editor Ryan Harte.  Photograph (c) 2017 Jeff Cancelosi"
                priority
            />,
        caption: 
            <div>
                Infinite Mile Co-Founding Editor Jennifer Junkermeier, Infinite Mile Associate Editor Ryan Harte and Infinite Mile Co-Founding Editor stephen dewyer.  Photograph (c) 2017 Jeff Cancelosi.
            </div>,
    }

    const imagePlusCaptionIdeate = {
        image: 
            <Image 
                src={InfiniteMileLogo} 
                layout="responsive" 
                alt="Infinite Mile logo"
                priority
            />,
        caption: 
            <div>
                Infinite Mile logo
            </div>,
    }

    const imagePlusCaptionSiteMap = {
        image: 
            <Image
                src={InfiniteMileSiteMap}
                layout="responsive" 
                alt="Infinite Mile site map"
                priority
            />,
        caption: 
            <div>
                site map for the Infinite Mile website
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
                        Infinite Mile LLC was an award-winning journal of art and culture(s) in Detroit, Michigan that published monthly online issues and annual print anthologies.
                    </p>
                    <h3 className={styles.detail_heading}>
                        my role
                    </h3>
                    <p>
                        Web Developer and UX Designer / Co-Founding Editor at Infinite Mile
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
                            Adobe Suite
                        </li>
                        <li>
                            Google Drive
                        </li>
                        <li>
                            HTML, CSS, JavaScript, jQuery, VideoJS
                        </li>
                        <li>
                            WowSlider
                        </li>
                        <li>
                            PayPal
                        </li>
                        <li>
                            Eventbrite
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
                        <div className={styles.panelImage}>
                          <ImageHoverCaption imagePlusCaption={imagePlusCaptionEmpathize} />  
                        </div>   
                        <p className={styles.panelParagraphsWithImage}>
                            Despite having an active art community, no journals covered art and culture(s) in Detroit, Michigan from Detroit.  
                            As a result, the art community in Detroit did not have a platform from which it could voice issues affecting the community.
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
                    <p className={styles.panelParagraphs}>
                        Detroit, Michigan needed a monthly, web-based journal of art and culture(s) to voice issues affecting the Detroit art community.  
                        The journal would have to bridge demographic groups in a very segregated region by class and race.
                    </p>
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
                                Rapid iterations of logo and name ideas were shared amongst stakeholders.  
                                The process was one of the best I&#39;ve seen, with stakeholders working together to find the best design solution instead of defending their own ideas.  
                                Ultimately, we agreed to use a logo I created that rotates the 8 in 8 Mile, a symbol of racial and economic division, ninety degrees to make an infinity symbol, which is impossible to divide.
                                Contours of two chain links were used in the infinity symbol to reflect Detroit&#39;s industrial history.
                            </p>
                        </div>
                        <div className={styles.panelParagraphsWithImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionSiteMap} />
                            <p>
                                Once the name, logo and style were decided, I began sketching ideas for the Infinite Mile website.  Stakeholders agreed to use a custom website because the website needed to have a different look than all the rest of the websites and have strong aesthetics because the journal was focusing on art and culture(s).
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
                    <p className={styles.panelParagraphs}>
                        I created a password-protected website as a prototype to share with stakeholders, who shared feedback.
                    </p>
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
                        I built the Infinite Mile website using HTML, CSS, JavaScript, jQuery, MailChimp, VideoJS and WowSlider.  
                        Later, I added APIs for events using EventBrite and to handle sales of annual print anthologies and merchandise using PayPal.
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
                        User tests were conducted for the Infinite Mile website.  
                        Google Chrome Developer was used to test the code. 
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
                        brought community together in one of the most segregated cities in the United States 
                    </h3>
                    <p>
                        Infinite Mile brought community together from many different walks of life to voice issues affecting the art community in Detroit, Michigan.  Infinite Mile effectively showed the diversity and nuance of the population in Detroit.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        empowered representative media coverage of art and culture(s) in Detroit
                    </h3>
                    <p>
                        Infinite Mile gave a platform for the art community in Detroit to publish articles and artist projects about the city, which frequently differed from the narratives published by national and international media companies outside Detroit.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        won a number of grants
                    </h3>
                    <p>
                        Infinite Mile won a number of grants and awards including:
                    </p>
                    <ul>
                        <li>
                            2014 &#8211; 2016, Knights Arts Challenge Detroit $20,000 matching grant
                        </li>
                        <li>
                            2014, Awesome Foundation Detroit Chapter $1,000 grant
                        </li>
                    </ul>
                </Fragment>
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
                    Infinite Mile LLC (∞ mile) website<br />
                    <span style={{color: "#545451"}} >2013 &ndash; 2017</span>
                </h1>
                <div className={styles.slider_case_study}>
                    <InfiniteMileSlideCarousel />
                </div>
                <h2 className="header_02">
                    details
                </h2>
                <InfoCards infoCards={infoCards} />
                <h2 className="header_02">
                    team
                </h2>
                <div className={styles.team}>
                    <div className={styles.teamImageA}>
                        <ImageHoverCaption imagePlusCaption={imagePlusCaptionArtAndRaceConference} /> 
                    </div>
                    <div className={styles.teamImageB}>
                        <ImageHoverCaption imagePlusCaption={imagePlusCaptionInfiniteMileStaff} /> 
                    </div>
                </div>
                <div className='paragraphs_container' >
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
                                    Infinite Mile website
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
                            <Image src={joyfoodlyScreengrab} layout="responsive" alt="Art in Tech Services desktop screengrab thumbnail" />
                        </ButtonPrevious>
                    </MyLink>
                    <MyLink href="/case_studies/publicArtsCommission" passHref={true} >
                        <ButtonNext passHref={true} aria-label="link to next case study" >
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Public Arts Commission web platform
                                </h4>
                            </div>
                            <Image src={publicArtsCommissionScreengrab} layout="responsive" alt="Public Arts Commission desktop screengrab thumbnail" />
                        </ButtonNext>
                    </MyLink>
                </div>
            </div>
        </Fragment>
        
    );
};

export default InfiniteMile;