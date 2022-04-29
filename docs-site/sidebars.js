/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
   'introduction',
   'getting-started',
    {
      type: 'category',
      label: 'Accept payments',
      link: {
        type: 'doc', id: 'accept-payments/accept-payments'
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Checkout page',
          link: {
            type: 'doc', id: 'accept-payments/checkout-page/checkout-page'
          },
          items: [
            'accept-payments/checkout-page/step-by-step-guide',
            'accept-payments/checkout-page/configuration',
          ],
        },
        {
          type: 'category',
          label: 'Payment links',
          link: {
            type: 'doc', id: 'accept-payments/payment-links/payment-links'
          },
          items: [
            'accept-payments/payment-links/step-by-step-guide',
          ],
        },
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'doc', id: 'accept-payments/components/components'
          },
          items: [
            'accept-payments/components/card',
            'accept-payments/components/wallet',
            'accept-payments/components/configuration',
          ],
        },
        'accept-payments/api-only',
      ],
    },
    {
      type: 'category',
      label: 'Manage payments',
      link: {
        type: 'doc', id: 'manage-payments/manage-payments'
      },
      collapsed: true,
      items: [
        'manage-payments/capture',
        'manage-payments/change-amount',
        'manage-payments/send-receipt',
        {
          type: 'category',
          label: 'Cancellation payments',
          link: {
            type: 'doc', id: 'manage-payments/cancellation-payments/cancellation-payments'
          },
          items: [
            'manage-payments/cancellation-payments/cancel',
            'manage-payments/cancellation-payments/reversal',
            'manage-payments/cancellation-payments/refund',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Plugins',
      link: {
        type: 'doc', id: 'plugins/plugins'
      },
      collapsed: true,
      items: [
        'plugins/magento',
        'plugins/opencart',
        'plugins/prestashop',
        'plugins/woocommerce',
      ],
    },
    {
      type: 'category',
      label: 'Development resources',
      link: {
        type: 'doc', id: 'development-resources/development-resources'
      },
      collapsed: true,
      items: [
        'development-resources/versioning-overview',
        'development-resources/data-types',
        'development-resources/webhooks',
        'development-resources/testing',
        'development-resources/sdk'
        
      ],
    },
  ],

};



module.exports = sidebars;
