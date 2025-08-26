'use client'
import VideoJS from '../videoPlayer/VideoPlayer';
import React from 'react';

const ArtInTechServicesClientPortalPayInvoiceVideo = () => {
    const playerRef = React.useRef(null);
    
      const videoJsOptions = {
        poster: "/videos/Art_in_Tech_Services/Art_in_Tech_Services_pay_invoice.jpg",
        autoplay: true,
        muted: true,
        controls: true,
        loop: true,
        responsive: true,
        fluid: true,
        playsinline: true,
        sources: [{
          src: '/videos/Art_in_Tech_Services/Art_in_Tech_Services_pay_invoice.mp4',
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

export default ArtInTechServicesClientPortalPayInvoiceVideo;