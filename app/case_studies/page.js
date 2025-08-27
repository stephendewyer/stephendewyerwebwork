import CaseStudiesComponent from "./CaseStudiesComponent";

export const metadata = {
  title: "Case Studies - Stephen Dewyer software development and UX design",
  description: "Samples of web projects and programs designed and developed by Stephen Dewyer",
  keywords: "Stephen Dewyer, About Stephen Dewyer, UX Engineer Tucson, UX Designer Tucson, Software Developer Tucson, Full Stack Developer, Frontend Developer, Product Designer, UX Portfolio",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg'
      },
    ],
  },
};

const CaseStudies = () => {
    return (
        <CaseStudiesComponent />
    );
};

export default CaseStudies;