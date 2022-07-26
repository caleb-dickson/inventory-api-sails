const { env } = require('../../../../config/local');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

  inputs: {
    email: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    }
  },

  exits: {

    success: {
      description: 'Logged in. Welcome back!'
    },
    wrongUsername: {
      statusCode: 401,
      description: 'No user was found with that username.',
      body: 'Wrong username'
    },
    wrongPassword: {
      statusCode: 401,
      description: 'Incorrect password.'
    }

  },

  fn: async function (inputs) {
    const user = await User.findOne(
      { email: inputs.email },
      { managerAt: true, staffAt: true }
    );

    if (!user) {
      throw 'wrongUsername';
    } else {
      const bcryptRes = await bcrypt.compare(inputs.password, user.password);
      if (!bcryptRes) {
        throw 'wrongPassword';
      }
    }

    const userToken = jwt.sign(
      {
        email: user.email,
        userId: user.id,
        userRole: user.role,
        userDept: user.department
      },
      env.JWT_KEY,
      { expiresIn: '1h' }
    );

    return {
      token: userToken,
      expiresIn: 3600,
      user: user
    };

  }

};
