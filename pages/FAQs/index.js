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
        }
            
    ];

    return (
        <Fragment>
            <Head>
                <title>FAQs - Stephen Dewyer software development and UX design</title>
                <meta name="description" content="frequently asked questions and answers" />
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