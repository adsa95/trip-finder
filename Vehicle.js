/*
 *	Created by Adam Sandström
 *	(c) 2017
 *
 *	adsa95@gmail.com
 *	www.adsa.se
 */

"use strict"

class Vehicle{
	constructor(model, type = null, automatic = null){
		this._model = model;
		this._type = type;
		this._automatic = automatic;
	}

	isEmpty(){
		return (!this._model && !this._type && this._automatic === null);
	}

	hasDetails(){
		return (this._type !== null && this._automatic !== null);
	}

	match(vehicle){
		return this._model.toLowerCase().indexOf(vehicle._model.toLowerCase()) !== -1;
	}

	toString(){
		let res = this._model;
		if(this._type) res += ' (' + this._type + ')';
		return res;
	}
}

module.exports = Vehicle;