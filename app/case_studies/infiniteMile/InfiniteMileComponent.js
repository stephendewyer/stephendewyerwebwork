'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './infiniteMile.module.css';
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import InfiniteMileSlideCarousel from "../../../components/slide_carousel/InfiniteMileSlideCarousel";
import InfoCards from "../../../components/infoCards/InfoCards";
import ArtAndRaceConference from '../../../public/images/case_studies/Infinite_Mile_LLC/team/Art_and_Race_Conference.jpg';
import InfiniteMileStaff from '../../../public/images/case_studies/Infinite_Mile_LLC/team/Infinite_Mile_staff.jpg';
import Link from 'next/link';
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import joyfoodlyThumbnail from "../../../public/images/thumbnails/Joyfoodly_desktop.jpg";
import publicArtsCommissionThumbnail from "../../../public/images/thumbnails/public_arts_commission_website_desktop_01.jpg";
import InfiniteMileBanner from '../../../public/images/case_studies/Infinite_Mile_LLC/background/Infinite_Mile_background.jpg';
import DetroitArtCommunity from "../../../public/images/case_studies/Infinite_Mile_LLC/process/citings_07_June_13.jpg";
import InfiniteMileLogo from "../../../public/images/case_studies/Infinite_Mile_LLC/process/infinite_mile_logo.jpg";
import InfiniteMileWebsiteScreenshot from "../../../public/images/case_studies/Infinite_Mile_LLC/process/infinite_mile_website.jpg";
import MichiganCentralStation from "../../../public/images/case_studies/Infinite_Mile_LLC/process/Michigan_Central_Station_3_October_2012.jpg";

