$( document ).ready(function() {
    $('#region-btns button').prop('disabled', true);
    $('#threshold-btns button').prop('disabled', true);

    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlCountry, function(data) {
        votesByCountry = data.rows;
    });

    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlCCAA, function(data) {
        votesByCCAA = data.rows;
    });

    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlProvince, function(data) {
        votesByProvince = data.rows;

        svgNew();
        svgOld(parties, colors);
        setConfig();

        $('#region-btns button').prop('disabled', false);
        $('#threshold-btns button').prop('disabled', false);
    });


});
