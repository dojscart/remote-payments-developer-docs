import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const data = [
  {
    link: "/docs/plugins/woocommerce",
    icon: "/images/plugins/woocommerce.svg",
  },
  {
    link: "/docs/plugins/magento",
    icon: "/images/plugins/magento.svg",
  },
  {
    link: "/docs/plugins/opencart",
    icon: "/images/plugins/opencart.svg",
  },
  {
    link: "/docs/plugins/prestashop",
    icon: "/images/plugins/prestashop.svg",
  },
];

function Resource({ link, icon}) {
  return (
    <div className={clsx("col col--3 padding--sm", styles.posRelative)}>
      <a className={clsx("margin-top--sm", styles.posRelative)} href={link}><img
        className="margin-left--xs"
        alt="icons"
        style={{ height: "200px", width: "230px" }}
        src={useBaseUrl(icon)}
      />
      </a>
    </div>
  );
}

function RecommendedIntegrations() {
  return (
    <>
      {data && data.length > 0 && (
        <section className={clsx("home-container", styles.features)}>
          <div className={clsx("row margin-horiz--lg")}>
            <div className={clsx("col col--20")}>
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
