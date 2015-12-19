function updateThresholdTo0(){
  console.log('update threshold to 0');
  $('#threshold-0').removeClass().addClass('active btn btn-default');
  $('#threshold-1').removeClass().addClass('btn btn-default');
  $('#threshold-3').removeClass().addClass('btn btn-default');
  $('#threshold-5').removeClass().addClass('btn btn-default');
  setConfig({'threshold': 0});
}

function updateThresholdTo1(){
  console.log('update threshold to 1');
  $('#threshold-0').removeClass().addClass('btn btn-default');
  $('#threshold-1').removeClass().addClass('active btn btn-default');
  $('#threshold-3').removeClass().addClass('btn btn-default');
  $('#threshold-5').removeClass().addClass('btn btn-default');
  setConfig({'threshold': 1});
}

function updateThresholdTo3(){
  console.log('update threshold to 3');
  $('#threshold-0').removeClass().addClass('btn btn-default');
  $('#threshold-1').removeClass().addClass('btn btn-default');
  $('#threshold-3').removeClass().addClass('active btn btn-default');
  $('#threshold-5').removeClass().addClass('btn btn-default');
  setConfig({'threshold': 3});
}

function updateThresholdTo5(){
  console.log('update threshold to 5');
  $('#threshold-0').removeClass().addClass('btn btn-default');
  $('#threshold-1').removeClass().addClass('btn btn-default');
  $('#threshold-3').removeClass().addClass('btn btn-default');
  $('#threshold-5').removeClass().addClass('active btn btn-default');
  setConfig({'threshold': 5});
}

function updateRegionToProvince(){
  console.log('update region to province');
  $('#region-province').removeClass().addClass('active btn btn-default');
  $('#region-ccaa').removeClass().addClass('btn btn-default');
  $('#region-country').removeClass().addClass('btn btn-default');
  setConfig({'groupBy':'province'});
}

function updateRegionToCCAA(){
  console.log('update region to CCAA');
  $('#region-province').removeClass().addClass('btn btn-default');
  $('#region-ccaa').removeClass().addClass('active btn btn-default');
  $('#region-country').removeClass().addClass('btn btn-default');
  setConfig({'groupBy':'ccaa'});
}

function updateRegionToCountry(){
  console.log('update region to CCAA');
  $('#region-province').removeClass().addClass('btn btn-default');
  $('#region-ccaa').removeClass().addClass('btn btn-default');
  $('#region-country').removeClass().addClass('active btn btn-default');
  setConfig({'groupBy': 'country'});
}

function updateViz(seats, proportion){

  updateTable(seats, proportion);
  createRects(seats);
  // TODO: update map
}

function updateSeats(seatsNew, seatsCurrent, seatsEl, seatsVarEl){
  var seatsVariation = seatsNew - seatsCurrent;
  seatsEl.html(seatsNew);
  seatsVarEl.html(seatsVariation);

  // style variation badge
  seatsVarEl.removeClass('badge up down equal');
  if (seatsVariation > 0) {
    seatsVarEl.addClass('badge up') ;
  } else if(seatsVariation < 0){
    seatsVarEl.addClass('badge down');
  } else{
    seatsVarEl.addClass('equal');
    seatsVarEl.html('-'); // - is more concise than 0
  }
}

