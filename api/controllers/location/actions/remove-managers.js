module.exports = {


  friendlyName: 'Remove managers',


  description: 'Remove an array of managers by email from location "managers"',


  inputs: {
    locationId: {
      type: 'string',
      required: true
    },
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Users were successfully removed from the location.'
    },
  },


  fn: async function (inputs) {
    const emails = this.req.body.emails;
    let managerIds = [];

    for (const email of emails) {
      const manager = await User.findOne({ email: email });
      managerIds.push(manager.id);
    }

    await BusinessLocation.removeFromCollection(
      inputs.locationId, 'managers', managerIds
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
