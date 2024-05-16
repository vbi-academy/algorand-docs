import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from './plugins/tailwind-config.cjs'

const config: Config = {
  title: 'Algorand ',
  tagline: 'Algorand Bootcamp 2024',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://algorand-docs.openedu101.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openedu101', // Usually your GitHub org/user name.
  projectName: 'algorand-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
  },
  plugins: [tailwindPlugin],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/openedu101/algorand-docs',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/openedu101/algorand-docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: 'id-0002',

      content:
        '🎉 Come check <a href="/blog">our new blog</a> or <a href="https://openedu101.com" target="_blank">our new courses</a>, where we will share weekly news and updates 🎉',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      title: 'Algorand',
      logo: {
        alt: 'OpenEdu101 Logo',
        src: 'img/img_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'basicSidebar',
          position: 'left',
          label: 'Basic',
        },
        {
          type: 'docSidebar',
          sidebarId: 'advancedSidebar',
          label: 'Advanced',
          position: 'left'
        },
        {
          href: 'https://openedu101.com',
          label: 'Algorand Course',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jayden-dang/algorand-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: 'https://discord.com/invite/uMBFPZKqQD',
        //     }
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/jayden-dang/algorand-docs',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} by <a target="_blank" href="https://twitter.com/jayden_dangvu">Jayden Đặng</a> - <a href="https://openedu101.com" target="_blank">OpenEdu101</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
