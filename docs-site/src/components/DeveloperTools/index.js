import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const data = [
  {
    link: "https://github.com/dojo-engineering/dojo-samples",
    icon: "images/online-checkout.png",
    description: <>
       </>,
  },
  {
    title: "API Explorer",
    link: "accept-payments/payment-links/",
    description: <>
    <div>
        <p>Embed or share a link to to Dojo Checkout Page to accept payments without a website.</p>
       <ul>
       <li>No coding</li>
       <li>No website required</li>
       <li>Responsive web	</li>
       <li>Full PCI compliance</li>
       </ul>
       </div>
       </>,
  },
];

function Resource({ title, link, icon, description }) {
  return (
    
    <div className={clsx("col col--4 padding--sm", styles.posRelative)}>
      <img
        className="margin-left--xs"
        alt="icons"
        style={{ height: "150px", width: "250px" }}
        src={useBaseUrl(icon)}
      />
       <h4><a className={clsx("margin-top--sm", styles.posRelative)} href={link}>
        {title}
      </a></h4>
      <p>{description}</p>
    </div>
  );
}

function RecommendedIntegrations() {
  return (
    <>
      {data && data.length > 0 && (
        <section className={clsx("home-container", styles.features)}>
          <div className={clsx("row margin-horiz--sm")}>
            <div className={clsx("col col--30")}>
              <div className={clsx("row")}>
                {data.map((props, idx) => (
                  <Resource key={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default RecommendedIntegrations;
