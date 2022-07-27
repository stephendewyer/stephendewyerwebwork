import Head from 'next/head';
import { Fragment } from 'react';
import Button from '../../components/button/button.js';
import classes from './about.module.css';
import Image from 'next/image';
import stephen_dewyer_profile from '../../public/images/profile/stephen_dewyer_10_cropped_square.jpg';
import Link from 'next/link';

const AboutPage = () => {

    return (
        <Fragment>
            <Head>
                <title>about - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="stephen dewyer résumé and profile" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/about" />
            </Head>
            <div className="container" role="main">
                <h1 className="header">
                    about
                </h1>
                <div className={classes.profile_image}>
                    <Image src={stephen_dewyer_profile} layout="responsive" alt="stephen dewyer profile image" />
                </div>
                <div className={classes.profile_paragraphs}>
                    <p>stephen garrett dewyer is an award-winning <span style={{fontWeight: "bold"}} >full-stack web developer</span>, <span style={{fontWeight: "bold"}} >UX designer</span>, <span style={{fontWeight: "bold"}} >artist</span> and <span style={{fontWeight: "bold"}} >organizer</span> with experience designing enterprise web programs for businesses, creative organizations and government.
                        He worked with multiple stakeholders to produce critically-acclaimed projects that use advancements in art and digital technology.  
                        In his work, stephen brings together disparate parts of the community through multi-disciplinary projects.  
                        He is interested in developing creative, effective and attractive web programs that improve user experiences for the public and businesses.</p>
                </div>
                <div className="header_02" >
                    experience
                </div>
                <div className={classes.profile_paragraphs}>
                    
                        2021 &ndash; present, <span style={{fontWeight: "bold"}} >Founding Director</span><br/>
                        <span style={{fontWeight: "bold"}} >Art in Tech Services Inc</span><br/>
                        Minneapolis-St. Paul area, Minnesota<br/>
                        <ul>
                            <li>
                                clients: Joyfoodly
                            </li>
                        </ul>
                        <br />
                        
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
                        <br />

                        2013 &ndash; 2017, <span style={{fontWeight: "bold"}} >Co-Founding Editor</span><br/>
                        <span style={{fontWeight: "bold"}} >Infinite Mile LLC (<span>&#8734;</span> mile)</span><br/>
                        Detroit, Michigan<br />
                        <ul>
                            <li>
                                supporting organizations: University of Michigan Stamps School of Art &amp; Design, Knight Foundation, Awesome Foundation 
                            </li>
                        </ul>
                        <br />
                </div>
                <div className="header_02" >
                    education
                </div>
                <div className={classes.profile_paragraphs}>
                        2011, <span style={{fontWeight: "bold"}} >MFA in Sculpture</span><br/>
                        <span style={{fontWeight: "bold"}} >Yale University School of Art</span><br/>
                        New Haven, Connecticut<br/><br/>

                        2008, <span style={{fontWeight: "bold"}} >BFA in Art History, Theory <span>&#38;</span> Criticism</span><br/>
                        <span style={{fontWeight: "bold"}} >Maryland Institute College of Art (MICA)</span><br/>
                        cum laude<br/>
                        Baltimore, Maryland
                </div>
                <div className="header_02" >
                    technical training
                </div>
                <div className={classes.profile_paragraphs}>
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
                            The User Researcher’s guide to UX discoveries
                        </li>
                    </ul><br/>
                   
                    2020 &ndash; 2021, <span style={{fontWeight: "bold"}} >Certificates in Building Web Applications, University of Michigan – Coursera</span>
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
                    </ul><br/>
                    2021, <span style={{fontWeight: "bold"}} >Certificates in Database Design, University of Michigan – Coursera</span>
                    <ul>
                        <li>
                            Intermediate PostgreSQL<br />
                        </li>
                        <li>
                            Database Design and Basic SQL in PostgreSQL
                        </li>
                    </ul><br/>

                    2020, <span style={{fontWeight: "bold"}} >Certificates in Python Programming, University of Michigan – Coursera</span>
                    <ul>
                        <li>
                            Python Data Structures<br />
                        </li>
                        <li>
                            Python for Everybody
                        </li>
                    </ul><br/>

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
                    </ul><br/>

                    2021, <span style={{fontWeight: "bold"}} >Certificate in Leadership, University of Michigan – Coursera</span>
                    <ul>
                        <li>
                            Inspiring and Motivating Individuals
                        </li>
                    </ul>
                    <br />
                </div>
                <div className="header_02" >
                    awards and grants
                </div>
                <div className={classes.profile_paragraphs}>
                    2014 &ndash; 2016, <span style={{fontWeight: "bold"}} >Knight Arts Challenge Detroit matching $20,000 grant<br />
                    John S. and James L. Knight Foundation</span><br />
                    Miami, Florida
                    <ul>
                        <li>
                            Project: ∞ mile
                        </li>
                    </ul>
                    <br />
                    2014, <span style={{fontWeight: "bold"}} >Detroit Chapter June 2014 $1,000 grant<br />
                    Awesome Foundation</span><br />
                    Boston, Massachusetts
                    <ul>
                        <li>
                            Project: ∞ mile
                        </li>
                    </ul>
                    <br />
                </div>
                <div className="header_02" >
                    resume
                </div>
                <div className={classes.button}>
                    <Link href="/PDFs/STEPHEN_DEWYER_resume.pdf" passHref >
                        <a target="_blank" rel="noopener noreferrer" className={classes.view_button}>
                            <Button>
                                view PDF
                            </Button>
                        </a>
                    </Link>
                </div>
            </div>
        </Fragment>
        
    );
};
export default AboutPage;