// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dojo Developer Portal',
  tagline: '',
  url: 'https://docs.dojo.tech/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'images/favicon.ico',
  organizationName: 'Dojo', // Usually your GitHub org/user name.
  projectName: 'remote-payments-developer-docs', // Usually your repo name.
  customFields: {
    asyncApiSpec: {
      api: "openapi-with-examples.json",
    }
  },
  presets: [
    [
      'redocusaurus',
      {
        specs: [
          {
            specUrl: 'openapi-with-examples.json',
            routePath: "/api"
          },
        ],
        theme: {
          /**
           * Highlight color for docs
           */
          //primaryColor: '#1890ff',
          /**
           * Options to pass to redoc
           * @see https://github.com/redocly/redoc#redoc-options-object
           */
          redocOptions: { hideDownloadButton: true, hideSchemaTitles:true, onlyRequiredInSamples:true, disableSearch: false, expandResponses:"200,201" },
        },
      }
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dojo-engineering/remote-payments-developer-docs/tree/feature/master/docs-site',
          exclude: ['**/api-definitions/**'],
        },
        // blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-160435074-14'
        },
      }),
    ],
  ],
  themes: [
    '@saucelabs/theme-github-codeblock'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'DojoDocs',
          src: 'images/logo.svg',
		      srcDark: 'images/logo_dark.svg',
          href: '/docs',
        },
        items: [
          {
            to: "/docs",
            activeBasePath: "/",
            position: 'left',
            label: 'Documentation',
          },
          {
            label: 'API Reference',
            position: 'left',
            to: '/api'
          },
          {type: 'search', position: 'right'},
          {to: 'https://github.com/orgs/dojo-engineering/discussions', label: 'Community', position: 'right'},
          {to: 'https://support.dojo.tech/hc/en-gb', label: 'Support', position: 'right'},
          {to: 'https://status.dojo.tech/', label: 'System status', position: 'right'},
          {to: 'https://account.dojo.tech/login', label: 'Log in', position: 'right'},
          
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
           //  href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: '☾',
          darkIconStyle: {
            marginLeft: '2px',
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: "\u263C",
          lightIconStyle: {
            marginLeft: '1px',
            color: 'white'
          },
        },
      },
      //plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
      //algolia: {
        //apiKey: 'f86f56d907f69c455b18518a5a4996a1',
        //indexName: 'docs-site',
        //appId: 'KJL6YSFBA3',
        //contextualSearch: true,
  
        // Optional: see doc section bellow
  
        //... other Algolia params
      //},
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started/',
              },
              {
                label: 'Accept payments',
                to: '/docs/accept-payments/',
              },
              {
                label: 'API Reference',
                to: '/api',
              },
              {
                label: 'Plugins',
                to: '/docs/plugins/',
              },
            ],
            
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/tags/dojo.tech',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dojo-engineering',
              },
              {
                label: 'Support',
                href: 'https://support.dojo.tech/hc/en-gb/requests/new',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                href: 'https://dojo.tech/about/',
              },
              {
                label: 'Blog',
                href: 'https://dojo.tech/blog/',
              },
              {
                label: 'Careers',
                href: 'https://dojo.careers/',
              },
              {
                label: 'Legal',
                href: 'https://dojo.tech/legal/',
              },
            ],
          },
        ],
        copyright: `Dojo is a trading name of Paymentsense Limited. Copyright © ${new Date().getFullYear()} Paymentsense Limited. All rights reserved. Paymentsense Limited is authorised and regulated by the Financial Conduct Authority (FCA FRN 738728) and under the Electronic Money Regulations 2011 (FCA FRN 900925) for the issuing of electronic money and provision of payment services.`,
      },
      prism: {
        theme: require("prism-react-renderer/themes/vsLight"),
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        additionalLanguages: ['csharp'],
      },
    }),
    
    plugins: [
      //[
         // require.resolve("@cmfcmf/docusaurus-search-local"),
         // {
              // Options here
           //  indexPages: true,
         // },
     // ],
     // [
      //  require.resolve('docusaurus-lunr-search'),
     // {
     //   excludeRoutes: [],
      //},
    //]
    [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      ignoreFiles: /snippets/,
    }
  ]
  ]
};

module.exports = config;