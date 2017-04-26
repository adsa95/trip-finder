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

class Query{
	constructor(){
		this._from = new Location();
		this._to = new Location();
		this._bothWays = false;
		this._vehicle = new Vehicle();
		this._start = null;
		this._end = null;
		this._extras = {};
	}

	getExra(key){
		return this._extras[key];
	}

	setExtra(key, value){
		this._extras[key] = value;
	}

	from(locString){
		this._from = new Location(locString);
		return this;
	}

	to(locString){
		this._to = new Location(locString);
		return this;
	}

	between(locString1, locString2){
		this._from = new Location(locString1);
		this._to = new Location(locString2);
		this._bothWays = true;
		return this;
	}

	fromOrTo(locString){
		return this.between(locString, '*');
	}

	car(model, type, automatic){
		return this.vehicle(model, type, automatic);
	}

	vehicle(model, type = null, automatic = null){
		this._vehicle = new Vehicle(model, type, automatic);
		return this;
	}

	match(trip){
		let match_fr = (this._from.isEmpty() || trip.getFrom().match(this._from));
		let match_to = (this._to.isEmpty() || trip.getTo().match(this._to));
		let match_car = (this._vehicle.isEmpty() || trip.getVehicle().match(this._vehicle));
		
		if(match_fr && match_to && match_car){
			return true;
		}else if(this._bothWays){
			let match_opp_fr = (this._to.isEmpty() || trip.getFrom().match(this._to));
			let match_opp_to = (this._from.isEmpty() || trip.getTo().match(this._from));

			return (match_opp_to && match_opp_fr && match_car);
		}
	}
}

module.exports = Query;