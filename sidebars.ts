import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    "index",
    {
      type: "category",
      label: "Data Residency-as-a-Service",
      items: [
        "data-residency-as-a-service/introduction",
        "data-residency-as-a-service/tutorial",
        "data-residency-as-a-service/data-schema",
        "data-residency-as-a-service/authentication",
        "data-residency-as-a-service/encryption-and-tokenization",
        "data-residency-as-a-service/country-selection",
        "data-residency-as-a-service/cors",
        {
          type: "category",
          label: "Authorization",
          items: [
            "data-residency-as-a-service/data-firewall",
            "data-residency-as-a-service/coarse-grained-access",
            "data-residency-as-a-service/fine-grained-access",
          ],
        },
        {
          type: "category",
          label: "CRUD",
          items: [
            {
              "Web Services Proxy": [
                "data-residency-as-a-service/requests",
                "data-residency-as-a-service/ui-for-masked-disabled-fields",
                "data-residency-as-a-service/web-services-proxy-portal",
              ],
            },
            {
              "REST API": [
                "data-residency-as-a-service/rest-api-crud-requests",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Search",
          items: [
            "data-residency-as-a-service/search-web-services-proxy",
            "data-residency-as-a-service/search-rest-api",
          ],
        },
        "data-residency-as-a-service/file-management",
        "data-residency-as-a-service/analytics",
        {
          type: "category",
          label: "Resident Functions",
          items: [
            "data-residency-as-a-service/resident-functions",
            "data-residency-as-a-service/resident-functions-api",
            "data-residency-as-a-service/resident-functions-portal",
          ],
        },
        "data-residency-as-a-service/email",
        "data-residency-as-a-service/payments",
        "data-residency-as-a-service/data-migration",
        "data-residency-as-a-service/configuration-migration",
        {
          type: "category",
          label: "Examples",
          items: [
            "examples/rest-api-integration",
            "examples/global-search",
            "examples/read-many-records",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Portal",
      items: [
        "portal/getting-started-portal",
        "portal/managing-environments",
        "portal/activating-countries",
        "portal/managing-services",
        "portal/managing-encryption-keys",
        "portal/managing-sdk-credentials",
        "portal/usage-dashboard",
        "portal/managing-profile-organization",
        "portal/managing-users",
      ],
    },
    {
      type: "category",
      label: "Salesforce",
      items: [
        "salesforce/about",
        "salesforce/salesforce-overview",
        "salesforce/quick-start-guide-for-three-model-package",
        {
          type: "category",
          label: "Administrator's Guide",
          items: [
            "salesforce/managing-the-package",
            "salesforce/managing-permissions",
            "salesforce/managing-endpoints",
            "salesforce/registering-csp-trusted-sites",
            "salesforce/configuring-data",
            "salesforce/configuring-fields",
            "salesforce/hashing-username-field",
            "salesforce/field-criteria",
            "salesforce/registering-custom-objects",
            {
              "Swapping Salesforce Components": [
                "salesforce/replacing-elements",
                "salesforce/managing-web-components",
                "salesforce/managing-components",
                "salesforce/managing-web-forms",
              ],
            },
            "salesforce/salesforce-experience-cloud",
            "salesforce/managing-serverless-functions",
            "salesforce/managing-record-synchronization",
            "salesforce/managing-settings",
            "salesforce/tracking-changes",
            "salesforce/using-formula-fields",
            "salesforce/using-frontend-validations",
            {
              "Setting up Email Service": [
                "salesforce/inbound-email",
                "salesforce/outbound-email",
              ],
            },
            "salesforce/retokenizing-data",
            "salesforce/migrating-incountry-metadata-between-salesforce-orgs",
            "salesforce/data-loader",
            "salesforce/managing-duplicate-records",
          ],
        },
        {
          type: "category",
          label: "Developer's Guide",
          items: [
            "salesforce/apex-sdk",
            "salesforce/javascript-api",
            "salesforce/ui-api-methods",
            "salesforce/using-ui-components",
            "salesforce/retrieving-record-statistics",
            "salesforce/tracking-field-history",
            "salesforce/managing-apex-triggers",
          ],
        },
        {
          type: "category",
          label: "User's Guide",
          items: [
            "salesforce/regulated-field-protection",
            "salesforce/sending-compliant-emails",
            "salesforce/importing-data-into-salesforce",
            "salesforce/migrating-records",
            "salesforce/managing-audit-reports",
            "salesforce/converting-leads",
            "salesforce/configuring-search",
            "salesforce/managing-reports",
            "salesforce/salesforce-faq",
            {
              "Release Notes": [
                "salesforce/release-2.15.0",
                "salesforce/release-2.13.0",
                "salesforce/release-2.12.0",
                "salesforce/release-2.11.0",
                "salesforce/release-2.10.1",
                "salesforce/release-2.9.0",
                "salesforce/salesforce-release-notes",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        {
          type: "category",
          label: "CDP",
          items: ["integrations/segment"],
        },
      ],
    },
    {
      type: "category",
      label: "Other",
      items: [
        "other/data-models",
        "other/limits-and-quotas",
        "other/byok-guide",
      ],
    },
    {
      type: "category",
      label: "Release Notes",
      items: [
        "release-notes/rest-api-release-notes",
        "release-notes/portal-release-notes",
        "release-notes/border-release-notes",
      ],
    },
    {
      type: "link",
      label: "Service Status",
      href: "https://status.incountry.com/",
    },
  ],
};

export default sidebars;
