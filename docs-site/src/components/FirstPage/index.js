import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const data = [
  {
    title: "Payments",
    link: "payments/",
    icon: "images/remote-payments.svg",
    description:
    <div>
        <p>Build a payment integration or use a pre-built checkout page and payment links to accept payments.</p>
        <div class="row">
          <div class="column">
        <ul>
          <li><a href="payments/getting-started">Getting started</a></li>
          <li><a href="payments/api">API Reference</a></li>
        </ul>
        </div>
        <div class="column">
        <ul>
          <li><a href="payments/accept-payments/payment-links/">Payment links</a></li>
          <li><a href="payments/accept-payments/checkout-page/">Prebuilt Checkout Page</a></li>
        </ul>
        </div>
        </div>
       </div>,
  },
  {
    title: "Tables",
    link: "https://docs.tables.dojo.tech/",
    icon: "images/tables.png",
    description: <>
    <div>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
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
        style={{ height: "250px", width: "350px" }}
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
