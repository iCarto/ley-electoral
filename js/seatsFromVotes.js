function seatsFromVotes(regions, threshold){
  options = {
    voteAccessor: function(object) {return object.votes},
    resultProperty: "seats",
    base: 1
  };
  var newSeats = [{}];
  regions.forEach(function(region){
    var resultsByParty = transformData(region, threshold);
    var result = computeDhondt(resultsByParty, region.seats, options);
    result.forEach(function(p){
      newSeats[0][p.party] = p.seats + (newSeats[0][p.party] || 0);
    });
  });
  return newSeats;
}

function transformData(region, threshold){
  var parties = Object.keys(region).filter(function(key){
    return (key != 'region'
    && key != 'seats'
    && key != 'total votes'
    && key != 'abstention'
    && key != 'invalid votes'
    && key != 'blank votes');
  });

  var minVotes = (region['total votes'] - region['invalid votes']) * (threshold / 100)
  var data = [];
  parties.forEach(function(p){
    data.push({
      party: p,
      // 0 votes for parties that does not pass the threshold
      // as they are excluded from the seats assignation by law
      votes: region[p] > minVotes ? region[p] : 0
    });
  });
  return data;
}
