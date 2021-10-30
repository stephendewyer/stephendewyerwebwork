import Head from 'next/head';
import { Fragment } from 'react';
import classes from './contact.module.css';
import Button from '../../components/button/button.js';
import Link from 'next/link';

const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>contact - stephen dewyer web design and development</title>
                <meta name="description" content="why you should hire stephen dewyer for your web design and development projects and programs" />
            </Head>
            <div className="container">
                <div className="header">
                    contact
                </div>
                <div className="header_02">
                    stephen is available for hire to collaborate on web design and development programs and projects.  
                </div>
                <div className='paragraphs_container'>
                    <div className='paragraphs'>
                        Hire stephen for:
                        <ul><br/>
                            <li>expert full-stack web development using advanced frameworks, libraries and databases;</li><br/>
                            <li>expertise in identifying and solving problems in creative ways using digital technology and art;</li><br/>
                            <li>expert User Experience and User Interaction design;</li><br/>
                            <li>expertise in data visualization and interaction;</li><br/>
                            <li>expert digital media production and editing;</li><br/>
                            <li>expertise in working with multiple stakeholders to produce award-winning projects;</li><br/>
                            <li>expertise in bringing diverse parts of the community together through multi-disciplinary projects;</li><br/>
                            <li>expertise in directing projects and programs.</li><br/>
                        </ul>
                    </div>
                </div>
                <Link href="mailto:sdewyer@artintechservices.com" passHref={true} >
                    <div className={classes.contact_button} >
                        <Button passHref={true}>
                            stephen.dewyer@stephengdewyer.info
                        </Button>
                    </div>
                </Link>
            </div>
        </Fragment>
    );
}

export default ContactPage;