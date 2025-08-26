'use client'
import Head from 'next/head';
import { useState, useEffect, useRef, Fragment } from 'react';
import { debounce } from '../../public/util/helpers';
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
import InfiniteMileArtAndRaceConference01 from "../../public/images/story/Infinite_Mile_Art_and_Race_Conference_01.jpg";
import InfiniteMileArtAndRaceConference02 from "../../public/images/story/Infinite_Mile_Art_and_Race_Conference_02.jpg";
import PublicArtsCommissionCandidateMeeting from "../../public/images/story/Erin_Maye_Quade_and_stephen_dewyer_13_August_2018.jpg";

const AboutPage = () => {

    const experience = [
        {
            length: 'April 2021 - present', 
            position: 'Founding Director, Full-stack Web Developer and UX Designer',
            company: 'Art in Tech Services Inc',
            location: 'Tucson, Arizona (relocated from Minneapolis, Minnesota)',
            responsibilities:
                <ul>
                    <li>
                        Helped clients plan and achieve project goals, meeting or exceeding client expectations.
                    </li>
                    <li>
                        Designed, developed, deployed and maintained the company’s website including client and administrator portals, streamlining client collaboration.
                    </li>
                    <li>
                        Developed custom and original software using state-of-the-art technologies like SvelteKit and Next.js to improve performance.
                    </li>
                    <li>
                        Used art in UX design and in the development of creative software solutions to improve human experiences of technology.
                    </li>
                </ul>
        },
        {
            length: 'April 2017 – present', 
            position: 'Founder, Full-stack Web Developer and UX Designer',
            company: 'Public Arts Commission',
            location: 'Tucson, Arizona (relocated from Minneapolis, Minnesota)',
            responsibilities:
                <ul>
                    <li>
                        Leads a non-profit, 501(c)(4) organization that uses original software to create an art community civic engagement platform.
                    </li>
                    <li>
                        Designed, developed, deployed and maintained software programs including a campaign application management system, an endorsement management system and a publicly searchable database of all the organization’s endorsements.
                    </li>
                    <li>
                        Developing a voter networking and organizing portal.
                    </li>
                    <li>
                        Conducted user tests for web prototypes with Board of Directors and art experts.
                    </li>
                    <li>
                        Grew Board of Directors by 233% to include leading voices in the art community by delivering strong leadership.
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
                    Created high-fidelity prototypes to personalize dental insurance plan shopping in the Federal Employees Dental and Vision Insurance Program (FEDVIP).
                </li>
                <li>
                    client: FedPoint
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
                        Designed, developed, deployed and maintained website featuring an online store for print anthologies and merchandise, generating thousands of dollars in revenue.
                    </li>
                    <li>
                        Directed three editing staff and 78 contributors to publish 94 essays and interviews, 51 artist projects, 26 reviews and 27 works of fiction or poetry.
                    </li>
                    <li>
                        Wrote successful grant applications.
                    </li>
                    <li>
                        Partnered with the University of Michigan Stamps School of Art & Design to produce two serial publications and conferences.
                    </li>
                </ul>
        }
    ];

    const skills = [
        {
            image: <Image src={FullStackWebDevelopment} layout="fill" objectFit="contain" alt="skill: full-stack web development"/>,
            label: "full-stack web development",
            content: 
                <table className={classes.resume_table}>
                    <colgroup>
                        <col className="left_table_column" />
                        <col className="right_table_column" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>
                                Programming languages:
                            </td>
                            <td>
                                JavaScript, TypeScript, C++, PHP, Python
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Stylesheet languages:
                            </td>
                            <td>
                                CSS 3
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Markup languages:
                            </td>
                            <td>
                                HTML 5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                JavaScript compilers, frameworks and libraries:
                            </td>
                            <td>
                                SvelteKit, Svelte, Next.js, React, Vue.js, Express, Handlebars
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Server environments:
                            </td>
                            <td>
                                Node
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Development environments:
                            </td>
                            <td>
                                Visual Studio, PhpStorm
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data interchange formats:
                            </td>
                            <td>
                                JSON
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Database management systems:
                            </td>
                            <td>
                                PostgreSQL, MySQL, MongoDB
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Application programming interfaces (APIs):
                            </td>
                            <td>
                                Representational State Transfer (REST), WebSockets, GraphQL
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Web accessibility standards:
                            </td>
                            <td>
                                WCAG 2.1
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Version control systems:
                            </td>
                            <td>
                                Git, GitHub, BitBucket
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Geocoding:
                            </td>
                            <td>
                                TomTom, Google Maps
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Data visualization:
                            </td>
                            <td>
                                D3.js, Chart.js
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3D animation:
                            </td>
                            <td>
                                Blender
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Machine learning:
                            </td>
                            <td>
                                TensorFlow, Google Colab
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                        3D animation
                    </li>
                </ul>
        },
        {
            image: <Image src={Leadership} layout="fill" objectFit="contain" alt="skill: leadership"/>,
            label: "leadership",
            content:
                <ul>
                    <li>
                        inspiring and motivating individuals
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
        },
        {
            image: <Image src={ArtificialIntelligence} layout="fill" objectFit="contain" alt="skill: artificial intelligence"/>,
            label: "artificial intelligence",
            content: 
            <ul>
                <li>
                    machine learning
                </li>
                <li>
                    deep learning including artificial neural networks and convolutional neural networks
                </li>
            </ul>
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

    const introductionRef = useRef(null);
    const positionsRef = useRef(null);
    const educationRef = useRef(null);
    const awardsAndGrantsRef = useRef(null);
    const skillsRef = useRef(null);
    const certificatesRef = useRef(null);
    const aboutSectionsRef = useRef(null);

    const introductionTabRef = useRef(null);

    const [introductionTabScrollLeftPosition, setIntroductionTabScrollLeftPosition] = useState(0);

    const [introductionTabWidth, setIntroductionTabWidth] = useState(0);

    const positionsTabRef = useRef(null);

    const [positionsTabScrollLeftPosition, setPositionsTabScrollLeftPosition] = useState(0);

    const [positionsTabWidth, setPositionsTabWidth] = useState(0);

    const educationTabRef = useRef(null);

    const [educationTabScrollLeftPosition, setEducationTabScrollLeftPosition] = useState(0);

    const [educationTabWidth, setEducationTabWidth] = useState(0);

    const awardsAndGrantsTabRef = useRef(null);

    const [ awardsAndGrantsTabScrollLeftPosition, setAwardsAndGrantsTabScrollLeftPosition] = useState(0);

    const [ awardsAndGrantsTabWidth, setAwardsAndGrantsTabWidth] = useState(0);

    const skillsTabRef = useRef(null);

    const [ skillsTabScrollLeftPosition, setSkillsTabScrollLeftPosition] = useState(0);

    const [ skillsTabWidth, setSkillsTabWidth ] = useState(0);

    const certificatesTabRef = useRef(null);

    const [certificatesTabScrollLeftPosition, setCertificatesTabScrollLeftPosition] = useState(0);

    const [ certificatesTabWidth, setCertificatesTabWidth ] = useState(0);

    const pageNavTabsScrollableRef = useRef(null);

    const pageNavTabsScrollableContainerRef = useRef(null);

    const [pageNavTabsScrollableLeftPosition, setPageNavTabsScrollableLeftPosition] = useState(0);

    const [pageNavTabsScrollableWidth, setPageNavTabsScrollableWidth] = useState(0);

    const [pageNavTabsScrollableContainerWidth, setPageNavTabsScrollableContainerWidth] = useState(0);
    
    const [introductionObserved, setIntroductionObserved] = useState(false);

    const [pageNavTabClicked, setPageNavTabClicked] = useState(false);
    
    const [pageNavTabClickedId, setPageNavTabClickedId] = useState(null);

    const handleTabClick = (event, id) => {
        setPageNavTabClicked(true);
        setPageNavTabClickedId(id);
        event.preventDefault();
        const targetElement = document.getElementById(id);
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() =>  {
        if (introductionObserved) {
            if (pageNavTabsScrollableRef.current) {
                if (pageNavTabClicked && pageNavTabClickedId === "introduction") {
                    pageNavTabsScrollableRef.current.scrollLeft = introductionTabScrollLeftPosition;
                    setPageNavTabClicked(false);
                } else if (!pageNavTabClicked) {
                    pageNavTabsScrollableRef.current.scrollLeft = introductionTabScrollLeftPosition;
                } else {
                    return;
                };                
            };
        };
    }, [introductionObserved, introductionTabScrollLeftPosition, pageNavTabClicked, pageNavTabClickedId]);

    const [positionsObserved, setPositionsObserved] = useState(false);

    useEffect(() => {
        if (positionsObserved) {
            if (pageNavTabsScrollableRef.current) {
                if (pageNavTabClicked && pageNavTabClickedId === "positions") {
                    pageNavTabsScrollableRef.current.scrollLeft = positionsTabScrollLeftPosition;
                    setPageNavTabClicked(false);
                } else if (!pageNavTabClicked) {
                    pageNavTabsScrollableRef.current.scrollLeft = positionsTabScrollLeftPosition;
                } else {
                    return;
                };
            };
        };
    }, [pageNavTabClicked, pageNavTabClickedId, positionsObserved, positionsTabScrollLeftPosition]);

    const [educationObserved, setEducationObserved] = useState(false);

    useEffect(() => {
        if (educationObserved) {
            if (pageNavTabsScrollableRef.current) {
                if (pageNavTabClicked && pageNavTabClickedId === "education") {
                    pageNavTabsScrollableRef.current.scrollLeft = educationTabScrollLeftPosition;
                    setPageNavTabClicked(false);
                } else if (!pageNavTabClicked) {
                    pageNavTabsScrollableRef.current.scrollLeft = educationTabScrollLeftPosition;
                } else {
                    return;
                };                
            };
        };
    }, [educationObserved, educationTabScrollLeftPosition, pageNavTabClicked, pageNavTabClickedId]);

    const [awardsAndGrantsObserved, setAwardsAndGrantsObserved] = useState(false);

    useEffect(() => {
        if (awardsAndGrantsObserved) {
            if (pageNavTabsScrollableRef.current) {
                if (pageNavTabClicked && pageNavTabClickedId === "awards-and-grants") {
                    pageNavTabsScrollableRef.current.scrollLeft = awardsAndGrantsTabScrollLeftPosition;
                    setPageNavTabClicked(false);
                } else if (!pageNavTabClicked) {
                    pageNavTabsScrollableRef.current.scrollLeft = awardsAndGrantsTabScrollLeftPosition;
                } else {
                    return;
                };                
            };
        };
    }, [awardsAndGrantsObserved, awardsAndGrantsTabScrollLeftPosition, pageNavTabClicked, pageNavTabClickedId]);

    const [skillsObserved, setSkillsObserved] = useState(false);

    useEffect(() => {
        if (skillsObserved) {
            if (pageNavTabsScrollableRef.current) {
                if (pageNavTabClicked && pageNavTabClickedId === "skills") {
                    pageNavTabsScrollableRef.current.scrollLeft = skillsTabScrollLeftPosition;
                    setPageNavTabClicked(false);
                } else if (!pageNavTabClicked) {
                    pageNavTabsScrollableRef.current.scrollLeft = skillsTabScrollLeftPosition;
                } else {
                    return;
                };                
            };
        };
    }, [pageNavTabClicked, pageNavTabClickedId, skillsObserved, skillsTabScrollLeftPosition]);

    const [certificatesObserved, setCertificatesObserved] = useState(false);

    useEffect(() => {
        if (certificatesObserved) {
            if (pageNavTabsScrollableRef.current) {
                if (pageNavTabClicked && pageNavTabClickedId === "certificates") {
                    pageNavTabsScrollableRef.current.scrollLeft = certificatesTabScrollLeftPosition;
                    setPageNavTabClicked(false);
                } else if (!pageNavTabClicked) {
                    pageNavTabsScrollableRef.current.scrollLeft = certificatesTabScrollLeftPosition;
                } else {
                    return;
                };                
            };
        };
    }, [certificatesObserved, certificatesTabScrollLeftPosition, pageNavTabClicked, pageNavTabClickedId])

    const Arrow = () => {
        return (
          <svg 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 500 500"
            fill="currentColor"
          >
            <polygon points="250 250 0 0 250 0 500 250 250 500 0 500 250 250"/>
          </svg>
        );
    };

    const handlePageNavTabsScroll = () => {
        if (pageNavTabsScrollableRef.current) {
            setPageNavTabsScrollableLeftPosition(pageNavTabsScrollableRef.current.scrollLeft);
        };
    };

    const [windowWidth, setWindowWidth] = useState(0);

    const [pageTabsHeight, setPageTabsHeight] = useState(0);

    const [pageTabsAbsolute, setPageTabsAbsolute] = useState(false);

    useEffect(() => {

        const options = {
            triggerOnce: true
        };

        const tabIntersectingOptions = {
            rootMargin: "-25% 0% -75% 0%"
        };

        const profilePhotoHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setProfileImageDidStart(true);
            };   
        };

        const profileImageObserver = new IntersectionObserver(profilePhotoHandler, options);
        profileImageObserver.observe(profileImage.current);

        const introductionIntersectingHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIntroductionObserved(true);
            } else {
                setIntroductionObserved(false);
            };
        };

        const introductionObserver = new IntersectionObserver(introductionIntersectingHandler, tabIntersectingOptions);
        introductionObserver.observe(introductionRef.current);

        const positionsIntersectingHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setPositionsObserved(true);
            } else {
                setPositionsObserved(false);
            };
        };

        const positionsObserver = new IntersectionObserver(positionsIntersectingHandler, tabIntersectingOptions);
        positionsObserver.observe(positionsRef.current);

        const educationIntersectingHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setEducationObserved(true);
            } else {
                setEducationObserved(false);
            };
        };

        const educationObserver = new IntersectionObserver(educationIntersectingHandler, tabIntersectingOptions);
        educationObserver.observe(educationRef.current);

        const awardsAndGrantsIntersectingHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setAwardsAndGrantsObserved(true);
            } else {
                setAwardsAndGrantsObserved(false);
            };
        };

        const awardsAndGrantsObserver = new IntersectionObserver(awardsAndGrantsIntersectingHandler, tabIntersectingOptions);
        awardsAndGrantsObserver.observe(awardsAndGrantsRef.current);

        const skillsIntersectingHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setSkillsObserved(true);
            } else {
                setSkillsObserved(false);
            };
        };

        const skillsObserver = new IntersectionObserver(skillsIntersectingHandler, tabIntersectingOptions);
        skillsObserver.observe(skillsRef.current);

        const certificatesIntersectingHandler = (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setCertificatesObserved(true);
            } else {
                setCertificatesObserved(false);
            };
        };

        const certificatesObserver = new IntersectionObserver(certificatesIntersectingHandler, tabIntersectingOptions);
        certificatesObserver.observe(certificatesRef.current);

        // const handleScroll = debounce(() => {
        //     // find current scroll position
        //     const currentScrollPos = window.scrollY;
    
        //     // set state based on location info
        //     setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
    
        //     // set state to new scroll position
        //     setPrevScrollPos(currentScrollPos);
        //     // timer set to 100 milliseconds:
        // }, 100);

        let triggerAbsolutePageTabsYPosition = 0;

        const handleScroll = () => {

            setCurrentStickyTabsPosition(stickyTabsRef.current.getBoundingClientRect().top + window.scrollY);

            setCurrentActionsPosition(actionsRef.current.getBoundingClientRect().top + window.scrollY);

            let position = window.scrollY;

            if (position > currentStickyTabsPosition) {
                setTabsSticky(true);
            } else if (position <= currentStickyTabsPosition) {
                setTabsSticky(false);
            };

            // get the y position of the bottom of the about_sections div - pageNavTabs height

            let stickyNavTabsYPosition = pageNavTabsScrollableContainerRef.current.getBoundingClientRect().top + window.scrollY;

            if (pageTabsHeight) {

                triggerAbsolutePageTabsYPosition = (aboutSectionsRef.current.getBoundingClientRect().bottom + window.scrollY) - pageTabsHeight;

            };

            // console.log("bottom of about_sections - pageTabsHeight + window.scrollY: ", triggerAbsolutePageTabsYPosition)
            // console.log("currentStickyTabsPosition: ", stickyNavTabsYPosition);

            if ((position + window.innerHeight) < triggerAbsolutePageTabsYPosition) {
                setPageTabsAbsolute(false);
            } else {
                if (stickyNavTabsYPosition >= triggerAbsolutePageTabsYPosition) {
                    setPageTabsAbsolute(true);
                } else {
                    setPageTabsAbsolute(false);
                };
            };

            if (position > currentActionsPosition) {
                setActionsSticky(true);
            } else if (position <= currentActionsPosition) {
                setActionsSticky(false);
            };
        };

        if (pageNavTabsScrollableRef.current) {
            setPageNavTabsScrollableWidth(pageNavTabsScrollableRef.current.scrollWidth);
        };

        if (pageNavTabsScrollableContainerRef.current) {
            setPageNavTabsScrollableContainerWidth(pageNavTabsScrollableContainerRef.current.getBoundingClientRect().width);
        };

        if (introductionTabRef.current) {
            setIntroductionTabWidth(introductionTabRef.current.getBoundingClientRect().width);
            if (introductionTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                setIntroductionTabScrollLeftPosition(introductionTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - introductionTabWidth/2));
            } else if (introductionTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                setIntroductionTabScrollLeftPosition(introductionTabRef.current.offsetLeft);
            } else {
                setIntroductionTabScrollLeftPosition(0);
            };
        };

        if (positionsTabRef.current) {
            setPositionsTabWidth(positionsTabRef.current.getBoundingClientRect().width);
            if (positionsTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                setPositionsTabScrollLeftPosition(positionsTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - positionsTabWidth/2));
            } else if (positionsTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                setPositionsTabScrollLeftPosition(positionsTabRef.current.offsetLeft);
            }  else {
                setPositionsTabScrollLeftPosition(0);
            };            
        };

        if (educationTabRef.current) {
            setEducationTabWidth(educationTabRef.current.getBoundingClientRect().width);
            if (educationTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                setEducationTabScrollLeftPosition(educationTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - educationTabWidth/2));
            } else if (educationTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                setEducationTabScrollLeftPosition(educationTabRef.current.offsetLeft);
            } else {
                setEducationTabScrollLeftPosition(0);
            };            
        };

        if (awardsAndGrantsTabRef.current) {
            setAwardsAndGrantsTabWidth(awardsAndGrantsTabRef.current.getBoundingClientRect().width);
            if (awardsAndGrantsTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                setAwardsAndGrantsTabScrollLeftPosition(awardsAndGrantsTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - awardsAndGrantsTabWidth/2));
            } else if (awardsAndGrantsTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                setAwardsAndGrantsTabScrollLeftPosition(awardsAndGrantsTabRef.current.offsetLeft);
            } else {
                setAwardsAndGrantsTabScrollLeftPosition(0);
            };            
        };

        if (skillsTabRef.current) {
            setSkillsTabWidth(skillsTabRef.current.getBoundingClientRect().width);
            if (skillsTabRef.current.offsetLeft > pageNavTabsScrollableContainerWidth/2) {
                setSkillsTabScrollLeftPosition(skillsTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - skillsTabWidth/2));
            } else if (skillsTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                setSkillsTabScrollLeftPosition(skillsTabRef.current.offsetLeft);
            } else {
                setSkillsTabScrollLeftPosition(0);
            };            
        };

        if (certificatesTabRef.current) {
            setCertificatesTabWidth(certificatesTabRef.current.getBoundingClientRect().width);
            if (certificatesTabRef.current.offsetLeft > pageNavTabsScrollableContainerWidth/2) {
                setCertificatesTabScrollLeftPosition(certificatesTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - certificatesTabWidth/2));
            } else if (certificatesTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                setCertificatesTabScrollLeftPosition(certificatesTabRef.current.offsetLeft);
            }  else {
                setCertificatesTabScrollLeftPosition(0);
            };
        };

        setWindowWidth(window.innerWidth);
        setPageTabsHeight(pageNavTabsScrollableContainerRef.current.getBoundingClientRect().height);

        const handleWindowResize = () =>  {

            setWindowWidth(window.innerWidth);          

            if (pageTabsHeight) {
                triggerAbsolutePageTabsYPosition = (aboutSectionsRef.current.getBoundingClientRect().bottom + window.scrollY) - pageTabsHeight;
            };

            if (pageNavTabsScrollableRef.current) {
                setPageNavTabsScrollableWidth(pageNavTabsScrollableRef.current.scrollWidth);
            };

            if (pageNavTabsScrollableContainerRef.current) {
                setPageNavTabsScrollableContainerWidth(pageNavTabsScrollableContainerRef.current.getBoundingClientRect().width);
            };

            if (pageNavTabsScrollableRef.current) {
                setPageNavTabsScrollableWidth(pageNavTabsScrollableRef.current.scrollWidth);
            };
    
            if (pageNavTabsScrollableContainerRef.current) {
                setPageNavTabsScrollableContainerWidth(pageNavTabsScrollableContainerRef.current.getBoundingClientRect().width);
            };
    
            if (introductionTabRef.current) {
                setIntroductionTabWidth(introductionTabRef.current.getBoundingClientRect.width);
                if (introductionTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                    setIntroductionTabScrollLeftPosition(introductionTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - introductionTabWidth/2));
                } else if (introductionTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                    setIntroductionTabScrollLeftPosition(introductionTabRef.current.offsetLeft);
                } else {
                    setIntroductionTabScrollLeftPosition(0);
                };
            };
    
            if (positionsTabRef.current) {
                setPositionsTabWidth(positionsTabRef.current.getBoundingClientRect().width);
                if (positionsTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                    setPositionsTabScrollLeftPosition(positionsTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - positionsTabWidth/2));
                } else if (positionsTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                    setPositionsTabScrollLeftPosition(positionsTabRef.current.offsetLeft);
                }  else {
                    setPositionsTabScrollLeftPosition(0);
                };            
            };
    
            if (educationTabRef.current) {
                setEducationTabWidth(educationTabRef.current.getBoundingClientRect().width);
                if (educationTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                    setEducationTabScrollLeftPosition(educationTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - educationTabWidth/2));
                } else if (educationTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                    setEducationTabScrollLeftPosition(educationTabRef.current.offsetLeft);
                } else {
                    setEducationTabScrollLeftPosition(0);
                };            
            };
    
            if (awardsAndGrantsTabRef.current) {
                setAwardsAndGrantsTabWidth(awardsAndGrantsTabRef.current.getBoundingClientRect().width);
                if (awardsAndGrantsTabRef.current.offsetLeft > (pageNavTabsScrollableContainerWidth/2)) {
                    setAwardsAndGrantsTabScrollLeftPosition(awardsAndGrantsTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - awardsAndGrantsTabWidth/2));
                } else if (awardsAndGrantsTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                    setAwardsAndGrantsTabScrollLeftPosition(awardsAndGrantsTabRef.current.offsetLeft);
                } else {
                    setAwardsAndGrantsTabScrollLeftPosition(0);
                };            
            };
    
            if (skillsTabRef.current) {
                setSkillsTabWidth(skillsTabRef.current.getBoundingClientRect().width);
                if (skillsTabRef.current.offsetLeft > pageNavTabsScrollableContainerWidth/2) {
                    setSkillsTabScrollLeftPosition(skillsTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - skillsTabWidth/2));
                } else if (skillsTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                    setSkillsTabScrollLeftPosition(skillsTabRef.current.offsetLeft);
                } else {
                    setSkillsTabScrollLeftPosition(0);
                };            
            };
    
            if (certificatesTabRef.current) {
                setCertificatesTabWidth(certificatesTabRef.current.getBoundingClientRect().width);
                if (certificatesTabRef.current.offsetLeft > pageNavTabsScrollableContainerWidth/2) {
                    setCertificatesTabScrollLeftPosition(certificatesTabRef.current.offsetLeft - (pageNavTabsScrollableContainerWidth/2 - certificatesTabWidth/2));
                } else if (certificatesTabRef.current.offsetLeft > (pageNavTabsScrollableWidth - (pageNavTabsScrollableContainerWidth/2))) {
                    setCertificatesTabScrollLeftPosition(certificatesTabRef.current.offsetLeft);
                }  else {
                    setCertificatesTabScrollLeftPosition(0);
                };
            };
        };

        window.addEventListener("resize", handleWindowResize);

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            window.removeEventListener('scroll', handleScroll);
        };
            
    }, [
        pageTabsHeight, 
        currentStickyTabsPosition, 
        currentActionsPosition, 
        introductionTabScrollLeftPosition, 
        positionsTabScrollLeftPosition, 
        educationTabScrollLeftPosition, 
        awardsAndGrantsTabScrollLeftPosition, 
        skillsTabScrollLeftPosition, 
        certificatesTabScrollLeftPosition, 
        pageNavTabsScrollableContainerWidth, 
        pageNavTabsScrollableLeftPosition, 
        pageNavTabsScrollableWidth, 
        introductionTabWidth, 
        positionsTabWidth, 
        educationTabWidth, 
        awardsAndGrantsTabWidth, 
        skillsTabWidth, 
        certificatesTabWidth
    ]);

    const clickPageNavTabsScrollLeftHandler = () => {
        if (pageNavTabsScrollableRef.current) {
            pageNavTabsScrollableRef.current.scrollLeft = pageNavTabsScrollableRef.current.scrollLeft - (pageNavTabsScrollableContainerWidth/2);
        };
    };

    const clickPageNavTabsScrollRightHandler = () => {
        if (pageNavTabsScrollableRef.current) {
            pageNavTabsScrollableRef.current.scrollLeft = pageNavTabsScrollableRef.current.scrollLeft + (pageNavTabsScrollableContainerWidth/2);
        };
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Stephen Dewyer",
        "url": "https://stephendewyerwebwork.vercel.app/about",
        "jobTitle": "UX Engineer, UX Designer, Software Developer",
        "worksFor": {
        "@type": "Organization",
        "name": "Art in Tech Services Inc."
        },
        "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Yale University, Maryland Institute College of Art",
        },
        "award": [
        "Knight Arts Challenge Detroit Grant",
        "Awesome Foundation Grant"
        ],
        "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tucson",
        "addressRegion": "AZ",
        "addressCountry": "US"
        },
        "email": "mailto:stephen.dewyer@stephengdewyer.info",
        "sameAs": [
        "https://www.linkedin.com/in/stephen-dewyer",
        "https://github.com/stephendewyer"
        ]
    }

    return (
        <Fragment>
            <Head>
                <title>About Stephen Dewyer | UX Engineer, UX Designer & Software Developer</title>
                <meta name="title" content="About Stephen Dewyer | UX Engineer, UX Designer & Software Developer" />
                <meta name="description" content="Learn more about Stephen Dewyer, an award-winning UX Engineer, UX Designer, and Software Developer based in Tucson, Arizona. With over 10 years of experience, Stephen bridges design and engineering to create meaningful digital experiences." />
                <meta name="keywords" content="Stephen Dewyer, About Stephen Dewyer, UX Engineer Tucson, UX Designer Tucson, Software Developer Tucson, Full Stack Developer, Frontend Developer, Product Designer, UX Portfolio" />
                <meta name="author" content="Stephen Dewyer" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:type" content="profile" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/images/profile/stephen_dewyer_10_cropped_square.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/about" />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <div className={classes.aboutPageContainer}>
                <h1>
                    about
                </h1>
                <div 
                    className={classes.about_sections}
                    ref={aboutSectionsRef}
                >
                    <div 
                        className={classes.tabs}
                        ref={stickyTabsRef}
                        style={windowWidth <= 720 ? {height: `${pageTabsHeight}px`} : {height: "auto"}}
                    >
                        <div 
                            ref={pageNavTabsScrollableContainerRef}
                            className={pageTabsAbsolute ? classes.tabsAbsolute : tabsSticky ? classes.tabs_inner_sticky : classes.tabs_inner} 
                        >
                            <ul 
                                ref={pageNavTabsScrollableRef}
                                className={classes.tabs_list} 
                                onScroll={handlePageNavTabsScroll}
                            >
                                <a onClick={(event) => handleTabClick(event, "introduction")}>
                                    <li 
                                        ref={introductionTabRef}
                                        id="introductionTab"
                                        className={introductionObserved ? classes.nav_tab_active : classes.nav_tab} 
                                    >
                                        introduction
                                    </li>
                                </a>
                                <a onClick={(event) => handleTabClick(event, "positions")}>
                                    <li 
                                        ref={positionsTabRef}
                                        id="positionsTab"
                                        className={positionsObserved ? classes.nav_tab_active : classes.nav_tab} 
                                    >
                                        work history
                                    </li>
                                </a>
                                <a onClick={(event) => handleTabClick(event, "education")}>
                                    <li 
                                        ref={educationTabRef}
                                        id="educationTab"
                                        className={educationObserved ? classes.nav_tab_active: classes.nav_tab} 
                                    >
                                        education
                                    </li>
                                </a>
                                <a onClick={(event) => handleTabClick(event, "awards-and-grants")}>
                                    <li 
                                        ref={awardsAndGrantsTabRef}
                                        id="awardsAndGrantsTab"
                                        className={awardsAndGrantsObserved ? classes.nav_tab_active : classes.nav_tab} 
                                    >
                                        awards and grants
                                    </li>
                                </a>
                                <a onClick={(event) => handleTabClick(event, "skills")}>
                                    <li 
                                        ref={skillsTabRef}
                                        id="skillsTab"
                                        className={skillsObserved ? classes.nav_tab_active : classes.nav_tab} 
                                    > 
                                        skills
                                    </li>
                                </a>
                                <a onClick={(event) => handleTabClick(event, "certificates")}>
                                    <li 
                                        ref={certificatesTabRef}
                                        id="certificatesTab"
                                        className={certificatesObserved ? classes.nav_tab_active : classes.nav_tab} 
                                    >
                                        courses
                                    </li>
                                </a>
                            </ul>
                            <button
                                className={classes.arrow_left_scroll}
                                style={{display: (pageNavTabsScrollableLeftPosition === 0) ? "none" : ""}}
                                onClick={clickPageNavTabsScrollLeftHandler}
                            >
                                <div className={classes.arrow_container}>
                                    <Arrow />
                                </div>
                            </button>
                            <button 
                                className={classes.arrow_right_scroll}
                                style={{display: (pageNavTabsScrollableLeftPosition >= (pageNavTabsScrollableWidth - pageNavTabsScrollableContainerWidth - 1) ) ? "none" : ""}}
                                onClick={clickPageNavTabsScrollRightHandler}
                            >
                                <div className={classes.arrow_container}>
                                    <Arrow />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={classes.about}>
                        <div 
                            className={classes.intro_section} 
                            id="introduction" 
                            ref={introductionRef}
                        >
                            <div className={classes.story}>
                                <h2 style={{textAlign: "center", paddingBottom: "1rem"}}>
                                    introduction
                                </h2>
                                <h3 className={classes.story_headline}>
                                    I’m Stephen.  I bridge UX design and software engineering to build digital experiences people love. 
                                </h3>
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
                                    I&apos;ve created web platforms from the ground up for organizations in higher education, civic engagement, art, publishing and digital technology.  My work uses advanced technologies, art and a focus on the user to develop creative software solutions to challenging problems.  
                                    <br /><br />
                                    After producing the website for an award-winning journal of art and culture(s) in Detroit, Michigan called Infinite Mile from 2013 - 2017, I decided to hone my skills in software development and UX design.  Seeing how the software I created helped improve peoples&apos; lives made pursuing software development and UX design an attractive endeavor.  In 2017, I launched a non-profit organization called Public Arts Commission that is the platform for the art community in politics.  Currently, I am Founding Director of Art in Tech Services, a company that produces custom and original software using advancements in art and digital technology.  The skills I gained as an artist I&apos;m able to use to craft enjoyable user experiences and find creative technical solutions in the development of software.
                                 </p>
                                 <div className={classes.story_image_and_caption}>
                                    <figure>
                                        <Image 
                                            src={InfiniteMileArtAndRaceConference01}
                                            layout="responsive"
                                            alt="Infinite Mile 2016 Art & Race Conference at MOCAD with University of Michigan Stamps School of Art and Design"
                                            priority
                                        />
                                    </figure>
                                    <figcaption className={classes.caption}>
                                        Infinite Mile 2016 Art & Race Conference at MOCAD with University of Michigan Stamps School of Art and Design.  Photograph by Sarah Nesbitt.
                                    </figcaption>
                                 </div>
                                 <p className={classes.myStoryParagraphs}>  
                                    Today, I am more committed than ever to crafting digital experiences that help improve peoples&apos; lives.  I&apos;m able to use the leadership skills I gained to work across teams to pursue common goals that positively impact community.   Outside work, I enjoy working out, running, traveling, hiking, art, coffee, farmers&apos; markets and meeting people.
                                </p>
                                <div className={classes.story_image_and_caption}>
                                    <figure>
                                        <Image 
                                            src={PublicArtsCommissionCandidateMeeting}
                                            layout="responsive"
                                            alt="Stephen Dewyer meeting Erin Maye Quade at gathering in front of public art for Public Arts Commission"
                                            priority
                                        />
                                    </figure>
                                    <figcaption className={classes.caption}>
                                        Stephen Dewyer meeting with Minnesota State Senator Erin Maye Quade at gathering in front of public art for Public Arts Commission.
                                    </figcaption>
                                </div>
                            </div>
                        </div>
                        <div 
                            className={classes.positions}
                            ref={positionsRef}
                        >
                            <h3 id="positions" style={{textAlign: "center"}}>work history</h3>
                            <ExperienceAccordion experience={experience}/>
                        </div>
                        <div 
                            className={classes.education}
                            ref={educationRef}
                            id="education"
                        >
                            <h3 style={{textAlign: "center"}}>
                                education
                            </h3>
                            <div className={classes.label_paragraphs}>
                                <span className={classes.position}>MFA in Sculpture</span>
                                <span className={classes.company}>Yale University School of Art</span>
                                <p className={classes.location_and_dates}><span>2011</span><span>New Haven, Connecticut</span></p>
                            </div>
                            <div className={classes.label_paragraphs}>
                                <span className={classes.position}>BFA <span style={{fontStyle: "italic"}}>cum laude</span> in Art History, Theory <span>&#38;</span> Criticism</span>
                                <span className={classes.company}>Maryland Institute College of Art (MICA)</span>
                                <p className={classes.location_and_dates}>
                                    <span>
                                        2008
                                    </span>
                                    <span>
                                        Baltimore, Maryland
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div 
                            className={classes.awards_and_grants_container}
                            ref={awardsAndGrantsRef}
                        >
                            <h3 id="awards-and-grants" className={classes.awards_and_grants_header}>awards and grants</h3>
                            <div className={classes.awards_and_grants}>
                                <div className={classes.award}>
                                    <div className={classes.label_paragraphs}>
                                        <span className={classes.position_awards_and_grants}>Knight Arts Challenge Detroit matching $20,000 grant</span>
                                        <span className={classes.company_awards_and_grants}>John S. and James L. Knight Foundation</span>
                                        <p 
                                            className={classes.location_and_dates_awards_and_grants}
                                        >
                                            <span>Miami, Florida</span>
                                            <span>2014 &ndash; 2016</span>
                                        </p>
                                    </div>
                                    <ul className={classes.label_paragraphs}>
                                        <li className={classes.awards_and_grants_item_project}>
                                            Project: ∞ mile
                                        </li>
                                    </ul>
                                </div>
                                <div className={classes.award}>
                                    <div className={classes.label_paragraphs}>
                                        <span className={classes.position_awards_and_grants}>Detroit Chapter June 2014 $1,000 grant</span>
                                        <span className={classes.company_awards_and_grants}>Awesome Foundation</span>
                                        <p className={classes.location_and_dates_awards_and_grants}>
                                            <span>Boston, Massachusetts</span>
                                            <span>2014</span>
                                        </p>
                                    </div>
                                    <ul className={classes.awards_and_grants_item_project}>
                                        <li>
                                            Project: ∞ mile
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div 
                            className={classes.skills}
                            ref={skillsRef}
                            id="skills"
                        >
                            <h3 style={{textAlign: "center"}}>skills</h3>
                            <SkillsAccordion skills={skills} />          
                        </div>
                        <div 
                            className={classes.certificates}
                            id="certificates"
                            ref={certificatesRef}
                        >
                            <h3 style={{textAlign: "center"}}>courses</h3>
                            <div className={classes.certificates_group}>
                                <div className={classes.label_paragraphs}>
                                    <span className={classes.position}>Certificates in Software Development, Machine Learning, UX Design and Web Accessibility</span>
                                    <span className={classes.company}>Udemy</span>
                                    <span className={classes.location_and_dates}>2021 &ndash; 2024</span>
                                </div>
                                <ul>
                                    <li>
                                        Beginning C++ Programming - From Beginner to Beyond
                                    </li>
                                    <li>
                                        Understanding TypeScript
                                    </li>
                                    <li>
                                        Machine Learning A-Z: AI, Python & R + ChatGPT Bonus [2023]
                                    </li>
                                    <li>
                                        GraphQL by Example
                                    </li>
                                    <li>
                                        Svelte.js - The Complete Guide (incl. Sapper.js)
                                    </li>
                                    <li>
                                        NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)
                                    </li>
                                    <li>
                                        React - The Complete Guide (incl Hooks, React Router, Redux)
                                    </li>
                                    <li>
                                        Web Accessibility Training Course - WCAG 2.1 Compliance
                                    </li>
                                    <li>
                                        The User Researcher&#39;s guide to UX discoveries
                                    </li>
                                </ul>
                            </div>
                            <div className={classes.certificates_group}>
                                <div className={classes.label_paragraphs}>
                                    <span className={classes.position}>Certificates in Software Development and Leadership</span>
                                    <span className={classes.company}> University of Michigan &#8211; Coursera</span>
                                    <span className={classes.location_and_dates}>2020 &ndash; 2021</span>
                                </div>
                                <ul>
                                    <li>
                                        JavaScript, jQuery, and JSON
                                    </li>
                                    <li>
                                        Interactivity with JavaScript
                                    </li>
                                    <li>
                                        Building Database Applications in PHP
                                    </li>
                                    <li>
                                        Introduction to Structured Query Language (SQL)
                                    </li>
                                    <li>
                                        Building Web Applications in PHP
                                    </li>
                                    <li>
                                        Intermediate PostgreSQL
                                    </li>
                                    <li>
                                        Database Design and Basic SQL in PostgreSQL
                                    </li>
                                    <li>
                                        Python Data Structures
                                    </li>
                                    <li>
                                        Python for Everybody
                                    </li>
                                    <li>
                                        Inspiring and Motivating Individuals
                                    </li>
                                </ul>
                            </div> 
                            <div className={classes.certificates_group}>
                                <div className={classes.label_paragraphs}>
                                    <span className={classes.position}>Certificates in UX Design</span>
                                    <span className={classes.company}>Interaction Design Foundation</span>
                                    <span className={classes.location_and_dates}>2020</span>
                                </div>
                                <ul>
                                    <li>
                                        UI Design Patterns for Successful Software
                                    </li>
                                    <li>
                                        Mobile User Experience (UX) Design
                                    </li>
                                    <li>
                                        Become a UX Designer from Scratch
                                    </li>
                                    <li>
                                        Human-Computer Interaction
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div 
                        ref={actionsRef}
                        className={classes.action_buttons}
                    >
                        <div className={actionsSticky ? classes.action_buttons_sticky : classes.action_buttons_relative}> 
                            <Link href="/PDFs/STEPHEN_DEWYER_resume.pdf" passHref={true} aria-label="link to resume PDF" target="_blank" rel="noopener noreferrer">
                                <ResumeButton passHref={true} />
                            </Link>
                            {(windowWidth > 720) ? 
                                <MyLink href="/contact" passHref >
                                    <ButtonAction aria-label="link to contact page">
                                        let&#39;s work together
                                    </ButtonAction>
                                </MyLink> : ""
                            }
                        </div>
                    </div>
                </div>
                {(windowWidth <= 720) ? 
                    <MyLink href="/contact" passHref >
                        <ButtonAction aria-label="link to contact page">
                            let&#39;s work together
                        </ButtonAction>
                    </MyLink> : ""
                }
            </div>
        </Fragment>
    );
};
export default AboutPage;