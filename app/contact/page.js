import ContactComponent from "./ContactComponent";

export const metadata = {
  title: "Contact Stephen Dewyer – UX Designer & Software Developer",
  description: "Get in touch with Stephen Dewyer, a UX engineer and full-stack developer. Reach out for freelance, contract, or full-time opportunities in UX design and software development.",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg'
      },
    ],
  },
};

const Contact = () => {
    return (
        <ContactComponent />
    );
};

export default Contact;