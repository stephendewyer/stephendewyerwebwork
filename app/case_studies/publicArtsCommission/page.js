import PublicArtsCommissionComponent from "./PublicArtsCommissionComponent";

export const metadata = {
  title: "Public Arts Commission Case Study | UX & Web Development by Stephen Dewyer",
  description: "Stephen Dewyer's case study on the Public Arts Commission: creating a modern, accessible platform for civic engagement using UX design and full-stack development.",
  keywords: "Public Arts Commission, civic tech UX, accessibility case study, UX engineer, UX designer portfolio, Stephen Dewyer",
  author: "Stephen Dewyer",
  openGraph: {
    images: [
      {
        url: 'https://stephendewyerwebwork.vercel.app/images/public-arts-thumbnail.jpg'
      },
    ],
  },
};

const PublicArtsCommission = () => {
    return (
        <PublicArtsCommissionComponent />
    );
};

export default PublicArtsCommission;
