import Head from 'next/head';
import { useState, useEffect, useRef, Fragment } from 'react';
import Button from '../../components/button/button.js';
import classes from './about.module.css';
import Image from 'next/image';
import stephen_dewyer_profile from '../../public/images/profile/stephen_dewyer_10_cropped_square.jpg';
import UXdesign from '../../public/images/illustrations/UX_design.png';
import fullstackWebDevelopment from '../../public/images/illustrations/full-stack_web_development.png';
import art from '../../public/images/illustrations/art.png';
import organizing from '../../public/images/illustrations/organizing.png';
import ResumeButton from '../../components/button/resumeButton/ResumeButton';
import Link from 'next/link';
import MyLink from '../../public/util/myLink';

const AboutPage = () => {

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
                <title>about - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="stephen dewyer résumé and profile" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/about" />
            </Head>
            <div className={classes.aboutPageContainer}>
                <h1 className="header">
                    about
                </h1>
                <div className={classes.introAboutSection}>
                    <div className={classes.myStoryContainer}>
                        <div className={classes.myStory}>
                            <p className={classes.myStoryParagraphs}>
                                I&#39;m stephen dewyer, an award-winning user experience (UX) designer, full-stack web developer, artist and organizer with experience bringing together disparate parts of the community through multi-disciplinary projects. 
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
                                I have over ten years of experience creating web programs for organizations.  Improving human experiences of technology is work I love doing.  
                                <br /><br />
                                I first entered the fields of UX design and web development to solve problems for people.  In 2013, I created the website for an award-winning journal of art and culture(s) I co-founded called Infinite Mile.  The journal&#39;s website gave a platform for the art community in Detroit to publish articles and artist projects about the city.  Infinite Mile brought community together in one of the most segregated cities in the United States. 
                                <br /><br />
                                In 2017, I created the website for Public Arts Commission, a non-profit organization that connects the art community to democratic movements.  The website features a searchable database of all campaigns, ballot initiatives, legislation and constitutional amendments endorsed by Public Arts Commission.  Campaigns can apply for endorsement via the Public Arts Commission website.
                                <br /><br />
                                After seeing the creativity involved in producing great web programs that help empower communities, I decided to further develop my skills in UX design and full-stack web development.  I learned modern web development techniques and advanced UX design skills.  I learned that I can apply my experience as an artist and organizer to create web programs that help empower communities and provide value for organizations.  
                                <br /><br />
                                Today, I am more committed than ever to helping solve problems for people as a UX designer and full-stack web developer.  My experience has taught me valuable skills in working with multiple stakeholders and as a part of teams.  Outside work, I enjoy working out, running, traveling, hiking, art, coffee and farmers markets.
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
                        <div className={classes.workTogetherButton} >
                            <MyLink href="/contact" passHref >
                                <Button aria-label="link to contact page">
                                    let&#39;s work together
                                </Button>
                            </MyLink>
                        </div>
                        <h2 className={classes.strengthsHeading}>some of my strengths</h2>
                        <div className={classes.strengthCard}>
                            <div className={classes.strengthCardIllustration}>
                                <Image 
                                    src={UXdesign} 
                                    layout="responsive" 
                                    alt="UX design illustration" 
                                /> 
                            </div>
                            <h3 className={classes.strengthHeading}>
                                user experience (UX) design
                            </h3>
                        </div>
                        <div className={classes.strengthCard}>
                            <div className={classes.strengthCardIllustration}>
                                <Image 
                                    src={fullstackWebDevelopment} 
                                    layout="responsive" 
                                    alt="full-stack web development illustration" 
                                /> 
                            </div>
                            <h3 className={classes.strengthHeading}>
                                full-stack web development
                            </h3>
                        </div>
                        <div className={classes.strengthCard}>
                            <div className={classes.strengthCardIllustration}>
                                <Image 
                                    src={art} 
                                    layout="responsive" 
                                    alt="art illustration" 
                                /> 
                            </div>
                            <h3 className={classes.strengthHeading}>
                                art
                            </h3>
                        </div>
                        <div className={classes.strengthCard}>
                            <div className={classes.strengthCardIllustration}>
                                <Image 
                                    src={organizing} 
                                    layout="responsive" 
                                    alt="organizing illustration" 
                                /> 
                            </div>
                            <h3 className={classes.strengthHeading}>
                                organizing
                            </h3>
                        </div>
                    </div>
                </div>
                <h2 className={classes.resume_heading} >
                    resume
                </h2>
                <div className={classes.about_section_02}>
                    <div className={classes.resumeSection01}>
                        <div className={classes.experience}>
                            <h3 className={classes.resume_heading_01} >
                                experience
                            </h3>
                            <h4 className={classes.resume_heading_02}>
                                positions
                            </h4>
                            <div className={classes.resume_paragraphs}>
                                2021 &ndash; present, <span style={{fontWeight: "bold"}} >Founding Director</span><br/>
                                <span style={{fontWeight: "bold"}} >Art in Tech Services Inc</span><br/>
                                Minneapolis-St. Paul area, Minnesota
                                <ul>
                                    <li>
                                        clients: Joyfoodly
                                    </li>
                                </ul>
                                
                                2017 &ndash; present, <span style={{fontWeight: "bold"}} >Founder</span><br/>
                                <span style={{fontWeight: "bold"}} >Public Arts Commission</span><br/>
                                Minneapolis-St. Paul area, Minnesota<br/><br/>
                                February &ndash; May 2022, <span style={{fontWeight: "bold"}} >UX Design Consultant</span><br/>
                                <span style={{fontWeight: "bold"}} >Turnberry Solutions (contract)</span><br/>
                                Remote
                                <ul>
                                    <li>
                                        client: FedPoint
                                    </li>
                                </ul>

                                2013 &ndash; 2017, <span style={{fontWeight: "bold"}} >Co-Founding Editor</span><br/>
                                <span style={{fontWeight: "bold"}} >Infinite Mile LLC (<span>&#8734;</span> mile)</span><br/>
                                Detroit, Michigan
                                <ul>
                                    <li>
                                        supporting organizations: University of Michigan Stamps School of Art &amp; Design, Knight Foundation, Awesome Foundation 
                                    </li>
                                </ul>
                            </div>
                            <h4 className={classes.resume_heading_02}>
                                education
                            </h4>
                            <p className={classes.resume_paragraphs}>
                                2011, <span style={{fontWeight: "bold"}} >MFA in Sculpture</span><br/>
                                <span style={{fontWeight: "bold"}} >Yale University School of Art</span><br/>
                                New Haven, Connecticut<br/><br/>

                                2008, <span style={{fontWeight: "bold"}} >BFA in Art History, Theory <span>&#38;</span> Criticism</span><br/>
                                <span style={{fontWeight: "bold"}} >Maryland Institute College of Art (MICA)</span><br/>
                                cum laude<br/>
                                Baltimore, Maryland
                            </p>
                        </div>
                        <div className={classes.certificates_and_awards}>
                            <h3 className={classes.resume_heading_01} >
                                awards, grants and certificates
                            </h3>
                            <h4 className={classes.resume_heading_02}>
                                certificates
                            </h4>
                            <div className={classes.resume_paragraphs}>
                                2021 &ndash; 2022, <span style={{fontWeight: "bold"}} >Certificates in UX Design, Modern Web Development and Web Accessibility, Udemy</span>
                                <ul>
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
                            
                                2020 &ndash; 2021, <span style={{fontWeight: "bold"}} >Certificates in Building Web Applications, University of Michigan &#8211; Coursera</span>
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
                                2021, <span style={{fontWeight: "bold"}} >Certificates in Database Design, University of Michigan &#8211; Coursera</span>
                                <ul>
                                    <li>
                                        Intermediate PostgreSQL<br />
                                    </li>
                                    <li>
                                        Database Design and Basic SQL in PostgreSQL
                                    </li>
                                </ul>

                                2020, <span style={{fontWeight: "bold"}} >Certificates in Python Programming, University of Michigan &#8211; Coursera</span>
                                <ul>
                                    <li>
                                        Python Data Structures<br />
                                    </li>
                                    <li>
                                        Python for Everybody
                                    </li>
                                </ul>

                                2020, <span style={{fontWeight: "bold"}} >Certificates in UX Design, Interaction Design Foundation</span> 
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

                                2021, <span style={{fontWeight: "bold"}} >Certificate in Leadership, University of Michigan &#8211; Coursera</span>
                                <ul>
                                    <li>
                                        Inspiring and Motivating Individuals
                                    </li>
                                </ul>
                                <h4 className={classes.resume_heading_02}>
                                    awards and grants
                                </h4>
                                2014 &ndash; 2016, <span style={{fontWeight: "bold"}} >Knight Arts Challenge Detroit matching $20,000 grant<br />
                                John S. and James L. Knight Foundation</span><br />
                                Miami, Florida
                                <ul>
                                    <li>
                                        Project: ∞ mile
                                    </li>
                                </ul>
                                2014, <span style={{fontWeight: "bold"}} >Detroit Chapter June 2014 $1,000 grant<br />
                                Awesome Foundation</span><br />
                                Boston, Massachusetts
                                <ul>
                                    <li>
                                        Project: ∞ mile
                                    </li>
                                </ul>
                                2009-2011, <span style={{fontWeight: "bold"}} >Scholarship<br />
                                Yale University School of Art</span>
                                <br />
                                New Haven, Connecticut
                                <br /><br />
                                2007, <span style={{fontWeight: "bold"}} >Interdisciplinary Sculpture Departmental Recognition Award<br /> 
                                MICA</span><br />
                                Baltimore, Maryland
                                <br /><br /> 
                                2006, <span style={{fontWeight: "bold"}} >Achievement Award<br /> 
                                MICA</span><br />
                                Baltimore, Maryland
                                <br /><br />
                                2005, <span style={{fontWeight: "bold"}} >Presidential Scholarship<br />
                                MICA</span><br />
                                Baltimore, Maryland
                                <br /><br />
                                2005, <span style={{fontWeight: "bold"}} >Fannie B. Thalheimer Scholarship<br />
                                MICA</span><br />
                                Baltimore, Maryland<br /><br />
                                2005, <span style={{fontWeight: "bold"}} >Scholastic National Portfolio Award Scholarship<br />
                                MICA</span><br />
                                Baltimore, Maryland
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.skills}>
                        <h3 className={classes.resume_heading_01} >
                            skills
                        </h3>
                        <h4 className={classes.resume_heading_02}>UX design</h4>
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
                            <li>
                                requirements gathering
                            </li>
                            <li>
                                design systems
                            </li>
                            <li>
                                design thinking
                            </li>
                        </ul>
                        <h4 className={classes.resume_heading_02}>full-stack web development</h4>
                        <ul>
                            <li>
                                Svelte
                            </li>
                            <li>
                                Next.js
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Vue.js
                            </li>
                            <li>
                                Node
                            </li>
                            <li>
                                Python
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                PHP
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JSON
                            </li>
                            <li>
                                PostgreSQL
                            </li>
                            <li>
                                MySQL
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                WCAG 2.1
                            </li>
                            <li>
                                GIT
                            </li>
                            <li>
                                content management systems including WordPress
                            </li>
                            <li>
                                project management
                            </li>
                        </ul>
                        <h4 className={classes.resume_heading_02}>art and design</h4>
                        <ul>
                            <li>
                                data visualization
                            </li>
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
                                motion graphics
                            </li>
                            <li>
                                brand identity design
                            </li>
                        </ul>
                        <h4 className={classes.resume_heading_02}>people</h4>
                        <ul>
                            <li>
                                empathy
                            </li>
                            <li>
                                communication
                            </li>
                            <li>
                                inspiring and motivating individuals
                            </li>
                            <li>
                                building trust with integrity and fairness
                            </li>
                            <li>
                                working with diverse communities
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
        
    );
};
export default AboutPage;