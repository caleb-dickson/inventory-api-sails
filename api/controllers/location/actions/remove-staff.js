module.exports = {


  friendlyName: 'Remove staff',


  description: 'Remove an array of staffmembers by email from location "staff"',


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
    let staffIds = [];

    for (const email of emails) {
      const staffMember = await User.findOne({ email: email });
      staffIds.push(staffMember.id);
    }

    await BusinessLocation.removeFromCollection(
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
