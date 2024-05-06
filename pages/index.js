import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react';
import VideoJS from '../components/videoJS/videoJS'; // point to where the functional component is stored
import styles from '../styles/Index.module.css';
import MyLink from '../public/util/myLink';
import ButtonAction from '../components/buttons/buttonAction/ButtonAction';
import SpeechBubble from '../components/speechBubble/SpeechBubble';
import PulblicArtsCommissionCard from '../components/cards/caseStudyCards/publicArtsCommissionCard/PublicArtsCommissionCard';
import ArtInTechServicesCard from '../components/cards/caseStudyCards/artInTechServicesCard/ArtInTechServicesCard';
import JoyfoodlyCard from '../components/cards/caseStudyCards/joyfoodlyCard/JoyfoodlyCard';
import InfiniteMileCard from '../components/cards/caseStudyCards/infiniteMileCard/InfiniteMileCard';
import ClientReviewsSlideCarousel from "../components/slide_carousel/ClientReviewsSlideCarousel";
const IndexPage = () => {

  const [pageLoaded, setPageLoaded] = useState(false);

  const [showIntroParagraph, setShowIntroParagraph] = useState(false);

  useEffect(() => {
    setPageLoaded(true);

    const timeoutIntroParagraph = setTimeout(() => {
      setShowIntroParagraph(true);
    }, 750);

    // cleanup function to clear the timeout if component unmounts
    return () => clearTimeout(timeoutIntroParagraph);

  }, []);

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

  return (
    <Fragment>
      <Head>
        <title>stephen dewyer UX design and software development</title>
        <meta name="description" content="portfolio of user experience (UX) design and software development by stephen garrett dewyer" />
        <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
        <meta property="og:url" content="https://stephendewyerwebwork.vercel.app" />
      </Head>
      <div className="container">
          <div className={styles.intro_paragraph}>
            <p className={styles.paragraph}>
              <span className={styles.welcome} style={pageLoaded ? {opacity: "100%"} : {opacity: "0"}}>welcome! </span>
              <span className={styles.delayed_paragraph} style={showIntroParagraph ? {opacity: "100%"} : {opacity: "0"}}>My name is stephen dewyer.  I create ground-breaking software that helps empower communities to solve some of our most challenging problems by using my expertise in <span style={{fontWeight: "bold"}}>full-stack web development</span>, <span style={{fontWeight: "bold"}}>user experience (UX) design</span>, <span style={{fontWeight: "bold"}}>machine learning</span>, <span style={{fontWeight: "bold"}}>art</span> and as a <span style={{fontWeight: "bold"}}>founder</span></span>.
            </p>
          </div>
        <div className={styles.intro_video}>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
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
          I began my career in art and transitioned into software development.  With over a decade of experience using advancements in digital technology, art and design in my work, I’ve won numerous awards and worked with a variety of for-profit and non-profit organizations.
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
              Have a project idea?  Want to connect?  Feel welcome to contact me.
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage;