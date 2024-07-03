import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import styles from '../styles/Index.module.css';
import MyLink from '../public/util/myLink';
import ButtonAction from '../components/buttons/buttonAction/ButtonAction';
import PulblicArtsCommissionCard from '../components/cards/caseStudyCards/publicArtsCommissionCard/PublicArtsCommissionCard';
import ArtInTechServicesCard from '../components/cards/caseStudyCards/artInTechServicesCard/ArtInTechServicesCard';
import JoyfoodlyCard from '../components/cards/caseStudyCards/joyfoodlyCard/JoyfoodlyCard';
import InfiniteMileCard from '../components/cards/caseStudyCards/infiniteMileCard/InfiniteMileCard';
import ClientReviewsSlideCarousel from "../components/slide_carousel/ClientReviewsSlideCarousel";

const IndexPage = () => {

  return (
    <Fragment>
      <Head>
        <title>stephen dewyer software development and UX design</title>
        <meta name="description" content="portfolio of user experience (UX) design and software development by stephen garrett dewyer" />
        <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
        <meta property="og:url" content="https://stephendewyerwebwork.vercel.app" />
      </Head>
      <div className={styles.container}>
        <div className={styles.intro_video_container}>
          <video 
              autoPlay 
              muted 
              loop 
              className={styles.intro_video}
            >         
              <source src="/videos/imagine_echo/imagine_echo.mp4" type="video/mp4"/>
              Your browser does not support the video tag.       
            </video>
        </div>
          <div className={styles.intro_paragraph}>
            <p className={styles.paragraph}>
                welcome!  My name is stephen dewyer and I&apos;m an award-winning <span style={{fontWeight: "bold"}}>software developer</span>,<span style={{fontWeight: "bold"}}> user experience (UX) designer</span>, <span style={{fontWeight: "bold"}}>founder</span> and <span style={{fontWeight: "bold"}}>artist</span>.  I enjoy creating groundbreaking software that helps empower communities to solve some of our most challenging problems.
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
          I began my career in art and moved into software development.  With over a decade of experience using advancements in digital technology, art and design in my work, I&apos;ve worked with a variety of for-profit and non-profit organizations.
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