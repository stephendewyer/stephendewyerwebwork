import Head from 'next/head';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import VideoJS from '../components/videoJS/videoJS'; // point to where the functional component is stored
import styles from '../styles/Index.module.css';
import MyLink from '../public/util/myLink';
import ButtonAction from '../components/buttons/buttonAction/ButtonAction';
import SpeechBubble from '../components/speechBubble/SpeechBubble';
import PulblicArtsCommissionCard from '../components/cards/caseStudyCards/publicArtsCommissionCard/PublicArtsCommissionCard';
import ArtInTechServicesCard from '../components/cards/caseStudyCards/artInTechServicesCard/ArtInTechServicesCard';
import JoyfoodlyCard from '../components/cards/caseStudyCards/joyfoodlyCard/JoyfoodlyCard';
import InfiniteMileCard from '../components/cards/caseStudyCards/infiniteMileCard/InfiniteMileCard';

const IndexPage = () => {

  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: false,
    loop: true,
    controls: true,
    responsive: true,
    fluid: true,
    poster: '/videos/imagine_echo/imagine_echo_still_02.jpg',
    sources: [{
      src: '/videos/imagine_echo/imagine_echo.mp4',
      type: 'video/mp4'
    }]
  }

  useEffect(() => {

		const player = playerRef.current;

		return () => {

			if (!player || player.isDisposed()) {

        return;

      };

			player.dispose();

			playerRef.current = null;

		}

	}, [playerRef])

  const handlePlayerReady = (player) => {

    playerRef.current = player;

    // you can handle player events here
    player.on('waiting', () => {

      console.log('player is waiting');

    });

    player.on('dispose', () => {

      console.log('player will dispose');

    });

  };

  const welcomeHeading = useRef();
  
  const [welcomeIsVisible, setWelcomeIsVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {

      const entry = entries[0];

      setWelcomeIsVisible(entry.isIntersecting);

    });

    observer.observe(welcomeHeading.current);

  }, []);

  return (
    <Fragment>
      <Head>
        <title>stephen dewyer UX design and full-stack web development</title>
        <meta name="description" content="portfolio of user experience (UX) design and full-stack web development by stephen garrett dewyer" />
        <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
        <meta property="og:url" content="https://stephendewyerwebwork.vercel.app" />
      </Head>
      <div className="container">
        <h1>
          user experience (UX) design and full-stack web development
        </h1>
        <div className={styles.intro_video}>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <h2 
          ref={welcomeHeading}
          className={styles.animatedHeading}
          style={(welcomeIsVisible) ? {opacity: "100%"} : {opacity: "0"}}
        >
          welcome!
        </h2>
        <p className={styles.workSection}>
            My name is <span style={{fontWeight: "bold"}}>stephen dewyer</span> and I&#39;m an award-winning <span style={{fontWeight: "bold"}}>UX designer</span>, <span style={{fontWeight: "bold"}}>full-stack web developer</span>, <span style={{fontWeight: "bold"}}>artist</span> and <span style={{fontWeight: "bold"}}>organizer</span> with <span style={{fontWeight: "bold"}}>over ten years of experience</span> creating web programs for <span style={{fontWeight: "bold"}}>public institutions</span>, <span style={{fontWeight: "bold"}}>businesses</span>, <span style={{fontWeight: "bold"}}>campaigns</span> and <span style={{fontWeight: "bold"}}>movements</span>.
        </p>
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
          I began my career in art and transitioned into software development.  
          Creating groundbreaking web programs that solve problems for people using advancements in digital technology, art and design is my passion. 
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
        <div className={styles.client_reviews}>
          <dib className={styles.clientReview}>
            <SpeechBubble>
              stephen [made] our daunting project of closing our business and two sites so easy and stress free. 
              The legacy site [he] created was exactly what we wanted. We appreciated [his] proactive way of working with us, never finding a challenge too much to handle. 
              [He is] a joy to work with!
            </SpeechBubble>
            <cite className={styles.quoteCitation}>
              Chef Hollie Greene Rottman
            </cite>
          </dib>
        </div>
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
              Have a project idea?  Want to connect?  Feel welcome to contact me.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage;