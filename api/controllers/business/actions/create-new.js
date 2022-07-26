module.exports = {


  friendlyName: 'New business',


  description: 'Owner creates a new business',

  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS

  inputs: {
    name: {
      type: 'string',
      required: true
    },
    owner: {
      type: 'string',
      required: true
    }
  },

  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS
  // STILL NEED TO TEST MULTER UPLOADS


  exits: {
    success: {
      statusCode: 201,
      description: 'New business was created successfully.'
    },
    multipleBusinesses: {
      statusCode: 409,
      description: 'This owner already has a business. Please create a new owner account to create a new business.',
    },
  },


  fn: async function (inputs) {

    imagePath = null;

    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    // STILL NEED TO TEST MULTER UPLOADS
    if (this.req.file.filename) {
      await saveBizPhoto.fn();
      sails.log(this.req.file);
      const url = this.req.protocol + '://' + this.req.get('host');
      imagePath = url + '/images/business/' + this.req.file.filename;
      sails.log(imagePath);
    }
    sails.log(imagePath);

    const newBusiness = await Business.create(_.extend({
      name: inputs.name,
      owner: inputs.owner,
      photo: imagePath ? imagePath : 'http://inventory.us-east-1.elasticbeanstalk.com/images/business/business_photo_default.png'
    }))
      .intercept('E_UNIQUE', 'multipleBusinesses')
      .fetch();

    return newBusiness;
  }
};
