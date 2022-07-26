const saveBizPhoto = require('../../../helpers/saveBizPhoto');

module.exports = {

  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS

  friendlyName: 'Update business',


  description: 'Update business doc and return the updated business.',


  inputs: {
    businessId: {
      type: 'string',
      required: true
    },
    business: {
      type: 'json',
      required: true
    },
  },

  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS

  exits: {
    success: {
      description: 'Business was updated successfully.'
    },

    notFound: {
      statusCode: 404,
      description: 'Business not found.',
    },
  },


  fn: async function (inputs) {

    const business = inputs.business;
    let imagePath = null;

    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    if (this.req.file.filename) {
      await saveBizPhoto.fn();
      sails.log(this.req.file.filename);
      const url = this.req.protocol + '://' + this.req.get('host');
      imagePath = url + '/images/business/' + this.req.file.filename;
      sails.log(imagePath);
    }

    sails.log(inputs.businessId);
    sails.log(imagePath);

    const updatedBusiness = await Business.updateOne({ id: inputs.businessId })
      .set({
        name: inputs.businessName,
        photo: imagePath ? imagePath : business.photo,
        inventoryDueDates: inputs.business.inventoryDueDates,
        inventoryPeriod: business.inventoryPeriod
      });

    sails.log.info(updatedBusiness);

    return updatedBusiness;

  }


};
