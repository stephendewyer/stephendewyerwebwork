import VideoJS from '../videoPlayer/VideoPlayer';
import React from 'react';

const PublicArtsCommissionDonateVideo = () => {
    const playerRef = React.useRef(null);
    
      const videoJsOptions = {
        poster: "/videos/Public_Arts_Commission/public_arts_commission_donate_poster.jpg",
        autoplay: true,
        muted: true,
        controls: true,
        loop: true,
        responsive: true,
        fluid: true,
        sources: [{
          src: '/videos/Public_Arts_Commission/public_arts_commission_donate.mp4',
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

export default PublicArtsCommissionDonateVideo;