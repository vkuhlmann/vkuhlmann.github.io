//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const lightCodeTheme = require('prism-react-renderer/themes/dracula');
//const lightCodeTheme = require('./src/theme/prism/prism-coy');
const lightCodeTheme = require('./src/theme/prism/prism-oldsite');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

console.log("lightCodeTheme is");
console.log(lightCodeTheme.styles[7]);

const MiniCssExtractPlugin = require('@docusaurus/core/node_modules/mini-css-extract-plugin')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const Prism = require("prism-react-renderer/prism");

// require("prismjs/components/prism-latex");
// require("prismjs/components/prism-csharp");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'vkuhlmann.com',
  tagline: 'Personal website of Vincent Kuhlmann',
  url: 'https://vkuhlmann.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favico.ico',
  organizationName: 'vkuhlmann',
  trailingSlash: false,
  projectName: 'vkuhlmann.github.io',
  themeConfig: {
    navbar: {
      title: 'vkuhlmann.com',
      logo: {
        alt: 'VK',
        src: 'img/VK.png',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        {
          to: "/latex",
          position: "left",
          label: "LaTeX"
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left'
        },
        {
          href: 'https://github.com/vkuhlmann',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright (c) ${new Date().getFullYear()} Vincent Kuhlmann`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["latex", "csharp", "python"]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   // path: "product",
        //   // routeBasePath: "product",
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl:
        //     'https://github.com/vkuhlmann/vkuhlmann.github.io/edit/main/',
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          // editUrl:
          //   'https://github.com/vkuhlmann/vkuhlmann.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'latex',
        path: './latex',
        routeBasePath: '/latex',
        //sidebarPath: require.resolve('./sidebarsLaTeX.js')
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Based on example configuration shown at
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
        // fromExtensions: ['html'],
        // toExtensions: ['exe', 'zip'],
        redirects: [{ to: '/latex/configuration/installation', from: '/latex/installation', },],
        // createRedirects: function (existingPath) {
        //   if (existingPath === '/docs/newDocPath2') {
        //     return ['/docs/oldDocPath2'];
        //   }
        // },
      },
    ],
    function myPlugin(context, options) {
      return {
        configureWebpack: (config, isServer) => {
          let isDevelopment = config.mode === "DEVELOPMENT";
          console.log("Config is");
          console.log(config);

          console.log();

          return {
            // plugins: [
            //   new MiniCssExtractPlugin({
            //     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            //     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            //   })
            // ],
            module: {
              rules: [
                {
                  test: /\.module\.s(a|c)ss$/,
                  use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                      options: {
                        modules: true,
                        sourceMap: isDevelopment
                      }
                    },
                    {
                      loader: 'sass-loader',
                      options: {
                        sourceMap: isDevelopment
                      }
                    }
                  ]
                },
                {
                  test: /\.s(a|c)ss$/,
                  exclude: /\.module.(s(a|c)ss)$/,
                  use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                      loader: 'sass-loader',
                      options: {
                        sourceMap: isDevelopment
                      }
                    }
                  ]
                }
              ]
            }
            //devtool: 'inline-source-map'
          };
        }
      }
    }
  ]
};
