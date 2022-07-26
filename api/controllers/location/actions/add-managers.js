module.exports = {


  friendlyName: 'Add managers',


  description: 'Add an array of managers by email to location "managers"',


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
    let managerIds = [];
    sails.log(emails);

    for (const email of emails) {
      const manager = await User.findOne({ email: email });
      sails.log(manager);
      managerIds.push(manager.id);
    }
    sails.log(managerIds);

    await BusinessLocation.addToCollection(
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
