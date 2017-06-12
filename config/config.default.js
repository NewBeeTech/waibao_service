'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1497247263419_1926';

  // add your config here
  config.mongoose = {
    url: 'mongodb://127.0.0.1',
    options: {},
  };

  config.security = {
    csrf: false,
  };

  return config;
};

exports.mongoose = {
  url: 'mongodb://127.0.0.1',
  options: {},
};
