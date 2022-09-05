import styles from './InfoCards.module.css';

const InfoCards = ({ infoCards, outcomeCards }) => {

    if (infoCards) {
        return (
            <div className={styles.caseStudyInfoCards}>
                {infoCards.map((infoCard) => {
                    return (
                        <div 
                            className={styles.caseStudyInfoCard}
                            key={infoCard.id}
                        >
                            {infoCard.content}
                        </div>
                    )
                })}
            </div>
        );
    }

    if (outcomeCards) {
        return (
            <div className={styles.caseStudyInfoCards}>
                {outcomeCards.map((outcomeCard) => {
                    return (
                        <div 
                            className={styles.caseStudyInfoCard}
                            key={outcomeCard.id}
                        >
                            {outcomeCard.content}
                        </div>
                    )
                })}
            </div>
        );
    }
    
    
}

export default InfoCards;