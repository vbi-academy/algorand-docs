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
    {
      type: 'category',
      label: 'Basic Smart Contract',
      items: [
        'basic/basic-smart-contract/insight-into-algokit',
        'basic/basic-smart-contract/types', 
        'basic/basic-smart-contract/control-flow-structures',
        'basic/basic-smart-contract/module-level-constructs',
        'basic/basic-smart-contract/python-builtins',
        'basic/basic-smart-contract/error-handling-assertions',
        'basic/basic-smart-contract/storing-data-on-chain',
        'basic/basic-smart-contract/transactions',
      ],
    },
    {
      type: 'doc',
      id: 'basic/algorand-cli',
    },
    {
      type: 'category',
      label: 'Counter Smart Contract',
      items: [
        "basic/counter-contract/counter-contract-overview"
      ]
    }
  ],
  advancedSidebar: [
    'advanced/advanced'
  ],
};

export default sidebars;
