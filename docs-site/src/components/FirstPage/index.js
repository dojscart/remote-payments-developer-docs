import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const data = [
  {
    title: "Online payments",
    link: "docs/online-payments/",
    icon: "images/online-payments.svg",
    description: <>
    <div>
        <p>Embed or share a link to Dojo Prebuilt Checkout Page to accept payments without a website.</p>
       </div>
       </>,
  },
  {
    title: "Tables",
    link: "https://docs.tables.dojo.tech/",
    icon: "images/tables.svg",
    description: <>
    <div>
       <p>Send your customers to Dojo Prebuilt Checkout Page to pay.</p>
       </div>
       </>,
  },
];

function Resource({ title, link, icon, description }) {
  return (
    
    <div className={clsx("col col--6 padding--sm", styles.posRelative)}>
      <img
        className="margin-left--xs"
        alt="icons"
        style={{ height: "200px", width: "350px" }}
        src={useBaseUrl(icon)}
      />
       <h3><a className={clsx("margin-top--sm", styles.posRelative)} href={useBaseUrl(link)}>
        {title}
      </a></h3>
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