const InfiniteMileComponent = () => {

    const imagePlusCaptionArtAndRaceConference = {
        image: 
            <Image 
                src={ArtAndRaceConference} 
                layout="responsive" 
                alt="Infinite Mile + University of Michigan Stamps School of Art and Design Art and Race Conference at MOCAD in May of 2016.  Photograph by Sarah Nesbitt."
                priority
            />,
        caption: 
            <p>
                Infinite Mile + University of Michigan Stamps School of Art and Design Art and Race Conference at MOCAD in May of 2016.  Photograph by Sarah Nesbitt.
            </p>
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
            <p>
                Infinite Mile Co-Founding Editor Jennifer Junkermeier, Infinite Mile Associate Editor Ryan Harte and Infinite Mile Co-Founding Editor stephen dewyer.  Photograph (c) 2017 Jeff Cancelosi.
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
                        Infinite Mile LLC was an award-winning journal of art and culture(s) in Detroit, Michigan that published monthly online issues and annual print anthologies.
                    </p>
                    <h4>
                        my role
                    </h4>
                    <p>
                        Web Developer and UX Designer / Co-Founding Editor at Infinite Mile
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
                                    Designed, developed and deployed an enterprise website
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Designed brand identity including logo
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Designed graphics
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Maintained and updated website to publish monthly issues
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Designed, developed and deployed a shop feature to allow users to purchase annual print anthologies and merchandise using a PayPal API
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
                                    HTML, CSS, JavaScript, jQuery, VideoJS
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    WowSlider
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Eventbrite
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PayPal
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Canon EOS 70D Digital SLR camera
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Adobe Suite
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Google Drive
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Fragment>
        },
        
    ];

    const outcomeCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        brought community together in one of the most segregated cities in the United States 
                    </h4>
                    <p>
                        Infinite Mile brought community together from many different walks of life to voice issues affecting the art community in Detroit, Michigan.  Infinite Mile effectively showed the diversity and nuance of the population in Detroit.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        empowered representative media coverage of art and culture(s) in Detroit
                    </h4>
                    <p>
                        Infinite Mile gave a platform for the art community in Detroit to publish articles and artist projects about the city, which frequently differed from the narratives published by national and international media companies outside Detroit.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        won a number of grants
                    </h4>
                    <p>
                        Infinite Mile won a number of grants and awards including:
                    </p>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    2014 &#8211; 2016, Knights Arts Challenge Detroit $20,000 matching grant
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2014, Awesome Foundation Detroit Chapter $1,000 grant
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
                    src={InfiniteMileBanner} 
                    priority 
                    objectFit="cover"
                    layout="fill"
                    alt="view of Detroit, Michigan as seen from Fisher Building during sunrise"
                />
                <div className={styles.banner_overlay} />
                <div className={styles.problem_and_solution_container}>
                    <div className={styles.problem_container}>
                        <p>
                            <span className={styles.banner_heading}>The problem: </span><span style={{fontWeight: "bold"}}>No local art and cultural journal covering local art and culture in Detroit, Michigan, causing many local art events to go unnoticed despite an active and vibrant local art scene.</span>
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
                    Infinite Mile LLC (∞ mile) website
                </h1>
                <h2 style={{textAlign: "center", paddingLeft: "1rem", paddingRight: "1rem"}}>
                    2013 &ndash; 2017
                </h2>
                <div className={styles.slider_case_study}>
                    <InfiniteMileSlideCarousel />
                </div>
                <h3>
                    details
                </h3>
                <InfoCards infoCards={infoCards} />
                <h3>
                    team
                </h3>
                <div className={styles.team}>
                    <ImageHoverCaption imagePlusCaption={imagePlusCaptionArtAndRaceConference} /> 
                    <ImageHoverCaption imagePlusCaption={imagePlusCaptionInfiniteMileStaff} /> 
                </div>
                <div className={styles.process}>
                    <h3>
                        process
                    </h3>
                    <ol className={styles.process_steps}>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={DetroitArtCommunity} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Detroit art community talking at an exhibition" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        1. Talking with the art community in Detroit about starting a journal of art and culture(s) in the city
                                    </h4>
                                    <p>
                                        The idea to launch a journal of art and culture(s) in Detroit came from discussions I had with members of the art community in the city.  Detroit had a very active art community with many exhibitions happening with almost no public record connecting the exhibitions with the wider world.  A handful of international and national publications would cover occasional exhibitions in Detroit, but none had an ongoing presence in the city.                                     
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_B}>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        2. Defining the problem
                                    </h4>
                                    <p>
                                        As a result of not having a journal of art and culture(s) in Detroit, the art community in the city had very little influence in helping shape the narrative about the city as seen in national and international media.  This had large ramifications for telling the story of the city undergoing the largest municipal bankruptcy in U.S. history. 
                                    </p>
                                </div>
                            </div>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={MichiganCentralStation} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Michigan Central Station" 
                                />
                            </div>
                        </li>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={InfiniteMileLogo} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Infinite Mile logo" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        3.  Creating the brand identity
                                    </h4>
                                    <p>
                                        The name Infinite Mile instantly became the name of the journal.  The name rotates the 8 in 8 Mile Road, the main dividing line between the City of Detroit and the Metro Detroit suburbs, to form the infinity symbol, representing something that is impossible to divide.  To select a logo, the Infinite Mile team quickly created many logos from which to choose.  The team met on a number of occasions to narrow the selection of logos and to finally decide which logo to choose.  The logo that got a simple majority of votes by the Infinite Mile team would become the logo for Infinite Mile.  I created several website designs from which the Infinite Mile team could choose as the company’s website.  The designs reflected the logo’s traffic theme with chain-link fences and arrows with different configurations and patterns.                                     
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_B}>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        4.  Building the website
                                    </h4>
                                    <p>
                                        The Infinite Mile website had to represent a look distinct and attractive enough to get the art community to participate.  A WordPress website wouldn’t work, since we needed a website that had a distinct appearance.  To built the website, I used vanilla JavaScript, HTML and CSS with some forms from MailChimp.  As Infinite Mile grew, using custom code worked great since we needed flexibility to add code from contributors, which I could add using basic JavaScript, HTML and CSS.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={InfiniteMileWebsiteScreenshot}
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Infinite Mile website screenshot" 
                                />
                            </div>
                        </li>
                        <li className={styles.process_C}>
                            <div className={styles.process_paragraphs_container} style={{width: "100%"}}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        5.  Testing the website
                                    </h4>
                                    <p>
                                        The Infinite Mile website went through many tests and reviews.  The Infinite Mile team had to approve any new features to the website.  Contributors would review their articles on the website before they went public if we had enough time.                                    
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <h3>
                    results
                </h3>
                <InfoCards outcomeCards={outcomeCards} />
                <h3>
                    discoveries
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    Infinite Mile was a huge success and some of the most rewarding work I have done in my life.  
                    Infinite Mile was an important lesson in how web programs can bring communities together.  
                </p> 
                <h3>
                    next steps
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    I decided to dive deep into software development and UX design.
                </p>
            </div>
            <div className={styles.visit_button}>
                <Link href="https://www.infinitemiledetroit.com/" passHref={true} className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                    <ButtonExternalLink passHref={true} aria-label="link to visit">
                        <div>
                            Infinite Mile website
                        </div>
                        <div className={styles.external_link_icon} >
                            <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                        </div>
                    </ButtonExternalLink>
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
                        <Image 
                            src={joyfoodlyThumbnail} 
                            layout="responsive" 
                            alt="Art in Tech Services desktop screengrab thumbnail" 
                            priority
                        />
                    </ButtonPrevious>
                </MyLink>
                <MyLink href="/case_studies/publicArtsCommission" passHref={true} >
                    <ButtonNext passHref={true} aria-label="link to next case study" >
                        <div className={styles.caseStudyThumbnailOverlay} >
                            <h4 className={styles.caseStudyThumbnailHeading} >
                                Public Arts Commission web platform
                            </h4>
                        </div>
                        <Image 
                            src={publicArtsCommissionThumbnail} 
                            layout="responsive" 
                            alt="Public Arts Commission desktop screengrab thumbnail" 
                            priority
                        />
                    </ButtonNext>
                </MyLink>
            </div>
        </Fragment>
        
    );
};

export default InfiniteMileComponent;