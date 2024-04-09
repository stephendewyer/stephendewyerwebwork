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
import AboutBanner from '../../public/images/about/stephen_dewyer_Art_and_Race_Conference.jpg';

const AboutPage = () => {

    const experience = [
        {
            length: 'April 2021 - present', 
            position: 'Founding Director, Full-stack Web Developer and UX Designer',
            company: 'Art in Tech Services Inc',
            location: 'Minneapolis, Minnesota',
            responsibilities: 
                <ul>
                    <li>
                        Developed a client portal as a part of organization’s website to help streamline client collaboration
                    </li>
                    <li>
                        Helps clients successfully plan and achieve digital product goals
                    </li>
                    <li>
                        Applies advancements in digital technology and art to improve user experiences
                    </li>
                    <li>
                        Responsible for all aspects of organization operations
                    </li>
                </ul>
        },
        {
            length: 'April 2017 – present', 
            position: 'Founder, Full-stack Web Developer and UX Designer',
            company: 'Public Arts Commission',
            location: 'Minneapolis, Minnesota',
            responsibilities:
                <ul>
                    <li>
                        Leading the design, development and deployment for the organization’s web platform that includes a campaign application management system, a voter networking and organizing portal, an endorsement management system and a searchable database of all the organization’s endorsements 
                    </li>
                    <li>
                        Conducted user tests for web prototypes with Board of Directors and art experts
                    </li>
                    <li>
                        Designed brand and media
                    </li>
                    <li>
                        Works with Board of Directors to achieve organizational goals
                    </li>
                    <li>
                        Responsible for overall direction of the non-profit, 501(c)(4) organization
                    </li>
                </ul>
        },
        {
            length: 'February - May 2022', 
            position: 'UX Design Consultant (contract)',
            company: 'Turnberry Solutions',
            location: 'Minneapolis, Minnesota',
            responsibilities:
                <ul>
                    <li>
                        Created high-fidelity prototypes to personalize dental insurance plan shopping in the Federal Employees Dental and Vision Insurance Program (FEDVIP)
                    </li>
                    <li>
                        Helped empower teams to produce great UX design for enterprise web products
                    </li>
                    <li>
                        Client: FedPoint
                    </li>
                </ul>
        },
        {
            length: 'July 2013 – January 2017', 
            position: 'Web Developer and UX Designer / Co-Founding Editor',
            company: '∞ mile (Infinite Mile LLC)',
            location: 'Detroit, Michigan',
            responsibilities:
                <ul>
                    <li>
                        Collaborated with stakeholders to create brand and website
                    </li>
                    <li>
                        Led a monthly online, Detroit-based art journal that published yearly print anthologies
                    </li>
                    <li>
                        Directed editing staff and contributors
                    </li>
                    <li>
                        Wrote successful grant applications
                    </li>
                    <li>
                        Partnered with the University of Michigan Stamps School of Art & Design to produce two serial publications and conferences
                    </li>
                </ul>
        }
    ];

    const skills = [
        {
            image: <Image src={FullStackWebDevelopment} layout="fill" objectFit="contain" alt="skill: full-stack web development"/>,
            label: "full-stack web development",
            content: 
                <ul>
                    <li>
                        Programming languages: JavaScript, TypeScript, PHP, Python
                    </li>
                    <li>
                        Stylesheet languages: CSS 3
                    </li>
                    <li>
                        Markup languages: HTML 5
                    </li>
                    <li>
                        JavaScript compilers, frameworks and libraries: SvelteKit, Svelte, Next.js, React, Vue.js, Express, Handlebars
                    </li>
                    <li>
                        Server environments: Node
                    </li>
                    <li>
                        Development environments: Visual Studio, PhpStorm
                    </li>
                    <li>
                        Data interchange formats: JSON
                    </li>
                    <li>
                        Database management systems: PostgreSQL, MySQL, MongoDB
                    </li>
                    <li>
                        Application programming interfaces (APIs): Representational State Transfer (REST), GraphQL
                    </li>
                    <li>
                        Web accessibility standards: WCAG 2.1
                    </li>
                    <li>
                        Version control systems: Git, GitHub, BitBucket
                    </li>
                    <li>
                        Geocoding: TomTom, Google Maps
                    </li>
                    <li>
                        Data visualization: D3.js
                    </li>
                </ul>
        },
        {
            image: <Image src={UXDesignIcon} layout="fill" objectFit="contain" alt="skill: UX design"/>,
            label: "user experience (UX) design",
            content: 
                <ul>
                    <li>
                        wire framing
                    </li>
                    <li>
                        prototyping
                    </li>
                    <li>
                        user research
                    </li>
                    <li>
                        user testing
                    </li>
                    <li>
                        information architecture
                    </li>
                    <li>
                        user flows
                    </li>
                    <li>
                        user interviews
                    </li>
                </ul>
        },
        {
            image: <Image src={Art} layout="fill" objectFit="contain" alt="skill: art"/>,
            label: "art direction",
            content: 
                <ul>
                    <li>
                        photography
                    </li>
                    <li>
                        videography
                    </li>
                    <li>
                        graphic design
                    </li>
                    <li>
                        brand identity design
                    </li>
                    <li>
                        animation
                    </li>
                </ul>
        },
        {
            image: <Image src={Leadership} layout="fill" objectFit="contain" alt="skill: leadership"/>,
            label: "leadership",
            content: 
                <Fragment>
                    <ul>
                        <li>
                            Inspiring and motivating individuals
                        </li>
                        <li>
                        empathy
                        </li>
                        <li>
                            building trust with integrity and fairness
                        </li>
                        <li>
                            working with diverse communities
                        </li>
                        <li>
                            communication
                        </li>
                    </ul>
                </Fragment>
        },
        {
            image: <Image src={ArtificialIntelligence} layout="fill" objectFit="contain" alt="skill: artificial intelligence"/>,
            label: "artificial intelligence",
            content: 
                <ul>
                    <li>
                        machine learning
                    </li>
                </ul>
        }
    ];

    const [profileImageDidStart, setProfileImageDidStart] = useState(false);

    const profileImage = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setProfileImageDidStart(entry.isIntersecting)
        })
        observer.observe(profileImage.current)
    }, []);

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
                        layout="fill"
                        alt="stephen dewyer and Erin Maye Quade and rally in Northfield, Minnesota in front of public fountain"
                    />
                    <div className={classes.banner_overlay} />
                </div>
                <h1>
                    about
                </h1>
                <div className={classes.introAboutSection}>
                    <div className={classes.myStoryContainer}>
                        <div className={classes.myStory}>
                            <p className={classes.myStoryParagraphs}>
                                I&#39;m stephen dewyer, an award-winning software developer, user experience (UX) designer, artist and founder with over ten years of experience creating groundbreaking web programs for organizations. 
                                I worked with a variety of stakeholders to produce critically-acclaimed projects, some of which have been featured in <Link href="https://www.nytimes.com/2016/01/07/fashion/shinola-watches-bicycles-leather-goods-expansion.html" passHref={true} aria-label="link to Shinola Takes Its 'Detroit Message on the Road'"><a target="_blank" rel="noopener noreferrer">The New York Times</a></Link>, <Link href="https://www.detroitnews.com/story/entertainment/2015/04/14/art-journals-detroit-increasing-art-scene/25784987/" passHref={true} aria-label="link to New journals showcase Detroit art scene"><a target="_blank" rel="noopener noreferrer">The Detroit News</a></Link> and <Link href="https://news.artnet.com/opinion/galapagos-art-space-detroit-corktown-sale-404495" passHref={true} aria-label="link to Galapagos Art Space Plans $6.25 Million Detroit Property Flip"><a target="_blank" rel="noopener noreferrer">Artnet News</a></Link>. 
                                I enjoy developing creative software solutions to challenging problems that help empower businesses and communities.
                            </p>
                            <div 
                                ref={profileImage}
                                className={classes.aboutSection01}
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
                                I first entered the fields of UX design and software development to solve problems for people.  In 2013, I created the website for an award-winning journal of art and culture(s) I co-founded called Infinite Mile.  The journal&#39;s website gave a platform for the art community in Detroit to publish articles and artist projects about the city.  Infinite Mile brought community together in one of the most segregated cities in the United States. 
                                <br /><br />
                                In 2017, I created the website for Public Arts Commission, a non-profit organization that is dedicated to expanding the political imaginary for a more egalitarian society by supporting democratic movements for greater public art.  
                                The website features a searchable database of all campaigns, ballot initiatives, legislation and constitutional amendments endorsed by Public Arts Commission.  
                                Campaigns can apply for endorsement via the Public Arts Commission website.
                                A redesign of the Public Arts Commission is currently underway that will expand capabilities for the organization.
                                <br /><br />
                                Currently, I am Founding Director, Full-stack Web Developer and UX Designer at <Link href="https://artintechservices.com" passHref={true} aria-label="link to Art in Tech Services Inc. website"><a target="_blank" rel="noopener noreferrer">Art in Tech Services Inc.</a></Link>, a C corporation that uses advancements in art and digital technology to improve design for the public and businesses.  
                                At Art in Tech Services Inc., I help clients plan and achieve their digital product goals.  
                                Art in Tech Services Inc. launched in 2021.
                                <br /><br />
                                After seeing the creativity involved in producing great web programs that help empower communities, I decided to further develop my skills in UX design and full-stack web development.  
                                I learned modern web development techniques and advanced UX design skills.  
                                I learned that I can apply my experience as an artist and organizer to create web programs that help empower communities and provide value for organizations.  
                                <br /><br />
                                Today, I am more committed than ever to helping solve problems for people as a UX designer and software developer.  
                                My experience has taught me valuable skills in working with multiple stakeholders and as a part of teams.  Outside work, I enjoy working out, running, traveling, hiking, art, coffee, farmers markets and meeting people.
                            </p>
                        </div>
                    </div>
                    <div className={classes.introAboutSection02}>
                        <div className={classes.resumePDF}>    
                            <Link href="/PDFs/STEPHEN_DEWYER_resume.pdf" passHref={true} aria-label="link to resume PDF" >
                                <a target="_blank" rel="noopener noreferrer">
                                    <ResumeButton passHref={true} />
                                </a>
                            </Link>
                        </div>
                        <h2>experience</h2>
                        <h3>positions</h3>
                        <ExperienceAccordion experience={experience}/>
                        <h3>
                            education
                        </h3>
                        <p className={classes.resume_paragraphs}>
                            <div className={classes.label_paragraphs} style={{marginBottom: "1rem"}}>
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
                        </p>
                        <h3>awards and grants</h3>
                            <div className={classes.label_paragraphs}>
                                <span className={classes.label_item}>2014 &ndash; 2016</span>
                                <span className={classes.position}>Knight Arts Challenge Detroit matching $20,000 grant</span>
                                <span className={classes.label_item}>John S. and James L. Knight Foundation</span>
                                <span className={classes.label_item}>Miami, Florida</span>
                            </div>
                            <ul>
                                <li>
                                    Project: ∞ mile
                                </li>
                            </ul>
                            <div className={classes.label_paragraphs}>
                                <span className={classes.label_item}>2014</span>
                                <span className={classes.position}>Detroit Chapter June 2014 $1,000 grant</span>
                                <span className={classes.label_item}>Awesome Foundation</span>
                                <span className={classes.label_item}>Boston, Massachusetts</span>
                            </div>
                            <ul>
                                <li>
                                    Project: ∞ mile
                                </li>
                            </ul>
                    </div>
                </div>
                <div className={classes.introAboutSection}>
                        <div className={classes.myStoryContainer}>
                        <div className={classes.myStory}>
                            <h3>skills</h3>
                            <SkillsAccordion skills={skills} /> 
                        </div>
                    </div>
                    <div className={classes.introAboutSection02}>                                           
                        <h3>certificates</h3>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2021 &ndash; 2023</span>
                            <span className={classes.position}>Certificates in UX Design, Modern Web Development, Web Accessibility and Machine Learning</span>
                            <span className={classes.label_item}>Udemy</span>
                        </div>
                        <ul>
                            <li>
                                Understanding TypeScript<br />
                            </li>
                            <li>
                                Machine Learning A-Z: AI, Python & R + ChatGPT Bonus [2023]<br />
                            </li>
                            <li>
                                GraphQL by Example<br />
                            </li>
                            <li>
                                Svelte.js - The Complete Guide (incl. Sapper.js)<br />
                            </li>
                            <li>
                                NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)<br />
                            </li>
                            <li>
                                React - The Complete Guide (incl Hooks, React Router, Redux)<br />
                            </li>
                            <li>
                                Web Accessibility Training Course - WCAG 2.1 Compliance
                            </li>
                            <li>
                                The User Researcher&#39;s guide to UX discoveries
                            </li>
                        </ul>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2020 &ndash; 2021</span>
                            <span className={classes.position}>Certificates in Building Web Applications</span>
                            <span className={classes.label_item}> University of Michigan &#8211; Coursera</span>
                        </div>
                        <ul>
                            <li>
                                JavaScript, jQuery, and JSON<br />
                            </li>
                            <li>
                                Interactivity with JavaScript<br />
                            </li>
                            <li>
                                Building Database Applications in PHP<br />
                            </li>
                            <li>
                                Introduction to Structured Query Language (SQL)<br />
                            </li>
                            <li>
                                Building Web Applications in PHP
                            </li>
                        </ul>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2021</span>
                            <span className={classes.position}>Certificates in Database Design</span>
                            <span className={classes.label_item}>University of Michigan &#8211; Coursera</span>
                        </div>
                        <ul>
                            <li>
                                Intermediate PostgreSQL<br />
                            </li>
                            <li>
                                Database Design and Basic SQL in PostgreSQL
                            </li>
                        </ul>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2020</span>
                            <span className={classes.position}>Certificates in Python Programming</span>
                            <span className={classes.label_item}>University of Michigan &#8211; Coursera</span>
                        </div>
                        <ul>
                            <li>
                                Python Data Structures<br />
                            </li>
                            <li>
                                Python for Everybody
                            </li>
                        </ul>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2020</span>
                            <span className={classes.position}>Certificates in UX Design</span>
                            <span className={classes.label_item}>Interaction Design Foundation</span>
                        </div>
                        <ul>
                            <li>
                                UI Design Patterns for Successful Software<br />
                            </li>
                            <li>
                                Mobile User Experience (UX) Design<br />
                            </li>
                            <li>
                                Become a UX Designer from Scratch<br />
                            </li>
                            <li>
                                Human-Computer Interaction
                            </li>
                        </ul>
                        <div className={classes.label_paragraphs}>
                            <span className={classes.label_item}>2021</span>
                            <span className={classes.position}>Certificate in Leadership</span>
                            <span className={classes.label_item}>University of Michigan &#8211; Coursera</span>
                        </div>
                        <ul>
                            <li>
                                Inspiring and Motivating Individuals
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className={classes.workTogetherButton} >
                    <MyLink href="/contact" passHref >
                        <ButtonAction aria-label="link to contact page">
                            let&#39;s work together
                        </ButtonAction>
                    </MyLink>
                </div>
            </div>
        </Fragment>
    );
};
export default AboutPage;