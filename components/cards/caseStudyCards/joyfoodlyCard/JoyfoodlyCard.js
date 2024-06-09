import styles from './JoyfoodlyCard.module.css';
import Image from 'next/image';
import MyLink from '../../../../public/util/myLink';
import ButtonAction from '../../../buttons/buttonAction/ButtonAction';
import { useState } from 'react';
import JoyfoodlyMobilePrototype from '../../../../public/images/case_studies/Joyfoodly/prototypes/joyfoodly_web_prototype_01.png';
import JoyfoodlyDesktopPrototype from '../../../../public/images/case_studies/Joyfoodly/prototypes/joyfoodly_laptop_prototype.png';
import JoyfoodlyBackground from '../../../../public/images/case_studies/Joyfoodly/background/Joyfoodly_background.jpg';

const JoyfoodlyCard = () => {

  const [joyfoodlyIsHovered, setJoyfoodlyIsHovered] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <div
      className={styles.case_study}
      onMouseEnter={(() => setJoyfoodlyIsHovered(true))}
      onMouseOver={(() => setJoyfoodlyIsHovered(true))}
      onMouseLeave={(() => setJoyfoodlyIsHovered(false))}
      onMouseOut={(() => setJoyfoodlyIsHovered(false))}
    >
      <div className={styles.case_study_background}>
        <div className={styles.case_study_background_image}>
          <Image 
            src={JoyfoodlyBackground} 
            alt="busy parent cooking with child" 
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
            style={{display: joyfoodlyIsHovered ? "block" : "none" }}
            autoPlay 
            muted 
            loop 
            className={styles.video}
          >         
            <source 
              src="/videos/Joyfoodly_interactions.mp4" 
              type="video/mp4"
            />       
          </video>
          <div 
            style={{display: joyfoodlyIsHovered ? "none" : "block" }}
            className={styles.case_study_prototypes}
          >
            <div className={styles.prototypes_container}>
              <div className={styles.case_study_prototype_mobile}>
                <Image
                  src={JoyfoodlyMobilePrototype}
                  alt="Joyfoodly mobile prototype"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </div>
              <div className={styles.case_study_prototype_desktop}>
                <Image
                  src={JoyfoodlyDesktopPrototype}
                  alt="Joyfoodly desktop prototype"
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
              Joyfoodly legacy website
            </h3>
            <h4>
              2022
            </h4>
            <p>
              A legacy website for a culinary education company serving families.
            </p>
            <MyLink 
              href="/case_studies/joyfoodly" 
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

export default JoyfoodlyCard;