'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './infiniteMile.module.css';
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import InfiniteMileSlideCarousel from "../../../components/slide_carousel/InfiniteMileSlideCarousel";
import InfoCards from "../../../components/infoCards/InfoCards";
import BreakfastClubViewDetroit from '../../../public/images/case_studies/Infinite_Mile_LLC/process/citings_issue_28_May_2016_06.jpg';
import ArtAndRaceConference from '../../../public/images/case_studies/Infinite_Mile_LLC/team/Art_and_Race_Conference.jpg';
import InfiniteMileStaff from '../../../public/images/case_studies/Infinite_Mile_LLC/team/Infinite_Mile_staff.jpg';
import InfiniteMileLogo from '../../../public/images/case_studies/Infinite_Mile_LLC/process/Infinite_Mile_logo.svg';
import InfiniteMileSiteMap from '../../../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_site_map.jpg';
import Tabs from "../../../components/tabPanel/Tabs";
import Link from 'next/link';
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import joyfoodlyThumbnail from "../../../public/images/thumbnails/Joyfoodly_desktop.jpg";
import publicArtsCommissionThumbnail from "../../../public/images/thumbnails/public_arts_commission_website_desktop_01.jpg";
import InfiniteMileBanner from '../../../public/images/case_studies/Infinite_Mile_LLC/background/Infinite_Mile_background.jpg';

