require('dotenv').config();

const path = require('path');
const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const { exportPathMap } = require('nextjs-export-path-map');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withTypescript(
  withCSS({
    webpack(config) {
      const { DefinePlugin } = require('webpack');

      config.plugins.push(
        new DefinePlugin({
          'process.env.API_ENDPOINT': JSON.stringify(
            isProduction
              ? process.env.API_ENDPOINT || 'https://example.com/api'
              : process.env.API_ENDPOINT || 'http://localhost:3000/api'
          ),
          'process.env.SOME_TOKEN': JSON.stringify(process.env.SOME_TOKEN)
        })
      );
      return config;
    },
    cssModules: true,
    exportPathMap: exportPathMap.bind(null, path.join(__dirname, 'pages'))
  })
);
