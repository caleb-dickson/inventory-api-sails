module.exports = {


  friendlyName: 'Landing',


  description: 'Landing message.',


  inputs: {

  },


  exits: {
    success: {
      description: 'Welcome to Inventory!'
    }
  },


  fn: async function () {

    return {
      welcomeMessage:
        'Welcome to Inventory! You\'ve reached the API. There\'s not much to see here but feel free to visit the app at the following URLs.',
      checkOutTheApp: {
        forMe: 'http://localhost:4200',
        forYou: 'http://inventory-v.0.0.1.s3-website-us-east-1.amazonaws.com/'
      }
    };

  }


};
