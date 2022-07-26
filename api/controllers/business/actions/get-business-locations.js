module.exports = {


  friendlyName: 'Get owners business locations',


  description: 'Find the business related to this owner user and return an array of populated locations.',


  inputs: {
    businessId: {
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      description: 'Owner\'s locations were found.'
    },
    notFound: {
      statusCode: 404,
      description: 'No locations found for this business.'
    }
  },


  fn: async function (inputs) {

    sails.log(inputs);

    const locations = await BusinessLocation.find(
      { where: { business: inputs.businessId } },
      {
        managers: true,
        staff: true,
        inventories: true,
        products: true
      }
    );

    // sails.log(ownersBusiness);

    if (locations.length === 0) {
      throw 'notFound';
    } else {
      return locations;
    }
  }


};
