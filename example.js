"use strict"

let TripFinder = require('./TripFinder.js');

//TripFinder.addProvider(require('freerider'));
TripFinder.addProvider(require('./DriveBackProvider.js'));

let routes = [
    TripFinder.Query().to('göteborg').car('CLA')
];

// fetch then search to reuse data without refething
TripFinder.fetch(function(collection){
	// callback gets a conainer that has all trips and convenience methods to search them
	let allTrips = collection.getTrips();
    let res = collection.findAny(routes)
    console.log(res);
})