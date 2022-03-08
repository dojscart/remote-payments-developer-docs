import React from 'react';
import styles from './card.module.css';
import Link from '@docusaurus/Link';


const OneCard = () => {
    return (
        <Link className={styles.BannerLink} href="survey/question-1">
            <div className={styles.Banner}>
            <div><img className={styles.BannerSvg} src="/images/dojo-icons/Question.svg"/></div>
                <div className={styles.BannerContent}>
                    <h3>Not sure which integration to choose?</h3>
                    <p>
                    Get through our short survey to get a recommendation based on your needs. 
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default OneCard;