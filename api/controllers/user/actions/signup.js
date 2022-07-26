const bcrypt = require('bcryptjs');

module.exports = {

  inputs: {
    email: {
      type: 'string',
      required: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
      maxLength: 20
    },
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    phoneNumber: {
      type: 'string',
      required: true
    },
    role: {
      type: 'number',
      required: true
    },
    department: {
      type: 'string',
      required: true
    }
  },

  exits: {

    success: {
      description: 'New user account was created successfully.'
    },

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },

  fn: async function (inputs) {
    const newEmail = inputs.email.toLowerCase();
    const hash = await bcrypt.hash(inputs.password, 10);

    const newUser = await User.create(_.extend({
      password: hash,
      email: newEmail,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      phoneNumber: inputs.phoneNumber,
      role: inputs.role,
      department: inputs.department
    }))
      .intercept('E_UNIQUE', 'emailAlreadyInUse')
      .fetch();

    return newUser;

  }

};
