import Head from 'next/head';
import React, { Fragment } from 'react';
import VideoJS from '../components/videoJS/videoJS' // point to where the functional component is stored
import styles from '../styles/Index.module.css';

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
        <title>stephen dewyer web design and development</title>
        <meta name="description" content="portfolio of web design and development by stephen garrett dewyer" />
        <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
        <meta property="og:url" content="https://www.stephendewyerwebwork.com" />
      </Head>
      <div className="container" role="main">
        <h1 className="header">
          web design and development
        </h1>
        <div className={styles.intro_video}>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
        <div className="paragraphs_container">
          <div className="paragraphs">
              stephen garrett dewyer is a:
              <ul><br/>
                <li>
                  full-stack web developer
                </li><br/>
                <li>
                  user experience (UX) designer
                </li><br/>
                <li>
                  award-winning artist whose work has shown in national and international exhibitions
                </li><br/>
                <li>
                  organizer with a history of bringing diverse parts of the community together to produce critically-acclaimed projects
                </li><br/>
              </ul>
              He created digital designs including web programs for:
              <ul><br/>
              <li>
                  large enterprises
                </li><br/>
                <li>
                  creative organizations
                </li><br/>
                <li>
                  progressive campaigns and movements
                </li><br/>
              </ul>
              He enjoys:
              <ul><br/>
                <li>
                  using advancements in art and digital technology to improve design for the public and businesses
                </li><br/>
              </ul>
          </div>
        </div>
      </div>
    </Fragment>
    
  )
}

export default IndexPage;