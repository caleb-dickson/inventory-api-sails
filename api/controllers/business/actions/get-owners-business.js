module.exports = {


  friendlyName: 'Get owners business',


  description: 'Find the business related to this owner user.',


  inputs: {
  },


  exits: {
    success: {
      description: 'Owner\'s business was found.'
    },
    notFound: {
      statusCode: 404,
      description: 'No business found for this user.'
    }
  },


  fn: async function () {

    const ownersBusiness = await Business.findOne(
      { owner: this.req.params.ownerId },
      { businesslocations: true }
    );

    sails.log(ownersBusiness);

    if (!ownersBusiness) {
      throw 'notFound';
    } else {
      return ownersBusiness;
    }
  }


};
