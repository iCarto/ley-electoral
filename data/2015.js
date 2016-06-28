var ElectionsDefaultModel = {
  'groupBy': 'province',
  'seats': 350,
  'threshold': 3
};

var seatsCurrent = {
  "pp":         123,
  "psoe":       90,
  "podemos":    69,
  "ciudadanos": 40,
  "esquerra":   9,
  "dyl":        8,
  "pnv":        6,
  "iu":         2,
  "bildu":      2,
  "cc":         1,
  "pacma":      0,
  "upyd":       0,
  "bng":        0,
  "udc":        0,
  "vox":        0,
  "others":     0
};


var parties = ['pp', 'psoe', 'podemos', 'ciudadanos', 'esquerra', 'dyl', 'pnv', 'iu', 'bildu', 'cc', 'pacma', 'upyd', 'bng', 'udc', 'vox', 'others'];
var colors = ['#0194D9', '#F82433', '#9C489E', '#EF7A36', '#F79F21', '#19204B', '#009526', '#8F2222', '#C3CF34', '#FFFF96', '#BBBF11', '#FF0090', '#9CC1E6', '#6699FF', '#00BB00', '#f0f0f0'];
var names = {
  "pp":         "PP",
  "psoe":       "PSOE",
  "podemos":    "PODEMOS",
  "ciudadanos": "CIUDADANOS",
  "esquerra":   "ESQUERRA",
  "dyl":        "DyL",
  "pnv":        "PNV",
  "iu":         "IU-UP",
  "bildu":      "BILDU",
  "cc":         "CC",
  "pacma":      "PACMA",
  "upyd":       "UPyD",
  "bng":        "NÓS-BNG",
  "udc":        "UDC",
  "vox":        "VOX",
  "others":     "OTROS"
};

// 2015
var sqlCountry =  encodeURIComponent(
  'SELECT \'España\' as region, ' +
  'sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", ' +
  'sum(pp) as pp, sum(psoe) as psoe, ' +
  'coalesce(sum(compromis_podemos), 0) + coalesce(sum(en_comu_podem), 0) + coalesce(sum(en_marea), 0) + coalesce(sum(podemos), 0) as podemos, ' +
  'sum(ciudadanos) as ciudadanos, sum(esquerra) as esquerra, sum(dyl) as dyl, sum(pnv) as pnv, sum(iu_up) as iu, sum(bildu) as bildu, sum(cc) as cc, ' +
  'sum(pacma) as pacma, sum(upyd) as upyd, sum(nos) as bng, sum(udc) as udc, sum(vox) as vox, ' +
  'coalesce(sum(gbai), 0) + coalesce(sum(eb), 0) + coalesce(sum(ciudadanos_centro_democratico), 0) + coalesce(sum(extremadura_unida), 0) + coalesce(sum(izquierda_verdes), 0) + coalesce(sum(others), 0) + coalesce(sum(verdes_ecopacifistas), 0) + coalesce(sum(mes), 0) + coalesce(sum(pcpe), 0) + coalesce(sum(proposta_per_illes_balears), 0) + coalesce(sum(recortes_cero), 0) as others ' +
  ' FROM elections_2015'
);
var sqlCCAA =  encodeURIComponent(
  'SELECT ccaa as region, ' +
  'sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", ' +
  'sum(pp) as pp, sum(psoe) as psoe, ' +
  'coalesce(sum(compromis_podemos), 0) + coalesce(sum(en_comu_podem), 0) + coalesce(sum(en_marea), 0) + coalesce(sum(podemos), 0) as podemos, ' +
  'sum(ciudadanos) as ciudadanos, sum(esquerra) as esquerra, sum(dyl) as dyl, sum(pnv) as pnv, sum(iu_up) as iu, sum(bildu) as bildu, sum(cc) as cc, ' +
  'sum(pacma) as pacma, sum(upyd) as upyd, sum(nos) as bng, sum(udc) as udc, sum(vox) as vox, ' +
  'coalesce(sum(gbai), 0) + coalesce(sum(eb), 0) + coalesce(sum(ciudadanos_centro_democratico), 0) + coalesce(sum(extremadura_unida), 0) + coalesce(sum(izquierda_verdes), 0) + coalesce(sum(others), 0) + coalesce(sum(verdes_ecopacifistas), 0) + coalesce(sum(mes), 0) + coalesce(sum(pcpe), 0) + coalesce(sum(proposta_per_illes_balears), 0) + coalesce(sum(recortes_cero), 0) as others ' +
  ' FROM elections_2015 GROUP BY ccaa'
);
var sqlProvince =  encodeURIComponent(
  'SELECT province as region, ' +
  'sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes" , sum(blank_votes) as "blank votes", ' +
  'sum(pp) as pp, sum(psoe) as psoe, ' +
  'coalesce(sum(compromis_podemos), 0) + coalesce(sum(en_comu_podem), 0) + coalesce(sum(en_marea), 0) + coalesce(sum(podemos), 0) as podemos, ' +
  'sum(ciudadanos) as ciudadanos, sum(esquerra) as esquerra, sum(dyl) as dyl, sum(pnv) as pnv, sum(iu_up) as iu, sum(bildu) as bildu, sum(cc) as cc, ' +
  'sum(pacma) as pacma, sum(upyd) as upyd, sum(nos) as bng, sum(udc) as udc, sum(vox) as vox, ' +
  'coalesce(sum(gbai), 0) + coalesce(sum(eb), 0) + coalesce(sum(ciudadanos_centro_democratico), 0) + coalesce(sum(extremadura_unida), 0) + coalesce(sum(izquierda_verdes), 0) + coalesce(sum(others), 0) + coalesce(sum(verdes_ecopacifistas), 0) + coalesce(sum(mes), 0) + coalesce(sum(pcpe), 0) + coalesce(sum(proposta_per_illes_balears), 0) + coalesce(sum(recortes_cero), 0) as others ' +
  'FROM elections_2015 GROUP BY province'
);
