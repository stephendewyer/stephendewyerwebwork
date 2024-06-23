import Head from 'next/head';
import { Fragment } from 'react';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import MyLink from '../../../public/util/myLink';
import styles from './publicArtsCommission.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageHoverCaption from "../../../components/imageHoverCaption/ImageHoverCaption";
import PublicArtsCommissionSlideCarousel from "../../../components/slide_carousel/PublicArtsCommissionSlideCarousel";
import InfoCards from "../../../components/infoCards/InfoCards";
import ArtAtDemonstration from '../../../public/images/case_studies/Public_Arts_Commission/process/art_at_demonstration.JPG';
import EndorsedByPublicArtsCommission from '../../../public/images/case_studies/Public_Arts_Commission/process/endorsement_image.jpg';
import PublicArtsCommissionLogo from '../../../public/images/case_studies/Public_Arts_Commission/process/public_arts_commission_logo.svg';
import Tabs from "../../../components/tabs/Tabs";
import Link from "next/link";
import ButtonNext from '../../../components/buttons/buttonNext/ButtonNext';
import ButtonPrevious from '../../../components/buttons/buttonPrevious/ButtonPrevious';
import ButtonExternalLink from '../../../components/buttons/buttonExternalLink/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import artinTechServicesThumbnail from "../../../public/images/thumbnails/Art_in_Tech_Services_website_screenshot.jpg";
import infiniteMileThumbnail from "../../../public/images/thumbnails/Infinite_Mile_Screengrab.jpg";
import PublicArtsCommissionSiteMap from '../../../public/images/case_studies/Public_Arts_Commission/Public_Arts_Commission_sitemap.jpg';
import PublicArtsCommissionBanner from '../../../public/images/case_studies/public_arts_commission_redesign/background/Public_Arts_Commission_background.jpg';

