/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */


module.exports.routes = {

  // Cheesy landing json
  'GET /': { controller: 'welcome/LandingController', action: 'landing' },


  // USER Routes
  // auth
  /* DONE */'GET /api/user/locations/:userId/:userRole': { controller: 'user/UserController', action: 'getLocations' },
  /* DONE */'POST /api/user/login': { controller: 'user/UserController', action: 'login' },
  /* DONE */'POST /api/user/signup': { controller: 'user/UserController', action: 'signup' },
  'DELETE /api/user/:userId': { controller: 'user/UserController', action: 'remove' },
  'PUT /api/user/': { controller: 'user/UserController', action: 'update' },
  // password reset
  'GET /api/user/reset/:token': { controller: 'user/UserController', action: 'checkPassResetToken' },
  'POST /api/user/reset': { controller: 'user/UserController', action: 'resetPassInit' },
  /* WORKING */'PUT /api/user/reset': { controller: 'user/UserController', action: 'resetPass' },


  // BUSINESS Routes
  /* DONE */'GET /api/business/:ownerId': { controller: 'business/BusinessController', action: 'getOwnersBusiness' },
  /* DONE */'GET /api/business/locations/:businessId': { controller: 'business/BusinessController', action: 'getBusinessLocations' },
  /* DONE */'POST /api/business': { controller: 'business/BusinessController', action: 'createNew' },
  /* DONE */'PUT /api/business': { controller: 'business/BusinessController', action: 'update' },
  'DELETE /api/business/:businessId': { controller: 'business/BusinessController', action: 'remove' },


  // LOCATION Routes
  /* check bugs */'GET /api/location/:locationId': { controller: 'location/LocationController', action: 'getLocation' },
  /* DONE */'POST /api/location': { controller: 'location/LocationController', action: 'createNew' },
  /* DONE */'POST /api/location/managers': { controller: 'location/LocationController', action: 'addManagers' },
  /* DONE */'POST /api/location/staff': { controller: 'location/LocationController', action: 'addStaff' },
  /* DONE */'DELETE /api/location/managers': { controller: 'location/LocationController', action: 'removeManagers' },
  'DELETE /api/location/staff': { controller: 'location/LocationController', action: 'removeStaff' },
  'PUT /api/location': { controller: 'location/LocationController', action: 'update' },
  'DELETE /api/location': { controller: 'location/LocationController', action: 'remove' },


  /// LOCATION INVENTORY Routes
  'GET /api/inventory/:inventoryId': { controller: 'inventory/InventoryController', action: 'getInventory' },
  /* DONE */'POST /api/inventory': { controller: 'inventory/InventoryController', action: 'createNew' },
  /* DONE */ 'PUT /api/inventory': { controller: 'inventory/InventoryController', action: 'update' },
  'DELETE /api/inventory': { controller: 'inventory/InventoryController', action: 'remove' },

  /// LOCATION PRODUCT Routes
  'GET /api/product/:productId': { controller: 'product/ProductController', action: 'getOne' },
  /* DONE */'POST /api/product': { controller: 'product/ProductController', action: 'createNew' },
  /* DONE */'PUT /api/product': { controller: 'product/ProductController', action: 'update' },
  /* DONE */'DELETE /api/product': { controller: 'product/ProductController', action: 'remove' },








  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
