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
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <div
      className={styles.case_study}
      onMouseEnter={(() => setArtInTechServicesIsHovered(true))}
      onMouseOver={(() => setArtInTechServicesIsHovered(true))}
      onMouseLeave={(() => setArtInTechServicesIsHovered(false))}
      onMouseOut={(() => setArtInTechServicesIsHovered(false))}
    >
      <div className={styles.case_study_background}>
        <div className={styles.case_study_background_image}>
          <Image 
            src={ArtInTechServicesBackground} 
            alt="scene of Hal from 2001: A Space Odyssey directed by Stanley Kubrick" 
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className={styles.case_study_overlay}/>
      </div>
      <div className={styles.case_study_content} >
        <div className={styles.prototypes}>
          <video 
            style={{display: artInTechServicesIsHovered ? "block" : "none" }}
            autoPlay 
            muted 
            loop 
            className={styles.video}
          >         
            <source 
              src="/videos/Art_in_Tech_Services_interaction.mp4"
              type="video/mp4"
            />       
          </video>
          <div 
            style={{display: artInTechServicesIsHovered ? "none" : "block" }}
            className={styles.case_study_prototypes}
          >
            <div className={styles.prototypes_container}>
              <div className={styles.case_study_prototype_mobile}>
                <Image
                  src={ArtInTechServicesMobilePrototype}
                  alt="Art in Tech Services mobile prototype"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </div>
              <div className={styles.case_study_prototype_desktop}>
                <Image
                  src={ArtInTechServicesDesktopPrototype}
                  alt="Art in Tech Services desktop prototype"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.about_case_study}>
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
            <MyLink 
              href="/case_studies/artInTechServices"
              passHref 
            >
              <div 
                className={styles.view_button} 
                onMouseEnter={(() => setButtonActive(true))}
                onMouseOver={(() => setButtonActive(true))}
                onMouseLeave={(() => setButtonActive(false))}
                onMouseOut={(() => setButtonActive(false))}
              >
                  <ButtonAction
                    buttonIsActive={buttonActive}
                    aria-label="link to view"
                  >
                      view
                  </ButtonAction>
              </div>
            </MyLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtInTechServicesCard;