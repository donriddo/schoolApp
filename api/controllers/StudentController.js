/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	form: function (req, res) {
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash = {};
	},
	create: function (req, res, next) {
		Student.create(req.params.all(), function (err, student) {
			if (err) {
				req.session.flash = { err: err };
				res.redirect('/add-student');
			} else {
				console.log(student);
				req.session.authenticated = true;
				res.cookie('id', student.id);
				res.cookie('accountType', 'student');
				res.cookie('isAdmin', student.isAdmin);
				console.log(req.session);
				res.redirect('/student/' + student.id);
			}
		});
	},
	find: function (req, res, next) {
		Student.findOne(req.param('id'), function (err, student) {
			if (err) {
				console.log(err);
			} else if ('undefined' == typeof student) {
				res.redirect('/student');
			} else {
				res.view({
					student: student,
					cookies: req.cookies
				});
			}
		});
	},
	index: function (req, res, next) {
		Student.find(function(err, students) {
			if (err) {
				console.log(err);
			} else if ('undefined' == typeof students) {
				res.redirect('/');
			} else if (req.cookies.isAdmin == 'true') {
				res.view({
					students: students
				});
			} else {
				res.redirect('/student/'+req.cookies.id);
			}
		});
	},
	edit: function (req, res, next) {
		Student.findOne(req.param('id'), function (err, student){
			if (err) {
				console.log('error: ', err);
				req.session.flash = {
						err: err
				};
				res.redirect('/');
			} else {
				res.view({
					flash: res.locals.flash,
					student: student
				});
			}
		});
	},
	update: function (req, res, next) {
		Student.update(req.param('id'), req.params.all(), function (err) {
			if (err) {
                req.session.flash = {
                    err: err
                };
				res.redirect('/student/update/'+req.param('id'));
				console.log(err);
			} else {
				console.log('after updating, id is: '+ req.param('id') + 'Why am I running');
				res.redirect('/student/'+req.param('id'));
			}
		});
	},
	destroy: function (req, res, next) {
		Student.destroy(req.param('id'), function (err, user) {
			if(err) {
				console.log('User doesnt exist');
				res.redirect('/student');
			} else {
				console.log('student deleted, with the details: \n');
				res.redirect('/student');
			}
		});
	},
	signin: function (req, res, next) {
		Student.findOne({ username: req.body.username }, function (err, student) {
			if (err) {
				console.log('Database Error');
				res.redirect('/');
			} else if (!student) {
				console.log('Student does not exist');
				res.redirect('/');
			} else if (student && student.password == req.body.password) {
				console.log('checking out the new db\n' + student.isAdmin);
				req.session.authenticated = true;
				res.cookie('id', student.id);
				res.cookie('accountType', 'student');
				res.cookie('isAdmin', student.isAdmin);
				console.log('Signing as ' + req.body.username + ' with id: ' + student.id)
				res.redirect('/student/' + student.id);
			} else {
				res.redirect ('/');
			}
		});
	},
	logout: function (req, res, next) {
		console.log('I am the logout running');
		req.session.authenticated = false;
		res.redirect('/');
	}


};
