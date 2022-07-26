module.exports = {

  friendlyName: 'Update product',


  description: 'Update product doc and return the updated, populated parent location.',


  inputs: {
    productId: {
      type: 'string',
      required: true
    },
    product: {
      type: 'json',
      required: true
    },
  },

  exits: {
    success: {
      description: 'Product was updated successfully.'
    },

    notFound: {
      statusCode: 404,
      description: 'Product not found.',
    },
  },


  fn: async function (inputs) {

    const name = inputs.product.name.toLowerCase();
    const prod = inputs.product;

    const updatedProduct = await Product.updateOne({ id: inputs.productId })
      .set({
        name: name,
        department: prod.department,
        category: prod.category,
        isActive: prod.isActive,
        unitSize: prod.unitSize,
        unitSingular: prod.unitSingular, /* model change */
        unitPlural: prod.unitPlural, /* model change */
        unitsPerPack: prod.unitsPerPack,
        packsPerCase: prod.packsPerCase,
        casePrice: prod.casePrice,
        par: prod.par
      });

    const updatedLocation = await BusinessLocation.findOne(
      { id: updatedProduct.location },
      {
        managers: true,
        staff: true,
        inventories: true,
        products: true
      }
    );

    sails.log.info(updatedLocation);
    sails.log.info(updatedProduct);

    if (updatedProduct && updatedLocation) {
      return updatedLocation;
    } else {
      throw 'notFound';
    }

  }


};
