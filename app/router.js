'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.all('/authorization', controller.authorization.index);
  router.post('/login', app.oAuth2Server.token());
};
