$( document ).ready(function() {
    $('#region-btns button').prop('disabled', true);
    $('#threshold-btns button').prop('disabled', true);
    
    var sql_statement='SELECT \'España\' as region, sum(seats) as seats, sum(abstention) as abstention, sum(amaiur) as amaiur, sum(blank_votes) as "blank votes", sum(bng) as bng, sum(cc) as cc, sum(ciu) as ciu, sum(compromis) as compromis, sum(eb) as eb, sum(equo) as equo, sum(esquerra) as esquerra, sum(fac) as fac, sum(gbai) as gbai, sum(invalid_votes) as "invalid votes", sum(iu) as iu, sum(others) as others, sum(pa) as pa, sum(pacma) as pacma, sum(pnv) as pnv, sum(pp) as pp, sum(prc) as prc, sum(psoe) as psoe, sum(pxc) as pxc, sum(total_votes) as "total votes", sum(upyd) as upyd FROM tabla_votos'
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sql_statement, function(data) {
        votesByCountry = data.rows;
    });

    sql_statement='SELECT ccaa as region, sum(seats) as seats, sum(abstention) as abstention, sum(amaiur) as amaiur, sum(blank_votes) as "blank votes", sum(bng) as bng, sum(cc) as cc, sum(ciu) as ciu, sum(compromis) as compromis, sum(eb) as eb, sum(equo) as equo, sum(esquerra) as esquerra, sum(fac) as fac, sum(gbai) as gbai, sum(invalid_votes) as "invalid votes", sum(iu) as iu, sum(others) as others, sum(pa) as pa, sum(pacma) as pacma, sum(pnv) as pnv, sum(pp) as pp, sum(prc) as prc, sum(psoe) as psoe, sum(pxc) as pxc, sum(total_votes) as "total votes", sum(upyd) as upyd FROM tabla_votos GROUP BY ccaa'
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sql_statement, function(data) {
        votesByCCAA = data.rows;
    });
    
    sql_statement='SELECT province as region, seats as seats, abstention as abstention, amaiur as amaiur, blank_votes as "blank votes", bng as bng, cc as cc, ciu as ciu, compromis as compromis, eb as eb, equo as equo, esquerra as esquerra, fac as fac, gbai as gbai, invalid_votes as "invalid votes", iu as iu, others as others, pa as pa, pacma as pacma, pnv as pnv, pp as pp, prc as prc, psoe as psoe, pxc as pxc, total_votes as "total votes", upyd as upyd FROM tabla_votos'
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sql_statement, function(data) {
        votesByProvince = data.rows;
    });

    svgNew();
    svgOld();
    
    $('#region-btns button').prop('disabled', false);
    $('#threshold-btns button').prop('disabled', false);
});
