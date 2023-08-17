// latitudes and longitudes for English towns / cities (Southern latitudes and 
// Western longitudes represented as negative values)

let bradfordLatLon = [53.7938, - 1.7564];
let halifaxLatLon = [53.7270, - 1.8575];
let huddersfieldLatLon = [53.6458, - 1.7850];
let leedsLatLon = [53.8008, - 1.5491];

let lats = [bradfordLatLon[0], halifaxLatLon[0], huddersfieldLatLon[0],
  leedsLatLon[0]];

let lons = [bradfordLatLon[1], halifaxLatLon[1], huddersfieldLatLon[1],
  leedsLatLon[1]];

console.log(lats);
console.log(lons);

function coordsMidpoint(nums) {
  return nums.reduce((a, b) => (a + b)) / nums.length;
}

console.log(coordsMidpoint(lats));
console.log(coordsMidpoint(lons));

let midpointCoords = [coordsMidpoint(lats), coordsMidpoint(lons)];

console.log("midpoint coords are:" + midpointCoords);