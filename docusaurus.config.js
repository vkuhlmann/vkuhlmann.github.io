const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const MiniCssExtractPlugin = require('@docusaurus/core/node_modules/mini-css-extract-plugin')
//const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const Prism = require("prism-react-renderer/prism");

// require("prismjs/components/prism-latex");
// require("prismjs/components/prism-csharp");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'vkuhlmann',
  tagline: 'Personal website',
  url: 'https://vkuhlmann.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favico.ico',
  organizationName: 'vkuhlmann',
  projectName: 'vkuhlmann.github.io',
  themeConfig: {
    navbar: {
      title: 'vkuhlmann.com',
      logo: {
        alt: 'VK',
        src: 'img/VK.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
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
          href: 'https://github.com/vkuhlmann',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vincent Kuhlmann. Built with Docusaurus.`,
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
        docs: {
          // path: "product",
          // routeBasePath: "product",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/vkuhlmann/vkuhlmann.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/vkuhlmann/vkuhlmann.github.io/edit/main/',
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
