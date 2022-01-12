import Head from 'next/head';
import { Fragment, useEffect } from 'react';
import classes from './about.module.css';
import Image from 'next/image';
import stephen_dewyer_profile from '../../public/images/profile/stephen_dewyer_17_August_2021_02.jpg';

const AboutPage = () => {
    return (
        <Fragment>
            <Head>
                <title>about - stephen dewyer web design and development</title>
                <meta name="description" content="stephen dewyer résumé and profile" />
            </Head>
            <div className="container" role="main">
                <h1 className="header">
                    about
                </h1>
                <div className={classes.profile_image}>
                    <Image src={stephen_dewyer_profile} layout="responsive" alt="stephen dewyer profile image" />
                </div>
                <div className={classes.profile_paragraphs}>
                    <p>stephen garrett dewyer is a <span style={{fontWeight: "bold"}} >full-stack web developer</span>, <span style={{fontWeight: "bold"}} >U.I./U.X. designer</span>, <span style={{fontWeight: "bold"}} >award-winning artist</span> and <span style={{fontWeight: "bold"}} >organizer</span> with experience designing web programs for creative organizations.
                        He worked with multiple stakeholders to produce critically-acclaimed projects that use advancements in art and digital technology.  
                        In his work, stephen brings together disparate parts of the community through multi-disciplinary projects.  
                        He is interested in developing creative, effective and attractive web programs that improve user experiences for the public and businesses.</p>
                </div>
                <div className="header_02" >
                    experience
                </div>
                <div className={classes.profile_paragraphs}>
                        2021-present, <span style={{fontWeight: "bold"}} >Founding Director</span><br/>
                        <span style={{fontWeight: "bold"}} >Art in Tech Services Inc</span><br/>
                        Minneapolis-St. Paul area, Minnesota<br/><br/>
                        
                        2017-present, <span style={{fontWeight: "bold"}} >Founder</span><br/>
                        <span style={{fontWeight: "bold"}} >Public Arts Commission</span><br/>
                        Minneapolis-St. Paul area, Minnesota<br/><br/>

                        2013-2017, <span style={{fontWeight: "bold"}} >Co-Founding Editor</span><br/>
                        <span style={{fontWeight: "bold"}} >Infinite Mile LLC (<span>&#8734;</span> mile)</span><br/>
                        Detroit, Michigan
                </div>
                <div className="header_02" >
                    education
                </div>
                <div className={classes.profile_paragraphs}>
                        2011, <span style={{fontWeight: "bold"}} >M.F.A. in Sculpture</span><br/>
                        <span style={{fontWeight: "bold"}} >Yale University School of Art</span><br/>
                        New Haven, Connecticut<br/><br/>

                        2008, <span style={{fontWeight: "bold"}} >B.F.A. in Art History, Theory <span>&#38;</span> Criticism</span><br/>
                        <span style={{fontWeight: "bold"}} >Maryland Institute College of Art (MICA)</span><br/>
                        cum laude<br/>
                        Baltimore, Maryland
                </div>
                <div className="header_02" >
                    technical training
                </div>
                <div className={classes.profile_paragraphs}>
                    2021, <span style={{fontWeight: "bold"}} >Certificates in Modern Web Development and Web Accessibility, Udemy</span>
                    <ul>
                        <li>
                            NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
                        </li>
                        <li>
                            React - The Complete Guide (incl Hooks, React Router, Redux)
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Web Accessibility Training Course - WCAG 2.1 Compliance
                        </li>
                    </ul><br/>
                   
                    2020-2021, <span style={{fontWeight: "bold"}} >Certificates in Building Web Applications, University of Michigan – Coursera</span>
                    <ul>
                        <li>
                            JavaScript, jQuery, and JSON
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Interactivity with JavaScript
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Building Database Applications in PHP
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Introduction to Structured Query Language (SQL)
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Building Web Applications in PHP
                        </li>
                    </ul><br/>
                    2021, <span style={{fontWeight: "bold"}} >Certificates in Database Design, University of Michigan – Coursera</span>
                    <ul>
                        <li>
                            Intermediate PostgreSQL
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Database Design and Basic SQL in PostgreSQL
                        </li>
                    </ul><br/>

                    2020, <span style={{fontWeight: "bold"}} >Certificates in Python Programming, University of Michigan – Coursera</span>
                    <ul>
                        <li>
                            Python Data Structures
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Python for Everybody
                        </li>
                    </ul><br/>

                    2020, <span style={{fontWeight: "bold"}} >Certificates in U.X. Design, Interaction Design Foundation</span> 
                    <ul>
                        <li>
                            UI Design Patterns for Successful Software
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Mobile User Experience (UX) Design
                        </li>
                    </ul>
                    <ul>
                        <li>
                            Become a UX Designer from Scratch
                        </li>
                    </ul>
                    <ul>
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
                </div>
                <div className="header_02" >
                    awards and grants
                </div>
                <div className={classes.profile_paragraphs}>
                    2014-2016, <span style={{fontWeight: "bold"}} >Knight Arts Challenge Detroit matching $20,000 grant<br />
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
                </div>
            </div>
        </Fragment>
        
    );
};
export default AboutPage;