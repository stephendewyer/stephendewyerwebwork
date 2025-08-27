import IndexComponent from "./IndexComponent";

export const metadata = {
  title: "Stephen Dewyer | UX Designer & Software Developer Portfolio",
  description: "Stephen Dewyer – UX Engineer, UX Designer, and Full-Stack Developer. I build intuitive, human-centered software and digital experiences.",
  keywords: "Stephen Dewyer, UX Engineer, UX Designer, Software Developer, Frontend Developer, Full Stack Developer, UX Portfolio, Web Developer Portfolio, Tucson Arizona",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg'
      },
    ],
  },
};

const Index = () => {
  return (
    <IndexComponent />
  );
};

export default Index;