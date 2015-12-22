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

var chartStaticScenario = seatsChart();
var chartNewScenario = seatsChart();

d3.select(window).on('resize', resize);

function resize(){

  var seats = seatsFromVotes(getVotesFromSelectedRegion(), getSelectedThreshold());
  chartNewScenario
    .width(document.getElementById('seats-new').offsetWidth)
    .height(30);
  d3.select('#seats-new')
    .datum(seats)
    .call(chartNewScenario);

  var seatsCurrent = seatsFromVotes(votesByProvince, ElectionsDefaultModel.threshold);
  chartStaticScenario
    .width(document.getElementById('seats-old').offsetWidth)
    .height(10);
  d3.select('#seats-old')
    .datum(seatsCurrent)
    .call(chartStaticScenario);
}

var dataCount = 0;
function updateViz(){
  dataCount++;
  if (dataCount === 3){
    // update viz when all data is received
    // as we need them to do some calculations

    var seats = seatsFromVotes(votesByProvince, ElectionsDefaultModel.threshold);
    chartNewScenario
      .width(document.getElementById('seats-new').offsetWidth)
      .height(30);
    d3.select('#seats-new')
        .datum(seats)
        .call(chartNewScenario);

    // for both charts to display, datum needs to be different
    var seatsCurrent = seatsFromVotes(votesByProvince, ElectionsDefaultModel.threshold);
    chartStaticScenario
      .width(document.getElementById('seats-old').offsetWidth)
      .height(10);
    d3.select('#seats-old')
        .datum(seatsCurrent)
        .call(chartStaticScenario);

    populateTable();

    $('#region-btns button').prop('disabled', false);
    $('#threshold-btns button').prop('disabled', false);
  }
};
