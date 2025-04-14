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
                        Worked with clients to plan and achieve client goals, meeting or exceeding client expectations
                    </li>
                    <li>
                        Created original and custom software using state-of-the-art technologies like SvelteKit and Next.js to improve performance
                    </li>
                    <li>
                        Directed company to use art in the rendering of digital services to develop creative solutions that improve human experiences of technology
                    </li>
                    <li>
                        Designed, developed, deployed and maintained the company’s website including client and administrator portals, streamlining collaboration
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
                        Responsible for overall direction of the non-profit, 501(c)(4) organization that uses original software to improve civic engagement in the art community
                    </li>
                    <li>
                        Designed, developed, deployed and maintained software programs including a campaign application management system, an endorsement management system and a publicly searchable database of all the organization’s endorsements
                    </li>
                    <li>
                        Developing a voter networking and organizing portal
                    </li>
                    <li>
                        Conducted user tests for web prototypes with Board of Directors and art experts
                    </li>
                    <li>
                        Grew Board of Directors by 233% to include leading voices in the art community by delivering strong leadership
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
                    lient: FedPoint
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
                        Designed, developed, deployed and maintained website featuring an online store for print anthologies and merchandise, generating thousands of dollars in revenue
                    </li>
                    <li>
                        Directed three editing staff and 78 contributors to publish 94 essays and interviews, 51 artist projects, 26 reviews and 27 works of fiction or poetry
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
                <table className={classes.resume_table}>
                    <colgroup>
                        <col className="left_table_column" />
                        <col className="right_table_column" />
                    </colgroup>
                    <tbody>
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
                        animation
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

        const handleWindowResize = () =>  {

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
            
    }, [currentStickyTabsPosition, currentActionsPosition, introductionTabScrollLeftPosition, positionsTabScrollLeftPosition, educationTabScrollLeftPosition, awardsAndGrantsTabScrollLeftPosition, skillsTabScrollLeftPosition, certificatesTabScrollLeftPosition, pageNavTabsScrollableContainerWidth, pageNavTabsScrollableLeftPosition, pageNavTabsScrollableWidth, introductionTabWidth, positionsTabWidth, educationTabWidth, awardsAndGrantsTabWidth, skillsTabWidth, certificatesTabWidth]);

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

    return (
        <Fragment>
            <Head>
                <title>about - Stephen Dewyer software development and UX design</title>
                <meta name="description" content="Stephen Dewyer résumé and profile" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/about" />
            </Head>
            <div className={classes.aboutPageContainer}>
                <h1>
                    about
                </h1>
                <div className={classes.about_sections}>
                    <div 
                        className={classes.tabs}
                        ref={stickyTabsRef}
                        style={{zIndex: "2"}}
                    >
                        <div 
                            ref={pageNavTabsScrollableContainerRef}
                            className={tabsSticky ? classes.tabs_inner_sticky : classes.tabs_inner} 
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
                                        story
                                    </li>
                                </a>
                                <a onClick={(event) => handleTabClick(event, "positions")}>
                                    <li 
                                        ref={positionsTabRef}
                                        id="positionsTab"
                                        className={positionsObserved ? classes.nav_tab_active : classes.nav_tab} 
                                    >
                                        positions
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
                                        certificates
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
                                    story
                                </h2>
                                <h3 className={classes.story_headline}>
                                    I&#39;m Stephen Dewyer, an award-winning software developer, user experience (UX) designer, artist and founder with over ten years of experience developing creative software solutions that improve human engagement with technology. 
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
                                    I worked extensively with universities, museums, publications, campaigns and businesses to produce critically-acclaimed projects.
                                    The experience I gained as a software developer, UX designer, artist and founder makes me great at creatively solving problems through software.
                                    <br /><br />
                                    I first entered the fields of UX design and software development to solve problems for people.  In 2013, I created the website for an award-winning journal of art and culture(s) I co-founded called <Link href="https://infinitemiledetroit.com" passHref={true} aria-label="link to Infinite Mile website"><a target="_blank" rel="noopener noreferrer">Infinite Mile</a></Link>.  The journal&#39;s website gave a platform for the art community in Detroit to publish articles and artist projects about art and cultures in the city.  Infinite Mile brought community together in one of the most segregated cities in the United States. 
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
                            <div className={classes.attributes_container}>
                                <h4 style={{textAlign: "center"}}>key attributes</h4>
                                <ul>
                                    <li>
                                        I&apos;m great at finding creative software solutions that improve human experiences of technology because of my background in art and software development.
                                    </li>
                                    <li>
                                        As a software developer and UX designer, I consider how software decisions impact user experiences and how state-of-the-art digital technologies can improve design.
                                    </li>
                                    <li>
                                        My experience as a founder allows me to bring people together around a vision to positively impact community and grow a business. 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div 
                            className={classes.positions}
                            ref={positionsRef}
                        >
                            <h3 id="positions" style={{textAlign: "center"}}>positions</h3>
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
                                <span className={classes.position}>BFA <span style={{fontStyle: "italic;"}}>cum laude</span> in Art History, Theory <span>&#38;</span> Criticism</span>
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
                            <h3 style={{textAlign: "center"}}>certificates</h3>
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