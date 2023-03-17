import Head from 'next/head';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import VideoJS from '../components/videoJS/videoJS' // point to where the functional component is stored
import styles from '../styles/Index.module.css';
import Link from 'next/link';
import MyLink from '../public/util/myLink';
import Button from '../components/button/button.js';
import SpeechBubble from '../components/speechBubble/SpeechBubble';
import MGTrailerScreengrab from '../public/images/case_studies/MGTrailer/MGTrailer_index_top.JPG';
import joyfoodlyScreengrab from '../public/images/case_studies/Joyfoodly/Joyfoodly_desktop.png';
import artinTechServicesScreengrab from '../public/images/case_studies/Art_in_Tech_Services_Inc/Art_in_Tech_Services_screengrab.png';
import publicArtsCommissionScreengrab from '../public/images/case_studies/Public_Arts_Commission/Public_Arts_Commission_screengrab.png';
import infiniteMileScreengrab from '../public/images/case_studies/Infinite_Mile_LLC/Infinite_Mile_Screengrab.png';

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
		const player = playerRef.current
		return () => {
			if (!player || player.isDisposed()) return
			player.dispose()
			playerRef.current = null
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
      setWelcomeIsVisible(entry.isIntersecting)
    })
    observer.observe(welcomeHeading.current)
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
        <h1 className="header">
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
        <h2 
          className="header_02"
        >
          featured case studies
        </h2>
        <div className={styles.case_studies}>
          <div className={styles.case_studies_b}>
            <div className={styles.case_study_info_container}>
              <div className={styles.case_study_info}>
                <h3 className={styles.case_study_title}>
                  M&amp;G Trailer<br/><span style={{color: "#545451"}} >2023</span>
                </h3>
                <div className={styles.case_study_subtitle}>
                  New website for a nationally recognized trailer dealership.
                </div>
                <Link 
                  href="https://mgtrailer.com/" 
                  target="_blank" 
                  passHref={true} 
                  rel="noopener noreferrer"
                >
                  <a 
                    className={styles.view_button} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      aria-label="link to view"
                      passHref={true}
                    >
                      coming soon
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.case_study_image}>
              <Link 
                  href="https://mgtrailer.com/" 
                  target="_blank" 
                  passHref={true} 
                  rel="noopener noreferrer"
                >
                  <a 
                    className={styles.view_button} 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={MGTrailerScreengrab} layout="responsive" alt="M&G Trailer screenshot" />
                  </a>
                </Link>
            </div>
          </div>
          <div className={styles.case_studies_a}>
              <div className={styles.case_study_image}>
                  <MyLink href="/case_studies/joyfoodly" passHref >
                      <Image src={joyfoodlyScreengrab} layout="responsive" alt="Joyfoodly screenshot" />
                  </MyLink>
              </div>
              <div className={styles.case_study_info_container}>
                  <div className={styles.case_study_info}>
                      <h3 className={styles.case_study_title}>
                          Joyfoodly legacy website<br /><span style={{color: "#52535E"}} >2022</span>
                      </h3>
                      <div className={styles.case_study_subtitle}>
                          A legacy website for a culinary education company serving families.
                      </div>
                      <Link href="/case_studies/joyfoodly" passHref >
                          <div className={styles.view_button} >
                              <Button aria-label="link to view">
                                  view
                              </Button>
                          </div>
                      </Link>
                  </div>
              </div>
          </div>
          <div className={styles.case_studies_b}>
              <div className={styles.case_study_info_container}>
                  <div className={styles.case_study_info}>
                      <h3 className={styles.case_study_title}>
                          Art in Tech Services Inc web programs<br/><span style={{color: "#52535E"}} >2021 &ndash; present</span>
                      </h3>
                      <div className={styles.case_study_subtitle}>
                          Web programs for a company that uses advancements in art and digital technology to improve design for businesses and the public.
                      </div>
                      <Link href="/case_studies/artInTechServices" passHref >
                          <div className={styles.view_button} >
                              <Button aria-label="link to view">
                                  view
                              </Button>
                          </div>
                      </Link>
                  </div>
              </div>
              <div className={styles.case_study_image}>
                  <MyLink href="/case_studies/artInTechServices" passHref >
                      <Image src={artinTechServicesScreengrab} layout="responsive" alt="Art in Tech Services Inc screenshot" />
                  </MyLink>
              </div>
          </div>
          <div className={styles.case_studies_a}>
              <div className={styles.case_study_image}>
                  <MyLink href="/case_studies/publicArtsCommission" passHref >
                      <Image src={publicArtsCommissionScreengrab} layout="responsive" alt="Public Arts Commission screenshot" />
                  </MyLink>                    
              </div>
              <div className={styles.case_study_info_container}>
                  <div className={styles.case_study_info}>
                      <h3 className={styles.case_study_title}>
                          Public Arts Commission web programs<br/><span style={{color: "#52535E"}} >2017 &ndash; present</span>
                      </h3>
                      <div className={styles.case_study_subtitle}>
                          Web programs for a non-profit organization that connects the art community to democratic movements.
                      </div>
                      <Link href="/case_studies/publicArtsCommission" passHref >
                          <div className={styles.view_button} >
                              <Button aria-label="link to view">
                                  view
                              </Button>
                          </div>
                      </Link>
                  </div>
              </div>
          </div>
          <div className={styles.case_studies_b}>
              <div className={styles.case_study_info_container}>
                  <div className={styles.case_study_info}>
                      <h3 className={styles.case_study_title}>
                          Infinite Mile LLC website<br/><span style={{color: "#52535E"}} >2013 &ndash; 2017</span>
                      </h3>
                      <div className={styles.case_study_subtitle}>
                          A website for an award-winning journal of art and culture(s) in Detroit, Michigan.
                      </div>
                      <Link href="/case_studies/infiniteMile" passHref >
                          <div className={styles.view_button} >
                              <Button aria-label="link to view">
                                  view
                              </Button>
                          </div>
                      </Link>
                  </div>
              </div>
              <div className={styles.case_study_image}>
                  <MyLink href="/case_studies/infiniteMile" passHref >
                      <Image src={infiniteMileScreengrab} layout="responsive" alt="Infinite Mile screenshot" />
                  </MyLink>
              </div>
          </div>
        </div>
        <h2 
          className="header_02"
        >
          in my own words
        </h2>
        <div className={styles.aboutSection}>
          <p className={styles.myStory}>
              Improving human experiences of technology is my passion.  
              I create digital products that users love.  
              My experience allows me to create web programs that bring community together and provide value for organizations.
          </p>
          <div className={styles.learnAboutMeButton}>
            <MyLink href="/about" passHref={true}>
              <Button aria-label="link to about page">
                learn about me
              </Button>
            </MyLink> 
          </div>
        </div>
        <h2 
          className="header_02"
        >
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
        <h2 
          className="header_02"
        >
          get in touch
        </h2>
        <div className={styles.contactSection}>
          <div className={styles.contactButton}>
            <MyLink href="/contact" passHref={true}>
              <Button aria-label="link to contact page">
                contact
              </Button>
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