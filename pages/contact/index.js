import Head from 'next/head';
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FlashMessage from '../../components/flash_message/FlashMessage';
import MyLink from '../../public/util/myLink';
import PillButton from '../../components/button/pill_button/PillButton';
import classes from './contact.module.css';

async function createMessage(nameFirst, nameLast, email, message) {
    const response = await fetch('/api/contact/SendEmail', {
      method: 'POST',
      body: JSON.stringify({ nameFirst, nameLast, email, message }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'something went wrong');
    }

}

const Contact = () => {

    const router = useRouter();

    const nameFirstRef = useRef();
    const nameLastRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 6000);
    
            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function submitHandler(event) {
        event.preventDefault();

        setRequestStatus('pending');
        
        const enteredNameFirst = nameFirstRef.current.value;
        const enteredNameLast = nameLastRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredMessage = messageRef.current.value;

        // optional: add client-side validation

        try {
            await createMessage(
                enteredNameFirst,
                enteredNameLast,
                enteredEmail,
                enteredMessage
            );
            setRequestStatus('success');
            router.replace('/');
        } catch (error) {
            setRequestError(error.message);
            setRequestStatus('error');
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'validating message',
            message: 'please wait a moment while we validate your message data',
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'message sent',
            message: 'we sent you an email confirming we recieved your message.',
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'message failed to send',
            message: requestError,
        };
    }

    return (
        <Fragment>
            <Head>
                <title>contact - stephen dewyer web design and development</title>
                <meta name="description" content="contact stephen garrett dewyer via the web" />
            </Head>
            <div className="container">
                <h1 className="header">
                    contact
                </h1>
                <h2 className="header_02">
                    how can stephen garrett dewyer help you?  
                </h2>
                <form className={classes.form} onSubmit={submitHandler} >
                    <p className={classes.indicates_required}>
                        * indicates required
                    </p>
                    <div className={classes.label_and_input} >
                        <label className={classes.label} htmlFor='nameFirst' >
                        *first name:
                        </label>
                        <div className={classes.field} >
                            <input className={classes.input} id="nameFirst" type='text' ref={nameFirstRef} />
                        </div>
                    </div>
                    <div className={classes.label_and_input} >
                        <label className={classes.label} htmlFor='nameLast' >
                            *last name:
                            </label>
                        <div className={classes.field} >
                            <input className={classes.input} type='text' id="nameLast" ref={nameLastRef} />
                        </div>
                    </div>
                    <div className={classes.label_and_input} >
                        <label className={classes.label} htmlFor='email' >
                            *email:
                        </label>
                        <div className={classes.field} >
                            <input className={classes.input} type='email' id="email" ref={emailRef} />
                        </div>
                    </div>
                    <div className={classes.textarea_label_and_input} >
                        <label className={classes.textarea_label} htmlFor='message' >
                            *message:
                        </label>
                        <div className={classes.textarea_field} >
                            <textarea className={classes.textarea_input} type='text' id="message" ref={messageRef} />
                        </div>
                    </div>
                    <div className={classes.send_button} >
                        <PillButton type='submit' >
                            send
                        </PillButton>
                        <MyLink href={'/'} passHref aria-label="link to index" >
                            <PillButton>
                                cancel
                            </PillButton>
                        </MyLink>
                    </div>
                </form>
                {notification && (
                    <FlashMessage
                        status={notification.status}
                        title={notification.title}
                        message={notification.message}
                    />
                )}
            </div>
        </Fragment>
    );
}

export default Contact;