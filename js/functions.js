function updateThresholdTo0(){
  console.log('update threshold to 0');
  document.getElementById('threshold-0').className = 'active btn btn-default';
  document.getElementById('threshold-1').className = 'btn btn-default';
  document.getElementById('threshold-3').className = 'btn btn-default';
  document.getElementById('threshold-5').className = 'btn btn-default';
  setConfig({'threshold': 0});
}

function updateThresholdTo1(){
  console.log('update threshold to 1');
  document.getElementById('threshold-0').className = 'btn btn-default';
  document.getElementById('threshold-1').className = 'active btn btn-default';
  document.getElementById('threshold-3').className = 'btn btn-default';
  document.getElementById('threshold-5').className = 'btn btn-default';
  setConfig({'threshold': 1});
}

function updateThresholdTo3(){
  console.log('update threshold to 3');
  document.getElementById('threshold-0').className = 'btn btn-default';
  document.getElementById('threshold-1').className = 'btn btn-default';
  document.getElementById('threshold-3').className = 'active btn btn-default';
  document.getElementById('threshold-5').className = 'btn btn-default';
  setConfig({'threshold': 3});
}

function updateThresholdTo5(){
  console.log('update threshold to 5');
  document.getElementById('threshold-0').className = 'btn btn-default';
  document.getElementById('threshold-1').className = 'btn btn-default';
  document.getElementById('threshold-3').className = 'btn btn-default';
  document.getElementById('threshold-5').className = 'active btn btn-default';
  setConfig({'threshold': 5});
}

function updateRegionToProvince(){
  console.log('update region to province');
  document.getElementById('region-province').className = 'active btn btn-default';
  document.getElementById('region-ccaa').className = 'btn btn-default';
  document.getElementById('region-spain').className = 'btn btn-default';
  setConfig({'groupBy':'province'});
}

function updateRegionToCCAA(){
  console.log('update region to CCAA');
  document.getElementById('region-province').className = 'btn btn-default';
  document.getElementById('region-ccaa').className = 'active btn btn-default';
  document.getElementById('region-spain').className = 'btn btn-default';
  setConfig({'groupBy':'ccaa'});
}

function updateRegionToCountry(){
  console.log('update region to CCAA');
  document.getElementById('region-province').className = 'btn btn-default';
  document.getElementById('region-ccaa').className = 'btn btn-default';
  document.getElementById('region-spain').className = 'active btn btn-default';
  setConfig({'groupBy': 'country'});
}

function updateViz(seats, proportion){

  // seats
  // TODO: update color badges
  // TODO: include parties that would have a seat in other scenarios
  document.getElementById('seats-pp').textContent = seats[0]["pp"] || 0;
  document.getElementById('seats-psoe').textContent = seats[0]["psoe"] || 0;
  document.getElementById('seats-ciu').textContent = seats[0]["ciu"] || 0;
  document.getElementById('seats-iu').textContent = seats[0]["iu"] || 0;
  document.getElementById('seats-amaiur').textContent = seats[0]["amaiur"] || 0;
  document.getElementById('seats-upyd').textContent = seats[0]["upyd"] || 0;
  document.getElementById('seats-pnv').textContent = seats[0]["pnv"] || 0;
  document.getElementById('seats-esquerra').textContent = seats[0]["esquerra"] || 0;
  document.getElementById('seats-bng').textContent = seats[0]["bng"] || 0;
  document.getElementById('seats-cc').textContent = seats[0]["cc"] || 0;
  document.getElementById('seats-compromis').textContent = seats[0]["compromis"] || 0;
  document.getElementById('seats-fac').textContent = seats[0]["fac"] || 0;
  document.getElementById('seats-gbai').textContent = seats[0]["gbai"] || 0;
  document.getElementById('seats-equo').textContent = seats[0]["equo"] || 0;
  document.getElementById('seats-pacma').textContent = seats[0]["pacma"] || 0;
  document.getElementById('seats-eb').textContent = seats[0]["eb"] || 0;
  document.getElementById('seats-pa').textContent = seats[0]["pa"] || 0;

  // proportion
  // TODO: update color badges
  // TODO: recalculate % from votes
  // TODO: include parties that would have a seat in other scenarios
  document.getElementById('proportion-pp').textContent = proportion["pp"] || '-';
  document.getElementById('proportion-psoe').textContent = proportion["psoe"] || '-';
  document.getElementById('proportion-ciu').textContent = proportion["ciu"] || '-';
  document.getElementById('proportion-iu').textContent = proportion["iu"] || '-';
  document.getElementById('proportion-amaiur').textContent = proportion["amaiur"] || '-';
  document.getElementById('proportion-upyd').textContent = proportion["upyd"] || '-';
  document.getElementById('proportion-pnv').textContent = proportion["pnv"] || '-';
  document.getElementById('proportion-esquerra').textContent = proportion["esquerra"] || '-';
  document.getElementById('proportion-bng').textContent = proportion["bng"] || '-';
  document.getElementById('proportion-cc').textContent = proportion["cc"] || '-';
  document.getElementById('proportion-compromis').textContent = proportion["compromis"] || '-';
  document.getElementById('proportion-fac').textContent = proportion["fac"] || '-';
  document.getElementById('proportion-gbai').textContent = proportion["gbai"] || '-';
  document.getElementById('proportion-equo').textContent = proportion["equo"] || '-';
  document.getElementById('proportion-pacma').textContent = proportion["pacma"] || '-';
  document.getElementById('proportion-eb').textContent = proportion["eb"] || '-';
  document.getElementById('proportion-pa').textContent = proportion["pa"] || '-';

  //updateSeatsBar
  createRects(seats);
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
    updateViz(seats, proportion);
  } else if(ElectionsNewModel.groupBy === 'ccaa'){
    var votes = votesByCCAA;
    var seats = seatsFromVotes(votes);
    var proportion = calculateProportion(votes, seats);
    updateViz(seats, proportion);
  } else if (ElectionsNewModel.groupBy === 'province'){
    var votes = votesByProvince;
    // TODO: make it as the others
    // var seats = seatFromVotes(votesByProvince);
    var seats = seatsByProvince();
    var proportion = calculateProportion(votes, seats);
    return updateViz(seats, proportion);
  }
  // TODO: include province in proper flux

}

function seatsByProvince(){
  return [{
    "pp":      186,
    "psoe":    110,
    "ciu":      16,
    "iu":       11,
    "amaiur":    7,
    "upyd":      5,
    "pnv":       5,
    "esquerra":  3,
    "bng":       2,
    "cc":        2,
    "compromis": 1,
    "fac":       1,
    "gbai":      1
  }];
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
