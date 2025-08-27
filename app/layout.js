import "./globals.css";
import Layout from "@/components/layout/Layout";

export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
