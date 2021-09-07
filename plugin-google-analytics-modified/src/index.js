/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Modified
 */

const path = require('path');
const { v4: uuidv4 } = require('uuid');

module.exports = function (context) {
  // const {siteConfig} = context;
  // const {themeConfig} = siteConfig;
  // const {googleAnalytics} = themeConfig || {};

  // if (!googleAnalytics) {
  //   throw new Error(
  //     `You need to specify "googleAnalytics" object in "themeConfig" with "trackingId" field in it to use docusaurus-plugin-google-analytics.`,
  //   );
  // }

  //const {trackingID, anonymizeIP} = googleAnalytics;

  const anonymizeIP = false;
  const trackingID = "G-3L9YD1ZX4M";

  if (!trackingID) {
    throw new Error(
      'You specified the "googleAnalytics" object in "themeConfig" but the "trackingID" field was missing. ' +
        'Please ensure this is not a mistake.',
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-google-analytics',

    getClientModules() {
      return isProd ? [path.resolve(__dirname, './analytics')] : [];
    },

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.google-analytics.com',
            },
          },
          // https://developers.google.com/analytics/devguides/collection/analyticsjs/#alternative_async_tag
          {
            tagName: 'script',
            innerHTML: `
              window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
              ga('create', '${trackingID}', {
                storeGac: false,
                storage: 'none',
                clientId: '${uuidv4()}'
              });
              ${anonymizeIP ? "ga('set', 'anonymizeIp', true);\n" : ''}
              ga('send', 'pageview');
            `,
          },
          {
            tagName: 'script',
            attributes: {
              async: true,
              src: 'https://www.google-analytics.com/analytics.js',
            },
          },
        ],
      };
    },
  };
};
