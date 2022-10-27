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
import Link from 'next/link';
import ButtonNext from '../../../components/button/ButtonNext';
import ButtonPrevious from '../../../components/button/ButtonPrevious';
import ButtonExternalLink from '../../../components/button/ButtonExternalLink';
import externalLinkIcon from '../../../public/images/icons/external_link_icon.svg';
import artinTechServicesScreengrab from '../../../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Services_screengrab.png';
import infiniteMileScreengrab from '../../../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_Screengrab.png';
import PublicArtsCommissionSiteMap from '../../../public/images/case_studies/Public_Arts_Commission/Public_Arts_Commission_sitemap.jpg';

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
            <p>
                art at a demonstration for equity
            </p>,                  
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
            <p>
                graphic by Katie for Ward 10 campaign in Minneapolis, Minnesota
            </p>,
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
            <p>
                Public Arts Commission logo
            </p>,
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
            <p>
                site map for the forthcoming Public Arts Commission web programs redesign
            </p>,
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
                        Public Arts Commission is a grass-roots, 501(c)(4) non-profit organization that connects the art community to democratic movements.
                    </p>
                    <h3 className={styles.detail_heading}>
                        my role
                    </h3>
                    <p>
                        Founder of Public Arts Commission
                    </p>
                    <h3 className={styles.detail_heading}>
                        team
                    </h3>
                    <p>
                        Public Arts Commission Board of Directors
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
                            Designed brand identity including logo
                        </li>
                        <li>
                            Designed, developed and deployed an enterprise website and web application
                        </li>
                        <li>
                            Created custom graphics
                        </li>
                        <li>
                            Created campaign collaboration software
                        </li>
                        <li>
                            Prototyping web applications for individuals to connect and organize and for campaigns to purchase subscriptions to connect with individuals in the Public Arts Commission network
                        </li>
                    </ul>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        tools I used:
                    </h3>
                    <ul>
                        <li>
                            Figma
                        </li>
                        <li>
                            HTML, CSS, JavaScipt, jQuery, PHP, MySQL
                        </li>
                        <li>
                            WowSlider
                        </li>
                        <li>
                            Mailchimp
                        </li>
                        <li>
                            Adobe Creative Cloud
                        </li>
                        <li>
                            Svelte (forthcoming)
                        </li>
                        <li>
                            MongoDB (forthcoming)
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
                            The art community is very active in democratic campaigns and movements, but doesn’t have a means by which to translate political activity into legislative and electoral results.  
                            As a result, many of the demands from the art community on leadership in government often are ignored.  
                            <br /><br />
                            Seeing a need to connect the art community with democratic campaigns and movements, I launched Public Arts Commission in 2017.  
                            Public Arts Commission will provide a tool for connecting the art community with democratic campaigns and movements to render more effective the organizing capacity of the art community.  
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
                    <h2 className={styles.panelHeadingMobile}>
                        define
                    </h2>
                    <div className={styles.panelImageAndParagraphs}>
                        <div className={styles.panelImage}>
                            <ImageHoverCaption imagePlusCaption={imagePlusCaptionDefine} /> 
                        </div>   
                        <div className={styles.panelParagraphsWithImage}>
                            For Public Arts Commission to fulfill its mission, the organization’s web programs need to do a number of things including:
                            <ul>
                                <li>
                                    Provide a publicly accessible agenda of organizational goals
                                </li>
                                <li>
                                    Provide a searchable database of all campaigns and legislation endorsed by Public Arts Commission to the public
                                </li>
                                <li>
                                    Allow individuals in the art community to create accounts that let them:
                                </li>
                                <ul>
                                    <li>
                                        Connect with different individuals in the art community who also have Public Arts Commission accounts
                                    </li>
                                    <li>
                                        Send messages to individuals in their network on Public Arts Commission
                                    </li>
                                    <li>
                                        Propose campaigns and events for endorsement by Public Arts Commission
                                    </li>
                                    <li>
                                        See and support relevant campaigns and events endorsed by Public Arts Commission
                                    </li>
                                    <li>
                                        Receive alerts on relevant action items endorsed by Public Arts Commission like upcoming election dates and times
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
                                        All individuals who have Public Arts Commission accounts and are eligible to vote for the campaign in an election
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
                    <h2 className={styles.panelHeadingMobile}>
                        ideate
                    </h2>
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
                    <h2 className={styles.panelHeadingMobile}>
                        prototype
                    </h2> 
                    <div className={styles.panelParagraphs}>
                        I am currently working on prototyping the Public Arts Commission web programs.  
                        I am collaborating with the Public Arts Commission Board of Directors on the prototypes.  
                        Some early examples of prototypes are provided.
                        
                        <Link href="https://www.figma.com/community/file/1021815144303041374" passHref={true} >
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
                    <h2 className={styles.panelHeadingMobile}>
                        build
                    </h2> 
                    <div className={styles.panelParagraphs}>
                        For the first launch of some of the Public Arts Commission web programs, I used PHP, MySQL, CSS, JavaScript and HTML.  
                        For the development of the redesigned Public Arts Commission web programs, I am planning on using Svelte and MongoDB.
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
                        Testing on the Public Arts Commission website and web application used Google Chrome Developer.   
                        User testing was conducted with individuals in my network.
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
                        a searchable database of all the campaigns, legislation and amendments endorsed by Public Arts Commission
                    </h3>
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
                    <h3 className={styles.detail_heading}>
                        access to the Public Arts Commission network of individuals for Public Arts Commission-endorsed campaigns with paid subscriptions (forthcoming)
                    </h3>
                    <p>
                        Public Arts Commission-endorsed campaigns with paid subscriptions will be able to access individuals in the Public Arts Commission network who comprise the electorates for their respective offices sought.
                    </p>
                </Fragment>
        },
        {
            id: uuidv4(),
                content: 
                <Fragment>
                    <h3 className={styles.detail_heading}>
                        a platform for the art community to connect and organize (forthcoming)
                    </h3>
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
            <div className="container">
                <h1 className="header">
                    Public Arts Commission web programs<br/>
                    <span style={{color: "#545451"}} >2017 &ndash; present</span>
                </h1>
                <div className={styles.slider_case_study}>
                    <PublicArtsCommissionSlideCarousel />
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
                            challenges
                        </h2>
                        <div className='paragraphs' >
                            Revenue generation is a challenge facing the Public Arts Commission web programs.  
                            The subscription-based web application for campaigns will likely help generate revenue.
                        </div>
                    </div>
                    <div className={styles.caseStudyInfoSection}>
                        <h2 className="header_02">
                            discoveries
                        </h2>
                        <div className='paragraphs' >
                            Launching the Public Arts Commission website and web application was a huge accomplishment.  
                            However, they were done before I had learned about modern web development frameworks like Svelte and Next.js.  
                            Using Svelte in the future will help with creating a modern website and modern web applications for Public Arts Commission.  
                        </div>
                    </div>
                    
                </div>
                <div className={styles.visit_button}>
                    <Link href="https://www.publicartscommission.org/" passHref={true} >
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
                    <MyLink href="/case_studies/artInTechServices" passHref={true} >
                        <ButtonPrevious passHref={true} aria-label="link to previous case study">
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Art in Tech Services web programs
                                </h4>
                            </div>
                            <Image src={artinTechServicesScreengrab} layout="responsive" alt="Infinite Mile desktop screengrab thumbnail" />
                        </ButtonPrevious>
                    </MyLink>
                    <MyLink href="/case_studies/infiniteMile" passHref={true} >
                        <ButtonNext passHref={true} aria-label="link to next case study" >
                            <div className={styles.caseStudyThumbnailOverlay} >
                                <h4 className={styles.caseStudyThumbnailHeading} >
                                    Infinite Mile website
                                </h4>
                            </div>
                            <Image src={infiniteMileScreengrab} layout="responsive" alt="Art in Tech Services desktop screengrab thumbnail" />
                        </ButtonNext>
                    </MyLink>
                </div>
            </div>
        </Fragment>
    );
};

export default PublicArtsCommission;