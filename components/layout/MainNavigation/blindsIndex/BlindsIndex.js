import { useRouter } from 'next/router';
import MyLink from "../../../../public/util/myLink";
import styles from "./BlindsIndex.module.css";

const BlindsIndex = (props) => {

    const router = useRouter();
    const pagePath = router.pathname;
    const pageIsActive = pagePath === props.navItem.pathname;


    return (
        <MyLink 
            href={props.navItem.pathname} 
            passHref 
            aria-label="link to index page"
        >
            <ul className={styles.index_tab_container} >
                <li 
                    className={styles.index_tab}
                    aria-current={ pageIsActive ? "page" : undefined }
                >
                    {props.navItem.name}
                </li>
            </ul> 
        </MyLink>
    );
}

export default BlindsIndex;