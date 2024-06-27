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
    {
      type: 'doc',
      id: 'basic/blockchain-it-benefits',
    },
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
        'basic/tools/python-sdk',
        'basic/tools/javascript-sdk',
        'basic/tools/algokit',
      ],
    },
    {
      type: 'category',
      label: 'First Your Smart Contract',
      items: [
        'basic/first-smart-contract/smart-contract-smart-signature',
        'basic/first-smart-contract/compile',
        'basic/first-smart-contract/generate',
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
    },
    {
      type: 'category',
      label: 'Python SDKs',
      items: [
        "basic/python-sdk/introduction-python-sdks",
        "basic/python-sdk/generate-accounts",
        "basic/python-sdk/atomic-transfer",
        "basic/python-sdk/state-access-manipulation",
        "basic/python-sdk/opcode-budgets",
        "basic/python-sdk/avm-operations",
        "basic/python-sdk/local-global-storage",
      ]
    },
    {
      type: 'doc',
      id: "basic/defi-smart-contract"
    },
    {
      type: 'category',
      label: 'Auction Decentralized Application',
      items: [
        {
          type: 'category',
          label: 'Auction Smart Contract Walkthrough',
          items: [
            {
              type: 'doc',
              id: 'basic/auction-dapp/smart-contract/setup-auction-contract'
            },
            'basic/auction-dapp/smart-contract/state',
            'basic/auction-dapp/smart-contract/create',
            'basic/auction-dapp/smart-contract/opt-in',
            'basic/auction-dapp/smart-contract/start-auction',
            'basic/auction-dapp/smart-contract/pay-bid',
            'basic/auction-dapp/smart-contract/claim-bid-asset',
            'basic/auction-dapp/smart-contract/delete'
          ]
        },
        "basic/auction-dapp/unit-test-auction-contract",
        {
          type: 'category',
          label: "Intergration on Front-End",
          items: [
            "basic/auction-dapp/intergration-front-end/introduction",
            "basic/auction-dapp/intergration-front-end/myalgo",
            "basic/auction-dapp/intergration-front-end/algosigner-intergration",
            "basic/auction-dapp/intergration-front-end/pera-wallet-intergration",
          ]
        }
      ]
    },
    "basic/staking-dapp/staking-dapp",
  ],
  advancedSidebar: [
    'advanced/advanced'
  ],
  aboutInstructor: [
    'about-instructor'
  ],
};

export default sidebars;
