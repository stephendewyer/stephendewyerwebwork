import ArtInTechServicesComponent from "./ArtInTechServicesComponent";

export const metadata = {
  title: "Art in Tech Services Case Study | UX Design & Full-Stack Development by Stephen Dewyer",
  description: "Stephen Dewyer's case study on Art in Tech Services: designing and engineering digital solutions at the intersection of art and technology with a human-centered approach.",
  keywords: "Art in Tech Services, UX case study, art & technology design, full-stack developer, UX engineer, Stephen Dewyer portfolio",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/images/art-in-tech-thumbnail.jpg'
      },
    ],
  },
};

const ArtInTechServices = () => {
    return (
        <ArtInTechServicesComponent />
    );    
};

export default ArtInTechServices;