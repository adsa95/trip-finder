/*
 *	Created by Adam Sandström
 *	(c) 2017
 *
 *	adsa95@gmail.com
 *	www.adsa.se
 */

"use strict"

class TripCollection{
	constructor(trips = []){
		this._trips = trips;
	}

	add(trip){
		this._trips.push(trip);
	}

	merge(trips){
		for (var i = trips.length - 1; i >= 0; i--) {
			this.add(trips[i]);
		}
	}

	getTrips(){
		return this._trips;
	}

	setTrips(trips){
		this._trips = trips;
	}

	find(query){
		let result = [];

		for (var i = this._trips.length - 1; i >= 0; i--) {
			if(query.match(this._trips[i])) result.push(this._trips[i]);
		}

		return result;
	}

	findAny(queries){
		let result = [];

triploop:
		for (var i = this._trips.length - 1; i >= 0; i--) {
			for (var j = queries.length - 1; j >= 0; j--) {
				if(queries[j].match(this._trips[i])){
					 result.push(this._trips[i]);
					 continue triploop;
				}
			}
		}

		return result;
	}
}

module.exports = TripCollection;