import styles from './InfiniteMileCard.module.css';
import MyLink from '../../../../public/util/myLink';
import ButtonAction from '../../../buttons/buttonAction/ButtonAction';
import { useState } from 'react';
import Image from 'next/image';
import InfiniteMileBackground from '../../../../public/images/case_studies/Infinite_Mile_LLC/background/Infinite_Mile_background.jpg';
import InfiniteMileDetroitMobilePrototype from '../../../../public/images/case_studies/Infinite_Mile_LLC/prototypes/infinite_mile_prototype_10.png';

const InfiniteMileCard = () => {

    const [infiniteMileIsHovered, setInfiniteMileIsHovered] = useState(false);
    const [videoIsHovered, setVideoIsHovered] = useState(false);

    return (
      <MyLink 
          onMouseEnter={(() => setInfiniteMileIsHovered(true))}
          onMouseOver={(() => setInfiniteMileIsHovered(true))}
          onMouseLeave={(() => setInfiniteMileIsHovered(false))}
          onMouseOut={(() => setInfiniteMileIsHovered(false))}
          href="/case_studies/infiniteMile" 
          passHref 
        >
          <div className={infiniteMileIsHovered ? styles.case_studies_b_hovered : styles.case_studies_b}>
            <div className={styles.case_study_info_container}>
              <div className={styles.case_study_info}>
                <h3>
                  Infinite Mile LLC website
                </h3>
                <h4>
                  2013 &ndash; 2017
                </h4>
                <p>
                  A website for an award-winning journal of art and culture(s) in Detroit, Michigan.
                </p>
                <div className={styles.view_button} >
                    <ButtonAction 
                      buttonIsActive={infiniteMileIsHovered}
                      aria-label="link to view"
                    >
                        view
                    </ButtonAction>
                </div>
              </div>
            </div>
            <div 
              onMouseEnter={(() => setVideoIsHovered(true))}
              onMouseOver={(() => setVideoIsHovered(true))}
              onMouseLeave={(() => setVideoIsHovered(false))}
              onMouseOut={(() => setVideoIsHovered(false))}
              className={styles.case_study_image}
            >
              <video 
                autoPlay 
                muted 
                loop 
                className={styles.video}
                style={{display: videoIsHovered ? "block" : "none" }}
              >         
                <source 
                  src="/videos/Infinite_Mile_interactions.mp4" 
                  type="video/mp4"
                />       
              </video>
              <div style={{display: videoIsHovered ? "none" : "block" }}>
                <Image 
                  src={InfiniteMileBackground} 
                  alt="Detroit, Michigan as seen from Fisher Building in the morning" 
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className={styles.case_study_overlay} />
                <div className={styles.case_study_prototypes}>
                    <div className={styles.case_study_prototype_desktop}>
                      <Image
                        src={InfiniteMileDetroitMobilePrototype}
                        alt="Infinite Mile desktop prototype"
                        layout="fill"
                        objectFit="contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </MyLink>
    );
}

export default InfiniteMileCard;