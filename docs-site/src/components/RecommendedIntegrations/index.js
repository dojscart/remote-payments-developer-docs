import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const data = [
  {
    title: "Payment Links",
    link: "docs/accept-payments/payment-links/",
    icon: "images/payment-links.jpg",
    description: <>
    <div>
        <p>Embed or share a link to Dojo Prebuilt Checkout Page to accept payments without a website.</p>
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
    title: "Checkout Page",
    link: "docs/accept-payments/checkout-page/",
    icon: "images/online-checkout.jpg",
    description: <>
    <div>
       <p>Send your customers to Dojo Prebuilt Checkout Page to pay.</p>
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
    title: "Components",
    link: "docs/accept-payments/components/",
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
