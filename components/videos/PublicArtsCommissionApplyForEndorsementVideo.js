import VideoJS from '../videoPlayer/VideoPlayer';
import React from 'react';

const PublicArtsCommissionApplyForEndorsementVideo = () => {
    const playerRef = React.useRef(null);
    
      const videoJsOptions = {
        poster: "/videos/Public_Arts_Commission/public_arts_commission_apply_for_endorsement_poster.jpg",
        autoplay: true,
        muted: true,
        controls: true,
        loop: true,
        responsive: true,
        fluid: true,
        playsinline: true,
        sources: [{
          src: '/videos/Public_Arts_Commission/public_arts_commission_apply_for_endorsement.mp4',
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

export default PublicArtsCommissionApplyForEndorsementVideo;