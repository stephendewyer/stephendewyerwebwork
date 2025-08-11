import styles from './MoveableFarmCard.module.css';
import { useState } from 'react';
import Image from 'next/image';
import MoveableFarmBackground from "../../../../public/images/case_studies/Moveable_Farm/San_Francisco_17_June_2017.jpg";
import MoveableFarmDesktopPrototype from "../../../../public/images/case_studies/Moveable_Farm/Moveable_Farm_desktop_prototype_01.png";
import MoveableFarmMobilePrototype from "../../../../public/images/case_studies/Moveable_Farm/Moveable_Farm_smartphone_prototype.png";

const MoveableFarmCard = () => {

    const [moveableFarmIsHovered, setMoveableFarmIsHovered] = useState(false);

    return (
        <div
            className={styles.case_study}
            onMouseEnter={(() => setMoveableFarmIsHovered(true))}
            onMouseOver={(() => setMoveableFarmIsHovered(true))}
            onMouseLeave={(() => setMoveableFarmIsHovered(false))}
            onMouseOut={(() => setMoveableFarmIsHovered(false))}
            >
            <div className={styles.case_study_background}>
                <div className={styles.case_study_background_image}>
                <Image 
                    src={MoveableFarmBackground} 
                    alt="heirloom tomatoes from San Francisco farmers' market" 
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
                    style={{display: moveableFarmIsHovered ? "block" : "none" }}
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className={styles.video}
                >         
                    <source 
                    src="/videos/moveable_farm_3D_basket.mp4"
                    type="video/mp4"
                    />       
                </video>
                <div 
                    style={{display: moveableFarmIsHovered ? "none" : "block" }}
                    className={styles.case_study_prototypes}
                >
                    <div className={styles.prototypes_container}>
                    <div className={styles.case_study_prototype_mobile}>
                        <Image
                        src={MoveableFarmMobilePrototype}
                        alt="Art in Tech Services mobile prototype"
                        layout="responsive"
                        objectFit="contain"
                        priority
                        />
                    </div>
                    <div className={styles.case_study_prototype_desktop}>
                        <Image
                        src={MoveableFarmDesktopPrototype}
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
                    <div className={styles.forthcoming_container}>
                        <div className={styles.arrow} />
                        <div className={styles.forthcoming}>
                            FORTHCOMING
                        </div>
                    </div>
                    <div className={styles.case_study_info}>
                        <h3>
                            movealbe farm web platform
                        </h3>
                        <h4>
                            expected launch date: 2025
                        </h4>
                        <p>
                            A web platform to develop stronger and more sustainable agriculture for better cooking, eating and drinking.                    </p>
                    </div>
                </div>
            </div>
            </div>
    );

};


export default MoveableFarmCard;