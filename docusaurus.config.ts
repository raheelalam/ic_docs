import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "InCountry Docs",
  favicon: "img/favicon.png",

  url: "https://docs.incountry.com",
  baseUrl: "/",
  trailingSlash: true,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: {
        htmlLang: "en-US",
      },
    },
  },

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "",
          exclude: ["**/common-blocks/**"],
          sidebarPath: "./sidebars.ts",
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/_styles_project.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    algolia: {
      apiKey: "cb20f783726e142b56f84b0118a15705",
      indexName: "incountry_docs",
      appId: "IYA7IIFKT9",
    },
    navbar: {
      logo: {
        alt: "InCountry",
        src: "img/incountry-dark-logo.svg",
        srcDark: "img/incountry-logo-lightblue.svg",
        href: "/",
        width: 120,
        height: 62,
        style: {
          height: "62px",
          marginRight: "4px",
        },
      },
      items: [
        {
          type: "dropdown",
          label: "Products & Solutions",
          position: "left",
          className: "main-nav product-menu two-top-child",
          items: [
            {
              type: "html",
              value: `
              <ul class="sub-menu">
                <li class="no-crawl">Products</li>
                <li><a href="https://incountry.com/products/data-residency-as-a-service/" target="_blank" rel="noopener">InCountry for Apps</a></li>
                <li><a href="https://incountry.com/products/identity/" target="_blank" rel="noopener">InCountry for Identity</a></li>
                <li><a href="https://incountry.com/products/ai/" target="_blank" rel="noopener">InCountry for AI</a></li>
                <li><a href="https://incountry.com/products/salesforce/" target="_blank" rel="noopener">InCountry for Salesforce</a></li>
                <li><a href="https://incountry.com/products/analytics/" target="_blank" rel="noopener">InCountry for Analytics</a></li>
              </ul>
              <ul class="sub-menu">
                <li class="no-crawl">Solutions</li>
                <li><a href="https://incountry.com/solutions/automotive/" target="_blank" rel="noopener">Automotive</a></li>
                <li><a href="https://incountry.com/solutions/energy/" target="_blank" rel="noopener">Energy</a></li>
                <li><a href="https://incountry.com/solutions/financial-services/" target="_blank" rel="noopener">Financial Services</a></li>
                <li><a href="https://incountry.com/solutions/healthcare/" target="_blank" rel="noopener">Healthcare</a></li>
                <li><a href="https://incountry.com/solutions/retail/" target="_blank" rel="noopener">Retail</a></li>
                <li><a href="https://incountry.com/solutions/technology/" target="_blank" rel="noopener">Technology</a></li>
                <li><a href="https://incountry.com/solutions/telecom/" target="_blank" rel="noopener">Telecom</a></li>
              </ul>
              <ul class="sub-menu">
                <li class="no-crawl">Latest success story</li>
                <li><a class="ss-menu ibm-ss" href="https://incountry.com/solutions/success-stories/ibm-consulting/" target="_blank" rel="noopener">IBM Consulting</a></li>
              </ul>
              `,
            },
          ],
        },
        {
          type: "dropdown",
          label: "Integrations",
          position: "left",
          className: "main-nav four-child integration-menu",
          items: [
            {
              type: "html",
              value: `
              <ul class="sub-menu">
                <li class="no-crawl">Apps</li>
                <li><a class="cegid-icon" href="https://incountry.com/integrations/cegid/" target="_blank" rel="noopener">Cegid</a></li>
                <li><a class="charket-icon" href="https://incountry.com/integrations/charket/" target="_blank" rel="noopener">Charket</a></li>
                <li><a class="oracle-hmc-cloud-icon" href="https://incountry.com/integrations/oracle-hcm-cloud/" rel="noopener" target="_blank">Oracle HCM Cloud</a></li>
                <li><a class="oracle-taleo-icon" href="https://incountry.com/integrations/oracle-taleo/" rel="noopener" target="_blank">Oracle Taleo</a></li>
                <li><a class="salesforce-icon" href="https://incountry.com/products/salesforce/" target="_blank" rel="noopener">Saleforce</a></li>
                <li><a class="sap-icon" href="https://incountry.com/integrations/sap-successfactors/" rel="noopener" target="_blank">SAP SuccessFactors</a></li>
                <li><a class="servicenow-icon" href="https://incountry.com/integrations/servicenow/" target="_blank" rel="noopener">ServiceNow</a></li>
                <li><a class="talent-system-icon" href="https://incountry.com/integrations/talent-systems/" rel="noopener" target="_blank">Talent Systems</a></li>
                <li><a class="temenos-icon" href="https://incountry.com/integrations/temenos/" rel="noopener" target="_blank">Temenos</a></li>
                <li><a class="veeva-icon" href="https://incountry.com/integrations/veeva/" target="_blank" rel="noopener">Veeva CRM</a></li>
                <li><a class="workday-icon" href="https://incountry.com/integrations/workday/" rel="noopener" target="_blank">Workday</a></li>
              </ul>
              `,
            },
            {
              type: "html",
              value: `
              <ul class="sub-menu">
                <li class="no-crawl">CDP</li>
                <li><a class="salesforce-data-cloud-icon" href="https://incountry.com/integrations/salesforce-data-cloud/" target="_blank" rel="noopener">Salesforce Data Cloud</a></li>
                <li><a class="segment-icon" href="https://incountry.com/integrations/segment/" target="_blank" rel="noopener">Segment</a></li>
                <li><a class="mparticle-icon" href="https://incountry.com/integrations/mparticle/" target="_blank" rel="noopener">mParticle</a></li>
                <li><a class="lytics-icon" href="https://incountry.com/integrations/lytics/" target="_blank" rel="noopener">Lytics</a></li>
              </ul>
              <ul class="sub-menu">
                <li class="no-crawl">ETL / data pipeline</li>
                <li><a class="informatica-icon" href="https://incountry.com/integrations/informatica/" target="_blank" rel="noopener">Informatica</a></li>
                <li><a class="kafka-icon" href="https://incountry.com/integrations/kafka/" target="_blank" rel="noopener">Kafka</a></li>
                <li><a class="mulesoft-icon" href="https://incountry.com/integrations/mulesoft/" target="_blank" rel="noopener">MuleSoft</a></li>
                <li><a class="pentaho-icon" href="https://incountry.com/integrations/pentaho/" target="_blank" rel="noopener">Pentaho</a></li>
              </ul>
              <ul class="sub-menu">
                <li class="no-crawl">Data lake / warehouse</li>
                <li><a class="redshift-icon" href="https://incountry.com/integrations/amazon-redshift/" target="_blank" rel="noopener">Amazon Redshift</a></li>
                <li><a class="databricks-icon" href="https://incountry.com/integrations/databricks/" target="_blank" rel="noopener">Databricks</a></li>
                <li><a class="google-big-query-icon" href="https://incountry.com/integrations/google-bigquery/" target="_blank" rel="noopener">Google BigQuery</a></li>
                <li><a class="snowflake-icon" href="https://incountry.com/integrations/snowflake/" target="_blank" rel="noopener">Snowflake</a></li>
                <li><a class="teradata-icon" href="https://incountry.com/integrations/teradata/" target="_blank" rel="noopener">Teradata</a></li>
              </ul>
              <ul class="sub-menu">
                <li class="no-crawl">Infrastructure</li>
                <li><a class="alibaba-icon" href="https://incountry.com/products/alibabacloud/" target="_blank" rel="noopener">Alibaba Cloud</a></li>
                <li><a class="aws-icon" href="https://incountry.com/integrations/aws-outposts/" target="_blank" rel="noopener">AWS Outposts</a></li>
                <li><a class="yandex-icon" href="https://incountry.com/integrations/yandexcloud/" target="_blank" rel="noopener">Yandex</a></li>
              </ul>
            `,
            },
          ],
        },
        {
          type: "dropdown",
          label: "Developers",
          position: "left",
          className: "main-nav developers-menu two-top-child",
          items: [
            {
              type: "html",
              value: `
                <ul class="sub-menu">
                  <li class="no-crawl">InCountry</li>
                  <li><a href="https://incountry.com/developers/overview/" target="_blank" rel="noopener">Developer overview</a></li>
                  <li><a href="/data-residency-as-a-service/tutorial/">Tutorial</a></li>
                  <li><a href="/">Documentation</a></li></ul><ul class="sub-menu"><li class="no-crawl">InCountry for Salesforce</li>
                  <li><a href="https://incountry.com/developers/salesforce-developers-overview/" target="_blank" rel="noopener">Developer overview</a></li>
                  <li><a href="/salesforce/apex-sdk/">Developer guide</a></li>
                  <li><a href="/salesforce/about/">Documentation</a></li>
                </ul>
                <ul class="sub-menu">
                  <li><a class="ss-menu" href="https://portal.incountry.com/login" target="_blank" rel="noopener">Developer portal</a></li>
                  <li><a class="ss-menu" href="https://status.incountry.com/" target="_blank" rel="noopener">System status</a></li>
                </ul>
              `,
            },
          ],
        },
        {
          type: "dropdown",
          label: "Resources",
          position: "left",
          className: "main-nav resources-menu",
          items: [
            {
              label: "News and Blog",
              href: "https://incountry.com/news-blog/",
              className: "sub-child",
            },
            {
              label: "Country compliance",
              href: "https://incountry.com/country-compliance/",
              className: "sub-child",
            },
            {
              label: "Library",
              href: "https://incountry.com/resource/library/",
              className: "sub-child",
            },
            {
              label: "Security and compliance",
              href: "https://incountry.com/resource/security-and-compliance/",
              className: "sub-child",
            },
            {
              label: "Partners",
              href: "https://incountry.com/partnerships/",
              className: "sub-child",
            },
            {
              label: "Pricing",
              href: "https://incountry.com/pricing/",
              className: "sub-child",
            },
            {
              label: "FAQ",
              href: "https://incountry.com/faq/",
              className: "sub-child",
            },
          ],
        },
        {
          type: "dropdown",
          label: "About",
          position: "left",
          className: "main-nav single-col",
          items: [
            {
              label: "Careers",
              href: "https://incountry.com/careers/",
              className: "sub-child",
            },
            {
              label: "Contact us",
              href: "https://incountry.com/contact/",
              className: "sub-child",
            },
            {
              label: "Leadership",
              href: "https://incountry.com/leadership/",
              className: "sub-child",
            },
          ],
        },
        {
          href: "https://portal.incountry.com/login",
          label: "LOGIN",
          position: "right",
          className: "login-btn",
        },
        {
          href: "#",
          label: "Try Demo",
          position: "right",
          className: "schedule-btn popup-open-btn",
        },
        {
          type: "search",
          position: "right",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
      logo: {
        alt: "InCountry",
        src: "img/incountry-logo-lightblue.svg",
        href: "/",
        target: "_self",
        width: 127,
        height: 67,
        style: {
          height: "67px",
        },
      },
      links: [
        {
          title: "Products & Solutions",
          items: [
            {
              html: `<label>Products</label>`,
            },
            {
              label: "InCountry for Apps",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/products/data-residency-as-a-service/",
            },
            {
              label: "InCountry for Identity",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/products/identity/",
            },
            {
              label: "InCountry for AI",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/products/ai/",
            },
            {
              label: "InCountry for Salesforce",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/products/salesforce/",
            },
            {
              label: "InCountry for Analytics",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/products/analytics/",
            },
            {
              html: `<label>Solutions</label>`,
            },
            {
              label: "Automotive",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/solutions/automotive/",
            },
            {
              label: "Energy",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/solutions/energy/",
            },
            {
              label: "Financial services",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/solutions/financial-services/",
            },
            {
              label: "Healthcare",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/solutions/healthcare/",
            },
            {
              label: "Retail",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/solutions/retail/",
            },
            {
              label: "Technology",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/solutions/technology/",
            },
            {
              label: "Telecom",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/solutions/telecom/",
            },
            {
              html: `<label class='titled'>Integrations</label>`,
            },
            {
              html: `<label>Apps</label>`,
            },
            {
              label: "Cegid",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/cegid/",
            },
            {
              label: "Charket",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/charket/",
            },
            {
              label: "Oracle HCM Cloud",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/oracle-hcm-cloud/",
            },
            {
              label: "Oracle Taleo",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/oracle-taleo/",
            },
            {
              label: "Salesforce",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/products/salesforce/",
            },
            {
              label: "SAP SuccessFactors",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/sap-successfactors/",
            },
            {
              label: "ServiceNow",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/servicenow/",
            },
            {
              label: "Talent Systems",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/talent-systems/",
            },
            {
              label: "Temenos",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/temenos/",
            },
            {
              label: "Veeva CRM",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/veeva/",
            },
            {
              label: "Workday",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/workday/",
            },
            {
              html: `<label class="titled show-mobile">CDP</label>`,
            },
            {
              label: "Salesforce Data Cloud",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/salesforce-data-cloud/",
            },
            {
              label: "Segment",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/segment/",
            },
            {
              label: "mParticle",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/mparticle/",
            },
            {
              label: "Lytics",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/lytics/",
            },
            {
              html: `<label>Data Lake / Warehouse</label>`,
            },
            {
              label: "Amazon Redshift",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/amazon-redshift/",
            },
            {
              label: "Databricks",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/databricks/",
            },
            {
              label: "Google BigQuery",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/google-bigquery/",
            },
            {
              label: "Snowflake",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/snowflake/",
            },
            {
              label: "Teradata",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/teradata/",
            },
          ],
        },
        {
          title: "Integrations",
          items: [
            {
              html: `<label class="hide-mob">CDP</label>`,
            },
            {
              label: "Salesforce Data Cloud",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/salesforce-data-cloud/",
            },
            {
              label: "Segment",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/segment/",
            },
            {
              label: "mParticle",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/mparticle/",
            },
            {
              label: "Lytics",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/lytics/",
            },
            {
              html: `<label>Data Lake / Warehouse</label>`,
            },
            {
              label: "Amazon Redshift",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/amazon-redshift/",
            },
            {
              label: "Databricks",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/databricks/",
            },
            {
              label: "Google BigQuery",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/google-bigquery/",
            },
            {
              label: "Snowflake",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/snowflake/",
            },
            {
              label: "Teradata",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/teradata/",
            },
            {
              html: `<label class="hide-mob-stop">ETL / Data Pipeline</label>`,
            },
            {
              label: "Informatica",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/informatica/",
            },
            {
              label: "Kafka",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/kafka/",
            },
            {
              label: "MuleSoft",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/mulesoft/",
            },
            {
              label: "Pentaho",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/pentaho/",
            },
            {
              html: `<label>Identity</label>`,
            },
            {
              label: "WSO2 Asgardeo",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/wso2-asgardeo/",
            },
            {
              html: `<label>Infrastructure</label>`,
            },
            {
              label: "Alibaba Cloud",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/products/alibabacloud/",
            },
            {
              label: "AWS Outposts",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/aws-outposts/",
            },
            {
              label: "Yandex",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/integrations/yandexcloud/",
            },
            {
              html: `<label class='titled show-mobile'>Developers</label>`,
            },
            {
              html: `<label>InCountry</label>`,
            },
            {
              label: "Developer overview",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/developers/overview/",
            },
            {
              label: "Tutorial",
              to: "/data-residency-as-a-service/tutorial/",
            },
            {
              label: "Documentation",
              to: "/",
            },
            {
              html: `<label>InCountry for Salesforce</label>`,
            },
            {
              label: "Developer overview",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/developers/salesforce-developers-overview/",
            },
            {
              label: "Developer guide",
              to: "/salesforce/about/",
            },
            {
              label: "Documentation",
              to: "/salesforce/about/",
            },
            {
              html: `<label class='titled show-mobile'>Resources</label>`,
            },
            {
              label: "News and Blog",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/news-blog/",
            },
            {
              label: "Library",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/resource/library/",
            },
            {
              label: "FAQ",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/faq/",
            },
            {
              label: "Country compliance",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/country-compliance/",
            },
            {
              label: "Partners",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/partnerships/",
            },
            {
              label: "Pricing",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/pricing/",
            },
            {
              html: `<label class='titled about-menu'>About</label>`,
            },
            {
              label: "Careers",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/careers/",
            },
            {
              label: "Contact us",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/contact/",
            },
            {
              label: "Leadership",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/leadership/",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              html: `<label>InCountry</label>`,
            },
            {
              label: "Developer overview",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/developers/overview/",
            },
            {
              label: "Tutorial",
              to: "/data-residency-as-a-service/tutorial/",
            },
            {
              label: "Documentation",
              to: "/",
            },
            {
              html: `<label>InCountry for Salesforce</label>`,
            },
            {
              label: "Developer overview",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/developers/salesforce-developers-overview/",
            },
            {
              label: "Developer guide",
              to: "/salesforce/apex-sdk/",
            },
            {
              label: "Documentation",
              to: "/salesforce/about/",
            },
            {
              html: `<label class='titled resources-menu'>Resources</label>`,
            },
            {
              label: "News and Blog",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/news-blog/",
            },
            {
              label: "Library",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/resource/library/",
            },
            {
              label: "FAQ",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/faq/",
            },
            {
              label: "Country compliance",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/country-compliance/",
            },
            {
              label: "Partners",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/partnerships/",
            },
            {
              label: "Pricing",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/pricing/",
            },
            {
              html: `<label class='titled about-menu'>About</label>`,
            },
            {
              label: "Careers",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/careers/",
            },
            {
              label: "Contact us",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/contact/",
            },
            {
              label: "Leadership",
              rel: "noopener",
              target: "_blank",
              to: "https://incountry.com/leadership/",
            },
          ],
        },
      ],
      copyright: `<div class='copy-text'>© InCountry ${new Date().getFullYear()}.<br/> All rights reserved. InCountry, Inc </div>
			<div class='social-terms-links'>
				<ul>
					<li><a href='https://incountry.com/legal/privacy-policy/'>PRIVACY POLICY</a></li>
					<li><a href='https://incountry.com/legal/terms-of-service/'>TERMS OF SERVICE</a></li>
					<li class='social-links-parent'>
						<ul class='social-links'>
							<li class='youtube'><a target='_blank' rel='noopener' href='https://www.youtube.com/channel/UC-hTSzrLRXQnk85KA9LUwdQ/featured'><img class="come-out" data-src='/img/youtube-icon-grey.svg' alt='Facebook'></a></li>
							<li class='facebook'><a target='_blank' rel='noopener' href='https://www.facebook.com/InCountryInc/'><img class="come-out" data-src='/img/facebook-logo.svg' alt='Facebook'></a></li>
							<li class='twitter' ><a target='_blank' rel='noopener' href='https://twitter.com/incountry'><img class="come-out" data-src='/img/twitter-logo.svg' alt='Twitter'></a></li>
							<li class='linkedin'><a target='_blank' rel='noopener' href='https://www.linkedin.com/company/incountry/'><img class="come-out" data-src='/img/linkedin-logo.svg' alt='LinkedIn'></a></li>
						</ul>
					</li>
				</ul>
			</div>`,
    },
    prism: {
      additionalLanguages: ["bash", "java", "apex", "perl"],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-PGC876P",
      },
    ],
  ],

  headTags: [
    {
      tagName: "script",
      attributes: {
        type: "module",
      },
      innerHTML: `
        import detectExternalLink from 'https://cdn.jsdelivr.net/npm/detect-external-link@2/+esm';
        document.addEventListener('DOMContentLoaded', () => {
          if (typeof detectExternalLink === 'function') {
            const selectLinks = document.querySelectorAll('.theme-doc-markdown a');
            selectLinks.forEach(element => {
              const linkHref = element.getAttribute('href');
              if (linkHref !== null) {
                const isExternal = detectExternalLink(linkHref, {
                  'hosts': [
                    'https://docs.incountry.com/'
                  ]
                });

                if (isExternal) {
                  element.setAttribute('rel', 'noopener');
                  element.setAttribute('target', '_blank');
                } else {
                  element.removeAttribute('target');
                  element.removeAttribute('rel');
                }
              }
            });
          }
        });
      `,
    },
  ],

  scripts: [
    {
      src: "/js/script.min.js",
      defer: true,
    },
    {
      src: "/js/demo-script.min.js",
      defer: true,
    },
  ],

  titleDelimiter: "-",
};

export default config;
