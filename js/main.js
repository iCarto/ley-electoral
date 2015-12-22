$( document ).ready(function() {
  $('#region-btns button').prop('disabled', true);
  $('#threshold-btns button').prop('disabled', true);

  $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlCountry, function(data) {
    votesByCountry = data.rows;
    updateViz();
  });

  $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlCCAA, function(data) {
    votesByCCAA = data.rows;
    updateViz();
  });

  $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlProvince, function(data) {
    votesByProvince = data.rows;
    updateViz();
  });


});

var chartNewScenario = seatsChart()
    .width(document.getElementById('seats-new').offsetWidth)
    .height(40);

d3.select(window).on('resize', resize);

function resize(){
  chartNewScenario.width(document.getElementById('seats-new').offsetWidth);
  var seats = seatsFromVotes(votesByProvince, ElectionsDefaultModel.threshold);
  d3.select('#seats-new').datum(seats).call(chartNewScenario);
  svgOld(parties, colors);
}

var dataCount = 0;
function updateViz(){
  dataCount++;
  if (dataCount === 3){
    // update viz when all data is received
    // as we need them to do some calculations

    var seats = seatsFromVotes(votesByProvince, ElectionsDefaultModel.threshold);
    d3.select('#seats-new')
        .datum(seats)
        .call(chartNewScenario);

    svgOld(parties, colors);

    populateTable();

    $('#region-btns button').prop('disabled', false);
    $('#threshold-btns button').prop('disabled', false);
  }
};
