function updateThresholdTo0(){
  $('#threshold-0').removeClass().addClass('active btn btn-default');
  $('#threshold-1').removeClass().addClass('btn btn-default');
  $('#threshold-3').removeClass().addClass('btn btn-default');
  $('#threshold-5').removeClass().addClass('btn btn-default');
  setConfig();
}

function updateThresholdTo1(){
  $('#threshold-0').removeClass().addClass('btn btn-default');
  $('#threshold-1').removeClass().addClass('active btn btn-default');
  $('#threshold-3').removeClass().addClass('btn btn-default');
  $('#threshold-5').removeClass().addClass('btn btn-default');
  setConfig();
}

function updateThresholdTo3(){
  $('#threshold-0').removeClass().addClass('btn btn-default');
  $('#threshold-1').removeClass().addClass('btn btn-default');
  $('#threshold-3').removeClass().addClass('active btn btn-default');
  $('#threshold-5').removeClass().addClass('btn btn-default');
  setConfig();
}

function updateThresholdTo5(){
  $('#threshold-0').removeClass().addClass('btn btn-default');
  $('#threshold-1').removeClass().addClass('btn btn-default');
  $('#threshold-3').removeClass().addClass('btn btn-default');
  $('#threshold-5').removeClass().addClass('active btn btn-default');
  setConfig();
}

function updateRegionToProvince(){
  $('#region-province').removeClass().addClass('active btn btn-default');
  $('#region-ccaa').removeClass().addClass('btn btn-default');
  $('#region-country').removeClass().addClass('btn btn-default');
  setConfig();
}

function updateRegionToCCAA(){
  $('#region-province').removeClass().addClass('btn btn-default');
  $('#region-ccaa').removeClass().addClass('active btn btn-default');
  $('#region-country').removeClass().addClass('btn btn-default');
  setConfig();
}

function updateRegionToCountry(){
  $('#region-province').removeClass().addClass('btn btn-default');
  $('#region-ccaa').removeClass().addClass('btn btn-default');
  $('#region-country').removeClass().addClass('active btn btn-default');
  setConfig();
}

function updateBlock(newValue, baseValue, el, varEl, decimals){
  var variation;
  if(decimals){
    variation = (newValue - baseValue).toFixed(2);
  }else{
    variation = newValue - baseValue;
  }
  el.html(newValue);
  varEl.html(variation);

  // style variation badge
  varEl.removeClass('badge up down equal');
  if (variation > 0) {
    varEl.addClass('badge up') ;
  } else if(variation < 0){
    varEl.addClass('badge down');
  } else{
    varEl.addClass('equal');
    varEl.html('-'); // - is more concise than 0
  }
}

function updateTableSeats(seatsNew, seatsBase){
  parties.forEach(function(party){
    updateBlock(seatsNew[party] || 0, seatsBase[party] || 0, $('#seats-' + party), $('#seats-var-' + party))
  });
}

function updateTableProportion(proportionNew, proportionBase){
  parties.forEach(function(party){
  updateBlock(proportionNew[party] || 0, proportionBase[party] || 0, $('#proportion-' + party), $('#proportion-var-' + party), true);
  });
}


var ElectionsDefaultModel = {
  'groupBy': 'province',
  'seats': 350,
  'threshold': 3
};

function setConfig(){

  var groupBy = $('#region-btns .active').attr('id').split('-')[1] || ElectionsDefaultModel.groupBy;
  var seats = ElectionsDefaultModel.seats;
  var threshold = $('#threshold-btns .active').attr('id').split('-')[1] || ElectionsDefaultModel.threshold;

  // TODO: use CDB to retrieve votes grouped by proper region
  if(groupBy === 'country'){
    doSetConfig(votesByCountry, threshold);
  } else if(groupBy === 'ccaa'){
    doSetConfig(votesByCCAA, threshold);
  } else if (groupBy === 'province'){
    var votes = votesByProvince;
    var seatsNew = seatsFromVotes(votes, threshold);
    var proportionNew = calculateProportion(seatsCurrent);
    var proportionBase = calculateProportion(seatsCurrent);
    //update viz
    createRects(seatsNew);
    updateTableSeats(seatsNew[0], seatsCurrent);
    updateTableProportion(proportionNew, proportionBase);
  }

}

function doSetConfig(votes, threshold) {
  var seatsNew = seatsFromVotes(votes, threshold);
  var proportionNew = calculateProportion(seatsNew[0]);
  var proportionBase = calculateProportion(seatsCurrent);
  //update viz
  createRects(seatsNew);
  updateTableSeats(seatsNew[0], seatsCurrent);
  updateTableProportion(proportionNew, proportionBase);
}

function getSeatsPercentage(seats){
  var seatsPercentage = {};
  parties.forEach(function(party){
    seatsPercentage[party] = (seats[party]*100 / ElectionsDefaultModel.seats).toFixed(2)
  });
  return seatsPercentage;
}

function getVotesPercentage(){
  // // shall these take into account all votes or only valid votes?
  var votesPercentage = {};
  parties.forEach(function(party){
    votesPercentage[party] = (votesByCountry[0][party]*100 / votesByCountry[0]["total votes"]).toFixed(2)
  });
  return votesPercentage;
}

function calculateProportion(seats){
  var seats = getSeatsPercentage(seats);
  var votes = getVotesPercentage();

  var proportion = {};
  parties.forEach(function(party){
    proportion[party] = (seats[party] - votes[party]).toFixed(2)
  });
  return proportion;
}
