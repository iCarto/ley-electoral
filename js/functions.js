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

  updateBlock(seatsNew["pp"] || 0, seatsBase["pp"] || 0, $('#seats-pp'), $('#seats-var-pp'));
  updateBlock(seatsNew["psoe"] || 0, seatsBase["psoe"] || 0, $('#seats-psoe'), $('#seats-var-psoe'));
  updateBlock(seatsNew["ciu"] || 0, seatsBase["ciu"] || 0, $('#seats-ciu'), $('#seats-var-ciu'));
  updateBlock(seatsNew["iu"] || 0, seatsBase["iu"] || 0, $('#seats-iu'), $('#seats-var-iu'));
  updateBlock(seatsNew["amaiur"] || 0, seatsBase["amaiur"] || 0, $('#seats-amaiur'), $('#seats-var-amaiur'));
  updateBlock(seatsNew["upyd"] || 0, seatsBase["upyd"] || 0, $('#seats-upyd'), $('#seats-var-upyd'));
  updateBlock(seatsNew["pnv"] || 0, seatsBase["pnv"] || 0, $('#seats-pnv'), $('#seats-var-pnv'));
  updateBlock(seatsNew["esquerra"] || 0, seatsBase["esquerra"] || 0, $('#seats-esquerra'), $('#seats-var-esquerra'));
  updateBlock(seatsNew["bng"] || 0, seatsBase["bng"] || 0, $('#seats-bng'), $('#seats-var-bng'));
  updateBlock(seatsNew["cc"] || 0, seatsBase["cc"] || 0, $('#seats-cc'), $('#seats-var-cc'));
  updateBlock(seatsNew["compromis"] || 0, seatsBase["compromis"] || 0, $('#seats-compromis'), $('#seats-var-compromis'));
  updateBlock(seatsNew["fac"] || 0, seatsBase["fac"] || 0, $('#seats-fac'), $('#seats-var-fac'));
  updateBlock(seatsNew["gbai"] || 0, seatsBase["gbai"] || 0, $('#seats-gbai'), $('#seats-var-gbai'));
  updateBlock(seatsNew["equo"] || 0, seatsBase["equo"] || 0, $('#seats-equo'), $('#seats-var-equo'));
  updateBlock(seatsNew["pacma"] || 0, seatsBase["pacma"] || 0, $('#seats-pacma'), $('#seats-var-pacma'));
  updateBlock(seatsNew["eb"] || 0, seatsBase["eb"] || 0, $('#seats-eb'), $('#seats-var-eb'));
  updateBlock(seatsNew["pa"] || 0, seatsBase["pa"] || 0, $('#seats-pa'), $('#seats-var-pa'));
  updateBlock(seatsNew["others"] || 0, seatsBase["others"] || 0, $('#seats-others'), $('#seats-var-others'));
}

function updateTableProportion(proportionNew, proportionBase){
  updateBlock(proportionNew["pp"] || 0, proportionBase["pp"] || 0, $('#proportion-pp'), $('#proportion-var-pp'), true);
  updateBlock(proportionNew["psoe"] || 0, proportionBase["psoe"] || 0, $('#proportion-psoe'), $('#proportion-var-psoe'), true);
  updateBlock(proportionNew["ciu"] || 0, proportionBase["ciu"] || 0, $('#proportion-ciu'), $('#proportion-var-ciu'), true);
  updateBlock(proportionNew["iu"] || 0, proportionBase["iu"] || 0, $('#proportion-iu'), $('#proportion-var-iu'), true);
  updateBlock(proportionNew["amaiur"] || 0, proportionBase["amaiur"] || 0, $('#proportion-amaiur'), $('#proportion-var-amaiur'), true);
  updateBlock(proportionNew["upyd"] || 0, proportionBase["upyd"] || 0, $('#proportion-upyd'), $('#proportion-var-upyd'), true);
  updateBlock(proportionNew["pnv"] || 0, proportionBase["pnv"] || 0, $('#proportion-pnv'), $('#proportion-var-pnv'), true);
  updateBlock(proportionNew["esquerra"] || 0, proportionBase["esquerra"] || 0, $('#proportion-esquerra'), $('#proportion-var-esquerra'), true);
  updateBlock(proportionNew["bng"] || 0, proportionBase["bng"] || 0, $('#proportion-bng'), $('#proportion-var-bng'), true);
  updateBlock(proportionNew["cc"] || 0, proportionBase["cc"] || 0, $('#proportion-cc'), $('#proportion-var-cc'), true);
  updateBlock(proportionNew["compromis"] || 0, proportionBase["compromis"] || 0, $('#proportion-compromis'), $('#proportion-var-compromis'), true);
  updateBlock(proportionNew["fac"] || 0, proportionBase["fac"] || 0, $('#proportion-fac'), $('#proportion-var-fac'), true);
  updateBlock(proportionNew["gbai"] || 0, proportionBase["gbai"] || 0, $('#proportion-gbai'), $('#proportion-var-gbai'), true);
  updateBlock(proportionNew["equo"] || 0, proportionBase["equo"] || 0, $('#proportion-equo'), $('#proportion-var-equo'), true);
  updateBlock(proportionNew["pacma"] || 0, proportionBase["pacma"] || 0, $('#proportion-pacma'), $('#proportion-var-pacma'), true);
  updateBlock(proportionNew["eb"] || 0, proportionBase["eb"] || 0, $('#proportion-eb'), $('#proportion-var-eb'), true);
  updateBlock(proportionNew["pa"] || 0, proportionBase["pa"] || 0, $('#proportion-pa'), $('#proportion-var-pa'), true);
  updateBlock(proportionNew["others"] || 0, proportionBase["others"] || 0, $('#proportion-others'), $('#proportion-var-others'), true);
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
    doSetConfig(votesByCountry);
  } else if(groupBy === 'ccaa'){
    doSetConfig(votesByCCAA);
  } else if (groupBy === 'province'){
    var votes = votesByProvince;
    var seatsNew = seatsFromVotes(votes);
    var proportionNew = calculateProportion(seatsCurrent);
    var proportionBase = calculateProportion(seatsCurrent);
    //update viz
    createRects(seatsNew);
    updateTableSeats(seatsNew[0], seatsCurrent);
    updateTableProportion(proportionNew, proportionBase);
  }

}

