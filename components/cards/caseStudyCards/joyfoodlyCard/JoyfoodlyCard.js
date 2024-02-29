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

    return (
      <MyLink 
          onMouseEnter={(() => setJoyfoodlyIsHovered(true))}
          onMouseOver={(() => setJoyfoodlyIsHovered(true))}
          onMouseLeave={(() => setJoyfoodlyIsHovered(false))}
          onMouseOut={(() => setJoyfoodlyIsHovered(false))}
          href="/case_studies/joyfoodly" 
          passHref 
        >
          <div className={joyfoodlyIsHovered ? styles.case_studies_a_hovered : styles.case_studies_a}>
            <div className={styles.case_study_image} >  
              <video 
                autoPlay 
                muted 
                loop 
                className={styles.video}
                style={{display: joyfoodlyIsHovered ? "block" : "none" }}
              >         
                <source 
                  src="/videos/Joyfoodly_interactions.mp4" 
                  type="video/mp4"
                />       
              </video>
              <div style={{display: joyfoodlyIsHovered ? "none" : "block" }}>
                <Image 
                  src={JoyfoodlyBackground} 
                  layout="fill"
                  objectFit="cover" 
                  alt="busy parent cooking with child" 
                  priority
                /> 
                <div className={styles.case_study_overlay} />
                <div className={styles.case_study_prototypes}>
                  <div className={styles.case_study_prototype_mobile}>
                    <Image
                      src={JoyfoodlyMobilePrototype}
                      alt="Joyfoodly mobile prototype"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                  <div className={styles.case_study_prototype_desktop}>
                    <Image
                      src={JoyfoodlyDesktopPrototype}
                      alt="Joyfoodly desktop prototype"
                      layout="fill"
                      objectFit="contain"
                      priority
                    />
                  </div>
                </div>
              </div>
          </div>
          <div className={styles.case_study_info_container}>
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
              <div className={styles.view_button} >
                <ButtonAction 
                  buttonIsActive={joyfoodlyIsHovered}
                  aria-label="link to view"
                >
                  view
                </ButtonAction>
              </div>
            </div>
          </div>
        </div>
      </MyLink>
    );
}

export default JoyfoodlyCard;