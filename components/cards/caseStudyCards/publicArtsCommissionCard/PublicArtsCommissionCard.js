import styles from './PublicArtsCommissionCard.module.css';
import { useState, Fragment } from 'react';
import MyLink from '../../../../public/util/myLink';
import Image from 'next/image';
import PublicArtsCommissionBackground from '../../../../public/images/case_studies/public_arts_commission_redesign/background/Public_Arts_Commission_background.jpg';
import PublicArtsCommissionDesktopPrototype from '../../../../public/images/case_studies/public_arts_commission_redesign/prototypes/public_arts_commission_14_desktop.png';
import PublicArtsCommissionMobilePrototype from '../../../../public/images/case_studies/public_arts_commission_redesign/prototypes/public_arts_commission_01_mobile.png';
import ButtonAction from '../../../buttons/buttonAction/ButtonAction';

const PulblicArtsCommissionCard = () => {

    const [publicArtsCommissionIsHovered, setPublicArtsCommissionIsHovered] = useState(false);
    const [videoIsHovered, setVideoIsHovered] = useState(false);

    return (
        <MyLink 
            onMouseEnter={(() => setPublicArtsCommissionIsHovered(true))}
            onMouseOver={(() => setPublicArtsCommissionIsHovered(true))}
            onMouseLeave={(() => setPublicArtsCommissionIsHovered(false))}
            onMouseOut={(() => setPublicArtsCommissionIsHovered(false))}
            href="/case_studies/publicArtsCommission" 
            passHref 
          >
            <div className={publicArtsCommissionIsHovered ? styles.case_studies_a_hovered : styles.case_studies_a}>
              <div 
                onMouseEnter={(() => setVideoIsHovered(true))}
                onMouseOver={(() => setVideoIsHovered(true))}
                onMouseLeave={(() => setVideoIsHovered(false))}
                onMouseOut={(() => setVideoIsHovered(false))}
                className={styles.case_study_image}
              >
                {videoIsHovered ?
                  <video autoPlay muted loop className={styles.video}>         
                    <source src="/videos/Public_Arts_Commission_interactions.mp4" type="video/mp4"/>       
                  </video>
                :
                  <Fragment>
                    <Image 
                      src={PublicArtsCommissionBackground} 
                      alt="doors to Michigan State Capitol Building" 
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                    <div className={styles.case_study_overlay} />
                    <div className={styles.case_study_prototypes}>
                      <div className={styles.case_study_prototype_mobile}>
                        <Image
                          src={PublicArtsCommissionMobilePrototype}
                          alt="Public Arts Commission mobile prototype"
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                      <div className={styles.case_study_prototype_desktop}>
                        <Image
                          src={PublicArtsCommissionDesktopPrototype}
                          alt="Public Arts Commission desktop prototype"
                          layout="fill"
                          objectFit="contain"
                          priority
                        />
                      </div>
                    </div>
                  </Fragment>
                }
              </div>
              <div className={styles.case_study_info_container}>
                <div className={styles.case_study_info}>
                  <h3>
                      Public Arts Commission web platform
                  </h3>
                  <h4>
                    first launched in 2017 and redesigned in 2023
                  </h4>
                  <p>
                      A web platform for a non-profit organization that is dedicated to expanding the political imagination for greater democracy within and outside art.
                  </p>
                  <div className={styles.view_button} >
                      <ButtonAction
                        buttonIsActive={publicArtsCommissionIsHovered}
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

export default PulblicArtsCommissionCard;