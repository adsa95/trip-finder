/*
 *	Created by Adam Sandström
 *	(c) 2017
 *
 *	adsa95@gmail.com
 *	www.adsa.se
 */

"use strict"

let Location = require('./Location.js');
let Vehicle = require('./Vehicle.js');

class Trip{
	constructor(provider = 'UNKNOWN', from = null, to = null, vehicle = null, start = null, end = null, url = null){
		this._provider = provider;
		this._from = from;
		this._to = to;
		this._vehicle = vehicle;
		this._start = start;
		this._end = end;
		this._url = url;
		this._extras = {};
	}

	getExra(key){
		return this._extras[key];
	}

	setExtra(key, value){
		this._extras[key] = value;
	}

	getFrom(){
		return this._from;
	}

	setFrom(location){
		this._from = location;
	}

	setTo(location){
		this._to = location;
	}

	getTo(){
		return this._to;
	}

	setVehicle(vehicle){
		this._vehicle = vehicle;
	}

	getVehicle(){
		return this._vehicle;
	}
}

module.exports = Trip;