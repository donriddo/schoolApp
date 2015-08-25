/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	view:  function (req, res, next) {
    if (req.session.authenticated == true) {
			console.log('the if is running meaning he is logged in');
      res.redirect('/'+req.cookies.accountType+'/'+req.cookies.id);
    } else {
		console.log('You are not logged in, so im rendering the view');
    res.view('home');
		}
  }

};
