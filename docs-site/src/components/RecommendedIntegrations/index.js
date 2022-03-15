import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const data = [
  {
    title: "Online Checkout",
    link: "docs/Accept%20payments/Online%20checkout/",
    icon: "images/online-checkout.jpg",
    description: <>
    <div>
       <p>Send your customers to Dojo Online Checkout page to pay.</p>
       <ul>
       <li>Minimal coding</li>
       <li>Website required, Dojo hosts the checkout page</li>
       <li>Responsive web	</li>
       <li>Full PCI compliance</li>
       </ul>
       </div>
       </>,
  },
  {
    title: "Payment Links",
    link: "docs/Accept%20payments/Payment%20links/",
    icon: "images/payment-links.jpg",
    description: <>
    <div>
        <p>Embed or share a link to Dojo Online Checkout page to accept payments without a website.</p>
       <ul>
       <li>No coding</li>
       <li>No website required</li>
       <li>Responsive web	</li>
       <li>Full PCI compliance</li>
       </ul>
       </div>
       </>,
  },
  {
    title: "Dojo Components",
    link: "docs/Accept%20payments/Components/",
    icon: "images/components.jpg",
    description: <>
    <div>
    <p>Integrate customizable UI components into your website or mobile app to collect payment.</p>
   <ul>
   <li>More coding</li>
   <li>Website required</li>
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
        style={{ height: "200px", width: "350px" }}
        src={useBaseUrl(icon)}
      />
       <h3><a className={clsx("margin-top--sm", styles.posRelative)} href={link}>
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
