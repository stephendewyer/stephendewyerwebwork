import Head from 'next/head';
import { useState, useEffect, Fragment } from 'react';
import classes from './about.module.css';
import Image from 'next/image';
import stephen_dewyer_profile from '../../public/images/profile/stephen_dewyer_10_cropped_square.jpg';
import ResumeButton from '../../components/button/resumeButton/ResumeButton';
import Link from 'next/link';

const AboutPage = () => {

    const [profileImageDidStart, setProfileImageDidStart] = useState(false);

    useEffect(() => {

        setProfileImageDidStart(true);

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
                <div className={classes.aboutSection01}>
                    <div className={(profileImageDidStart) ? classes.profileImageEnd : classes.profileImageStart}>
                        <Image 
                            src={stephen_dewyer_profile} 
                            layout="responsive" 
                            alt="stephen dewyer profile image" 
                            priority
                        /> 
                    </div>
                    <div className={classes.profile_info}>
                        <h2 className={classes.aboutHeading02}>hi!<br /><br />
                            I create elegant solutions to complex problems<br /><br />
                            improving human experiences of technology is my goal<br /><br />
                            using my experience as an award-winning UX designer, full-stack web developer, artist and organizer allows me to create world-class digital programs and products that provide value and bring community together
                        </h2>
                        <p className={classes.profile_info_paragraphs}>
                            I worked with stakeholders including the University of Michigan Stamps School of Art and Design and Knight Foundation to produce critically-acclaimed projects that use advancements in art and digital technology. 
                            In my work, I brings together disparate parts of the community through multi-disciplinary projects.
                        </p>
                        
                    </div>
                </div>
                <div className={classes.resume_section}>
                    <div className={classes.resumeLeftColumn}>

                    </div>
                    <h2 className={classes.resume_heading} >
                        resume
                    </h2>
                    <div className={classes.resumePDF}>    
                        <Link href="/PDFs/STEPHEN_DEWYER_resume.pdf" passHref={true} aria-label="link to resume PDF" >
                            <a target="_blank" rel="noopener noreferrer">
                                <ResumeButton passHref={true} />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={classes.about_section_02}>
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
                                Next.js
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Node.js
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
                                Agile software development
                            </li>
                        </ul>
                        <h4 className={classes.resume_heading_02}>art and design</h4>
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
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
        
    );
};
export default AboutPage;