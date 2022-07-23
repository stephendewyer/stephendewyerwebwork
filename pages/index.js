import Head from 'next/head';
import React, { Fragment } from 'react';
import Image from 'next/image';
import VideoJS from '../components/videoJS/videoJS' // point to where the functional component is stored
import styles from '../styles/Index.module.css';
import quoteIcon from '../public/images/icons/quote_icon.svg';
import fullStackDeveloper from '../public/images/illustrations/full-stack_web_development.png';
import UXDesigner from '../public/images/illustrations/UX_design.png';
import artist from '../public/images/illustrations/art.png';
import organizer from '../public/images/illustrations/organizing.png';
import institutions from '../public/images/illustrations/institutions.png';
import businesses from '../public/images/illustrations/businesses.png';
import campaignsAndMovements from '../public/images/illustrations/campaigns_and_movements.png';
import artInTechServicesLogo from '../public/images/illustrations/art_in_tech_services_logo.png';

const IndexPage = () => {

  const playerRef = React.useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
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

  return (
    <Fragment>
      <Head>
        <title>stephen dewyer UX design and full-stack web development</title>
        <meta name="description" content="portfolio of user experience (UX) design and full-stack web development by stephen garrett dewyer" />
        <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
        <meta property="og:url" content="https://stephendewyerwebwork.vercel" />
      </Head>
      <div className="container" role="main">
        <h1 className="header">
          user experience (UX) design and full-stack web development
        </h1>
        <div className={styles.intro_video}>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className={styles.intro_info}>

          <h2 className={styles.intro_paragraphs}>
            stephen garrett dewyer is a:
          </h2>

          <div className={styles.intro_cards}>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={UXDesigner} layout="responsive" alt="user experience (UX) designer illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                UX designer
              </h3>
            </div>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={fullStackDeveloper} layout="responsive" alt="full-stack web developer illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                full-stack web developer with expertise in modern web technologies
              </h3>
            </div>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={artist} layout="responsive" alt="artist illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                award-winning artist whose work has shown in national and international exhibitions
              </h3>
            </div>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={organizer} layout="responsive" alt="organizer illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                organizer with a history of bringing diverse parts of the community together to produce critically-acclaimed projects
              </h3>
            </div>

          </div>

          <h2 className={styles.intro_paragraphs}>
            He created digital designs including web programs for:
          </h2>

          <div className={styles.intro_cards}>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={institutions} layout="responsive" alt="institutions illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                public institutions
              </h3>
            </div>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={businesses} layout="responsive" alt="businesses illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                businesses
              </h3>
            </div>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={campaignsAndMovements} layout="responsive" alt="businesses illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                campaigns and movements
              </h3>
            </div>

          </div>

          <h2 className={styles.intro_paragraphs}>
            He enjoys:
          </h2>

          <div className={styles.intro_cards}>

            <div className={styles.intro_card}>
              <div className={styles.intro_image}>
                <Image src={artInTechServicesLogo} layout="responsive" alt="Art in Tech Services logo illustration"/>
              </div>
              <h3 className={styles.intro_heading}>
                using advancements in art and digital technology to improve design for the public and businesses
              </h3>
            </div>

          </div>

        </div>

        <div className={styles.client_reviews}>
              
          <h2 className="header_02">
            <div className={styles.quote_icon}>
              <Image src={quoteIcon} layout="responsive" alt="external link icon"/>
            </div>
              client reviews
          </h2>

          <div className={styles.client_review_card}>
            <div className={styles.client_review_card_content}>
              <div className={styles.quote}>
                stephen [made] our daunting project of closing our business and two sites so easy and stress free. 
                The legacy site [he] created was exactly what we wanted. 
                We appreciated [his] proactive way of working with us, never finding a challenge too much to handle. 
                [He is] a joy to work with!
              </div>
              <div className={styles.client_name}>
                - Chef Hollie Greene Rottman
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  )
}

export default IndexPage;