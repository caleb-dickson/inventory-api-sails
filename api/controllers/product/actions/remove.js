module.exports = {


  friendlyName: 'Delete products.',


  description: 'Deletes an array of products.',


  inputs: {
    locationId: {
      type: 'string',
      required: true
    },
    productIds: {
      type: ['string'],
      required: true
    }
  },


  exits: {},


  fn: async function (inputs) {

    await Product.destroy({ id: inputs.productIds });

    const updatedLocation = await BusinessLocation.findOne(
      { id: inputs.locationId },
      {
        managers: true,
        staff: true,
        inventories: true,
        products: true
      }
    );

    return updatedLocation;

  }


};
