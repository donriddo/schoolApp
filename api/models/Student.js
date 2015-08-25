/**
* Student.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	name: {
  		type: 'string',
        required: true
  	},
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
  	email: {
  		type: 'email',
        required: true
  	},
  	address: {
  		type: 'string'
  	},
  	age: {
  		type: 'integer'
  	},
  	department: {
  		type: 'string',
        required: true
  	},
  	classLevel: {
  		type: 'string',
        required: true
  	},
  	tel: {
  		type: 'string',
        required: true
  	},
  	sex: {
  		type: 'string'
  	}

  }
};
