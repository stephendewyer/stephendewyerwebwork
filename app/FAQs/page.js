'use client'
import Head from "next/head";
import React, { Fragment } from 'react';
import FAQsAccordion from "../../components/accordions/FAQsAccordion/Accordion.js";
import styles from "./FAQs.module.css";

const FAQs = () => {

    const FAQsAccordionData = [
        {
            index: 1,
            label: "Have I collaborated with other software developers?",
            content: "Yes, one of the things I love about my career is working with other software developers.  I worked on teams that blended UX design with software development, teams that were strictly software development and teams that worked across all departments.  I enjoy seeing how each software developer is unique and learning from each software developer’s experience.  My skills having led companies lend themselves to collaboration.  As someone with a background in higher education, I also share a passion for sharing knowledge."
        },
        {
            index: 2,
            label: "Have I worked with other designers?",
            content: "Yes, I worked with other designers throughout my career.  I am glad to have worked with some of the top designers in the world at Yale, Infinite Mile, the University of Michigan and at MICA."
        },
        {
            index: 3,
            label: "What is my software development process?",
            content: `The process I use for software development can vary depending on the project.   When I am designing software, I typically use a 5-stage design process.  The five stages are (1) empathize, (2) define, (3) iterate, (4) test and (5) prototype.
              When I am developing software for clients, I typically am in frequent contact with the client over the course of a project.  I will show the client progress on the project in stages to make desired changes before they become too costly to make.  At Art in Tech Services, I write agreements that help set expectations for projects between the company and the client.` 
        },
        {
            index: 4,
            label: "Do I prefer working on the front end or the back end of a software program?",
            content: "I really enjoy working both on the front and back ends of a software program.  However, I spend most of my time working on the front end, which is where my skills in UX design, art and software development shine the most."
        },
        {
            index: 5,
            label: "How do I stay knowledgeable about developments in UX design and software development?",
            content: "I am constantly learning new things about UX design and software development.  To learn new technologies, I regularly enroll in online courses, read articles and talk to other developers and UX designers.  The research skills I gained in higher education help with learning new developments in the fields of UX design and software development."
        },
        {
            index: 6,
            label: "What technologies do I use the most?",
            content: "I mostly use JavaScript and TypeScript, although I am also skilled in a variety of other languages.  For libraries and frameworks, I often use SvelteKit and Next.js.  For UX design and prototyping, I often use Figma."
        },
        {
            index: 7,
            label: "Do I prefer leadership or individual contributor roles?",
            content: "I am happy in either an individual contributor or leadership role.  I’ve led companies, taught courses at universities and worked as an individual contributor.  I’ve got really good organization skills and have learned about inspiring and motivating individuals.  I like helping people accomplish something that they didn’t know they could accomplish.  However, I am also happy to continue to improve my craft as an individual contributor."
        },
        {
            index: 8,
            label: "What success do I have in growing startups?",
            content: "The first company I co-founded called Infinite Mile grew to a staff of three editors and 78 contributors.  Infinite Mile won a number of awards and partnered with the University of Michigan Stamps School of Art and Design.  The companies I have since founded are still early-stage startups. Unlike many startups, all the companies I  founded have been 100% debt free and done almost entirely in-house.  I've been able to grow companies without outside investors."
        },
        {
            index: 9,
            label: "Why should you work with someone who is a founder of companies?  Aren’t they too independent to serve as an employee?  Will they stay committed?",
            content: "Having experience as a founder is a huge asset.  Some of the most successful companies in the world hire founders.  For instance, Meta spent $14.3 billion hiring a founder of one of the most prominent AI startups.  As someone who has made high-stakes hiring decisions, some of the best people I have hired started companies.  If you want someone who can wear many hats, find a problem and take the initiative to solve it, work across teams, is capable of thinking independently and understands business impact, then hire a founder.  Founders know what it is like to run a business.  They know how their individual actions impact the bottom line.   They also know what it is like to direct a company, the importance of leadership and being able to inspire and motivate people.  They can follow orders because they have given orders, themselves.  They can commit to a job because they know what it takes to do a job from start to finish.  As someone who has been in a hiring position, I cannot recommend enough seeing experience as a founder an asset."
        },
        {
            index: 10,
            label: "How does someone from an art background get into software development?",
            content: "As an undergraduate at MICA, I learned some website development skills like HTML and CSS in a foundation-level digital media course.  When I co-founded Infinite Mile, I used the website development skills I gained to create the company’s website.  After seeing the great impact Infinite Mile had in the community, I decided to become an expert in software development and UX design.  Only after getting in-depth skills in web development and UX design did I learn of how artists contributed to the fields of software development and UX design.  Svelte, a web development framework, for instance, was created by an arts editor from the New York Times named Rich Harris.  The software program that inspired Google Earth, Terravision, started as an art project funded by a German telecommunications company.  As it happens, software development is a very creative field, which is why I continue to enjoy designing and developing software."
        },
        {
            index: 11,
            label: "Why is offshoring my software development to someplace like India not a good idea?",
            content: "If you want larger costs in the long run, you can offshore your software development to places like India.  Like we saw during COVID, offshore supply chains are incredibly precarious.  Offshoring software development is a good way to get low-quality code that will need expensive fixes in the future.  Hiring onshore software developers here in the United States is the way to create more resilient supply chains and a more sustainable business."
        },
        {
            index: 12,
            label: "Will artificial intelligence replace software developers?",
            content: "No, artificial intelligence will not replace software developers and will likely create more jobs for software developers.  Artificial intelligence offers some great tools for software development, but cannot empathize with software users and cannot improvise when needed.  Artificial intelligence is great at taking care of some rudimentary software tasks like creating a GraphQL API or a user interface to accept payments, but is not capable of creating innovative software.  For creating innovative software, developers are needed.  Artificial intelligence is likely going to create more jobs for software developers as the need for software developers increases to facilitate an increasing amount of artificial intelligence programs.  Software developers are needed to actually write the AI programs, which are increasing by the day.  Software developers will need to learn some new skills like how to write artificial intelligence programs, but that does not mean software developers are no longer needed."
        },
    ];

    return (
        <Fragment>
            <Head>
                <title>FAQs – Stephen Dewyer | UX Engineer & Software Developer</title>
                <meta name="description" content="Frequently asked questions about Stephen Dewyer’s UX design and software development portfolio. Learn about his skills, case studies, experience, and how to get in touch." />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/FAQs" />
            </Head>
            <div className={styles.FAQs_container} >
                <h1>
                    frequently asked questions
                </h1>
                <FAQsAccordion FAQs={FAQsAccordionData}/>
            </div>
        </Fragment>
    )
}

export default FAQs;