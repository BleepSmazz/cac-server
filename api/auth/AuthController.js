'use strict';

const utils = require('../utils');

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  registerPlayer(request, reply) {
    return this.authService
      .registerPlayer(request.payload)
      .then(result => reply(result).created())
      .catch(err => utils.errorHandler(err, reply))
  }

  loginByEmail(request, reply) {
    const email = request.payload.email;
    const password = request.payload.password;

    return this.authService
      .loginByEmail(email, password)
      .then(result => reply(result))
      .catch(err => utils.errorHandler(err, reply))
  }

  loginByFacebook(request, reply) {
    const facebookId = request.payload.facebookId;
    const email = request.payload.email;
    const displayName = request.payload.displayName;

    return this.authService
      .loginByFacebook(facebookId, email, displayName)
      .then(result => reply(result))
      .catch(err => utils.errorHandler(err, reply))
  }
}

module.exports = AuthController;
