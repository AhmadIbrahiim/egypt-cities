'use strict';

var expect = require('chai').expect;
var cities = require('../app');

describe('#return all cities', function () {
    it('should return the first citiy', function () {
        var result = cities.localCities();
        expect(result[0].toString()).to.equal({
            "city_name": "القاهره"
        }.toString());
    });


});