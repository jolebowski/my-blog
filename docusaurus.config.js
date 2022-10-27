// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Roadmap front end",
  tagline: "blog for help me and others developers",
  url: "https://jolebowski.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jolebowski", // Usually your GitHub org/user name.
  projectName: "My blog", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Roadmap front end by @jolebowski",
        logo: {
          alt: "My blog Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   to: "/docs/category/javascript",
          //   label: "JavaScript",
          //   position: "right",
          // },
          // {
          //   to: "/docs/category/typescript",
          //   label: "TypeScript",
          //   position: "right",
          // },
          // {
          //   to: "/docs/category/react",
          //   label: "React",
          //   position: "right",
          // },
          // {
          //   to: "/docs/redux",
          //   label: "Redux",
          //   position: "right",
          // },
          // {
          //   to: "/docs/category/es6",
          //   label: "Es6",
          //   position: "right",
          // },
          // {
          //   to: "/docs/css/introuction",
          //   label: "CSS",
          //   position: "right",
          // },
          // {
          //   to: "/docs/category/glossaire",
          //   label: "Glossaire",
          //   position: "right",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/jolebowski/my-blog",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      // algolia: {
      //   // apiKey: "e44c59d36394a26b1616e631a1c9d197",
      //   // indexName: "edy",
      //   // appId: "HXJSB0I3EO",
      // },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} jolebowski.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
