$( document ).ready(function() {
    $('#region-btns button').prop('disabled', true);
    $('#threshold-btns button').prop('disabled', true);

    var sql_statement='SELECT \'España\' as region, sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", sum(pp) as pp, sum(psoe) as psoe, sum(ciu) as ciu, sum(iu) as iu, sum(amaiur) as amaiur,  sum(upyd) as upyd, sum(pnv) as pnv, sum(esquerra) as esquerra, sum(bng) as bng, sum(cc) as cc,  sum(compromis) as compromis, sum(fac) as fac, sum(gbai) as gbai, sum(equo) as equo, sum(pacma) as pacma, sum(eb) as eb, sum(pa) as pa, sum(pxc) as pxc, sum(others) as others  FROM tabla_votos'
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sql_statement, function(data) {
        votesByCountry = data.rows;
    });

    sql_statement='SELECT ccaa as region, sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", sum(pp) as pp, sum(psoe) as psoe, sum(ciu) as ciu, sum(iu) as iu, sum(amaiur) as amaiur,  sum(upyd) as upyd, sum(pnv) as pnv, sum(esquerra) as esquerra, sum(bng) as bng, sum(cc) as cc,  sum(compromis) as compromis, sum(fac) as fac, sum(gbai) as gbai, sum(equo) as equo, sum(pacma) as pacma, sum(eb) as eb, sum(pa) as pa, sum(pxc) as pxc, sum(others) as others  FROM tabla_votos GROUP BY ccaa'
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sql_statement, function(data) {
        votesByCCAA = data.rows;
    });

    sql_statement='SELECT province as region, seats as seats, total_votes as "total votes", abstention as abstention, invalid_votes as "invalid votes", blank_votes as "blank votes", pp as pp, psoe as psoe, ciu as ciu, iu as iu, amaiur as amaiur, upyd as upyd, pnv as pnv, esquerra as esquerra, bng as bng, cc as cc,  compromis as compromis, fac as fac, gbai as gbai, equo as equo, pacma as pacma, eb as eb, pa as pa, pxc as pxc, others as others  FROM tabla_votos'
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sql_statement, function(data) {
        votesByProvince = data.rows;

        svgNew();
        svgOld(parties, colors);

        $('#region-btns button').prop('disabled', false);
        $('#threshold-btns button').prop('disabled', false);
    });


});
