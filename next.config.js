/** @type {import('next').NextConfig} */
const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = resolve(__dirname, './'); // プロジェクトルートに対するエイリアス
    return config;
  },
};
