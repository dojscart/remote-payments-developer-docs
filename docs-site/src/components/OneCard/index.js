import React from 'react';
import styles from './card.module.css';
import Link from '@docusaurus/Link';
import BannerSvg from '@site/static//images/dojo-icons/Question.svg';


const OneCard = () => {
    return (
        <Link className={styles.BannerLink} href="survey/question-1">
            <div className={styles.Banner}>
            <div><BannerSvg className={styles.BannerSvg}/></div>
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