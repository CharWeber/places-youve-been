//Business Logic for Passport
function Passport() {
  this.destinations = {};
  this.currentId = 0;
}

Passport.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};
Passport.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};
Passport.prototype.findDestination = function(id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  }
  return false;
};
Passport.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
};


//Business logic for country

function Destination(country, city, landmarks, season, notes){
this.country = country
  this.cities = city
this.landmarks = landmarks
this.season = season
this.notes = notes
}  

// Destination.prototype.addCity(city) {
//   this.cities.push(city);
// };