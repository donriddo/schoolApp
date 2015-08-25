/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'get /': {
    controller: 'HomeController',
    action: 'view'
  },

  'get /add-student': {
    controller: 'StudentController',
    action: 'form'
  },
  'post /add-student': {
    controller: 'StudentController',
    action: 'create'
  },
  'get /student/logout' : {
    controller: 'StudentController',
    action: 'logout'
  },
  'get /student/:id': {
    controller: 'StudentController',
    action: 'find'
  },
  'get /student': {
    controller: 'StudentController',
    action: 'index'
  },
  'get /student/update/:id': {
    controller: 'StudentController',
    action: 'edit'
  },
  'post /student/update/:id': {
    controller: 'StudentController',
    action: 'update'
  },
  'post /student/destroy/:id': {
    controller: 'StudentController',
    action: 'destroy'
  },
  'post /student/signin': {
    controller: 'StudentController',
    action: 'signin'
  },





  'get /add-teacher': {
    controller: 'TeacherController',
    action: 'form'
  },
  'post /add-teacher': {
    controller: 'TeacherController',
    action: 'create'
  },
  'get /teacher/logout' : {
    controller: 'TeacherController',
    action: 'logout'
  },
  'get /teacher/:id': {
    controller: 'TeacherController',
    action: 'find'
  },
  'get /teacher': {
    controller: 'TeacherController',
    action: 'index'
  },
  'get /teacher/update/:id': {
    controller: 'TeacherController',
    action: 'edit'
  },
  'post /teacher/update/:id': {
    controller: 'TeacherController',
    action: 'update'
  },
  'post /teacher/destroy/:id': {
    controller: 'TeacherController',
    action: 'destroy'
  },
  'post /teacher/signin': {
    controller: 'TeacherController',
    action: 'signin'
  }









  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

}
