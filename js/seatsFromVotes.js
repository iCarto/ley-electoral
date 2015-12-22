function seatsFromVotes(regions, threshold){
  options = {
    voteAccessor: function(object) {return object.votes},
    resultProperty: "seats",
    base: 1
  };
  var seatsByParty = [{}];
  regions.forEach(function(region){
    var resultsByParty = transformData(region, threshold);
    var result = computeDhondt(resultsByParty, region.seats, options);
    result.forEach(function(p){
      seatsByParty[0][p.party] = p.seats + (seatsByParty[0][p.party] || 0);
    });
  });

  // we need to agregate the party seats into alliances or pacts
  var seats = [{}];
  _.keys(pacts).forEach(function(party) {
    pacts[party].forEach(function(ally) {
        seats[0][party] = (seats[0][party] + seatsByParty[0][ally]) || seatsByParty[0][ally];
    });
  });

  return seats;
}

function transformData(region, threshold){
  var partyVotes = Object.keys(region).filter(function(key){
    return (key != 'region'
    && key != 'seats'
    && key != 'total votes'
    && key != 'abstention'
    && key != 'invalid votes'
    && key != 'blank votes');
  });

  var minVotes = (region['total votes'] - region['invalid votes']) * (threshold / 100)
  var data = [];
  partyVotes.forEach(function(p){
    data.push({
      party: p,
      // 0 votes for parties that does not pass the threshold
      // as they are excluded from the seats assignation by law
      // Also we don't assign seats to others as we know that one by
      // one they will not get a seat
      votes: (region[p] > minVotes) && (p !== 'others') ? region[p] : 0
    });
  });

  return data;
}
