/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    name: {
      type: 'string',
      required: true,
      unique: true
    },
    department: {
      type: 'string',
      required: true
    },
    category: {
      type: 'string',
      required: true
    },
    isActive: {
      type: 'boolean',
      required: true
    },
    unitSize: {
      type: 'number',
      required: true
    },
    unitSingular: {
      type: 'string',
      required: true
    },
    unitPlural: {
      type: 'string',
      required: true
    },
    unitsPerPack: {
      type: 'number',
      required: true
    },
    packsPerCase: {
      type: 'number',
      required: true
    },
    casePrice: {
      type: 'number',
      required: true
    },
    par: {
      type: 'number',
      defaultsTo: 0
    },
    photo: {
      type: 'string',
      defaultsTo: 'http://inventory.us-east-1.elasticbeanstalk.com/images/products/product_photo_default.png'
    },


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    location: {
      model: 'businesslocation',
      required: true
    },

  },

};

