const login = require('./actions/login');
const signup = require('./actions/signup');
const remove = require('./actions/remove');
const update = require('./actions/update');
const checkPassResetToken = require('./actions/check-pass-reset-token');
const resetPassInit = require('./actions/reset-pass-init');
const resetPass = require('./actions/reset-pass');
const getLocations = require('./actions/get-users-locations');

/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: login,
  signup: signup,
  remove: remove,
  update: update,
  checkPassResetToken: checkPassResetToken,
  resetPassInit: resetPassInit,
  resetPass: resetPass,
  getLocations: getLocations
};