function updateTable(seats, proportion){

  // TODO: update color badges
  // TODO: include parties that would have a seat in other scenarios
  updateSeats(seats["pp"] || 0, seatsCurrent["pp"] || 0, $('#seats-pp'), $('#seats-var-pp'));
  updateSeats(seats["psoe"] || 0, seatsCurrent["psoe"] || 0, $('#seats-psoe'), $('#seats-var-psoe'));
  updateSeats(seats["ciu"] || 0, seatsCurrent["ciu"] || 0, $('#seats-ciu'), $('#seats-var-ciu'));
  updateSeats(seats["iu"] || 0, seatsCurrent["iu"] || 0, $('#seats-iu'), $('#seats-var-iu'));
  updateSeats(seats["amaiur"] || 0, seatsCurrent["amaiur"] || 0, $('#seats-amaiur'), $('#seats-var-amaiur'));
  updateSeats(seats["upyd"] || 0, seatsCurrent["upyd"] || 0, $('#seats-upyd'), $('#seats-var-upyd'));
  updateSeats(seats["pnv"] || 0, seatsCurrent["pnv"] || 0, $('#seats-pnv'), $('#seats-var-pnv'));
  updateSeats(seats["esquerra"] || 0, seatsCurrent["esquerra"] || 0, $('#seats-esquerra'), $('#seats-var-esquerra'));
  updateSeats(seats["bng"] || 0, seatsCurrent["bng"] || 0, $('#seats-bng'), $('#seats-var-bng'));
  updateSeats(seats["cc"] || 0, seatsCurrent["cc"] || 0, $('#seats-cc'), $('#seats-var-cc'));
  updateSeats(seats["compromis"] || 0, seatsCurrent["compromis"] || 0, $('#seats-compromis'), $('#seats-var-compromis'));
  updateSeats(seats["fac"] || 0, seatsCurrent["fac"] || 0, $('#seats-fac'), $('#seats-var-fac'));
  updateSeats(seats["gbai"] || 0, seatsCurrent["gbai"] || 0, $('#seats-gbai'), $('#seats-var-gbai'));
  updateSeats(seats["equo"] || 0, seatsCurrent["equo"] || 0, $('#seats-equo'), $('#seats-var-equo'));
  updateSeats(seats["pacma"] || 0, seatsCurrent["pacma"] || 0, $('#seats-pacma'), $('#seats-var-pacma'));
  updateSeats(seats["eb"] || 0, seatsCurrent["eb"] || 0, $('#seats-eb'), $('#seats-var-eb'));
  updateSeats(seats["pa"] || 0, seatsCurrent["pa"] || 0, $('#seats-pa'), $('#seats-var-pa'));
  updateSeats(seats["others"] || 0, seatsCurrent["others"] || 0, $('#seats-others'), $('#seats-var-others'));

  // proportion
  // TODO: update color badges
  // TODO: recalculate % from votes
  // TODO: include parties that would have a seat in other scenarios
  $('#proportion-pp').html(proportion["pp"] || '-');
  $('#proportion-psoe').html(proportion["psoe"] || '-');
  $('#proportion-ciu').html(proportion["ciu"] || '-');
  $('#proportion-iu').html(proportion["iu"] || '-');
  $('#proportion-amaiur').html(proportion["amaiur"] || '-');
  $('#proportion-upyd').html(proportion["upyd"] || '-');
  $('#proportion-pnv').html(proportion["pnv"] || '-');
  $('#proportion-esquerra').html(proportion["esquerra"] || '-');
  $('#proportion-bng').html(proportion["bng"] || '-');
  $('#proportion-cc').html(proportion["cc"] || '-');
  $('#proportion-compromis').html(proportion["compromis"] || '-');
  $('#proportion-fac').html(proportion["fac"] || '-');
  $('#proportion-gbai').html(proportion["gbai"] || '-');
  $('#proportion-equo').html(proportion["equo"] || '-');
  $('#proportion-pacma').html(proportion["pacma"] || '-');
  $('#proportion-eb').html(proportion["eb"] || '-');
  $('#proportion-pa').html(proportion["pa"] || '-');
  $('#proportion-others').html(proportion["others"] || '-');
}

var ElectionsDefaultModel = {
  'groupBy': 'province',
  'seats': 350,
  'minVotes': 2
},
ElectionsNewModel = {
  'groupBy': ElectionsDefaultModel.groupBy,
  'seats': ElectionsDefaultModel.seats,
  'minVotes': ElectionsDefaultModel.minVotes
};

function setConfig(options){
  ElectionsNewModel.groupBy = options.groupBy || ElectionsNewModel.groupBy;
  ElectionsNewModel.seats = options.seats || ElectionsNewModel.seats;
  ElectionsNewModel.minVotes = options.minVotes || ElectionsNewModel.minVotes;


  // TODO: use CDB to retrieve votes grouped by proper region
  if(ElectionsNewModel.groupBy === 'country'){
    var votes = votesByCountry;
    var seats = seatsFromVotes(votes);
    var proportion = calculateProportion(votes, seats);
    updateViz(seats[0], proportion);
  } else if(ElectionsNewModel.groupBy === 'ccaa'){
    var votes = votesByCCAA;
    var seats = seatsFromVotes(votes);
    var proportion = calculateProportion(votes, seats);
    updateViz(seats[0], proportion);
  } else if (ElectionsNewModel.groupBy === 'province'){
    var votes = votesByProvince;
    var seats = seatsByProvince();
    var proportion = calculateProportion(votes, seats);
    return updateViz(seats, proportion);
    // TODO: make it as the others
    // var votes = votesByProvince;
    // var seats = seatsFromVotes(votes);
    // var proportion = calculateProportion(votes, seats);
    //return updateViz(seats[0], proportion);
  }
  // TODO: include province in proper flux

}

function seatsByProvince(){
  return seatsCurrent;
}

function calculateProportion(){
  // TODO: implement
  return {
    "pp":        "-1 %",
    "psoe":      "2%",
    "ciu":       "1%",
    "iu":        "-1%",
    "amaiur":    "-1%",
    "upyd":      "-1%",
    "pnv":       "-1%",
    "esquerra":  "-1%",
    "bng":       "-1%",
    "cc":        "-1%",
    "compromis": "-1%",
    "fac":       "-1%",
    "gbai":      "-1%",
    "equo":      "-1%",
    "pacma":     "-1%",
    "eb":        "-1%",
    "pa":        "-1%"
  };

}
