module.exports = {

  friendlyName: 'Update Inventory',


  description: 'Update inventory doc and return the updated, populated parent location.',


  inputs: {
    inventoryId: {
      type: 'string',
      required: true
    },
    inventory: {
      type: 'json',
      required: true
    },
  },

  exits: {
    success: {
      description: 'Inventory was updated successfully.'
    },

    notFound: {
      statusCode: 404,
      description: 'Inventory not found.',
    },
  },


  fn: async function (inputs) {

    const inv = inputs.inventory;

    const updatedInventory = await Inventory.updateOne({ id: inputs.inventoryId })
      .set({
        isFinal: inv.isFinal,
        dateStart: inv.dateStart,
        dateEnd: inv.dateEnd,
        value: inv.value,
        inventory: inv.inventory
      });

    const updatedLocation = await BusinessLocation.findOne(
      { id: updatedInventory.location },
      {
        managers: true,
        staff: true,
        inventories: true,
        products: true
      }
    );

    if (updatedInventory && updatedLocation) {
      return updatedLocation;
    } else {
      throw 'notFound';
    }

  }


};
