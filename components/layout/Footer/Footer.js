import styles from './Footer.module.css';
import Link from 'next/link';
import ButtonFooter from '../../button/button_footer';

function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.footer_info}>
                stephen garrett dewyer © 2021
            </div>
            <div className={styles.footer_links}>
                <Link href="https://www.linkedin.com/in/stephen-dewyer-a15539a5" passHref={true} aria-label="link to LinkedIn profile">
                    <div className={styles.footer_link}>
                        <ButtonFooter passHref={true}>
                            LinkedIn
                        </ButtonFooter>
                    </div>
                </Link>
                <Link href="https://www.github.com/stephendewyer" passHref={true} aria-label="link to GitHub profile">
                    <div className={styles.footer_link}>
                        <ButtonFooter passHref={true}>
                            GitHub
                        </ButtonFooter>
                    </div>
                </Link>
                <Link href="mailto:sdewyer@artintechservices.com" passHref={true} aria-label="email stephen garrett dewyer">
                    <div className={styles.footer_link}>
                        <ButtonFooter passHref={true}>
                            email
                        </ButtonFooter>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Footer;