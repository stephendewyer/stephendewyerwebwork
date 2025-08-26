import styles from "./Panel.module.css";

const Panel = ({panel_data}) => {

    return (
        <div className={styles.panel_container}>
            <h4 className={styles.panel_heading_mobile}>
                {panel_data.heading}
            </h4>
            {panel_data.images.length > 0 &&
                <div className={panel_data.paragraphs !== null ? styles.images_with_paragraphs_container : styles.images_container}>
                    {panel_data.images.map((image, index) => {
                        return (
                            <div key={index} className={styles.image_container}>
                                {image}
                            </div>
                        )
                    })}
                </div>
            }
            <div className={panel_data.images.length > 0 ? styles.paragraphs_with_images : styles.paragraphs}>
                {panel_data.paragraphs}
            </div>
            {panel_data.buttons.length > 0 &&
                <div className={styles.buttons_container}>
                    {panel_data.buttons.map((button, index) => {
                        return (
                            <div key={index}>
                                {button}
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    );
}

export default Panel;