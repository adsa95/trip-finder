/*
 *	Created by Adam Sandström
 *	(c) 2017
 *
 *	adsa95@gmail.com
 *	www.adsa.se
 */

"use strict"

class Location{
	constructor(name, address, lat, long){
		this._name = name;
		this._address = address;
		this._lat = lat;
		this._long = long;
	}

	isEmpty(){
		return (this._name == null && this._address == null && this._lat == null && this._long == null);
	}

	hasAddress(){
		return this._address !== null;
	}

	hasCoords(){
		return this.hasCoordinates();
	}

	hasCoordinates(){
		return (this._lat !== null && this._long !== null);
	}

	match(location){
		if(location._name === '*') return true;
		return this._name.toLowerCase().indexOf(location._name.toLowerCase()) !== -1;
	}
}

module.exports = Location;