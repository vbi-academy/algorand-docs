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
        {
          type: 'doc',
          id: 'basic/introduction-algorand/insight-into-algorand',
        },
        {
          type: 'doc',
          id: 'basic/introduction-algorand/the-big-picture'
        },
        {
          type: 'doc',
          id: 'basic/introduction-algorand/ecosystem-overview',
        },
        {
          type: 'doc',
          id: 'basic/introduction-algorand/insight-into-avm-evm',
        },
      ],
    },
    {
      type: 'category',
      label: 'Setup Development Environment',
      items: [
        'basic/setup/macos',
        'basic/setup/linux',
        'basic/setup/windows',
      ],
    },
    {
      type: 'category',
      label: 'Development Tools & Extensions',
      items: [
        'basic/tools/development-tools',
      ],
    },
    {
      type: 'category',
      label: 'First Your Smart Contract',
      items: [
        'basic/first-smart-contract/smart-contract-structure-python',
        'basic/first-smart-contract/assets',
        'basic/first-smart-contract/capabilites',
        'basic/first-smart-contract/deploy-and-call-on-algorand',
      ],
    },

  ],
  advancedSidebar: [
    'advanced/advanced'
  ],
};

export default sidebars;
