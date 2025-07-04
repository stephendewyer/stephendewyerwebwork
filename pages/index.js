import Head from 'next/head';
import { Fragment } from 'react';
import styles from '../styles/Index.module.css';
import MyLink from '../public/util/myLink';
import ButtonAction from '../components/buttons/buttonAction/ButtonAction';
import PulblicArtsCommissionCard from '../components/cards/caseStudyCards/publicArtsCommissionCard/PublicArtsCommissionCard';
import ArtInTechServicesCard from '../components/cards/caseStudyCards/artInTechServicesCard/ArtInTechServicesCard';
import JoyfoodlyCard from '../components/cards/caseStudyCards/joyfoodlyCard/JoyfoodlyCard';
import InfiniteMileCard from '../components/cards/caseStudyCards/infiniteMileCard/InfiniteMileCard';
import ClientReviewsSlideCarousel from "../components/slide_carousel/ClientReviewsSlideCarousel";
import Link from 'next/link';
import IntroVideo from '../components/videos/IntroVideo';

const IndexPage = () => {

  return (
    <Fragment>
      <Head>
        <title>Stephen Dewyer software development and UX design</title>
        <meta name="description" content="portfolio of user experience (UX) design and software development by Stephen Garrett Dewyer" />
        <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
        <meta property="og:url" content="https://stephendewyerwebwork.vercel.app" />
      </Head>
      <div className={styles.container}>
        <div className={styles.headline_container}>
          <h1 className={styles.headline}>
            software development + user experience design
          </h1>
          <h3 className={styles.subheadline}>
            creative software solutions
          </h3>
        </div>
        <div className={styles.intro_video}>
          <IntroVideo />
        </div>
          <div className={styles.intro_paragraph}>
            <p className={styles.paragraph}>
                Welcome!  My name is Stephen Dewyer and I&apos;m an award-winning <span style={{fontWeight: "bold"}}>software developer</span>,<span style={{fontWeight: "bold"}}> user experience (UX) designer</span>, <Link href="https://artintechservices.com" passHref={true} aria-label="link to Art in Tech Services">
                <a className={styles.footer_link} target="_blank" rel="noopener noreferrer"><span style={{fontWeight: "bold"}}>founder</span></a></Link> and <Link href="https://stephengdewyer.info" passHref={true} aria-label="link to stephen dewyer art portfolio">
                <a className={styles.footer_link} target="_blank" rel="noopener noreferrer"><span style={{fontWeight: "bold"}}>artist</span></a></Link>.  I enjoy developing creative software solutions to challenging problems that help empower businesses and communities.
            </p>
          </div>
        <h2>
          featured case studies
        </h2>
        <div className={styles.case_studies}>
          <PulblicArtsCommissionCard />
          <ArtInTechServicesCard />
          <JoyfoodlyCard />
          <InfiniteMileCard />
        </div>
        <h2>
          in my own words
        </h2>
        <div className={styles.aboutSection}>
          <p className={styles.myStory}>
            I&apos;m an internationally and nationally recognized artist who got into software development after publishing a web-based art and cultural journal in Detroit called Infinite Mile.  My background in art makes me great at finding creative software solutions that improve human experiences of technology.  As a software developer and UX designer, I consider how software decisions impact user experiences and how state-of-the-art digital technologies can improve design. From the experience I gained as a founder, I am able to bring people together around a vision to impact community in a positive way. With over a decade of experience using advancements in digital technology, art and design in my work, I&apos;ve worked with a variety of for-profit and non-profit organizations including the University of Michigan Stamps School of Art and Design, MOCAD (Museum of Contemporary Art in Detroit) and the Knight Foundation.
          </p>
          <div className={styles.learnAboutMeButton}>
            <MyLink href="/about" passHref={true}>
              <ButtonAction aria-label="link to about page">
                learn about me
              </ButtonAction>
            </MyLink> 
          </div>
        </div>
        <h2>
          words from clients
        </h2>
        <ClientReviewsSlideCarousel />
        <h2>
          get in touch
        </h2>
        <div className={styles.contactSection}>
          <div className={styles.contactButton}>
            <MyLink href="/contact" passHref={true}>
              <ButtonAction aria-label="link to contact page">
                contact
              </ButtonAction>
            </MyLink>  
          </div>
          <p className={styles.myStory}>
            Have a project idea?  Want help on an existing project?  Want to connect?  Feel welcome to contact me.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage;