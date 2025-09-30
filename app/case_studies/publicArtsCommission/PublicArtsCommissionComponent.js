'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './publicArtsCommission.module.css';
import InfoCards from "../../../components/infoCards/InfoCards";
import ArtAtDemonstration from '../../../public\images\case_studies\Public_Arts_Commission\process\art_at_demonstration.jpg';
import PublicArtsCommissionLogo from '../../../public/images/case_studies/Public_Arts_Commission/process/public_arts_commission_logo.svg';
import Link from "next/link";
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import artinTechServicesThumbnail from "../../../public/images/thumbnails/Art_in_Tech_Services_website_screenshot.jpg";
import infiniteMileThumbnail from "../../../public/images/thumbnails/Infinite_Mile_Screengrab.jpg";
import lightBulb from "../../../public/images/case_studies/Public_Arts_Commission/process/light_bulb.jpg";
import publicArtsCommissionCode from "../../../public/images/case_studies/Public_Arts_Commission/process/public_arts_commission_code.jpg";
import PublicArtsCommissionBanner from '../../../public/images/case_studies/public_arts_commission_redesign/background/Public_Arts_Commission_background.jpg';
import PublicArtsCommissionFigmaImage from "../../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_Figma.jpg";
import PublicArtsCommmissionSearchEndorsementsVideo from "../../../components/videos/PublicArtsCommissionSearchEndorsementsVideo";
import PublicArtsCommissionCreateEndorsementVideo from "../../../components/videos/PublicArtsCommissionCreateEndorsementVideo";
import PublicArtsCommissionApplyForEndorsementVideo from '../../../components/videos/PublicArtsCommissionApplyForEndorsementVideo';
import PublicArtsCommissionDonateVideo from '../../../components/videos/PublicArtsCommissionDonateVideo';
import PublicArtsCommissionIndexMobileMockup from "../../../public/images/case_studies/public_arts_commission_redesign/prototypes/Public_Arts_Commission_index_mobile.png";
import PublicArtsCommissionEndorsementsDesktopMockup from "../../../public/images/case_studies/public_arts_commission_redesign/prototypes/Public_Arts_Commission_endorsements_desktop.png";
import MichiganStateCapitolDoors from "../../../public/images/case_studies/Public_Arts_Commission/process/11_December_2012_take_Lansing,_Michigan.jpg";

