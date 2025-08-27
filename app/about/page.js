import AboutComponent from "./AboutComponent";

export const metadata = {
  title: "About Stephen Dewyer | UX Engineer, UX Designer & Software Developer",
  description: "Learn more about Stephen Dewyer, an award-winning UX Engineer, UX Designer, and Software Developer based in Tucson, Arizona. With over 10 years of experience, Stephen bridges design and engineering to create meaningful digital experiences.",
  keywords: "Stephen Dewyer, About Stephen Dewyer, UX Engineer Tucson, UX Designer Tucson, Software Developer Tucson, Full Stack Developer, Frontend Developer, Product Designer, UX Portfolio",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/images/profile/stephen_dewyer_10_cropped_square.jpg'
      },
    ],
  },
};

const About = () => {
    return (
        <AboutComponent />
    );
};

export default About;