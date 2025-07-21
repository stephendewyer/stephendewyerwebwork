import styles from './InfiniteMileCard.module.css';
import MyLink from '../../../../public/util/myLink';
import ButtonAction from '../../../buttons/buttonAction/ButtonAction';
import { useState } from 'react';
import Image from 'next/image';
import InfiniteMileBackground from '../../../../public/images/case_studies/Infinite_Mile_LLC/background/Infinite_Mile_background.jpg';
import InfiniteMileDetroitMobilePrototype from '../../../../public/images/case_studies/Infinite_Mile_LLC/prototypes/infinite_mile_prototype_10.png';

const InfiniteMileCard = () => {

  const [infiniteMileIsHovered, setInfiniteMileIsHovered] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <div
      className={styles.case_study}
      onMouseEnter={(() => setInfiniteMileIsHovered(true))}
      onMouseOver={(() => setInfiniteMileIsHovered(true))}
      onMouseLeave={(() => setInfiniteMileIsHovered(false))}
      onMouseOut={(() => setInfiniteMileIsHovered(false))}
    >
      <div className={styles.case_study_background}>
        <div className={styles.case_study_background_image}>
          <Image 
            src={InfiniteMileBackground} 
            alt="Detroit, Michigan as seen from Fisher Building in the morning" 
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
            style={{display: infiniteMileIsHovered ? "block" : "none" }}
            autoPlay 
            muted 
            loop 
            playsInline
            className={styles.video}
          >         
            <source 
              src="/videos/Infinite_Mile_interactions.mp4" 
              type="video/mp4"
            />       
          </video>
          <div 
            style={{display: infiniteMileIsHovered ? "none" : "block" }}
            className={styles.case_study_prototypes}
          >
            <div className={styles.prototypes_container}>
              <div className={styles.case_study_prototype_desktop}>
                <Image
                  src={InfiniteMileDetroitMobilePrototype}
                  alt="Infinite Mile desktop prototype"
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
              Infinite Mile LLC website
            </h3>
            <h4>
              2013 &ndash; 2017
            </h4>
            <p>
              A website for an award-winning journal of art and culture(s) in Detroit, Michigan.
            </p>
            <div className={styles.view_button} >
              <MyLink 
                href="/case_studies/infiniteMile" 
                passHref
                onMouseEnter={(() => setButtonActive(true))}
                onMouseOver={(() => setButtonActive(true))}
                onMouseLeave={(() => setButtonActive(false))}
                onMouseOut={(() => setButtonActive(false))} 
              >
                <ButtonAction
                  buttonIsActive={buttonActive}
                  aria-label="link to view"
                >
                    view case study
                </ButtonAction>
              </MyLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfiniteMileCard;