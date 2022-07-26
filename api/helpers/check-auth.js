const jwt = require('jsonwebtoken');

module.exports = {

  fn: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, process.env.JWT_KEY);
      req.userData = {
        email: decodedToken.email,
        userId: decodedToken.userId,
        userRole: decodedToken.userRole,
        userDept: decodedToken.userDept
      };
      if (decodedToken.userId) {
        return next();
      }
    } catch (error) {
      res.status(401).json({
        message: 'Not authenticated! Log in.',
        error: error
      });
    }
  }

};


