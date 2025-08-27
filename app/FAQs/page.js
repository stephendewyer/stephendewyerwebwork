import FAQsComponent from "./FAQsComponent";

export const metadata = {
  title: "FAQs – Stephen Dewyer | UX Engineer & Software Developer",
  description: "Frequently asked questions about Stephen Dewyer’s UX design and software development portfolio. Learn about his skills, case studies, experience, and how to get in touch.",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg'
      },
    ],
  },
};

const FAQs = () => {
    return (
        <FAQsComponent />
    );
};

export default FAQs;

