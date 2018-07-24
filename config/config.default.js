'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'zdluoa';

  // config.baseDir = "/";

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'graphql',
    host: '118.25.127.172',
    port: '3306',
    username: 'root',
    password: '123456',
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    // domainWhiteList: [ 'http://localhost:8080' ],
    csrf: {
      ignore: () => true,
    },
  }

  // 配置oath2鉴权
  config.oAuth2Server = {
    grants: ['password'], // 密码模式
  };

  // config.cors = {
  //   origin: '*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  //   credentials: true
  // };

  config.error = {
    match: '/graphql',
  };

  config.oauth = {
    match: '/graphql',
  };

  // add your config here
  config.middleware = ['error', 'oauth', 'graphql'];

  return config;
};
