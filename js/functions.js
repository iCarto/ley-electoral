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

function updateBlock(newValue, baseValue, el, varEl, units=""){
  var variation = newValue - baseValue;
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
  updateBlock(proportionNew["pp"] || 0, proportionBase["pp"] || 0, $('#proportion-pp'), $('#proportion-var-pp'), '%');
  updateBlock(proportionNew["psoe"] || 0, proportionBase["psoe"] || 0, $('#proportion-psoe'), $('#proportion-var-psoe'));
  updateBlock(proportionNew["ciu"] || 0, proportionBase["ciu"] || 0, $('#proportion-ciu'), $('#proportion-var-ciu'));
  updateBlock(proportionNew["iu"] || 0, proportionBase["iu"] || 0, $('#proportion-iu'), $('#proportion-var-iu'));
  updateBlock(proportionNew["amaiur"] || 0, proportionBase["amaiur"] || 0, $('#proportion-amaiur'), $('#proportion-var-amaiur'));
  updateBlock(proportionNew["upyd"] || 0, proportionBase["upyd"] || 0, $('#proportion-upyd'), $('#proportion-var-upyd'));
  updateBlock(proportionNew["pnv"] || 0, proportionBase["pnv"] || 0, $('#proportion-pnv'), $('#proportion-var-pnv'));
  updateBlock(proportionNew["esquerra"] || 0, proportionBase["esquerra"] || 0, $('#proportion-esquerra'), $('#proportion-var-esquerra'));
  updateBlock(proportionNew["bng"] || 0, proportionBase["bng"] || 0, $('#proportion-bng'), $('#proportion-var-bng'));
  updateBlock(proportionNew["cc"] || 0, proportionBase["cc"] || 0, $('#proportion-cc'), $('#proportion-var-cc'));
  updateBlock(proportionNew["compromis"] || 0, proportionBase["compromis"] || 0, $('#proportion-compromis'), $('#proportion-var-compromis'));
  updateBlock(proportionNew["fac"] || 0, proportionBase["fac"] || 0, $('#proportion-fac'), $('#proportion-var-fac'));
  updateBlock(proportionNew["gbai"] || 0, proportionBase["gbai"] || 0, $('#proportion-gbai'), $('#proportion-var-gbai'));
  updateBlock(proportionNew["equo"] || 0, proportionBase["equo"] || 0, $('#proportion-equo'), $('#proportion-var-equo'));
  updateBlock(proportionNew["pacma"] || 0, proportionBase["pacma"] || 0, $('#proportion-pacma'), $('#proportion-var-pacma'));
  updateBlock(proportionNew["eb"] || 0, proportionBase["eb"] || 0, $('#proportion-eb'), $('#proportion-var-eb'));
  updateBlock(proportionNew["pa"] || 0, proportionBase["pa"] || 0, $('#proportion-pa'), $('#proportion-var-pa'));
  updateBlock(proportionNew["others"] || 0, proportionBase["others"] || 0, $('#proportion-others'), $('#proportion-var-others'));
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
    var seatsNew = seatsFromVotes(votes);
    var proportionNew = calculateProportion();
    var proportionBase = getProportionBase();
    //update viz
    createRects(seatsNew);
    updateTableSeats(seatsNew[0], seatsCurrent);
    updateTableProportion(proportionNew, proportionBase);
  } else if(ElectionsNewModel.groupBy === 'ccaa'){
    var votes = votesByCCAA;
    var seatsNew = seatsFromVotes(votes);
    var proportionNew = calculateProportion();
    var proportionBase = getProportionBase();
    //update viz
    createRects(seatsNew);
    updateTableSeats(seatsNew[0], seatsCurrent);
    updateTableProportion(proportionNew, proportionBase);
  } else if (ElectionsNewModel.groupBy === 'province'){
    var votes = votesByProvince;
    var seatsNew = seatsByProvince();
    var proportionNew = calculateProportion();
    var proportionBase = getProportionBase();
    //update viz
    createRects(seatsNew);
    updateTableSeats(seatsNew[0], seatsCurrent);
    updateTableProportion(proportionNew, proportionBase);
    // TODO: make it as the others
    // var votes = votesByProvince;
    // var seatsNew = seatsFromVotes(votes);
    // var proportion = calculateProportion(votes, seatsNew);
    // // update viz
    // createRects(seatsNew);
    // updateTableSeats(seatsNew[0], seatsCurrent);
    // updateTableProportion(proportion, proportionCurrent);
  }
  // TODO: include province in proper flux

}

// TODO: remove
function seatsByProvince(){
  return [seatsCurrent];
}

function getProportionBase(){
  // TODO: implement
  return {
    "pp":        "10",
    "psoe":      "2",
    "ciu":       "1",
    "iu":        "0",
    "amaiur":    "-1",
    "upyd":      "0",
    "pnv":       "-1",
    "esquerra":  "0",
    "bng":       "0",
    "cc":        "-2",
    "compromis": "",
    "fac":       "0",
    "gbai":      "1",
    "equo":      "3",
    "pacma":     "0",
    "eb":        "0",
    "pa":        "0"
  };
}

function calculateProportion(){
  // TODO: implement
  return {
    "pp":        "20",
    "psoe":      "8",
    "ciu":       "1",
    "iu":        "0",
    "amaiur":    "-1",
    "upyd":      "0",
    "pnv":       "-1",
    "esquerra":  "0",
    "bng":       "-1",
    "cc":        "-1",
    "compromis": "-1",
    "fac":       "-1",
    "gbai":      "0",
    "equo":      "0",
    "pacma":     "0",
    "eb":        "0",
    "pa":        "0"
  };

}
