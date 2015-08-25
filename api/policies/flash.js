module.exports = function (req, res, next) {

    if (!req.session.flash) {
      return next();
    } else {
      res.locals.flash = _.clone(req.session.flash);
    }

    next();
};
