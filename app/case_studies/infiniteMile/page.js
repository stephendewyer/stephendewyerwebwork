import InfiniteMileComponent from "./InfiniteMileComponent";

export const metadata = {
  title: "Infinite Mile Case Study | UX & Digital Publishing by Stephen Dewyer",
  description: "A case study on Infinite Mile, an arts publishing platform. Stephen Dewyer led UX design, product development, and front-end engineering to create a sustainable digital experience.",
  keywords: "Infinite Mile case study, digital publishing UX, arts platform UX design, Stephen Dewyer, UX portfolio, full-stack developer case study",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/images/infinite-mile-thumbnail.jpg'
      },
    ],
  },
};

const InfiniteMile = () => {
    return (
        <InfiniteMileComponent />
    );
};

export default InfiniteMile;
