module.exports = {


  friendlyName: 'Create new product',


  description: 'Create a new product at a location',


  inputs: {
    product: {
      type: 'json',
      required: true
    }
  },


  exits: {
    success: {
      description: 'New user account was created successfully.'
    },

    productNameExists: {
      statusCode: 409,
      description: 'A product with this name already exists. Which product would you like to use?',
    },
  },


  fn: async function (inputs) {

    const name = inputs.product.name.toLowerCase();
    const prod = inputs.product;

    const newProduct = await Product.create(_.extend({
      name: name,
      location: prod.location,
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
    }))
      .intercept('E_UNIQUE', 'productNameExists')
      .fetch();

    await BusinessLocation.addToCollection(prod.location, 'products').members(newProduct.id)

    const productLocation = await BusinessLocation.findOne(
      { id: prod.location },
      {
        managers: true,
        staff: true,
        inventories: true,
        products: true
      }
    );

    sails.log(productLocation);

    return productLocation;

  }


};