const PublicArtsCommission = () => {

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
                        Public Arts Commission is a grass-roots, 501(c)(4) non-profit organization that connects the art community to democratic movements.
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
                    <ul>
                        <li>
                            Designed brand identity and media
                        </li>
                        <li>
                            Leading the design, development and deployment for the organization&#39;s web platform that includes a campaign application management system, a voter networking and organizing portal, an endorsement management system and a searchable database of all the organization&#39;s endorsements 
                        </li>
                    </ul>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        tools I used:
                    </h4>
                    <ul>
                        <li>
                            Figma
                        </li>
                        <li>
                            SvelteKit
                        </li>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            Auth.js
                        </li>
                        <li>
                            MySQL2
                        </li>
                        <li>
                            TomTom
                        </li>
                        <li>
                            Twilio SendGrid
                        </li>
                        <li>
                            Stripe
                        </li>
                        <li>
                            Splide
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
                    <h4 className={styles.panelHeadingMobile}>
                        empathize
                    </h4>
                    <div className={styles.panelImageAndParagraphs}>
                        <div className={styles.panelImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionEmpathize} />  
                        </div>   
                        <p className={styles.panelParagraphsWithImage}>
                            The art community is very active in democratic campaigns and movements, but doesn&#39;t have a means by which to translate political activity into legislative and electoral results.  
                            As a result, many of the demands from the art community on leadership in government often are ignored.  
                            <br /><br />
                            Seeing a need to connect the art community with democratic campaigns and movements and a need to engage in electoral politics, I launched Public Arts Commission in 2017.  
                            Public Arts Commission will provide a platform for voters to network and organize to support democratic campaigns and movements that align with the public arts commission agenda to expand the political imaginary by making excellent public art available to everyone.  
                            <br /><br />
                            Creating a platform whereby candidates who share the values of Public Arts Commission can connect with an active network of voters on the Public Arts Commission platform will also reduce some of the barriers to running for office for candidates endorsed by Public Arts Commission.
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
                <div className={styles.panelContentParagraphsWithImage}>
                    <h4 className={styles.panelHeadingMobile}>
                        define
                    </h4>
                    <div className={styles.panelImageAndParagraphs}>
                        <div className={styles.panelImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionDefine} /> 
                        </div>   
                        <div className={styles.panelParagraphsWithImage}>
                            For Public Arts Commission to fulfill its mission, the organization&#39;s web platform needs to do a number of things including:
                            <ul>
                                <li>
                                    Provide a list of Public Arts Commission&#39;s priorities to the public
                                </li>
                                <li>
                                    Provide a searchable database of all candidates, legislation, referendums, amendments and actions endorsed by Public Arts Commission to the public
                                </li>
                                <li>
                                    Allow voters to create accounts that let them:
                                </li>
                                <ul>
                                    <li>
                                        Connect with other voters on the Public Arts Commission platform
                                    </li>
                                    <li>
                                        Send messages to other voters on the Public Arts Commission platform
                                    </li>
                                    <li>
                                        Submit candidates, legislation, referendums, amendments and actions for endorsement by Public Arts Commission
                                    </li>
                                    <li>
                                        View and manage elections in which the voter can vote
                                    </li>
                                    <li>
                                        View and manage actions in which the voter can participate
                                    </li>
                                    <li>
                                        Connect and organize with Public Arts Commission endorsed candidates, legislation, referendums, amendments and actions
                                    </li>
                                </ul>
                                <li>
                                    Allow campaigns to apply for an endorsement by Public Arts Commission
                                </li>
                                <li>
                                    Allow Public Arts Commission-endorsed campaigns with paid subscriptions to have access to the following:
                                </li>
                                <ul>
                                    <li>
                                        All voters who have Public Arts Commission accounts and are eligible to vote for the campaign in an election
                                    </li>
                                </ul>
                            </ul>
                        </div>
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
                    <h4 className={styles.panelHeadingMobile}>
                        ideate
                    </h4>
                    <div className={styles.panelImageAndParagraphs}>
                        <div className={styles.panelImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionIdeate} />
                        </div>   
                        <div className={styles.panelParagraphsWithImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionSiteMap} />
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
                    <h4 className={styles.panelHeadingMobile}>
                        prototype
                    </h4> 
                    <div className={styles.panelParagraphs}>
                        I used Figma to prototype the Public Arts Commission website redesign.  Public Arts Commission Board Directors helped with user testing of the prototypes.
                        
                        <Link href="https://www.figma.com/community/file/1257459517679894104/public-arts-commission-website" passHref={true} >
                            <a className={styles.view_prototype_button} target="_blank" rel="noopener noreferrer" >
                                <ButtonExternalLink passHref={true} aria-label="link to desktop prototype">
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
                    <h4 className={styles.panelHeadingMobile}>
                        build
                    </h4> 
                    <p>
                        For the development of the redesigned Public Arts Commission web programs, I am using a variety of technologies including SvelteKit, which is high performing and modern.
                    </p>
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
                    <h4 className={styles.panelHeadingMobile}>
                        test
                    </h4>  
                    <p>
                        Testing on the Public Arts Commission website and web application used Google Chrome Developer.   
                        User testing was conducted with individuals in my network.
                    </p>
                </div>
        },
    ];

    const outcomeCards = [
        {
            id: uuidv4(),
            content: 
                <Fragment>
                    <h4>
                        a searchable database of all the campaigns, legislation and amendments endorsed by Public Arts Commission
                    </h4>
                    <p>
                        All campaigns, legislation and amendments endorsed by Public Arts Commission are searchable by state on the Public Arts Commission website.  
                        Eventually, individuals will be able to search all campaigns, legislation and amendments using more specific data.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        access to the Public Arts Commission network of individuals for Public Arts Commission-endorsed campaigns with paid subscriptions (forthcoming)
                    </h4>
                    <p>
                        Public Arts Commission-endorsed campaigns with paid subscriptions will be able to access individuals in the Public Arts Commission network who comprise the electorates for their respective offices sought.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h4>
                        a platform for the art community to connect and organize (forthcoming)
                    </h4>
                    <p>
                        Public Arts Commission will create a web portal for individuals in the art community to connect and organize with Public Art Commission-endorsed campaigns, movements and events.
                    </p>
                </Fragment>
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
            <h1>
                Public Arts Commission web platform
            </h1>
            <h2>
                first launched in 2017 and redesigned in 2023
            </h2>
            <div className={styles.slider_case_study}>
                <PublicArtsCommissionSlideCarousel />
            </div>
            <h3>
                details
            </h3>
            <InfoCards infoCards={infoCards} />
            <div className='paragraphs_container' >
                <h3>
                    process
                </h3>
                <Tabs tabPanels={tabPanels} />
                <h3>
                    results
                </h3>
                <InfoCards outcomeCards={outcomeCards} />
                <div className={styles.caseStudyInfoSection}>
                    <h3>
                        challenges
                    </h3>
                    <p>
                        Revenue generation is a challenge facing the Public Arts Commission web platform.  
                        The subscription-based web platform for campaigns will likely help generate revenue.
                    </p>
                </div>
                <div className={styles.caseStudyInfoSection}>
                    <h3>
                        discoveries
                    </h3>
                    <p>
                        Forthcoming.
                    </p>
                </div>
                
            </div>
            <div className={styles.visit_button}>
                <Link href="https://public-arts-commission.vercel.app/" passHref={true} >
                    <a className={styles.visit_link} target="_blank" rel="noopener noreferrer">
                        <ButtonExternalLink passHref={true} aria-label="link to visit">
                            <div>
                                Public Arts Commission website
                            </div>
                            <div className={styles.external_link_icon} >
                                <Image src={externalLinkIcon} layout="responsive" alt="external link icon" />
                            </div>
                        </ButtonExternalLink>
                    </a>
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
        </Fragment>
    );
};

export default PublicArtsCommission;