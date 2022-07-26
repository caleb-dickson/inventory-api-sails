module.exports = {


  friendlyName: 'Create new location',


  description: 'Owner creates a new location for the business',


  inputs: {
    name: {
      type: 'string',
      required: true
    },
    businessId: {
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      statusCode: 201,
      description: 'New location was successfully created and added to the business.'
    },
    failure: {
      statusCode: 400,
      description: 'An error has occurred.'
    }
  },


  fn: async function (inputs) {

    const newLocation = await BusinessLocation.create(_.extend({
      name: inputs.name,
      business: inputs.businessId
    }))
      .fetch();

    const populatedBusiness = await Business.findOne({
      where: { id: inputs.businessId }
    }).populate('businesslocations');

    sails.log(populatedBusiness);
    sails.log('||| ^^^ populatedBusiness ^^^ |||');

    return { newLocation: newLocation, populatedBusiness: populatedBusiness};

  }
};
