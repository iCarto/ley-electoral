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

var dataCount = 0;
function updateViz(){
  dataCount++;
  if (dataCount === 3){
    // update viz when all data is received
    // as we need them to do some calculations

    chartNewScenario = seats()
        .width(document.getElementById('seats-new').offsetWidth)
        .height(40);
    d3.csv("data/data.csv", function(data) {
      d3.select('#seats-new')
        .datum(data)
        .call(chartNewScenario);
    });

    svgOld(parties, colors);
    populateTable();

    $('#region-btns button').prop('disabled', false);
    $('#threshold-btns button').prop('disabled', false);
  }
};
