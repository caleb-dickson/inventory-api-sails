module.exports = {


  friendlyName: 'Add staffmember',


  description: '',


  inputs: {
    locationId: {
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Users were successfully added to the location.'
    },
  },


  fn: async function (inputs) {
    const emails = this.req.body.emails;
    let staffIds = [];

    for (const email of emails) {
      const manager = await User.findOne({ where: { email: email } });
      staffIds.push(manager.id);
    }

    await BusinessLocation.addToCollection(
      inputs.locationId, 'staff', staffIds
    );

    const location = await BusinessLocation.findOne(
      { id: inputs.locationId },
      {
        managers: true,
        staff: true,
        inventories: true,
        products: true
      });

    return location;

  }


};
