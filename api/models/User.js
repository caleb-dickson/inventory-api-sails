/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
  //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
  //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

  attributes: {

    email: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    resetToken: {
      type: 'string'
    },
    resetTokenExpiration: {
      type: 'string',
      columnType: 'date'
    },
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    phoneNumber: {
      type: 'string',
      required: true
    },
    role: {
      type: 'number',
      required: true
    },
    department: {
      type: 'string',
      required: true
    },
    photo: {
      type: 'string',
      defaultsTo: 'http://inventory.us-east-1.elasticbeanstalk.com/images/users/user_photo_default.png'
    },
    themePref: {
      type: 'string',
      defaultsTo: 'theme-dark'
    },

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    managerAt: {
      collection: 'businesslocation',
      via: 'managers'
    },
    staffAt: {
      collection: 'businesslocation',
      via: 'staff'
    }

  },

};

