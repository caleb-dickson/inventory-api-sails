const getLocation = require('./actions/get-location');
const createNew = require('./actions/create-new');
const update = require('./actions/update');
const remove = require('./actions/remove');
const addManagers = require('./actions/add-managers');
const addStaff = require('./actions/add-staff');
const removeManagers = require('./actions/remove-managers');
const removeStaff = require('./actions/remove-staff');

/**
 * LocationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createNew: createNew,
  update: update,
  remove: remove,
  addManagers: addManagers,
  addStaff: addStaff,
  removeManagers: removeManagers,
  removeStaff: removeStaff,
  getLocation: getLocation
};

