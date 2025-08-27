'use client';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './publicArtsCommission.module.css';
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import InfoCards from "../../../components/infoCards/InfoCards";
import ArtAtDemonstration from '../../../public/images/case_studies/Public_Arts_Commission/process/art_at_demonstration.jpg';
import EndorsedByPublicArtsCommission from '../../../public/images/case_studies/Public_Arts_Commission/process/endorsement_image.jpg';
import PublicArtsCommissionLogo from '../../../public/images/case_studies/Public_Arts_Commission/process/public_arts_commission_logo.svg';
import Tabs from "../../../components/tabPanel/Tabs";
import Link from "next/link";
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import artinTechServicesThumbnail from "../../../public/images/thumbnails/Art_in_Tech_Services_website_screenshot.jpg";
import infiniteMileThumbnail from "../../../public/images/thumbnails/Infinite_Mile_Screengrab.jpg";
import PublicArtsCommissionSiteMap from '../../../public/images/case_studies/Public_Arts_Commission/Public_Arts_Commission_sitemap.jpg';
import PublicArtsCommissionBanner from '../../../public/images/case_studies/public_arts_commission_redesign/background/Public_Arts_Commission_background.jpg';
import PublicArtsCommissionFigmaImage from "../../../public/images/case_studies/public_arts_commission_redesign/public_arts_commission_Figma.jpg";
import PublicArtsCommmissionSearchEndorsementsVideo from "../../../components/videos/PublicArtsCommissionSearchEndorsementsVideo";
import PublicArtsCommissionCreateEndorsementVideo from "../../../components/videos/PublicArtsCommissionCreateEndorsementVideo";
import PublicArtsCommissionApplyForEndorsementVideo from '../../../components/videos/PublicArtsCommissionApplyForEndorsementVideo';
import PublicArtsCommissionDonateVideo from '../../../components/videos/PublicArtsCommissionDonateVideo';
import PublicArtsCommissionIndexMobileMockup from "../../../public/images/case_studies/public_arts_commission_redesign/prototypes/Public_Arts_Commission_index_mobile.png";
import PublicArtsCommissionEndorsementsDesktopMockup from "../../../public/images/case_studies/public_arts_commission_redesign/prototypes/Public_Arts_Commission_endorsements_desktop.png";

