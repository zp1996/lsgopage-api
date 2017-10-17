'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1508243017657_2434';

  // add your config here
  config.middleware = ['log'];

  return config;
};
