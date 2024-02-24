import styles from './ArtInTechServicesCard.module.css';
import MyLink from '../../../../public/util/myLink';
import ButtonAction from '../../../buttons/buttonAction/ButtonAction';
import Image from 'next/image';
import ArtInTechServicesMobilePrototype from '../../../../public/images/case_studies/Art_in_Tech_Services_Inc/prototypes/Art_in_Tech_Services_Inc_web_prototype_07.png';
import ArtInTechServicesDesktopPrototype from '../../../../public/images/case_studies/Art_in_Tech_Services_Inc/prototypes/Art_in_Tech_Services_Inc_web_prototype_laptop_02.png';
import ArtInTechServicesBackground from '../../../../public/images/case_studies/Art_in_Tech_Services_Inc/background/Art_in_Tech_Services_background.jpg';
import { useState } from 'react';

const ArtInTechServicesCard = () => {

    const [artInTechServicesIsHovered, setArtInTechServicesIsHovered] = useState(false);
    const [videoIsHovered, setVideoIsHovered] = useState(false);

    return (
      <MyLink 
        onMouseEnter={(() => setArtInTechServicesIsHovered(true))}
        onMouseOver={(() => setArtInTechServicesIsHovered(true))}
        onMouseLeave={(() => setArtInTechServicesIsHovered(false))}
        onMouseOut={(() => setArtInTechServicesIsHovered(false))}
        href="/case_studies/artInTechServices" 
        passHref 
      >
        <div className={artInTechServicesIsHovered? styles.case_studies_b_hovered : styles.case_studies_b}>
          <div className={styles.case_study_info_container}>
            <div className={styles.case_study_info}>
              <h3>
                  Art in Tech Services Inc web platform
              </h3>
              <h4>
                2021 &ndash; present
              </h4>
              <p>
                  A web platform for a company that combines the vision and technical expertise to make groundbreaking digital products.
              </p>
              <div className={styles.view_button} >
                  <ButtonAction
                    buttonIsActive={artInTechServicesIsHovered}
                    aria-label="link to view"
                  >
                      view
                  </ButtonAction>
              </div>
            </div>
          </div>
          <div 
            className={styles.case_study_image}
            onMouseEnter={(() => setVideoIsHovered(true))}
            onMouseOver={(() => setVideoIsHovered(true))}
            onMouseLeave={(() => setVideoIsHovered(false))}
            onMouseOut={(() => setVideoIsHovered(false))}
          >
            <video 
              autoPlay 
              muted 
              loop 
              className={styles.video} 
              style={{display: videoIsHovered ? "block" : "none" }}
            >         
              <source src="/videos/Art_in_Tech_Services_interaction.mp4" type="video/mp4"/>       
            </video>
            <div style={{display: videoIsHovered ? "none" : "block" }}>
              <Image 
                src={ArtInTechServicesBackground} 
                layout="fill"
                objectFit="cover"
                alt="scene of Hal from 2001: A Space Odyssey directed by Stanley Kubrick" 
                priority
              />
              <div className={styles.case_study_overlay} />
              <div className={styles.case_study_prototypes}>
                <div className={styles.case_study_prototype_mobile}>
                  <Image
                    src={ArtInTechServicesMobilePrototype}
                    alt="Art in Tech Services mobile prototype"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
                <div className={styles.case_study_prototype_desktop}>
                  <Image
                    src={ArtInTechServicesDesktopPrototype}
                    alt="Art in Tech Services desktop prototype"
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

export default ArtInTechServicesCard;