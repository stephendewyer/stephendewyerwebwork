import Head from 'next/head';
import { Fragment } from 'react';
import styles from './case_studies.module.css';
import PulblicArtsCommissionCard from '../../components/cards/caseStudyCards/publicArtsCommissionCard/PublicArtsCommissionCard';
import ArtInTechServicesCard from '../../components/cards/caseStudyCards/artInTechServicesCard/ArtInTechServicesCard';
import JoyfoodlyCard from '../../components/cards/caseStudyCards/joyfoodlyCard/JoyfoodlyCard';
import InfiniteMileCard from '../../components/cards/caseStudyCards/infiniteMileCard/InfiniteMileCard';

const CaseStudiesPage = () => {
    return (
        <Fragment>
            <Head>
                <title>case studies - Stephen Dewyer software development and UX design</title>
                <meta name="description" content="samples of web projects and programs designed and developed by Stephen Dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/case_studies" />
            </Head>
            <div className="container">
                <h1>
                    case studies
                </h1>
                <div className={styles.case_studies}>
                    <PulblicArtsCommissionCard />
                    <ArtInTechServicesCard />
                    <JoyfoodlyCard />
                    <InfiniteMileCard />
                </div>
            </div>
        </Fragment>
    );
};

export default CaseStudiesPage;