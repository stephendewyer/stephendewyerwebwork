import Head from 'next/head';
import { useState, useEffect, useRef, Fragment } from 'react';
import ExperienceAccordion from '../../components/accordions/experienceAccordion/Accordion';
import SkillsAccordion from '../../components/accordions/skillsAccordion/Accordion';
import ButtonAction from '../../components/buttons/buttonAction/ButtonAction';
import classes from './about.module.css';
import Image from 'next/image';
import stephen_dewyer_profile from '../../public/images/profile/stephen_dewyer_10_cropped_square.jpg';
import ResumeButton from '../../components/buttons/buttonResume/ButtonResume';
import Link from 'next/link';
import MyLink from '../../public/util/myLink';
import UXDesignIcon from '../../public/images/icons/UX_design.svg';
import FullStackWebDevelopment from '../../public/images/icons/full-stack_web_development.svg';
import Art from '../../public/images/icons/art.svg';
import Leadership from '../../public/images/icons/leadership.svg';
import ArtificialIntelligence from '../../public/images/icons/artificial_intelligence.png';
import AboutBanner from '../../public/images/about/rally_13_August_2018_stephen_dewyer_and_Erin_Maye_Quade.jpg';
import classNames from 'classnames';

const AboutPage = () => {

    const experience = [
        {
            length: 'April 2021 - present', 
            position: 'Founding Director, Full-stack Web Developer and UX Designer',
            company: 'Art in Tech Services Inc',
            location: 'Tucson, Arizona',
            responsibilities:
                <table>
                    <tr>
                        <td>
                            Designed, developed and deployed the company’s website
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            Streamlined client collaboration by producing a client collaboration portal via the company’s website
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Met or exceeded client goals, achieving a 100% client satisfaction rate
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Directs the company to provide digital services that empower businesses and communities
                        </td>
                    </tr>
                </table>
        },
        {
            length: 'April 2017 – present', 
            position: 'Founder, Full-stack Web Developer and UX Designer',
            company: 'Public Arts Commission',
            location: 'Tucson, Arizona',
            responsibilities:
                <table>
                    <tr>
                        <td>
                        Designed, developed and deployed software programs including a campaign application management system, an endorsement management system and a publicly searchable database of all the organization’s endorsements
                        </td>
                        
                    </tr>
                    <tr>
                        <td>
                            Developing a voter networking and organizing portal 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Conducted user tests for web prototypes with Board of Directors and art experts
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Grew Board of Directors by 233% to include leading voices in art community by delivering strong leadership
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Responsible for overall direction of the non-profit, 501(c)(4) organization
                        </td>
                    </tr>
                </table>
        },
        {
            length: 'February - May 2022', 
            position: 'UX Design Consultant (contract)',
            company: 'Turnberry Solutions',
            location: 'Minneapolis, Minnesota',
            responsibilities:
                <table>
                    <tr>
                        <td>
                            Created high-fidelity prototypes to personalize dental insurance plan shopping in the Federal Employees Dental and Vision Insurance Program (FEDVIP)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Helped empower teams to produce great UX design for enterprise web products 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Client: FedPoint
                        </td>
                    </tr>
                </table>
        },
        {
            length: 'July 2013 – January 2017', 
            position: 'Web Developer and UX Designer / Co-Founding Editor',
            company: '∞ mile (Infinite Mile LLC)',
            location: 'Detroit, Michigan',
            responsibilities:
                <table>
                    <tr>
                        <td>
                            Collaborated with stakeholders to create brand and website
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Directed three editing staff and 78 contributors to publish 94 essays and interviews, 51 artist projects, 26 reviews and 27 works of fiction or poetry
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Wrote successful grant applications
                        </td>
                    </tr>
                    <tr>
                        <td>
                        Partnered with the University of Michigan Stamps School of Art & Design to produce two serial publications and conferences
                        </td>
                    </tr>
                </table>
        }
    ];

    const skills = [
        {
            image: <Image src={FullStackWebDevelopment} layout="fill" objectFit="contain" alt="skill: full-stack web development"/>,
            label: "full-stack web development",
            content: 
                <table>
                    <tr>
                        <td className={classes.row_heading}>
                            Programming languages:
                        </td>
                        <td>
                            JavaScript, TypeScript, C++, PHP, Python
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Stylesheet languages:
                        </td>
                        <td>
                            CSS 3
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Markup languages:
                        </td>
                        <td>
                            HTML 5
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            JavaScript compilers, frameworks and libraries:
                        </td>
                        <td>
                            SvelteKit, Svelte, Next.js, React, Vue.js, Express, Handlebars
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Server environments:
                        </td>
                        <td>
                            Node
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Development environments:
                        </td>
                        <td>
                            Visual Studio, PhpStorm
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Data interchange formats:
                        </td>
                        <td>
                            JSON
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Database management systems:
                        </td>
                        <td>
                            PostgreSQL, MySQL, MongoDB
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Application programming interfaces (APIs):
                        </td>
                        <td>
                            Representational State Transfer (REST), GraphQL
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Web accessibility standards:
                        </td>
                        <td>
                            WCAG 2.1
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Version control systems:
                        </td>
                        <td>
                            Git, GitHub, BitBucket
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Geocoding:
                        </td>
                        <td>
                            TomTom, Google Maps
                        </td>
                    </tr>
                    <tr>
                        <td className={classes.row_heading}>
                            Data visualization:
                        </td>
                        <td>
                            D3.js
                        </td>
                    </tr>
                </table>
        },
        {
            image: <Image src={UXDesignIcon} layout="fill" objectFit="contain" alt="skill: UX design"/>,
            label: "user experience (UX) design",
            content: 
                <table>
                    <tr>
                        <td>
                            wire framing
                        </td>
                    </tr>
                    <tr>
                        <td>
                            prototyping
                        </td>
                    </tr>
                    <tr>
                        <td>
                            user research
                        </td>
                    </tr>
                    <tr>
                        <td>
                            user testing
                        </td>
                    </tr>
                    <tr>
                        <td>
                            information architecture
                        </td>
                    </tr>
                    <tr>
                        <td>
                            user flows
                        </td>
                    </tr>
                    <tr>
                        <td>
                            user interviews
                        </td>
                    </tr>
                </table>
        },
        {
            image: <Image src={Art} layout="fill" objectFit="contain" alt="skill: art"/>,
            label: "art direction",
            content: 
                <table>
                    <tr>
                        <td>
                            photography
                        </td>
                    </tr>
                    <tr>
                        <td>
                            videography
                        </td>
                    </tr>
                    <tr>
                        <td>
                            graphic design
                        </td>
                    </tr>
                    <tr>
                        <td>
                            brand identity design
                        </td>
                    </tr>
                    <tr>
                        <td>
                            animation
                        </td>
                    </tr>
                </table>
        },
        {
            image: <Image src={Leadership} layout="fill" objectFit="contain" alt="skill: leadership"/>,
            label: "leadership",
            content:
            <table>
                <tr>
                    <td>
                        inspiring and motivating individuals
                    </td>
                </tr>
                <tr>
                    <td>
                        empathy
                    </td>
                </tr>
                <tr>
                    <td>
                        building trust with integrity and fairness
                    </td>
                </tr>
                <tr>
                    <td>
                        working with diverse communities
                    </td>
                </tr>
                <tr>
                    <td>
                        communication
                    </td>
                </tr>
            </table>
        },
        {
            image: <Image src={ArtificialIntelligence} layout="fill" objectFit="contain" alt="skill: artificial intelligence"/>,
            label: "artificial intelligence",
            content: 
                <table>
                    <tr>
                        <td>
                            machine learning
                        </td>
                    </tr>
                    <tr>
                        <td>
                            deep learning including artificial neural networks and convolutional neural networks
                        </td>
                    </tr>
                </table>
        }
    ];

    const [profileImageDidStart, setProfileImageDidStart] = useState(false);

    const profileImage = useRef();

    const stickyTabsRef = useRef();

    const [tabsSticky, setTabsSticky] = useState(false);

    const [currentStickyTabsPosition, setCurrentStickyTabsPosition] = useState(0);

    const actionsRef = useRef();

    const [actionsSticky, setActionsSticky] = useState(false);

    const [currentActionsPosition, setCurrentActionsPosition] = useState(0);
    

    useEffect(() => {

        const options = {
            triggerOnce: true
        };

        const profilePhotoHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setProfileImageDidStart(true);
            };   
        };

        const observer = new IntersectionObserver(profilePhotoHandler, options);

        observer.observe(profileImage.current);

        setCurrentStickyTabsPosition(stickyTabsRef.current.getBoundingClientRect().top + window.scrollY);

        setCurrentActionsPosition(actionsRef.current.getBoundingClientRect().top + window.scrollY);

        const handleScroll = () => {

            const position = window.scrollY;

            if (position > currentStickyTabsPosition) {
                setTabsSticky(true);
            } else if (position <= currentStickyTabsPosition) {
                setTabsSticky(false);
            };

            if (position > currentActionsPosition) {
                setActionsSticky(true);
            } else if (position <= currentActionsPosition) {
                setActionsSticky(false);
            };
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
            
    }, [currentStickyTabsPosition, currentActionsPosition]);

    return (
        <Fragment>
            <Head>
                <title>about - stephen dewyer UX design and software development</title>
                <meta name="description" content="stephen dewyer résumé and profile" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/about" />
            </Head>
            <div className={classes.aboutPageContainer}>
                <div className={classes.banner_container}>
                    <Image 
                        src={AboutBanner} 
                        priority 
                        objectFit="cover"
                        objectPosition="top"
                        layout="fill"
                        alt="stephen dewyer and Erin Maye Quade and rally in Northfield, Minnesota in front of public fountain"
                    />
                    <div className={classes.banner_overlay} />
                </div>
                <h1>
                    about
                </h1>
                <div className={classes.about_sections}>
                    <div 
                        className={classes.tabs}
                        ref={stickyTabsRef}
                    >
                        <div 
                            className={classes.tabs_inner}
                            style={tabsSticky ? {position: "fixed", right: "1rem", left: "1rem"} : {position: "relative"}}
                        >
                            <ul 
                                className={classes.tabs_list}
                            >
                                <Link href="/about#introduction" passHref>
                                    <li>
                                        introduction
                                    </li>
                                </Link>
                                <Link href="/about#positions" passHref>
                                    <li>
                                        positions
                                    </li>
                                </Link>
                                <Link href="/about#education" passHref>
                                    <li>
                                        education
                                    </li>
                                </Link>
                                <Link href="/about#awards-and-grants" passHref>
                                    <li>
                                        awards and grants
                                    </li>
                                </Link>
                                <Link href="/about#skills" passHref>
                                    <li>
                                        skills
                                    </li>
                                </Link>
                                <Link href="/about#certificates" passHref>
                                    <li>
                                        certificates
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.about}>
                        <div className={classes.intro_section} id="introduction">
                            <div 
                                ref={profileImage}
                                className={classes.profile_image_container}
                            >
                                <div 
                                    className={(profileImageDidStart) ? classes.profileImageEnd : classes.profileImageStart}
                                >
                                    <Image 
                                        src={stephen_dewyer_profile} 
                                        layout="responsive" 
                                        alt="stephen dewyer profile image" 
                                        priority
                                    /> 
                                </div>                    
                            </div>
                            <p className={classes.myStoryParagraphs}>
                                I&#39;m stephen dewyer, an award-winning software developer, user experience (UX) designer, artist and founder with over ten years of experience creating groundbreaking web programs for organizations. My background in art makes me great at finding creative solutions that improve human experiences of technology.  
                                I worked with a variety of stakeholders to produce critically-acclaimed projects, some of which have been featured in <Link href="https://www.nytimes.com/2016/01/07/fashion/shinola-watches-bicycles-leather-goods-expansion.html" passHref={true} aria-label="link to Shinola Takes Its 'Detroit Message on the Road'"><a target="_blank" rel="noopener noreferrer">The New York Times</a></Link>, <Link href="https://www.detroitnews.com/story/entertainment/2015/04/14/art-journals-detroit-increasing-art-scene/25784987/" passHref={true} aria-label="link to New journals showcase Detroit art scene"><a target="_blank" rel="noopener noreferrer">The Detroit News</a></Link> and <Link href="https://news.artnet.com/opinion/galapagos-art-space-detroit-corktown-sale-404495" passHref={true} aria-label="link to Galapagos Art Space Plans $6.25 Million Detroit Property Flip"><a target="_blank" rel="noopener noreferrer">Artnet News</a></Link>. 
                                I enjoy developing creative software solutions to challenging problems that help empower businesses and communities.
                                <br /><br />
                                I first entered the fields of UX design and software development to solve problems for people.  In 2013, I created the website for an award-winning journal of art and culture(s) I co-founded called Infinite Mile.  The journal&#39;s website gave a platform for the art community in Detroit to publish articles and artist projects about art and cultures in the city.  Infinite Mile brought community together in one of the most segregated cities in the United States. 
                                <br /><br />
                                In 2017, I created the website for <Link href="https://publicartscommission.org" passHref={true} aria-label="link to Public Arts Commission website"><a target="_blank" rel="noopener noreferrer">Public Arts Commission</a></Link>, a non-profit organization that is dedicated to expanding the political imaginary for a fairer, more just economy and a more egalitarian society by supporting democratic movements for greater public art.  
                                The website features a searchable database of all candidates, referendums, legislation, constitutional amendments and actions endorsed by Public Arts Commission.  
                                Campaigns can apply for endorsement via the Public Arts Commission website.  A voter portal that I am currently developing will allow voters to network and organize using the website.
                                <br /><br />
                                Currently, I am Founding Director, Full-stack Web Developer and UX Designer at <Link href="https://artintechservices.com" passHref={true} aria-label="link to Art in Tech Services Inc. website"><a target="_blank" rel="noopener noreferrer">Art in Tech Services Inc.</a></Link>, a C corporation that uses advancements in art and digital technology to improve design for the public and businesses.  
                                At Art in Tech Services Inc., I help clients plan and achieve their digital product goals.  
                                Art in Tech Services Inc. launched in 2021.  
                                <br /><br />
                                After diving deep into software development, I found that art was actually often a precursor to technological discoveries.  For instance, Terravision, the 3D mapping software and inspiration for Google Earth, was created in 1993 as an art project by a German company called ART+COM.  I decided to further develop my skills in UX design and software development.  
                                <br /><br />
                                Today, I am more committed than ever to finding creative solutions to challenging problems as a UX designer and software developer.  
                                Outside work, I enjoy working out, running, traveling, hiking, art, coffee, farmers&apos; markets and meeting people.
                            </p> 
                        </div>
                        <h3 id="positions">positions</h3>
                        <ExperienceAccordion experience={experience}/>
                        <h3 id="education">
                            education
                        </h3>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2011</span>
                            <span className={classes.position}>MFA in Sculpture</span>
                            <span className={classes.label_item}>Yale University School of Art</span>
                            <span className={classes.label_item}>New Haven, Connecticut</span>
                        </div>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2008</span>
                            <span className={classes.position}>BFA in Art History, Theory <span>&#38;</span> Criticism</span>
                            <span className={classes.label_item}>Maryland Institute College of Art (MICA)</span>
                            <span className={classes.label_item}>cum laude</span>
                            <span className={classes.label_item}>Baltimore, Maryland</span>
                        </div>
                        <div className={classes.awards_and_grants_container}>
                        <h3 id="awards-and-grants" className={classes.awards_and_grants_header}>awards and grants</h3>
                        <div className={classes.awards_and_grants}>
                            <div className={classes.award}>
                                <div className={classes.label_paragraphs}>
                                    <span className={classes.awards_and_grants_item_label}>2014 &ndash; 2016</span>
                                    <span className={classes.awards_and_grants_item_position}>Knight Arts Challenge Detroit matching $20,000 grant</span>
                                    <span className={classes.awards_and_grants_item_label}>John S. and James L. Knight Foundation</span>
                                    <span className={classes.awards_and_grants_item_label}>Miami, Florida</span>
                                </div>
                                <ul className={classes.label_paragraphs}>
                                    <li className={classes.awards_and_grants_item_project}>
                                        Project: ∞ mile
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.award}>
                                <div className={classes.label_paragraphs}>
                                    <span className={classes.awards_and_grants_item_label}>2014</span>
                                    <span className={classes.awards_and_grants_item_position}>Detroit Chapter June 2014 $1,000 grant</span>
                                    <span className={classes.awards_and_grants_item_label}>Awesome Foundation</span>
                                    <span className={classes.awards_and_grants_item_label}>Boston, Massachusetts</span>
                                </div>
                                <ul className={classes.awards_and_grants_item_project}>
                                    <li>
                                        Project: ∞ mile
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h3 id="skills">skills</h3>
                    <SkillsAccordion skills={skills} />                                     
                    <h3 id="certificates">certificates</h3>
                    <div className={classes.certificates_group}>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2021 &ndash; 2024</span>
                            <span className={classes.position}>Certificates in UX Design, Modern Web Development, Web Accessibility and Machine Learning</span>
                            <span className={classes.label_item}>Udemy</span>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    Beginning C++ Programming - From Beginner to Beyond
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Understanding TypeScript
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Machine Learning A-Z: AI, Python & R + ChatGPT Bonus [2023]
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    GraphQL by Example
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Svelte.js - The Complete Guide (incl. Sapper.js)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    React - The Complete Guide (incl Hooks, React Router, Redux)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Web Accessibility Training Course - WCAG 2.1 Compliance
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    The User Researcher&#39;s guide to UX discoveries
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={classes.certificates_group}>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2020 &ndash; 2021</span>
                            <span className={classes.position}>Certificates in Building Web Applications</span>
                            <span className={classes.label_item}> University of Michigan &#8211; Coursera</span>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    JavaScript, jQuery, and JSON
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Interactivity with JavaScript
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Building Database Applications in PHP
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Introduction to Structured Query Language (SQL)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Building Web Applications in PHP
                                </td>
                            </tr>
                        </table>
                    </div>   
                    <div className={classes.certificates_group}>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2021</span>
                            <span className={classes.position}>Certificates in Database Design</span>
                            <span className={classes.label_item}>University of Michigan &#8211; Coursera</span>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    Intermediate PostgreSQL
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Database Design and Basic SQL in PostgreSQL
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={classes.certificates_group}>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2020</span>
                            <span className={classes.position}>Certificates in Python Programming</span>
                            <span className={classes.label_item}>University of Michigan &#8211; Coursera</span>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    Python Data Structures
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Python for Everybody
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className={classes.certificates_group}>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2020</span>
                            <span className={classes.position}>Certificates in UX Design</span>
                            <span className={classes.label_item}>Interaction Design Foundation</span>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    UI Design Patterns for Successful Software
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Mobile User Experience (UX) Design
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Become a UX Designer from Scratch
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Human-Computer Interaction
                                </td>
                            </tr>
                        </table>
                    </div> 
                    <div className={classes.certificates_group}>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2021</span>
                            <span className={classes.position}>Certificate in Leadership</span>
                            <span className={classes.label_item}>University of Michigan &#8211; Coursera</span>
                        </div>
                        <table>
                            <tr>
                                <td>
                                    Inspiring and Motivating Individuals
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div 
                    ref={actionsRef}
                    className={classes.action_buttons}
                >
                    <div className={actionsSticky ? classes.action_buttons_sticky : classes.action_buttons_relative}> 
                        <Link href="/PDFs/STEPHEN_DEWYER_resume.pdf" passHref={true} aria-label="link to resume PDF" >
                            <a target="_blank" rel="noopener noreferrer">
                                <ResumeButton passHref={true} />
                            </a>
                        </Link>

                        <MyLink href="/contact" passHref >
                            <ButtonAction aria-label="link to contact page">
                                let&#39;s work together
                            </ButtonAction>
                        </MyLink>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
};
export default AboutPage;