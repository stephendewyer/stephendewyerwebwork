'use client'
import styles from './PublicArtsCommissionCard.module.css';
import { useState } from 'react';
import MyLink from '../../../../public/util/myLink';
import Image from 'next/image';
import PublicArtsCommissionBackground from '../../../../public/images/case_studies/public_arts_commission_redesign/background/Public_Arts_Commission_background.jpg';
import PublicArtsCommissionDesktopPrototype from '../../../../public/images/case_studies/public_arts_commission_redesign/prototypes/public_arts_commission_14_desktop.png';
import PublicArtsCommissionMobilePrototype from '../../../../public/images/case_studies/public_arts_commission_redesign/prototypes/public_arts_commission_01_mobile.png';
import ButtonAction from '../../../buttons/buttonAction/ButtonAction';

const PulblicArtsCommissionCard = () => {

    const [publicArtsCommissionIsHovered, setPublicArtsCommissionIsHovered] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);

    return (
      <div
        className={styles.case_study}
        onMouseEnter={(() => setPublicArtsCommissionIsHovered(true))}
        onMouseOver={(() => setPublicArtsCommissionIsHovered(true))}
        onMouseLeave={(() => setPublicArtsCommissionIsHovered(false))}
        onMouseOut={(() => setPublicArtsCommissionIsHovered(false))}
      >
        <div className={styles.case_study_background}>
          <Image 
            src={PublicArtsCommissionBackground} 
            alt="doors to Michigan State Capitol Building" 
            layout="responsive"
            className={styles.background_image}
            priority
          />
          <div className={styles.case_study_overlay}/>
        </div>
        <div className={styles.case_study_content} >
          <div className={styles.prototypes}>
            <video 
              style={{display: publicArtsCommissionIsHovered ? "block" : "none" }}
              autoPlay 
              muted 
              loop 
              playsInline
              className={styles.video}
            >         
              <source 
                src="/videos/Public_Arts_Commission_interactions.mp4" 
                type="video/mp4"
              />       
            </video>
            <div 
              style={{display: publicArtsCommissionIsHovered ? "none" : "block" }}
              className={styles.case_study_prototypes}
            >
              <div className={styles.prototypes_container}>
                <div className={styles.prototype_mobile_container}>
                  <Image
                    src={PublicArtsCommissionMobilePrototype}
                    className={styles.case_study_prototype_mobile}
                    alt="Public Arts Commission mobile prototype"
                    layout="responsive"
                    priority
                  />
                </div>
                <div className={styles.prototype_desktop_container}>
                  <Image
                    src={PublicArtsCommissionDesktopPrototype}
                    className={styles.case_study_prototype_desktop}
                    alt="Public Arts Commission desktop prototype"
                    layout="responsive"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.about_case_study}>
            <div className={styles.case_study_info}>
              <h3>
                Public Arts Commission web platform
              </h3>
              <h4>
                first launched in 2017 and redesigned in 2023
              </h4>
              <p>
                  A web platform for a non-profit organization that is dedicated to reimagining the American Dream and helping make it happen for a stronger, more democratic society by giving the art community a platform in politics.
              </p>
              <div className={styles.view_button} >
                <MyLink 
                  href="/case_studies/publicArtsCommission" 
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

export default PulblicArtsCommissionCard;