//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const lightCodeTheme = require('prism-react-renderer/themes/dracula');
//const lightCodeTheme = require('./src/theme/prism/prism-coy');
const lightCodeTheme = require('./src/theme/prism/prism-oldsite');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// console.log("lightCodeTheme is");
// console.log(lightCodeTheme.styles[7]);

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
    // googleAnalytics: {
    //   trackingID: 'G-3L9YD1ZX4M',
    //   // Optional fields.
    //   anonymizeIP: true,
    // },
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
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    function myPlugin(context, options) {
      return {
        configureWebpack: (config, isServer) => {
          let isDevelopment = config.mode === "DEVELOPMENT";
          // console.log("Config is");
          // console.log(config);

          // console.log();
          // //console.log(config.module.rules);
          // for (let rule of config.module.rules) {
          //   console.log(rule);
          //   console.log(rule.use && rule.use[0]);
          // }

          // for (let rule of config.module.rules) {
          //   if (rule.test != null && "aa.pdf".match(rule.test)) {
          //     console.log("Sabotaging");
          //     console.log(rule);
          //     rule.use[0].options.name = "assets/myexperiment/[name].[ext]";
          //   }
          // }

          let newRules = [
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
            },
            // {
            //   test: /\.txt$/,
            //   use: "raw-loader"
            // },
            // {
            //   test: /\.(png|jpg|svg|pdf|zip|txt)$/,
            //   type: "asset/resource",
            //   generator: {
            //     filename: "[path]test/[name][hash:7][ext]"
            //   }
            // }
            {
              test: /\.(pdf)$/,
              use: [
                {
                  loader: "@file-loader/dist/cjs.js",
                  options: {
                    name: "assets/files/test/[names].[ext]"
                  }
                }
              ]
              // type: "asset/resource",
              // generator: {
              //   filename: "[path]test/[name][ext]"
              // }

            }
          ];

          config.module.rules.splice(0, 0, ...newRules);

          return {
            // plugins: [
            //   new MiniCssExtractPlugin({
            //     filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            //     chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
            //   })
            // ],
            mergeStrategy: {"*": "preprend"},
            module: {
              //rules: newRules
            }
            //devtool: 'inline-source-map'
          };
        }
      }
    },
    [
      function printLog() {
        return {
          configureWebpack: (config, isServer) => {
            console.log("Config is");
            // console.log(config);

            // console.log();
            // //console.log(config.module.rules);
            // for (let rule of config.module.rules) {
            //   console.log(rule);
            //   console.log(rule.use && rule.use[0]);
            // }

            return {};
          }
        }
      },
      {
        id: "printLog"
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'latex',
        path: './latex',
        routeBasePath: '/latex',
        //sidebarPath: require.resolve('./sidebarsLaTeX.js')
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Based on example configuration shown at
        // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects
        // fromExtensions: ['html'],
        // toExtensions: ['exe', 'zip'],
        redirects: [
          { to: '/latex/configuration/installation', from: '/latex/install' },
          { to: '/latex/configuration/installation', from: '/latex/installation' },
          { to: "/latex/vakidioot/code1", from: "/go/cea539" },
          { to: '/latex/exercises/2022-02-GSNS/part1', from: '/latex/exercises' },
        ]
        // createRedirects: function (existingPath) {
        //   if (existingPath === '/docs/newDocPath2') {
        //     return ['/docs/oldDocPath2'];
        //   }
        // },
      },
    ],
    [
      "./plugin-google-analytics-modified",
      {}
    ]
  ]
};