const PublicArtsCommissionComponent = () => {

    const infoCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        about the client
                    </h4>
                    <p>
                        Public Arts Commission is a grass-roots, 501(c)(4) non-profit organization that is dedicated to reimagining the American Dream and helping make it happen for a stronger, more democratic society by giving the art community a platform in politics.
                    </p>
                    <h4>
                        my role
                    </h4>
                    <p>
                        Founder, Full-Stack Web Developer and UX Designer at Public Arts Commission
                    </p>
                    <h4>
                        team
                    </h4>
                    <p>
                        Public Arts Commission Board of Directors
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
                                    Designed brand identity and media
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Leading the design, development and deployment for the organization&#39;s web platform that includes a campaign application management system, a voter networking and organizing portal, an endorsement management system and a searchable database of all the organization&#39;s endorsements 
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
                                    Auth.js
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    MySQL2
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    TomTom
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Twilio SendGrid
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Stripe
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Splide
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
                    src={PublicArtsCommissionBanner} 
                    priority 
                    objectFit="cover"
                    layout="fill"
                    alt="Michigan State Capitol Building doors"
                />
                <div className={styles.banner_overlay} />
                <div className={styles.problem_and_solution_container}>
                    <div className={styles.problem_container}>
                        <p>
                            <span className={styles.banner_heading}>The problem: </span><span style={{fontWeight: "bold"}}>Art workers who often lead democratic movements are largely excluded from electoral politics.  As a result, art has become exclusive to the wealthy and government lacks political imagination.</span>
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
                    Public Arts Commission web platform
                </h1>
                <h2 style={{textAlign: "center", paddingLeft: "1rem", paddingRight: "1rem"}}>
                    2017 - present
                </h2>
                <div className={styles.mockups}>
                    <div className={styles.desktop_mockup}>
                        <Image 
                            src={PublicArtsCommissionEndorsementsDesktopMockup} 
                            priority 
                            layout="responsive" 
                            alt="Public Arts Commission endorsements desktop mockup" 
                        />
                    </div>
                    <div className={styles.mobile_mockup}>
                        <Image
                            src={PublicArtsCommissionIndexMobileMockup}
                            priority
                            layout="responsive"
                            alt="Public Arts Commission index mobile mockup"
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
                        <li className={styles.process_A}>
                            <div className={styles.process_image_container}>
                                <Image 
                                    src={ArtAtDemonstration} className={styles.process_image} 
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
                                    src={MichiganStateCapitolDoors} className={styles.process_image} 
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
                <div className={styles.results}>
                    <h3 className="header_02">
                        results
                    </h3>
                    <div className={styles.result_A}>
                        <div className={styles.result_video_container}>
                            <PublicArtsCommmissionSearchEndorsementsVideo />
                        </div>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                A searchable database of all the campaigns, legislation, referendums, actions and amendments endorsed by Public Arts Commission.
                            </h4>
                            <p>
                                Users can search all endorsements made by Public Arts Commission by geolocation, address, city, county, state, zipcode, name and/or year.  Users can also filter endorsements by federal, state, county or city.
                            </p>
                        </div>
                    </div>
                    <div className={styles.result_B}>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                Create endorsements to automatically appear on website using streamlined campaign data.
                            </h4>
                            <p>
                                Public Arts Commission administrators can create endorsements using a custom portal.  Eventually, legislation and referendum create endorsement forms will scrape sponsors and cosponsors of bills from the internet to auto-populate endorsements, saving a lot of time.
                            </p>
                        </div>
                        <div className={styles.result_video_container}>
                            <PublicArtsCommissionCreateEndorsementVideo />
                        </div>
                    </div>
                    <div className={styles.result_A}>
                        <div className={styles.result_video_container}>
                            <PublicArtsCommissionApplyForEndorsementVideo />
                        </div>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                Apply for an endorsement by Public Arts Commission using custom campaign applications management system.
                            </h4>
                            <p>
                                Campaigns can apply and manage applications for endorsement by Public Arts Commission on the campaign portal.  The data generated by campaigns helps streamline endorsements.
                            </p>
                        </div>
                    </div>
                    <div className={styles.result_B}>
                        <div className={styles.result_paragraphs}>
                            <h4 style={{textAlign: "left"}}>
                                Make a recurring or one-time donation to Public Arts Commission using a public form.
                            </h4>
                            <p>
                                Users donations to Public Arts Commission with the help of Stripe to manage payment methods and subscriptions.
                            </p>
                        </div>
                        <div className={styles.result_video_container}>
                            <PublicArtsCommissionDonateVideo />
                        </div>
                    </div>
                </div>
                <h3>
                    challenges
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    Revenue generation is a challenge facing the Public Arts Commission web platform.  
                    The subscription-based web platform for campaigns will likely help generate revenue.
                </p>
                <h3>
                    discoveries
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    The new web platform significantly reduced the time for Public Arts Commission to make an endorsement.
                    <br /><br />
                    The lists of co-sponsors and sponsors of legislation and amendments provide data that would provide good insights on how legislative members stand on potential future votes on issues.  Public Arts Commission could use the data to create a ranking of how legislative members align with the Public Arts Commission agenda.
                    <br /><br />
                    The status of legislation can become complicated to track as lawmakers use a variety of different tools to pass legislation.  Sometimes, pieces of bills are passed seperately or added to other bills.  Creating a good tracking system for the status of legislation is valuable and will require further development of a better tracking mechanism on the Public Arts Commission web platform.
                </p>
                <h3>
                    next steps
                </h3>
                <p className={styles.caseStudyInfoSection}>
                    Work on building the voter portal continues.  Once the voter portal is built, work will begin on building the campaign subscription platform.
                </p>
                <div className={styles.visit_button}>
                    <Link href="https://public-arts-commission.vercel.app/" passHref={true} className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                        <ButtonExternalLink passHref={true} aria-label="link to visit">
                            <div>
                                Public Arts Commission website
                            </div>
                            <div className={styles.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </Link>
                </div>
                <div className={styles.case_studies_nav}>
                    <MyLink href="/case_studies/infiniteMile" passHref={true} >
                        <ButtonPrevious passHref={true} aria-label="link to previous case study">
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Infinite Mile website 
                                </h4>
                            </div>
                            <Image 
                                src={infiniteMileThumbnail} 
                                layout="responsive" 
                                alt="Infinite Mile desktop screengrab thumbnail" priority 
                            />
                        </ButtonPrevious>
                    </MyLink>
                    <MyLink href="/case_studies/artInTechServices" passHref={true} >
                        <ButtonNext passHref={true} aria-label="link to next case study" >
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Art in Tech Services web programs
                                </h4>
                            </div>
                            <Image 
                                src={artinTechServicesThumbnail} 
                                layout="responsive" 
                                alt="Art in Tech Services desktop screengrab thumbnail" 
                                priority 
                            />
                        </ButtonNext>
                    </MyLink>
                </div>
            </div>
        </Fragment>
    );
};

export default PublicArtsCommissionComponent;