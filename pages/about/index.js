import Head from 'next/head';
import { Fragment } from 'react';
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
            <div className="container">
                <div className="header">
                    about
                </div>
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
                        Detroit, Michigan<br/>
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
                        Baltimore, Maryland<br/><br/>
                </div>
                <div className="header_02" >
                    technical training
                </div>
                <div className={classes.profile_paragraphs}>
                    2021, Certificate in React, Udemy<br/>
                    <span style={{fontWeight: "bold"}} >React - The Complete Guide (incl Hooks, React Router, Redux)</span><br/>
                    <span style={{fontWeight: "bold"}} >Web Accessibility Training Course - WCAG 2.1 Compliance</span><br/><br/>

                    2020-2021, Certificates in Building Web Applications, University of Michigan – Coursera<br/>
                    <span style={{fontWeight: "bold"}} >JavaScript, jQuery, and JSON</span><br/>
                    <span style={{fontWeight: "bold"}} >Interactivity with JavaScript</span><br/>
                    <span style={{fontWeight: "bold"}} >Building Database Applications in PHP</span><br/>
                    <span style={{fontWeight: "bold"}} >Introduction to Structured Query Language (SQL)</span><br/>
                    <span style={{fontWeight: "bold"}} >Building Web Applications in PHP</span><br/><br/>

                    2021, Certificate in Database Design, University of Michigan – Coursera<br/>
                    <span style={{fontWeight: "bold"}} >Intermediate PostgreSQL</span><br/>
                    <span style={{fontWeight: "bold"}} >Database Design and Basic SQL in PostgreSQL</span><br/><br/>

                    2020, Certificates in Python Programming, University of Michigan – Coursera<br/> 
                    <span style={{fontWeight: "bold"}} >Python Data Structures</span><br/>
                    <span style={{fontWeight: "bold"}} >Python for Everybody</span><br/><br/>

                    2020, Certificates in U.X. Design, Interaction Design Foundation<br/>
                    <span style={{fontWeight: "bold"}} >UI Design Patterns for Successful Software</span><br/>
                    <span style={{fontWeight: "bold"}} >Mobile User Experience (UX) Design</span><br/>
                    <span style={{fontWeight: "bold"}} >Become a UX Designer from Scratch</span><br/>
                    <span style={{fontWeight: "bold"}} >Human-Computer Interaction</span><br/><br/>

                    2021, Certificate in Leadership, University of Michigan – Coursera<br/>
                    <span style={{fontWeight: "bold"}} >Inspiring and Motivating Individuals</span><br/><br/>
                </div>
            </div>
        </Fragment>
        
    );
};
export default AboutPage;