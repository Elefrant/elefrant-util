'use strict';

var util = require('../index'),
	should = require('should');

describe('util', function () {

	it('exports an object', function () {
		should.exist(util);
		util.should.be.an.Object;
	});

	it('exists async', function () {
		should.exist(util.async);
		util.async.should.be.an.Object;
	});

	it('exists glob', function () {
		should.exist(util.glob);
	});

	it('exists lodash', function () {
		should.exist(util.lodash);
	});

	it('exists chalk', function () {
		should.exist(util.chalk);
		util.chalk.should.be.an.Object;
	});

	it('exists format', function () {
		should.exist(util.format);
		util.format.should.be.an.Object;
	});

	describe('format functions', function () {
		it('find name from file', function () {
			var name = util.format.filename('lib.js');
			name.should.be.equal('lib');
		});

		it('downlize a string', function () {
			var name = util.format.downlize('ElefrantJs');
			name.should.be.equal('elefrantJs');
		});
	});
});
