'use strict';

var _ = require('lodash'),
	underscoreString = require('underscore.string');

module.exports = _.extend(underscoreString, {
	filename: function (str) {
		return str.substr(0, str.lastIndexOf('.'));
	},

	// Get name normalized to first letter to lowercase
	downlize: function (str) {
		str = !str ? '' : String(str);
		return str.charAt(0).toLowerCase() + str.slice(1);
	}
});
