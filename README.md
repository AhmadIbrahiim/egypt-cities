# Welcome to `egypt-citis` package!
[![Build Status](https://travis-ci.org/AhmadIbrahiim/egypt-cities.svg?branch=master)](https://travis-ci.org/AhmadIbrahiim/egypt-cities)

`egypt-citis` is an easy to use Node.js library to allow you to lookup a city and all nested areas!

At the moment, this package only supports cairo cities only. There are plans to extend this in the
next version.

### Install

```
npm install egypt-cities --save
```

### Usage

```
var cities = require('egypt-cities');
```
#### Get all cities

```
cities.localCities('NJ')
```

### Sample Response

A sample response or object that this module returns looks like this.

```
[	{
		"city_name" : "القاهره"
	},
	{
		"city_name" : "الجيزة"
	},
	{
		"city_name" : "السادس من أكتوبر"
	}
    ...
    ]
```
## License

MIT.