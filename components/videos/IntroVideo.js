import VideoJS from '../videoPlayer/VideoPlayer';
import React from 'react';

const IntroVideo = () => {

     const playerRef = React.useRef(null);
    
      const videoJsOptions = {
        poster: "/videos/imagine_echo/imagine_echo_still_02.jpg",
        autoplay: true,
        muted: true,
        controls: true,
        loop: true,
        responsive: true,
        fluid: true,
        sources: [{
          src: '/videos/imagine_echo/imagine_echo.mp4',
          type: 'video/mp4'
        }]
      };
    
      const handlePlayerReady = (player) => {
        playerRef.current = player;
    
        // You can handle player events here, for example:
        player.on('waiting', () => {
          console.log('player is waiting');
        });
    
        player.on('dispose', () => {
          console.log('player will dispose');
        });
      };

    return (
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    );

}

export default IntroVideo;