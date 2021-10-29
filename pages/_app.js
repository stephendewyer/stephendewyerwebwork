import '../styles/globals.css';
import React, { Fragment } from 'react';
import Layout from '../components/layout/Layout';
import Footer from '../components/layout/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return(
    <Fragment>
      <Layout />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  ) 
};

export default MyApp;
