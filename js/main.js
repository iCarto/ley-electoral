$( document ).ready(function() {
    $('#region-btns button').prop('disabled', true);
    $('#threshold-btns button').prop('disabled', true);

    
    var sqlCountry =  encodeURIComponent('SELECT \'España\' as region, sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes" , sum(blank_votes) as "blank votes", sum(pp) as pp, sum(psoe) as psoe, sum(dyl) as dyl, sum(iu_up) as iu, sum(bildu) as bildu, sum(upyd) as upyd, sum(pnv) as pnv, sum(esquerra) as esquerra, sum(nos) as nos, sum(cc) as cc, sum(gbai) as gbai, sum(pacma) as pacma, sum(eb) as eb, sum(ciudadanos) as ciudadanos, sum(compromis_podemos) + sum(en_comu_podem) + sum(en_marea) + sum(podemos) as podemos, sum(ciudadanos_centro_democratico) + sum(extremadura_unida) + sum(izquierda_verdes) + sum(others) + sum(verdes_ecopacifistas) as others, sum(mes) as mes, sum(pcpe) as pcpe, sum(proposta_per_illes_balears) as proposta_per_illes_balears, sum(recortes_cero) as recortes_cero, sum(udc) as udc, sum(vox) as vox FROM elections_2015');
    
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlCountry, function(data) {
        votesByCountry = data.rows;
        updateViz();
    });

    var sqlCCAA =  encodeURIComponent('SELECT ccaa as region, sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes" , sum(blank_votes) as "blank votes", sum(pp) as pp, sum(psoe) as psoe, sum(dyl) as dyl, sum(iu_up) as iu, sum(bildu) as bildu, sum(upyd) as upyd, sum(pnv) as pnv, sum(esquerra) as esquerra, sum(nos) as nos, sum(cc) as cc, sum(gbai) as gbai, sum(pacma) as pacma, sum(eb) as eb, sum(ciudadanos) as ciudadanos, sum(compromis_podemos) + sum(en_comu_podem) + sum(en_marea) + sum(podemos) as podemos, sum(ciudadanos_centro_democratico) + sum(extremadura_unida) + sum(izquierda_verdes) + sum(others) + sum(verdes_ecopacifistas) as others, sum(mes) as mes, sum(pcpe) as pcpe, sum(proposta_per_illes_balears) as proposta_per_illes_balears, sum(recortes_cero) as recortes_cero, sum(udc) as udc, sum(vox) as vox FROM elections_2015 GROUP BY ccaa');
    $.getJSON('https://icarto.cartodb.com/api/v2/sql/?q='+sqlCCAA, function(data) {
        votesByCCAA = data.rows;
        updateViz();
    });

    var sqlProvince =  encodeURIComponent('SELECT province as region, seats as seats, total_votes as "total votes", abstention as abstention, invalid_votes as "invalid votes" , blank_votes as "blank votes", pp as pp, psoe as psoe, dyl as dyl, iu_up as iu, bildu as bildu, upyd as upyd, pnv as pnv, esquerra as esquerra, nos as nos, cc as cc, gbai as gbai, pacma as pacma, eb as eb, ciudadanos as ciudadanos, compromis_podemos + en_comu_podem + en_marea + podemos as podemos, ciudadanos_centro_democratico + extremadura_unida + izquierda_verdes + others + verdes_ecopacifistas as others, mes as mes, pcpe as pcpe, proposta_per_illes_balears as proposta_per_illes_balears, recortes_cero as recortes_cero, udc as udc, vox as vox FROM elections_2015');
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
    svgNew();
    svgOld(parties, colors);
    populateTable();

    $('#region-btns button').prop('disabled', false);
    $('#threshold-btns button').prop('disabled', false);
  }
};
