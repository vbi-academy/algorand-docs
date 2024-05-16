import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  basicSidebar: [
    'basic/what-is-blockchain-and-it-benefits',
    {
      type: 'category',
      label: 'Introduction Algorand',
      items: [
        'basic/introduction-algorand/insight-into-algorand',
        'basic/introduction-algorand/ecosystem-overview',
        'basic/introduction-algorand/insight-into-avm-evm'
      ],
    },
  ],
  advancedSidebar: [
    'advanced/advanced'
  ],

  // tutorialSidebar: [
  //   'first-smart-contract',
  //   {
  //     type: 'category',
  //     label: 'Tutorial',
  //     items: ['introduction-near/what-is-near'],
  //   },
  // ],
};

export default sidebars;
