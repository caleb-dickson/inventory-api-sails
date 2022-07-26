const getInventory = require('./actions/get-inventory');
const createNew = require('./actions/create-new');
const update = require('./actions/update');
const remove = require('./actions/remove');

/**
 * InventoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  createNew: createNew,
  getInventory: getInventory,
  update: update,
  remove: remove

};