function doSetConfig(votes) {
    var seatsNew = seatsFromVotes(votes);
    var proportionNew = calculateProportion(seatsNew[0]);
    var proportionBase = calculateProportion(seatsCurrent);
    //update viz
    createRects(seatsNew);
    updateTableSeats(seatsNew[0], seatsCurrent);
    updateTableProportion(proportionNew, proportionBase);
}

function getSeatsPercentage(seats){
  return {
    "pp":        (seats["pp"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "psoe":      (seats["psoe"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "ciu":       (seats["ciu"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "iu":        (seats["iu"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "amaiur":    (seats["amaiur"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "upyd":      (seats["upyd"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "pnv":       (seats["pnv"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "esquerra":  (seats["esquerra"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "bng":       (seats["bng"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "cc":        (seats["cc"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "compromis": (seats["compromis"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "fac":       (seats["fac"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "gbai":      (seats["gbai"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "equo":      (seats["equo"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "pacma":     (seats["pacma"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "eb":        (seats["eb"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "pa":        (seats["pa"]*100 / ElectionsDefaultModel.seats).toFixed(2),
    "others":    (seats["others"]*100 / ElectionsDefaultModel.seats).toFixed(2)
  };
}

function getVotesPercentage(){
  // shall these take into account all votes or only valid votes?
  return {
    "pp":        (votesByCountry[0]["pp"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "psoe":      (votesByCountry[0]["psoe"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "ciu":       (votesByCountry[0]["ciu"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "iu":        (votesByCountry[0]["iu"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "amaiur":    (votesByCountry[0]["amaiur"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "upyd":      (votesByCountry[0]["upyd"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "pnv":       (votesByCountry[0]["pnv"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "esquerra":  (votesByCountry[0]["esquerra"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "bng":       (votesByCountry[0]["bng"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "cc":        (votesByCountry[0]["cc"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "compromis": (votesByCountry[0]["compromis"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "fac":       (votesByCountry[0]["fac"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "gbai":      (votesByCountry[0]["gbai"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "equo":      (votesByCountry[0]["equo"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "pacma":     (votesByCountry[0]["pacma"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "eb":        (votesByCountry[0]["eb"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "pa":        (votesByCountry[0]["pa"]*100 / votesByCountry[0]["total votes"]).toFixed(2),
    "others":    (votesByCountry[0]["others"]*100 / votesByCountry[0]["total votes"]).toFixed(2)
  };
}

function calculateProportion(seats){
  var seats = getSeatsPercentage(seats);
  var votes = getVotesPercentage();

  return {
    "pp":        (seats["pp"] - votes["pp"]).toFixed(2),
    "psoe":      (seats["psoe"] - votes["psoe"]).toFixed(2),
    "ciu":       (seats["ciu"] - votes["ciu"]).toFixed(2),
    "iu":        (seats["iu"] - votes["iu"]).toFixed(2),
    "amaiur":    (seats["amaiur"] - votes["amaiur"]).toFixed(2),
    "upyd":      (seats["upyd"] - votes["upyd"]).toFixed(2),
    "pnv":       (seats["pnv"] - votes["pnv"]).toFixed(2),
    "esquerra":  (seats["esquerra"] - votes["esquerra"]).toFixed(2),
    "bng":       (seats["bng"] - votes["bng"]).toFixed(2),
    "cc":        (seats["cc"] - votes["cc"]).toFixed(2),
    "compromis": (seats["compromis"] - votes["compromis"]).toFixed(2),
    "fac":       (seats["fac"] - votes["fac"]).toFixed(2),
    "gbai":      (seats["gbai"] - votes["gbai"]).toFixed(2),
    "equo":      (seats["equo"] - votes["equo"]).toFixed(2),
    "pacma":     (seats["pacma"] - votes["pacma"]).toFixed(2),
    "eb":        (seats["eb"] - votes["eb"]).toFixed(2),
    "pa":        (seats["pa"] - votes["pa"]).toFixed(2),
    "others":    (seats["others"] - votes["others"]).toFixed(2),
  };
}
