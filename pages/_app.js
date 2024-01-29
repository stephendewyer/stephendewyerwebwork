import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return(
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
  ) 
};

export default MyApp;
