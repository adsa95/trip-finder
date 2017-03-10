"use strict"

let TripFinder = require('trip-finder');

TripFinder.addProvider(require('trip-finder-freerider'));
TripFinder.addProvider(require('trip-finder-driveback'));

let routes = [
    TripFinder.Query().to('göteborg').car('CLA')
];

// fetch then search to reuse data without refething
TripFinder.fetch(function(collection){
	// callback gets a conainer that has all trips and convenience methods to search them
	let allTrips = collection.getTrips();
    let matchingTrips = collection.findAny(routes)
})