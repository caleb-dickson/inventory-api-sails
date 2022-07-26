module.exports = {


  friendlyName: 'Get users locations',


  description: 'Get a list of all locations where this user is associated',


  inputs: {
  },


  exits: {
    noLocations: {
      statusCode: 404,
      description: 'You haven\'t been added to any locations yet. Ask your management for access.'
    },
    owner: {
      statusCode: 401,
      description: 'Wrong route. Use [ GET /api/business/:ownerId ]'
    }
  },


  fn: async function () {
    const params = this.req.params;
    let user;
    sails.log(params);

    if (params.userRole === '3') {
      throw 'owner';
    }

    let locArr = [];
    let loc;

    if (params.userRole === '2') {
      user = await User.findOne(
        { id: params.userId },
        { managerAt: true }
      );


      for (const location of user.managerAt) {
        sails.log(location);
        loc = await BusinessLocation.findOne(
          { id: location.id },
          {
            managers: true,
            staff: true,
            inventories: true,
            products: true
          }
        );
        locArr.push(loc);
        sails.log(locArr);
        sails.log('location array');
      }

    } else if (params.userRole === '1') {
      user = await User.findOne(
        { id: params.userId },
        { staffAt: true }
      );


      for (const location of user.staffAt) {
        sails.log(location);
        loc = await BusinessLocation.findOne(
          { id: location.id },
          {
            managers: true,
            staff: true,
            inventories: true,
            products: true
          }
        );
        locArr.push(loc);
        sails.log(locArr);
        sails.log('location array');
      }
    }

    sails.log(user);

    if (!user) {
      throw 'noLocations';
    }

    if (locArr.length > 0) {
      return locArr;
    } else if (locArr.length === 0) {
      throw 'noLocations';
    }
  }
};
