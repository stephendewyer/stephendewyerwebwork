import Head from 'next/head';
import React, { Fragment, useEffect } from 'react';
import Image from 'next/image';
import VideoJS from '../components/videoJS/videoJS' // point to where the functional component is stored
import styles from '../styles/Index.module.css';
import Link from 'next/link';
import MyLink from '../public/util/myLink';
import Button from '../components/button/button.js';
import quoteIconStart from '../public/images/icons/quote_icon_start.svg';
import quoteIconEnd from '../public/images/icons/quote_icon_end.svg';

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


  useEffect(() => {
		const player = playerRef.current
		return () => {
			if (!player || player.isDisposed()) return
			player.dispose()
			playerRef.current = null
		}
	}, [playerRef])

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
        <h2 className="header_02">
          welcome!
        </h2>
        <div className={styles.workSection}>
          <p className={styles.myStory}>
              My name is <span style={{fontWeight: "bold"}}>stephen dewyer</span> and I&#39;m an award-winning <span style={{fontWeight: "bold"}}>UX designer</span>, <span style={{fontWeight: "bold"}}>full-stack web developer</span>, <span style={{fontWeight: "bold"}}>artist</span> and <span style={{fontWeight: "bold"}}>organizer</span> with <span style={{fontWeight: "bold"}}>over ten years of experience</span> creating web programs for <span style={{fontWeight: "bold"}}>public institutions</span>, <span style={{fontWeight: "bold"}}>businesses</span>, <span style={{fontWeight: "bold"}}>campaigns</span> and <span style={{fontWeight: "bold"}}>movements</span>.
          </p>
          <div className={styles.viewCaseStudiesButton}>
            <MyLink href="/case_studies" passHref={true}>
              <Button aria-label="link to case studies page">
                view case studies
              </Button>
            </MyLink>
          </div>
        </div>
        <h2 className="header_02">
          in my own words
        </h2>
        <div className={styles.aboutSection}>
          <div className={styles.learnAboutMeButton}>
            <MyLink href="/about" passHref={true}>
              <Button aria-label="link to about page">
                learn about me
              </Button>
            </MyLink> 
          </div>
           
          <p className={styles.myStory}>
              Improving human experiences of technology is my passion.  
              I create digital products that users love.  
              My experience allows me to create web programs that bring community together and provide value for organizations.
          </p>
        </div>
        <h2 className="header_02">
          words from clients
        </h2>
        <div className={styles.client_reviews}>
          <div className={styles.client_review_card}>
              <div className={styles.client_review_header}>
                <div className={styles.quote_icon}>
                  <Image src={quoteIconStart} layout="responsive" alt="start quote icon"/>
                </div>
                <h2 className={styles.client_review_heading}>
                  client review
                </h2>
              </div>
              <div className={styles.quote}>
                stephen [made] our daunting project of closing our business and two sites so easy and stress free. 
                  The legacy site [he] created was exactly what we wanted. 
                  We appreciated [his] proactive way of working with us, never finding a challenge too much to handle. 
                  [He is] a joy to work with!
              </div>
              <div className={styles.client_review_footer}>
                <h4 className={styles.quote_attribution}>
                  <div className={styles.quote_author_name}>
                    Chef Hollie Greene Rottman
                  </div>
                  Joyfoodly
                </h4>
                <div className={styles.quote_icon}>
                  <Image src={quoteIconEnd} layout="responsive" alt="start quote icon"/>
                </div>
              </div>
          </div>
        </div>
        <h2 className="header_02">
          get in touch
        </h2>
        <div className={styles.contactSection}>
          <p className={styles.myStory}>
              Have a project idea?  Want to connect?  Feel welcome to contact me.
          </p>
          <div className={styles.contactButton}>
            <MyLink href="/contact" passHref={true}>
              <Button aria-label="link to contact page">
                contact
              </Button>
            </MyLink>  
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexPage;