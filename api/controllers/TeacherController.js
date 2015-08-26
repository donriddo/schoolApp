/**
 * TeacherController
 *
 * @description :: Server-side logic for managing teachers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	form: function (req, res) {
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash = {};
	},
	create: function (req, res, next) {
		Teacher.create(req.params.all(), function (err, teacher) {
			if (err) {
				console.log(err);
                req.session.flash = {
                    err: err
                };
                res.redirect('/add-teacher');
			} else {
				req.session.authenticated = true;
				res.cookie('id', teacher.id);
				res.cookie('accountType', 'teacher');
				res.cookie('isAdmin', teacher.isAdmin);
				res.redirect('/teacher/' + teacher.id);
			}
		});
	},
	find: function (req, res, next) {
		Teacher.findOne(req.param('id'), function (err, teacher) {
			if (err) {
				console.log(err);
			} else if ('undefined' == typeof teacher) {
				res.redirect('/teacher');
			} else {
				res.view({
					teacher: teacher,
					cookies: req.cookies
				});
			}
		});
	},
	index: function (req, res, next) {
		Teacher.find(function(err, teachers) {
			if (err) {
				console.log(err);
			} else if ('undefined' == typeof teachers) {
				res.redirect('/');
			} else if (req.cookies.isAdmin == 'true') {
				res.view({
					teachers: teachers
				});
			} else {
				res.redirect('/teacher/'+req.cookies.id);
			}
		});
	},
	edit: function (req, res, next) {
		Teacher.findOne(req.param('id'), function (err, teacher){
			if (err) {
				console.log(err);
				req.session.flash = {
						err: err
				};
				res.redirect('/');
			} else {
				res.view({
					flash: res.locals.flash,
					teacher: teacher
				});
				// note that 'res.locals.flash' gets cleared after this cunny view. I love JS.
			}
		});
	},
	update: function (req, res, next) {
		Teacher.update(req.param('id'), req.params.all(), function (err) {
			if (err) {
                req.session.flash = {
                    err: err
                };
				res.redirect('/teacher/update/'+req.param('id'));
			} else {
				// console.log('after updating, id is: '+ req.param('id'));
				res.redirect('/teacher/'+req.param('id'));
			}
		});
	},
	destroy: function (req, res, next) {
		Teacher.destroy(req.param('id'), function (err, user) {
			if(err) {
				next('User doesnt exist');
			} else {
				console.log('teacher deleted, with the details: \n');
				res.redirect('/teacher');
			}
		});
	},
	signin: function (req, res, next) {
		Teacher.findOne({ username: req.body.username }, function (err, teacher) {
			if (err) {
				console.log('Database Error');
				res.redirect('/');
			} else if (!teacher) {
				console.log('Teacher does not exist');
				res.redirect('/');
			} else if (teacher && teacher.password == req.body.password) {
				req.session.authenticated = true;
				res.cookie('id', teacher.id);
				res.cookie('accountType', 'teacher');
				res.cookie('isAdmin', teacher.isAdmin);
				console.log('Signing as ' + req.body.username + ' with id: ' + teacher.id);
				res.redirect('/teacher/' + teacher.id);
			} else {
				res.redirect('/');
			}
		});
	},
	logout: function (req, res, next) {
		req.session.authenticated = false;
		res.redirect('/');
	}

};
