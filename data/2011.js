var ElectionsDefaultModel = {
  'groupBy': 'province',
  'seats': 350,
  'threshold': 3
};

var seatsCurrent = {
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
  "gbai":      1,
  "equo":      0,
  "pacma":     0,
  "eb":        0,
  "pa":        0,
  "pxc":       0,
  "others":    0
};

var parties = ['pp', 'psoe', 'ciu', 'iu', 'amaiur', 'upyd', 'pnv', 'esquerra', 'bng', 'cc', 'compromis', 'fac', 'gbai', 'equo', 'pacma', 'eb', 'pa', 'pxc', 'others'];
var colors = ["#349BDD", "#DB0024", "#001D59", "#8F2222", "#0E8D9E", "#E20183", "#009526", "#F79F21", "#9CC1E6", "#FFFF96", "#626231", "#003784", "#8D838B", "#f0f0f0", "#f0f0f0", "#f0f0f0", "#f0f0f0", "#f0f0f0", "#f0f0f0"];
var names = {
  "pp":        "PP",
  "psoe":      "PSOE",
  "ciu":       "CIU",
  "iu":        "IU",
  "amaiur":    "Amaiur",
  "upyd":      "UPyD",
  "pnv":       "PNV",
  "esquerra":  "Esquerra",
  "bng":       "BNG",
  "cc":        "CC",
  "compromis": "Compromís",
  "fac":       "FAC",
  "gbai":      "GBAI",
  "equo":      "EQUO",
  "pacma":     "PACMA",
  "eb":        "EB",
  "pa":        "PA",
  "pxc":       "PxC",
  "others":    "Otros"
};

var sqlCountry='SELECT \'España\' as region, sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", sum(pp) as pp, sum(psoe) as psoe, sum(ciu) as ciu, sum(iu) as iu, sum(amaiur) as amaiur,  sum(upyd) as upyd, sum(pnv) as pnv, sum(esquerra) as esquerra, sum(bng) as bng, sum(cc) as cc,  sum(compromis) as compromis, sum(fac) as fac, sum(gbai) as gbai, sum(equo) as equo, sum(pacma) as pacma, sum(eb) as eb, sum(pa) as pa, sum(pxc) as pxc, sum(others) as others  FROM tabla_votos';
var sqlCCAA='SELECT ccaa as region, sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", sum(pp) as pp, sum(psoe) as psoe, sum(ciu) as ciu, sum(iu) as iu, sum(amaiur) as amaiur,  sum(upyd) as upyd, sum(pnv) as pnv, sum(esquerra) as esquerra, sum(bng) as bng, sum(cc) as cc,  sum(compromis) as compromis, sum(fac) as fac, sum(gbai) as gbai, sum(equo) as equo, sum(pacma) as pacma, sum(eb) as eb, sum(pa) as pa, sum(pxc) as pxc, sum(others) as others  FROM tabla_votos GROUP BY ccaa';
var sqlProvince='SELECT province as region, seats as seats, total_votes as "total votes", abstention as abstention, invalid_votes as "invalid votes", blank_votes as "blank votes", pp as pp, psoe as psoe, ciu as ciu, iu as iu, amaiur as amaiur, upyd as upyd, pnv as pnv, esquerra as esquerra, bng as bng, cc as cc,  compromis as compromis, fac as fac, gbai as gbai, equo as equo, pacma as pacma, eb as eb, pa as pa, pxc as pxc, others as others  FROM tabla_votos';