const PublicArtsCommissionComponent = () => {

    const imagePlusCaptionEmpathize = {
        image: 
            <Image 
                src={ArtAtDemonstration} 
                layout="responsive" 
                alt="Art at a demonstration for equity"
                priority
            />,
        caption: 
            <div>
                art at a demonstration for equity
            </div>,                  
    }

    const imagePlusCaptionDefine = {
        image: 
            <Image 
                src={EndorsedByPublicArtsCommission} 
                layout="responsive" 
                alt="Graphic by Katie for Ward 10 campaign in Minneapolis, Minnesota"
                priority
            />,
        caption: 
            <div>
                graphic by Katie for Ward 10 campaign in Minneapolis, Minnesota
            </div>,
    }

    const imagePlusCaptionIdeate = {
        image: 
            <Image 
                src={PublicArtsCommissionLogo} 
                layout="responsive" 
                alt="Public Arts Commission logo"
                priority
            />,
        caption: 
            <div>
                Public Arts Commission logo
            </div>,
    }

    const imagePlusCaptionSiteMap = {
        image: 
            <Image
                src={PublicArtsCommissionSiteMap}
                layout="responsive" 
                alt="Public Arts Commission site map"
                priority
            />,
        caption: 
            <div>
                site map for the forthcoming Public Arts Commission web programs redesign
            </div>,
    };

    const PublicArtsCommissionFigma = {
        image: 
            <Image
                src={PublicArtsCommissionFigmaImage}
                layout="responsive" 
                alt="Public Arts Commission Figma"
                priority
            />,
        caption: 
            <div>
                Figma view of Public Arts Commission
            </div>,
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
    //             images: [
    //                 <ImageHoverCaption imagePlusCaption={imagePlusCaptionEmpathize} key={1}/>
    //             ],
    //             paragraphs: <p>The art community is very active in democratic campaigns and movements, but doesn&#39;t have a means by which to translate political activity into legislative and electoral results.  
    //                 As a result, many of the demands from the art community on leadership in government often are ignored.  
    //                 <br /><br />
    //                 Seeing a need to connect the art community with democratic campaigns and movements and a need to engage in electoral politics, I launched Public Arts Commission in 2017.  
    //                 Public Arts Commission will provide a platform for voters to network and organize to support democratic campaigns and movements that align with the public arts commission agenda to expand the political imaginary by making excellent public art available to everyone.  
    //                 <br /><br />
    //                 Creating a platform whereby candidates who share the values of Public Arts Commission can connect with an active network of voters on the Public Arts Commission platform will also reduce some of the barriers to running for office for candidates endorsed by Public Arts Commission.</p>
    //             ,
    //             buttons: []
    //         }
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
    //             images: [
    //                     <ImageHoverCaption imagePlusCaption={imagePlusCaptionDefine} key={1}/>
    //                 ],
    //             paragraphs: 
    //                 <p>
    //                     For Public Arts Commission to fulfill its mission, the organization&#39;s web platform needs to do a number of things including:
    //                     <br /><br />1. Provide a list of Public Arts Commission&#39;s priorities to the public;
    //                     <br /><br />2. Provide a searchable database of all candidates, legislation, referendums, amendments and actions endorsed by Public Arts Commission to the public;
    //                     <br /><br />3. Allow voters to create accounts that let them: 
    //                     a. Connect with other voters on the Public Arts Commission platform; 
    //                     b. Send messages to other voters on the Public Arts Commission platform;
    //                     c. Submit candidates, legislation, referendums, amendments and actions for endorsement by Public Arts Commission;
    //                     d. View and manage elections in which the voter can vote;
    //                     e. View and manage actions in which the voter can participate;
    //                     f. Connect and organize with Public Arts Commission endorsed candidates, legislation, referendums, amendments and actions;
    //                     <br /><br />4. Allow campaigns to apply for an endorsement by Public Arts Commission;
    //                     <br /><br />5. Allow Public Arts Commission-endorsed campaigns with paid subscriptions to have access to the following:
    //                     a. All voters who have Public Arts Commission accounts and are eligible to vote for the campaign in an election.
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
    //             images: [
    //                 <ImageHoverCaption imagePlusCaption={imagePlusCaptionIdeate} key={1}/>,
    //                 <ImageHoverCaption imagePlusCaption={imagePlusCaptionSiteMap} key={2}/>
    //             ],
    //             paragraphs: null,
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
    //             images: [
    //                 <ImageHoverCaption imagePlusCaption={PublicArtsCommissionFigma} key={2}/>
    //             ],
    //             paragraphs: 
    //                 <p>
    //                     I used Figma to prototype the Public Arts Commission website redesign.  Public Arts Commission Board Directors helped with user testing of the prototypes.
    //                 </p>,
    //             buttons: [
    //                 <Link key="1" href="https://www.figma.com/community/file/1257459517679894104/public-arts-commission-website" passHref={true} className={styles.view_prototype_button} target="_blank" rel="noopener noreferrer">
    //                     <ButtonExternalLink passHref={true} aria-label="link to desktop prototype">
    //                         <div>
    //                             prototype
    //                         </div>
    //                         <div className={styles.external_link_icon} >
    //                             <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
    //                         </div>
    //                     </ButtonExternalLink>
    //                 </Link>
    //             ]
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
    //             <p>
    //                 Testing on the Public Arts Commission website and web application used Google Chrome Developer.   
    //                 User testing was conducted with individuals in my network.
    //             </p>,
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
    //                 heading: "build",
    //                 images: [],
    //                 paragraphs: 
    //                     <p>
    //                         For the development of the redesigned Public Arts Commission web programs, I am using a variety of technologies including SvelteKit, which is high performing and modern.
    //                     </p>,
    //                 buttons: []
    //             }
    //     },
    // ];

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
                            <span className={styles.banner_heading}>The problem: </span>Art workers who often lead democratic movements are largely excluded from electoral politics.  As a result, art has become exclusive to the wealthy and government lacks political imagination.
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
                    first launched in 2017 and redesigned in 2023
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
                {/* <h3>
                    process
                </h3>
                <Tabs tabPanels={tabPanels} /> */}
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