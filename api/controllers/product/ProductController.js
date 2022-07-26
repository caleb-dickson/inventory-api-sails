const getOne = require('./actions/get-one');
const createNew = require('./actions/create-new');
const update = require('./actions/update');
const remove = require('./actions/remove');

/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  createNew: createNew,
  getOne: getOne,
  update: update,
  remove: remove

};

