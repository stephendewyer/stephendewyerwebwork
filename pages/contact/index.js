import Head from 'next/head';
import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import FlashMessage from '../../components/flash_message/FlashMessage';
import MyLink from '../../public/util/myLink';
import errorIcon from '../../public/images/icons/error_icon.svg';
import PillButton from '../../components/button/pill_button/PillButton';
import PillButtonSecondary from '../../components/button/pillButtonSecondary/PillButtonSecondary';
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

    // before submit

    // first name validation state
    const [enteredNameFirstIsValid, setEnteredNameFirstIsValid] = useState(true);
    // last name validation state
    const [enteredNameLastIsValid, setEnteredNameLastIsValid] = useState(true);
    // email validation state
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true);
    // email validation state 2
    const [enteredEmailHasAtSymbol, setEnteredEmailHasAtSymbol] = useState(true);
    // message validation state
    const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

    // first name touched state
    const [enteredNameFirstIsTouched, setEnteredNameFirstIsTouched] = useState(true);
    // last name touched state
    const [enteredNameLastIsTouched, setEnteredNameLastIsTouched] = useState(true);
    // email touched state
    const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(true);
    // message touched state
    const [enteredMessageIsTouched, setEnteredMessageIsTouched] = useState(true);

    const nameFirstInputChangeHandler = (event) => {
        if (nameFirstRef.current.value !== '') {
            setEnteredNameFirstIsValid(true);
        }
    };

    const nameLastInputChangeHandler = (event) => {
        if (nameLastRef.current.value !== '') {
            setEnteredNameLastIsValid(true);
        }
    };

    const emailInputChangeHandler = (event) => {
        if ( emailRef.current.value !== '' && emailRef.current.value.includes('@') ) {
            setEnteredEmailIsValid(true);
            setEnteredEmailHasAtSymbol(true);
        }
    };

    const messageInputChangeHandler = (event) => {
        if (messageRef.current.value !== '') {
            setEnteredMessageIsValid(true);
        }
    };

    const nameFirstInputBlurHandler = (event) => {
        setEnteredNameFirstIsTouched(true);
        if (nameFirstRef.current.value === '') {
            setEnteredNameFirstIsValid(false);
        }
    }

    const nameLastInputBlurHandler = (event) => {
        setEnteredNameLastIsTouched(true);
        if (nameLastRef.current.value === '') {
            setEnteredNameLastIsValid(false);
        }
    }

    const emailInputBlurHandler = (event) => {
        setEnteredEmailIsTouched(true);
        if (emailRef.current.value === '') {
            setEnteredEmailIsValid(false);
        }
        if (emailRef.current.value !== '' && !emailRef.current.value.includes('@') ) {
            setEnteredEmailIsValid(true);
            setEnteredEmailHasAtSymbol(false);
        }
    }

    const messageInputBlurHandler = (event) => {
        setEnteredMessageIsTouched(true);
        if (messageRef.current.value === '') {
            setEnteredMessageIsValid(false);
        }
    }

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
            }
            if (enteredNameLast === '') {
                setEnteredNameLastIsValid(false);
            }
            if (enteredEmail === '') {
                setEnteredEmailIsValid(false);
            }
            if (enteredEmail !== '' && !enteredEmail.includes('@')) {
                setEnteredEmailHasAtSymbol(false);
            }
            if (enteredMessage === '') {
                setEnteredMessageIsValid(false);
            }
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

    const nameFirstInputClasses = enteredNameFirstIsValid ? classes.input : classes.invalid_input;

    const nameLastInputClasses = enteredNameLastIsValid ? classes.input : classes.invalid_input;

    const emailInputClasses = enteredEmailIsValid && enteredEmailHasAtSymbol ? classes.input : classes.invalid_input;

    const messageInputClasses = enteredMessageIsValid ? classes.textarea_input : classes.invalid_textarea_input;

    const emailErrorMessage = '';

    if (!enteredEmailIsValid) {
        emailErrorMessage = (
            <div className={classes.inputErrorMessage}>
                <p className={classes.inputErrorParagraph}>
                    email required
                </p> 
                <div className={classes.inputErrorIcon}>
                    <Image 
                        src={errorIcon} 
                        layout="responsive" 
                        alt="organizer illustration"
                        priority
                    />
                </div>
            </div>
        )
    }

    if (enteredEmailIsValid && !enteredEmailHasAtSymbol) {
        emailErrorMessage = (
            <div className={classes.inputErrorMessage}>
                <p className={classes.inputErrorParagraph}>
                    missing an @ symbol in email address
                </p> 
                <div className={classes.inputErrorIcon}>
                    <Image 
                        src={errorIcon} 
                        layout="responsive" 
                        alt="organizer illustration"
                        priority
                    />
                </div>
            </div>
        )
    }

    return (
        <Fragment>
            <Head>
                <title>contact - stephen dewyer UX design and full-stack web development</title>
                <meta name="description" content="contact stephen garrett dewyer via the web" />
                <meta property="og:image" content="https://stephendewyerwebwork.vercel.app/videos/imagine_echo/imagine_echo_still_02.jpg" />
                <meta property="og:url" content="https://stephendewyerwebwork.vercel.app/contact" />
            </Head>
            <div className="container">
                <h1 className="header">
                    contact
                </h1>
                <h2 className="header_02">
                    how can stephen garrett dewyer help you?  
                </h2>
                <form className={classes.form} onSubmit={submitHandler} noValidate>
                    <p className={classes.indicates_required}>
                        * indicates required
                    </p>
                    <div className={classes.formSection}>
                        <div className={classes.label_and_input} >
                            <label className={classes.label} htmlFor='nameFirst' >
                            *first name:
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
                        { enteredNameFirstIsValid ? 
                            ""
                            : 
                            <div className={classes.inputErrorMessage}>
                                <p className={classes.inputErrorParagraph}>
                                    first name required
                                </p> 
                                <div className={classes.inputErrorIcon}>
                                    <Image 
                                        src={errorIcon} 
                                        layout="responsive" 
                                        alt="organizer illustration"
                                        priority
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    <div className={classes.formSection}>
                        <div className={classes.label_and_input} >
                            <label className={classes.label} htmlFor='nameLast' >
                                *last name:
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
                        { enteredNameLastIsValid ? 
                            "" :
                            <div className={classes.inputErrorMessage}>
                                <p className={classes.inputErrorParagraph}>
                                    last name required
                                </p> 
                                <div className={classes.inputErrorIcon}>
                                    <Image 
                                        src={errorIcon} 
                                        layout="responsive" 
                                        alt="organizer illustration"
                                        priority
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    <div className={classes.formSection}>
                        <div className={classes.label_and_input} >
                            <label className={classes.label} htmlFor='email' >
                                *email:
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
                            <p className={classes.inputErrorMessage}>
                                {emailErrorMessage}
                            </p>
                    </div>
                    <div className={classes.formSection}>
                        <div className={classes.textarea_label_and_input} >
                            <label className={classes.textarea_label} htmlFor='message' >
                                *message:
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
                        { enteredMessageIsValid ? 
                            "":
                            <div className={classes.inputErrorMessage}>
                                <p className={classes.inputErrorParagraph}>
                                    message required
                                </p> 
                                <div className={classes.inputErrorIcon}>
                                    <Image 
                                        src={errorIcon} 
                                        layout="responsive" 
                                        alt="organizer illustration"
                                        priority
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    <div className={classes.contact_buttons} >
                        <PillButton type='submit' >
                            send
                        </PillButton>
                        <MyLink href={'/'} passHref aria-label="link to index" >
                            <PillButtonSecondary>
                                cancel
                            </PillButtonSecondary>
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