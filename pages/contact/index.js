import Head from 'next/head';
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import InputErrorMessage from '../../components/inputErrorMessage/InputErrorMessage';
import FlashMessage from '../../components/flash_message/FlashMessage';
import PillButton from '../../components/buttons/buttonPill/ButtonPIll';
import classes from './contact.module.css';
import Image from 'next/image';
import TucsonSunset from "../../public/images/contact/Tucson,_Arizona_17_June_2024.jpg"

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
    };

};

const Contact = () => {

    const router = useRouter();

    const nameFirstRef = useRef();
    const nameLastRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    // before submit

    // first name validation state
    const [enteredNameFirstIsValid, setEnteredNameFirstIsValid] = useState(true);
    // last name validation state
    const [enteredNameLastIsValid, setEnteredNameLastIsValid] = useState(true);
    // email validation state
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
    // message validation state
    const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

    const [emailErrorMessage, setEmailErrorMessage] = useState("");

    // first name touched state
    const [enteredNameFirstIsTouched, setEnteredNameFirstIsTouched] = useState(true);
    // last name touched state
    const [enteredNameLastIsTouched, setEnteredNameLastIsTouched] = useState(true);
    // email touched state
    const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(true);
    // message touched state
    const [enteredMessageIsTouched, setEnteredMessageIsTouched] = useState(true);

    const nameFirstInputChangeHandler = () => {
        if (nameFirstRef.current.value !== '') {
            setEnteredNameFirstIsValid(true);
        };
    };

    const nameLastInputChangeHandler = () => {
        if (nameLastRef.current.value !== '') {
            setEnteredNameLastIsValid(true);
        };
    };

    const emailInputChangeHandler = () => {
        if ( emailRef.current.value !== '' && emailRef.current.value.includes('@') ) {
            setEnteredEmailIsValid(true);
        };
        if ( emailRef.current.value !== '' && !emailRef.current.value.includes('@') ) {
            setEnteredEmailIsValid(false);
            setEmailErrorMessage("missing an @ symbol in email address");
        };
    };

    const messageInputChangeHandler = () => {
        if (messageRef.current.value !== '') {
            setEnteredMessageIsValid(true);
        };
    };

    const nameFirstInputBlurHandler = () => {
        setEnteredNameFirstIsTouched(true);
        if (nameFirstRef.current.value === '') {
            setEnteredNameFirstIsValid(false);
        };
    };

    const nameLastInputBlurHandler = () => {
        setEnteredNameLastIsTouched(true);
        if (nameLastRef.current.value === '') {
            setEnteredNameLastIsValid(false);
        };
    };

    const emailInputBlurHandler = () => {
        setEnteredEmailIsTouched(true);
        if (emailRef.current.value === '') {
            setEnteredEmailIsValid(false);
            setEmailErrorMessage("email required");
        };
        if (emailRef.current.value !== '' && !emailRef.current.value.includes('@') ) {
            setEnteredEmailIsValid(true);
            setEmailErrorMessage("missing an @ symbol in email address");
        };
    };

    const messageInputBlurHandler = () => {
        setEnteredMessageIsTouched(true);
        if (messageRef.current.value === '') {
            setEnteredMessageIsValid(false);
        };
    };

    // after submit

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

        const enteredNameFirst = nameFirstRef.current.value;
        const enteredNameLast = nameLastRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredMessage = messageRef.current.value;

        setEnteredNameFirstIsTouched(true);
        setEnteredNameLastIsTouched(true);
        setEnteredEmailIsTouched(true);
        setEnteredMessageIsTouched(true);

        setRequestStatus('pending');

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
            if (enteredNameFirst === '') {
                setEnteredNameFirstIsValid(false);
            };
            if (enteredNameLast === '') {
                setEnteredNameLastIsValid(false);
            };
            if (enteredEmail === '') {
                setEnteredEmailIsValid(false);
                setEmailErrorMessage("email required");
            };
            if (enteredEmail !== '' && !enteredEmail.includes('@')) {
                setEmailErrorMessage("missing an @ symbol in email address");
            };
            if (enteredMessage === '') {
                setEnteredMessageIsValid(false);
            };
            setRequestError(error.message);
            setRequestStatus('error');
        };
    };

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'validating message',
            message: 'please wait a moment while we validate your message data',
        };
    };

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'message sent',
            message: 'we sent you an email confirming we recieved your message.',
        };
    };

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'message failed to send',
            message: requestError,
        };
    };

    const nameFirstInputClasses = enteredNameFirstIsValid ? classes.input : classes.invalid_input;

    const nameLastInputClasses = enteredNameLastIsValid ? classes.input : classes.invalid_input;

    const emailInputClasses = enteredEmailIsValid ? classes.input : classes.invalid_input;

    const messageInputClasses = enteredMessageIsValid ? classes.textarea_input : classes.invalid_textarea_input;

    return (
        <Fragment>
            <Head>
                <title>contact - Stephen Dewyer software development and UX design</title>
                <meta name="description" content="contact Stephen Garrett Dewyer" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/contact" />
            </Head>
            <div className={classes.banner_container}>
                <Image 
                    src={TucsonSunset} 
                    priority 
                    objectFit="cover"
                    objectPosition="top"
                    layout="fill"
                    alt="Tucson sunset 17 June 2024"
                />
                <div className={classes.banner_overlay} />
            </div>
            <div className="container">
                <div className={classes.contact}>
                    <form className={classes.form} onSubmit={submitHandler} noValidate >
                        <h1 className="header" style={{textAlign: "center"}}>
                            contact
                        </h1>
                        <p className="header_02">
                            Want help on a new or existing project?  Looking for someone to handle your software development and/or UX design?  How can I help you?  
                        </p>
                        <p className={classes.indicates_required}>
                            * indicates required
                        </p>
                        <div className={classes.fields_row}>
                            <div className={classes.field}>
                                <div className={classes.label_and_input} >
                                    <label className={classes.label} htmlFor='nameFirst' >
                                    first name:*
                                    </label>
                                    <div className={classes.field} >
                                        <input 
                                            className={nameFirstInputClasses} 
                                            id="nameFirst" 
                                            type='text' 
                                            ref={nameFirstRef} 
                                            onChange={nameFirstInputChangeHandler} 
                                            onBlur={nameFirstInputBlurHandler}
                                        />
                                    </div> 
                                </div>
                                { !enteredNameFirstIsValid &&
                                    <InputErrorMessage>
                                        first name required
                                    </InputErrorMessage>
                                }
                            </div>
                            <div className={classes.field}>
                                <div className={classes.label_and_input} >
                                    <label className={classes.label} htmlFor='nameLast' >
                                        last name:*
                                        </label>
                                    <div className={classes.field} >
                                        <input 
                                            className={nameLastInputClasses} 
                                            type='text' 
                                            id="nameLast" 
                                            ref={nameLastRef} 
                                            onChange={nameLastInputChangeHandler} 
                                            onBlur={nameLastInputBlurHandler}
                                        />
                                    </div>
                                </div>
                                { !enteredNameLastIsValid &&
                                    <InputErrorMessage>
                                        last name required
                                    </InputErrorMessage>
                                }
                            </div>
                        </div>
                        <div className={classes.fields_row}>
                            <div className={classes.field}>
                                <div className={classes.label_and_input} >
                                    <label className={classes.label} htmlFor='email' >
                                        email:*
                                    </label>
                                    <div className={classes.field} >
                                        <input 
                                            className={emailInputClasses} 
                                            type='email' 
                                            id="email" 
                                            ref={emailRef} 
                                            onChange={emailInputChangeHandler} 
                                            onBlur={emailInputBlurHandler}
                                        />
                                    </div>
                                </div>
                                { !enteredEmailIsValid &&
                                    <InputErrorMessage>
                                        {emailErrorMessage}
                                    </InputErrorMessage>
                                }
                            </div>
                        </div>
                        <div className={classes.field_row}>
                            <div className={classes.field}>
                                <div className={classes.label_and_input} >
                                    <label className={classes.label} htmlFor='message' >
                                        message:*
                                    </label>
                                    <div className={classes.textarea_field} >
                                        <textarea 
                                            className={messageInputClasses} 
                                            type='text' 
                                            id="message" 
                                            ref={messageRef} 
                                            onChange={messageInputChangeHandler} 
                                            onBlur={messageInputBlurHandler}
                                        />
                                    </div>
                                </div>
                                { !enteredMessageIsValid &&
                                    <InputErrorMessage>
                                        message required
                                    </InputErrorMessage>
                                }
                            </div>
                        </div>
                        <div className={classes.contact_button} >
                            <PillButton type='submit'>
                                send
                            </PillButton>
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
            </div>
        </Fragment>
    );
}

export default Contact;