const InfiniteMileComponent = () => {

    const imagePlusCaptionEmpathize = {
        image: 
            <Image 
                src={BreakfastClubViewDetroit} 
                layout="responsive" 
                alt="View of Detroit as seen from the 22nd floor of the Fisher Building."
                priority
            />,
        caption: 
            <p>
                view of Detroit as seen from the 22nd floor of the Fisher Building
            </p>          
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

    const imagePlusCaptionIdeate = {
        image: 
            <Image 
                src={InfiniteMileLogo} 
                layout="responsive" 
                alt="Infinite Mile logo"
                priority
            />,
        caption: 
            <p>
                Infinite Mile logo
            </p>
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
            <p>
                site map for the Infinite Mile website
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

    // const tabPanels = [
    //     {
    //         id: uuidv4(),
    //         label: 
    //             <Fragment>
    //                 <div className={styles.tabHeadingDesktop}>empathize</div>
    //                 <div className={styles.tabHeadingMobile}>1</div>
    //             </Fragment>
    //         ,
    //         content: {
    //             heading: "empathize",
    //             images: [ <ImageHoverCaption key={1} imagePlusCaption={imagePlusCaptionEmpathize} />],
    //             paragraphs: <p>
    //                 Despite having an active art community, no journals covered art and culture(s) in Detroit, Michigan from Detroit.  
    //                 As a result, the art community in Detroit did not have a platform from which it could voice issues affecting the community.
    //             </p>
    //             ,
    //             buttons: []
    //         },
    //     },
    //     {
    //         id: uuidv4(),
    //         label: 
    //             <Fragment>
    //                 <div className={styles.tabHeadingDesktop}>define</div>
    //                 <div className={styles.tabHeadingMobile}>2</div>
    //             </Fragment>
    //         ,
    //         content: {
    //             heading: "define",
    //             images: [],
    //             paragraphs: 
    //                 <p>
    //                     Detroit, Michigan needed a monthly, web-based journal of art and culture(s) to voice issues affecting the Detroit art community.  
    //                     The journal would have to bridge demographic groups in a very segregated region by class and race.
    //                 </p>
    //             ,
    //             buttons: []
    //         }
    //     },
    //     {
    //         id: uuidv4(),
    //         label: 
    //             <Fragment>
    //                 <div className={styles.tabHeadingDesktop}>ideate</div>
    //                 <div className={styles.tabHeadingMobile}>3</div>
    //             </Fragment>
    //         ,
    //         content: {
    //             heading: "ideate",
    //             images: [ <ImageHoverCaption key={1} imagePlusCaption={imagePlusCaptionIdeate} />, <ImageHoverCaption key={2} imagePlusCaption={imagePlusCaptionSiteMap} /> ],
    //             paragraphs: 
    //                 <p>
    //                     Rapid iterations of logo and name ideas were shared amongst stakeholders.  
    //                     The process was one of the best I&#39;ve seen, with stakeholders working together to find the best design solution instead of defending their own ideas.  
    //                     Ultimately, we agreed to use a logo I created that rotates the 8 in 8 Mile, a symbol of racial and economic division, ninety degrees to make an infinity symbol, which is impossible to divide.
    //                     Contours of two chain links were used in the infinity symbol to reflect Detroit&#39;s industrial history.
    //                     <br/><br/>
    //                     Once the name, logo and style were decided, I began sketching ideas for the Infinite Mile website. 
    //                     Stakeholders agreed to use a custom website because the website needed to have a different look than all the rest of the websites and have strong aesthetics because the journal was focusing on art and culture(s).
    //                 </p>
    //             ,
    //             buttons: []
    //         }
    //     },
    //     {
    //         id: uuidv4(),
    //         label:
    //             <Fragment>
    //                 <div className={styles.tabHeadingDesktop}>prototype</div>
    //                 <div className={styles.tabHeadingMobile}>4</div>
    //             </Fragment>
    //         ,
    //         content: {
    //             heading: "prototype",
    //             images: [],
    //             paragraphs: 
    //                 <p>
    //                     I created a password-protected website as a prototype to share with stakeholders, who shared feedback.
    //                 </p>
    //             ,
    //             buttons: []
    //         }
    //     },
    //     {   
    //         id: uuidv4(),
    //         label: 
    //             <Fragment>
    //                 <div className={styles.tabHeadingDesktop}>test</div>
    //                 <div className={styles.tabHeadingMobile}>6</div>
    //             </Fragment>
    //         ,
    //         content: {
    //             heading: "test",
    //             images: [],
    //             paragraphs: 
    //                 <p>
    //                     User tests were conducted for the Infinite Mile website.  
    //                     Google Chrome Developer was used to test the code. 
    //                 </p>
    //             ,
    //             buttons: []
    //         }
    //     },
    //     {
    //         id: uuidv4(),
    //         label: 
    //             <Fragment>
    //                 <div className={styles.tabHeadingDesktop}>build</div>
    //                 <div className={styles.tabHeadingMobile}>5</div>
    //             </Fragment>
    //         ,
    //         content: {
    //             heading: "build",
    //             images: [],
    //             paragraphs: 
    //                 <p>
    //                     I built the Infinite Mile website using HTML, CSS, JavaScript, jQuery, MailChimp, VideoJS and WowSlider.  
    //                     Later, I added APIs for events using EventBrite and to handle sales of annual print anthologies and merchandise using PayPal.
    //                 </p>
    //             ,
    //             buttons: []
    //         }
    //     },
    // ];

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
                                    src={DemonstrationWithArt} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="art at a demonstration for equity" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        1. Why a platform for the art community in politics?
                                    </h4>
                                    <p>
                                        The art community has played a pivotal role in politics.  Poet Walt Witman helped abolish slavery by supporting the Union during the Civil War.  Photographer and journalist Jacob Riis helped inspire a wave of progressivism in the U.S. by publishing “How the Other Half Lives” in 1890.  Artists were primarily behind the Occupy Wall Street protests during the Great Recession that showed mass discontent with the levels of wealth disparity brought by oligarchy.  The art community helps imagine the possible in politics. Despite the historic role the art community has played in politics, the art community often has no seat at the table in government.  There exists no real means by which to translate the organizing the art community does in political movements into electoral politics.  As a result, the demands of the art community are often ignored in government while the demands of corporate lobbyists are heard loud and clear. 
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
                                        The problem is that no platform exists for the art community to translate political movements to electoral politics, especially concerning wholistic issues of governance.  As a result, the art community demands often get ignored in government.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={MichiganStateCapitolDoors} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="front doors at Michigan State Capitol" 
                                />
                            </div>
                        </li>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={PublicArtsCommissionLogo} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Public Arts Commission logo" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        3. Starting the organization
                                    </h4>
                                    <p>
                                        To give the art community a platform in politics, I endeavored to create a web platform that members of the art community can use to participate in translating political movements to electoral politics.  First, I had to address the issue of endorsing electoral items to make visible to the art community.  Second, I had to create portals for candidates and members of the art community to use to organize and apply for endorsement.  Third, I had to create a way to generate revenue.To accomplish these goals, I assembled a team of art experts as a Board of Directors.  The Board of Directors helps provide advice on issues relating to the operations of Public Arts Commission.  I created a non-profit 501(c)(4) organization to begin receiving donations.  I obtained the technical skills to build the Public Arts Commission web platform.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_B}>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        4. Prototyping the platform
                                    </h4>
                                    <p>
                                        I used Figma to build prototypes.  I had experience organizing campaigns, which I could use to inform the designs for the the campaign portal.  I developed prototypes for mobile and desktop devices.                                    
                                    </p>
                                </div>
                            </div>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={PublicArtsCommissionFigmaImage}
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Public Arts Commission Figma" 
                                />
                            </div>
                        </li>
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={lightBulb} 
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="light bulb" 
                                />
                            </div>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        5.  Conducting user interviews about the platform
                                    </h4>
                                    <p>
                                        I conducted multiple user interviews with members of the art community.   The interviews helped with getting feedback on the platform, which I could use to further develop the designs.  I’ve reached out to campaigns to get feedback on the campaign portal and received positive feedback.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.process_B}>
                            <div className={styles.process_paragraphs_container}>
                                <div className={styles.process_paragraphs}>
                                    <h4 className={styles.process_step_heading}>
                                        6. Building the platform
                                    </h4>
                                    <p>
                                        To build the Public Arts Commission web platform, I used state-of-the-art digital technology including SvelteKit, TypeScript, TomTom, MySQL and Stripe.                                    </p>
                                </div>
                            </div>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={publicArtsCommissionCode}
                                    className={styles.process_image} 
                                    layout="fill" 
                                    alt="Public Arts Commission code" 
                                />
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