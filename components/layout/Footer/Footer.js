import styles from './Footer.module.css';
import Link from 'next/link';

function Footer() {

    return (
        <div className={styles.footer}>
           <div className={styles.grid_container_footer}>
                <div className={styles.grid_item_footer}>
                    stephen garrett dewyer © 2021
                </div>
                <div className={styles.grid_item_footer}>
                    <Link href="https://www.linkedin.com/in/stephen-dewyer-a15539a5" passHref={true}>LinkedIn</Link>
                </div>
                <div className={styles.grid_item_footer}>
                    <Link href="https://www.github.com/stephendewyer" passHref={true}>GitHub</Link>
                </div>
                <div className={styles.grid_item_footer}>
                    <Link href="mailto:sdewyer@artintechservices.com" passHref={true}>email</Link>
                </div>
            </div> 
        </div>
    );
}

export default Footer;