const getOwnersBusiness = require('./actions/get-owners-business');
const getBusinessLocations = require('./actions/get-business-locations');
const createNew = require('./actions/create-new');
const update = require('./actions/update');
const remove = require('./actions/remove');


/**
 * BusinessController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  createNew: createNew,
  getOwnersBusiness: getOwnersBusiness,
  getBusinessLocations: getBusinessLocations,
  update: update,
  remove: remove

};

