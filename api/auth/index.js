'use strict';

const Module = {
  register: (server, options, next) => {
    server.route(require('./routes'));
    next();
  }
};

Module.register.attributes = {
  name: 'AuthModule',
  version: '1.0.0'
};

module.exports = function setup(server) {
  server.register(
    {register: Module},
    {routes: {prefix: '/api'}},
    err => {}
  );
};
