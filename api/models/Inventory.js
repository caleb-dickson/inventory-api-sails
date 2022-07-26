/**
 * Inventory.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
  //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
  //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

  attributes: {

    department: {
      type: 'string',
      required: true
    },
    isFinal: {
      type: 'boolean',
      required: true
    },
    dateStart: {
      type: 'string',
      columnType: 'date',
      required: true
    },
    dateEnd: {
      type: 'string',
      columnType: 'date',
      required: true
    },
    value: {
      type: 'number',
      defaultsTo: 0
    },
    inventory: {
      columnType: 'array',
      type: 'json'
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    location: {
      model: 'businesslocation'
    }

  },

};

