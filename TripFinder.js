/*
 *	Created by Adam Sandström
 *	(c) 2017
 *
 *	adsa95@gmail.com
 *	www.adsa.se
 */

"use strict"

let Query = require('./Query.js');
let Trip = require('./Trip.js');
let Location = require('./Location.js');
let Vehicle = require('./Vehicle.js');
let TripCollection = require('./TripCollection.js');

class TripFinder{
	static Query(){
		return new Query();
	}

	static Location(name, address, lat, long){
		return new Location(name, address, lat, long);
	}

	static Vehicle(model, type, manualGearbox){
		return new Vehicle(model, type, manualGearbox);
	}

	static Trip(provider, from, to, vehicle, start, end){
		return new Trip(provider, from, to, vehicle, start, end);
	}

	static findAny(queries, callback){
		TripFinder.fetch(function(collection){
			callback(collection.findAny(queries));
		});
	}

	static fetch(callback){
		let promises = [];

		for (var i = TripFinder.providers.length - 1; i >= 0; i--) {
			promises.push(TripFinder.providers[i].fetch());
		}

		Promise.all(promises).then(function(results){
			let container = new TripCollection();

			for (var i = results.length - 1; i >= 0; i--) {
				container.merge(results[i]);
			}

			callback(container);
		}, function(error){
			// an error occured during fetching
			console.log(error);
		}).catch(function(error){
			// an error occured after fetching
			console.log(error);
		})
	}
}

TripFinder.providers = [];

TripFinder.addProvider = function(provider){
	TripFinder.providers.push(provider);
}

TripFinder.classes = {
	Trip: Trip,
	Location: Location,
	Query: Query,
	Vehicle: Vehicle
}

module.exports = TripFinder;