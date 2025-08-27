'use client'
import styles from './case_studies.module.css';
import MoveableFarmCard from "../../components/cards/caseStudyCards/moveableFarmCard/MoveableFarmCard";
import PulblicArtsCommissionCard from '../../components/cards/caseStudyCards/publicArtsCommissionCard/PublicArtsCommissionCard';
import ArtInTechServicesCard from '../../components/cards/caseStudyCards/artInTechServicesCard/ArtInTechServicesCard';
import JoyfoodlyCard from '../../components/cards/caseStudyCards/joyfoodlyCard/JoyfoodlyCard';
import InfiniteMileCard from '../../components/cards/caseStudyCards/infiniteMileCard/InfiniteMileCard';

const CaseStudiesComponent = () => {
    return (
        <div className="container">
            <h1>
                case studies
            </h1>
            <div className={styles.case_studies}>
                <MoveableFarmCard />
                <PulblicArtsCommissionCard />
                <ArtInTechServicesCard />
                <JoyfoodlyCard />
                <InfiniteMileCard />
            </div>
        </div>
);
};

export default CaseStudiesComponent;