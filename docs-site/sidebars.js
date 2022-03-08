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
   'Introduction',
   'Getting started',
    {
      type: 'category',
      label: 'Accept payments',
      link: {
        type: 'doc', id: 'Accept payments/Accept payments'
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Online checkout',
          link: {
            type: 'doc', id: 'Accept payments/Online checkout/Online checkout'
          },
          items: [
            'Accept payments/Online checkout/step-by-step-guide',
            'Accept payments/Online checkout/configuration',
          ],
        },
        {
          type: 'category',
          label: 'Payment links',
          link: {
            type: 'doc', id: 'Accept payments/Payment links/Payment links'
          },
          items: [
            'Accept payments/Payment links/step-by-step-guide',
          ],
        },
        {
          type: 'category',
          label: 'Components',
          link: {
            type: 'doc', id: 'Accept payments/Components/Components'
          },
          items: [
            'Accept payments/Components/card',
            'Accept payments/Components/wallet',
            'Accept payments/Components/configuration',
          ],
        },
        'Accept payments/api-only',
      ],
    },
    {
      type: 'category',
      label: 'Manage payments',
      link: {
        type: 'doc', id: 'Manage payments/Manage payments'
      },
      collapsed: true,
      items: [
        'Manage payments/capture',
        'Manage payments/change-amount',
        'Manage payments/send-receipt',
        {
          type: 'category',
          label: 'Cancellation payments',
          link: {
            type: 'doc', id: 'Manage payments/Cancellation payments/Cancellation payments'
          },
          items: [
            'Manage payments/Cancellation payments/cancel',
            'Manage payments/Cancellation payments/reversal',
            'Manage payments/Cancellation payments/refund',
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
        type: 'doc', id: 'Development resources/Development resources'
      },
      collapsed: true,
      items: [
        'Development resources/data-types',
        'Development resources/versioning-overview',
        'Development resources/webhooks',
        'Development resources/testing',
      ],
    },
  ],

};



module.exports = sidebars;
