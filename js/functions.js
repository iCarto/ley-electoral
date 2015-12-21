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

function updateTableSeats(seatsNew, seatsBase, seatsPercentage){
  parties.forEach(function(party){
    updateBlock(seatsNew[party] || 0, seatsBase[party] || 0, $('#seats-' + party), $('#seats-var-' + party));
    $("#seats-percent-"+party).html(seatsPercentage[party] + '%');
  });
}

function setConfig(){

  var groupBy = $('#region-btns .active').attr('id').split('-')[1] || ElectionsDefaultModel.groupBy;
  var seats = ElectionsDefaultModel.seats;
  var threshold = $('#threshold-btns .active').attr('id').split('-')[1] || ElectionsDefaultModel.threshold;

  if(groupBy === 'country'){
    doSetConfig(votesByCountry, threshold);
  } else if(groupBy === 'ccaa'){
    doSetConfig(votesByCCAA, threshold);
  } else if (groupBy === 'province'){
    doSetConfig(votesByProvince, threshold);
  }

}

function doSetConfig(votes, threshold) {
  var seatsNew = seatsFromVotes(votes, threshold);
  d3.select("#seats-new")
    .datum(seatsNew)
    .call(chartNewScenario);
  // createRects(seatsNew);
  updateTableSeats(seatsNew[0], seatsCurrent, getSeatsPercentage(seatsNew[0]));
}

function populateTable(){
  var votesFormatter = d3.format(".");
  var template = _.template('<tr class="row">' +
  '<td class="col-xs-1 pull-left">' +
  '<span class="<%= code %>">...</span><span><%= name %></span>' +
  '</td>' +
  '<td id="votes-<%= code %>" class="col-xs-1 hidden-xs text-right"><%= votes %></td>' +
  '<td id="votes-percent-<%= code %>" class="col-xs-1 hidden-xs text-right"><%= votes_percent %></td>' +
  '<td id="seats-<%= code %>" class="col-xs-1 seats text-right"><%= seats %></td>' +
  '<td id="seats-percent-<%= code %>" class="col-xs-1 text-right hidden-xs"><%= seats_percent %></td>' +
  '<td class="col-xs-1 text-center"><span id="seats-var-<%= code %>" class="equal">-</span></td>' +
  '</tr>  ');
  var votesPercentage = getVotesPercentage();
  var seats = seatsFromVotes(votesByProvince, ElectionsDefaultModel.threshold)[0];
  var seatsPercentage = getSeatsPercentage(seats);
  parties.forEach(function(party){
    $('tbody').append(template({
      code:          party,
      name:          names[party],
      votes:         $.number(votesByCountry[0][party], 0, ',', '.'),
      votes_percent: $.number(votesPercentage[party], 2, ',', '.') + '%',
      seats:         seats[party],
      seats_percent: $.number(seatsPercentage[party], 2, ',', '.') + '%'
    }));
  });
}

function getSeatsPercentage(seats){
  var seatsPercentage = {};
  parties.forEach(function(party){
    seatsPercentage[party] = (seats[party]*100 / ElectionsDefaultModel.seats).toFixed(2)
  });
  return seatsPercentage;
}

function getVotesPercentage(){
  // as a fraction of valid votes
  var votesPercentage = {};
  parties.forEach(function(party){
    votesPercentage[party] = (votesByCountry[0][party]*100 / (votesByCountry[0]["total votes"] - votesByCountry[0]["invalid votes"])).toFixed(2)
  });
  return votesPercentage;
}
