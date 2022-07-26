module.exports = {


  friendlyName: 'Create new inventory',


  description: 'Create a new inventory at a location',


  inputs: {
  },


  exits: {
    success: {
      description: 'New inventory was created successfully.'
    }
  },


  fn: async function () {
    const inv = this.req.body;
    sails.log(inv);
    sails.log('||| ^^^ req.body ^^^ |||');

    const newInventory = await Inventory.create(_.extend({
      department: inv.department,
      isFinal: inv.isFinal,
      dateStart: inv.dateStart,
      dateEnd: inv.dateEnd,
      value: inv.value,
      inventory: inv.inventory,
      location: inv.location
    }))
      .fetch();

    await BusinessLocation.addToCollection(inv.location, 'inventories').members(newInventory.id)

    const inventoryLocation = await BusinessLocation.findOne(
      { id: inv.location },
      {
        managers: true,
        staff: true,
        inventories: true,
        products: true
      }
    );

    sails.log(inventoryLocation);

    return inventoryLocation;

  }


};
