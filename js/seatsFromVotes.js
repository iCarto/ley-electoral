// //FOR TESTING PURPOSES
// var getRoundWinner;
//
// computeDhondt = function(partyArray, mandateCount, options){
//
//   var mandates, mandatesAwarded, votes, that, winningIndex;
//
//   options == null && (options = {});
//   options.base == null && (options.base = 1);
//
//   mandates = partyArray.map(function(){
//     return 0;
//   });
//   mandatesAwarded = 0;
//
//   votes = (function(){
//     switch (false) {
//       case !(that = options.voteAccessor):
//       return partyArray.map(that);
//       default:
//       return partyArray;
//     }
//   }());
//
//   if (that = options.resultProperty) {
//     partyArray.forEach(function(it){
//       return it[that] = 0;
//     });
//   }
//
//   while (mandatesAwarded < mandateCount) {
//     winningIndex = getRoundWinner(votes, mandates, options);
//     mandates[winningIndex]++;
//     if (that = options.resultProperty) {
//       partyArray[winningIndex][that]++;
//     }
//     mandatesAwarded++;
//   }
//
//   switch (false) {
//     case !options.resultProperty:
//     return partyArray;
//     default:
//     return mandates;
//   }
// };
//
// getRoundWinner = function(votes, mandates, options){
//   var highestIndex, highestScore, i$, len$, index, voteCount, mandateCount, divider, that, score;
//   highestIndex = -1;
//   highestScore = -Infinity;
//
//   for (i$ = 0, len$ = votes.length; i$ < len$; ++i$) {
//     index = i$;
//     voteCount = votes[i$];
//     mandateCount = mandates[index];
//     divider = (that = mandateCount) ? that + 1 : options.base;
//     score = voteCount / divider;
//     if (score > highestScore) {
//       highestScore = score;
//       highestIndex = index;
//     }
//   }
//
//   return highestIndex;
//
// };
//
//
// var votesByCountry = [{
//     "region": "España",
//     "seats": 350,
//     "total votes": 24590557,
//     "abstention": 9710775,
//     "invalid votes": 317886,
//     "blank votes": 333095,
//     "pp": 10830693,
//     "psoe": 6973880,
//     "ciu": 1014263,
//     "IU-LV": 1680810,
//     "amaiur": 333628,
//     "upyd": 1140242,
//     "PNV": 323517,
//     "Esquerra": 256393,
//     "bng": 183279,
//     "CC": 143550,
//     "Compromís": 125150,
//     "FAC": 99173,
//     "GBAI": 42411,
//     "EQUO": 215776,
//     "PACMA": 101557,
//     "EB": 97706,
//     "PA": 76852,
//     "PxC": 59781,
//     "PRC": 43903,
//     "PUM+J": 27098,
//     "PCPE": 26436,
//     "Pirata": 25180,
//     "Anticapitalistas": 24456,
//     "UCE": 16148,
//     "PH": 10047
//   }]
//
// var votesByCCAA = [
//   {
//     "region": "Andalucía",
//     "seats": 60,
//     "total votes": 4394476,
//     "abstention": 1823356,
//     "invalid votes": 45267,
//     "blank votes": 53227,
//     "pp": 1982091,
//     "psoe": 1590844,
//     "iu": 359521,
//     "upyd": 207517,
//     "equo": 35504,
//     "pa": 76852,
//     "eb": 11170,
//     "pacma": 7085,
//     "pcpe": 5521,
//     "pum+j": 2948,
//     "anticapitalistas": 2872,
//     "prao": 2483,
//     "uce": 1885,
//     "sain": 1803,
//     "fe de las jons": 1662,
//     "ph": 1653,
//     "acima": 948,
//     "hartosorg": 918,
//     "dn": 781,
//     "internet":603,
//     "dec": 262,
//     "rps":248
//   },
//   {
//     "region": "Aragón",
//     "seats": 13,
//     "total votes": 720729,
//     "abstention": 272499,
//     "invalid votes": 11373,
//     "blank votes": 14517,
//     "pp": 338612,
//     "psoe": 223242,
//     "iu": 74655,
//     "upyd": 41022,
//     "equo": 5285,
//     "pacma": 3376,
//     "eb": 3100,
//     "pcpe": 1422,
//     "pum+j": 1399,
//     "pirata": 616,
//     "uce": 566 		,
//     "dec": 508 		,
//     "ph": 461,
//     "plib": 410,
//     "sxt": 165
//   },
//   {
//     "region": "Canarias",
//     "seats": 15,
//     "total votes": 944316,
//     "abstention": 537986,
//     "invalid votes": 16086,
//     "blank votes": 12034,
//     "pp": 445637,
//     "psoe": 230475,
//     "cc": 143550,
//     "iu": 40048,
//     "upyd": 24471,
//     "equo": 15551,
//     "pacma": 4879,
//     "anc": 3172,
//     "pum+j": 2639,
//     "pcpe": 2289,
//     "unidad del pueblo": 1130,
//     "ph": 1038,
//     "uce": 1008,
//     "sain": 309
//   },
//   {
//     "region": "Cantabria",
//     "seats": 5,
//     "total votes": 353875,
//     "abstention": 116004,
//     "invalid votes": 4032,
//     "blank votes": 4154,
//     "pp": 182653,
//     "psoe": 88104,
//     "PRC": 43903,
//     "upyd": 12561,
//     "iu": 12547,
//     "equo": 2455,
//     "pacma": 1221,
//     "pcpe": 575,
//     "basta ya": 374,
//     "anticapitalistas": 352,
//     "rps": 269,
//     "sain": 268,
//     "ph": 264,
//     "uce": 143,
//   },
//   {
//     "region": "Castilla - La Mancha",
//     "seats": 21,
//     "total votes": 1189020,
//     "abstention": 361259,
//     "invalid votes": 17707,
//     "blank votes": 15037,
//     "pp": 654076,
//     "psoe": 355049,
//     "iu": 67626,
//     "upyd": 58133,
//     "equo": 7835,
//     "pacma": 4148,
//     "eb": 2880,
//     "pcpe":1426,
//     "pum+j": 1128,
//     "hartosorg": 788,
//     "ucit": 783,
//     "ccd": 571,
//     "dn": 470,
//     "uce": 453,
//     "pcas": 348,
//     "anticapitalistas": 193,
//     "cyd": 190,
//     "cdl": 179
//   },
//   {
//     "region": "Castilla y León",
//     "seats": 32,
//     "total votes": 1537558,
//     "abstention": 511066,
//     "invalid votes": 22127,
//     "blank votes": 25156,
//     "pp": 840185,
//     "psoe": 441382,
//     "upyd": 92875,
//     "iu": 85340,
//     "equo": 10082,
//     "pacma": 5374,
//     "pum+j": 2725,
//     "pcal": 2047,
//     "prepal": 2007,
//     "eb": 1333,
//     "fe de las jons": 1239,
//     "sain":883,
//     "pcpe": 868,
//     "uce":786,
//     "anticapitalistas": 702,
//     "urcl":702,
//     "dn": 607,
//     "ccd": 493,
//     "hd": 197,
//     "rps": 192,
//     "hartosorg":174,
//     "pfyv": 82
//   },
//   {
//     "region": "Cataluña",
//     "seats": 47,
//     "total votes": 3510366,
//     "abstention": 1742760,
//     "invalid votes": 55508,
//     "blank votes": 63828,
//     "ciu": 1014263,
//     "psoe": 920323,
//     "pp": 715802,
//     "iu": 279599,
//     "esquerra": 244245,
//     "pxc":59781,
//     "eb": 50854,
//     "upyd": 39519,
//     "pacma": 23731,
//     "pirata":21771,
//     "anticapitalistas": 13829,
//     "uce": 3915,
//     "pcpe": 1555,
//     "hartosorg":1064,
//     "pre-r":417,
//     "pum+j":362,
//   },
//   {
//     "region": "Ceuta",
//     "seats": 1,
//     "total votes": 32245,
//     "abstention": 26313,
//     "invalid votes": 466,
//     "blank votes": 488,
//     "pp": 20981,
//     "psoe": 6415,
//     "caballas": 1725,
//     "upyd": 1054,
//     "iu":577,
//     "lv": 289,
//     "pacma": 187,
//     "pum+j":63
//   },
//   {
//     "region": "Melilla",
//     "seats": 1,
//     "total votes": 26967,
//     "abstention": 24077,
//     "invalid votes": 306,
//     "blank votes": 498,
//     "pp": 17791,
//     "psoe": 6745,
//     "upyd": 986,
//     "equo":427,
//     "pacma": 135,
//     "pum+j":79,
//   },
//   {
//     "region": "Madrid",
//     "seats": 36,
//     "total votes": 3396471,
//     "abstention": 1072228,
//     "invalid votes": 36047,
//     "blank votes": 35090,
//     "pp": 1708572,
//     "psoe": 875044,
//     "upyd": 346122,
//     "iu": 270223,
//     "equo":64828,
//     "pacma": 13064,
//     "eb": 12836,
//     "FAC": 6624,
//     "anticapitalistas": 6508,
//     "pum+j":5265,
//     "pcpe": 4076,
//     "rps":4038,
//     "ph":2695,
//     "posi": 1710,
//     "plib":1666,
//     "sain": 1183,
//     "uce": 880
//   },
//   {
//     "region": "Navarra",
//     "seats": 5,
//     "total votes": 335612,
//     "abstention": 134773,
//     "invalid votes": 5359,
//     "blank votes": 6696,
//     "pp": 126101,
//     "psoe": 72656,
//     "amaiur": 49100,
//     "gbai": 42411,
//     "iu": 18224,
//     "upyd": 6827,
//     "equo":3649,
//     "pirata": 1794,
//     "pum+j":1387,
//     "sain": 1057,
//     "uce": 351,
//     "dne": 0
//   },
//   {
//     "region": "Valencia",
//     "seats": 33,
//     "total votes": 2635449,
//     "abstention": 855639,
//     "invalid votes": 31756,
//     "blank votes": 28755,
//     "pp": 1388465,
//     "psoe": 695691,
//     "iu": 169381,
//     "upyd": 145823,
//     "compromis":125150,
//     "pacma": 12663,
//     "españa 2000": 9256,
//     "erpc": 7509,
//     "pcpe": 4463,
//     "eb": 4082,
//     "ph": 2992,
//     "uxv":2447,
//     "rps":2217,
//     "uce":1978,
//     "cdl": 1539,
//     "pirata":999,
//     "posi": 283,
//   },
//   {
//     "region": "Extremadura",
//     "seats": 10,
//     "total votes": 671167,
//     "abstention": 216439,
//     "invalid votes": 9482,
//     "blank votes": 7786,
//     "pp": 339082,
//     "psoe": 245689,
//     "iu": 37706,
//     "upyd": 22862,
//     "equo":3472,
//     "pacma": 2242,
//     "pum+j": 1518,
//     "cex": 1079,
//     "uce":249,
//   },
//   {
//     "region": "Galicia",
//     "seats": 23,
//     "total votes": 1656049,
//     "abstention": 651456,
//     "invalid votes": 26908,
//     "blank votes": 26635,
//     "pp": 855732,
//     "psoe": 451233,
//     "bng": 183279,
//     "iu": 67182,
//     "upyd": 19996,
//     "equo": 9996,
//     "pacma": 7085,
//     "pum+j": 1993,
//     "pcpe": 1551,
//     "uce": 1480,
//     "c xxi": 1436,
//     "sain": 869,
//     "ph": 674
//   },
//   {
//     "region": "Baleares",
//     "seats": 8,
//     "total votes": 444901,
//     "abstention": 270324,
//     "invalid votes": 7209,
//     "blank votes": 7936,
//     "pp": 216808,
//     "psoe": 126344,
//     "equo": 31378,
//     "iu":21626,
//     "upyd": 18489,
//     "esquerra": 4639,
//     "eb": 4304,
//     "pacma": 3615,
//     "pum+j": 1084,
//     "pfyv":1010,
//     "uce": 459
//   },
//   {
//     "region": "La Rioja",
//     "seats": 4,
//     "total votes": 175644,
//     "abstention": 56333,
//     "invalid votes": 2792,
//     "blank votes": 2781,
//     "pp": 94572,
//     "psoe": 53697,
//     "upyd": 10328,
//     "iu":7946,
//     "equo": 1613,
//     "pacma": 761,
//     "pum+j": 677,
//     "pcpe": 381,
//     "uce": 96
//   },
//   {
//     "region": "País Vasco",
//     "seats": 18,
//     "total votes": 1191967,
//     "abstention": 530448,
//     "invalid votes": 12434,
//     "blank votes": 13441,
//     "amaiur": 284528,
//     "pnv": 323517,
//     "pse": 254105,
//     "pp":210000,
//     "iu": 43522,
//     "upyd": 21165,
//     "equo": 15257,
//     "pacma": 6417,
//     "pum+j": 3466,
//     "eb": 2884,
//     "uce": 1231
//   },
//   {
//     "region": "Principado de Asturias",
//     "seats": 8,
//     "total votes": 633515,
//     "abstention": 267889,
//     "invalid votes": 6163,
//     "blank votes": 8357,
//     "pp": 222179,
//     "psoe": 183170,
//     "fac": 92549,
//     "iu":83312,
//     "upyd": 24583,
//     "equo": 3998,
//     "eb": 2520,
//     "pacma": 2155,
//     "pcpe": 1184,
//     "andecha": 1076,
//     "hartosorg": 859,
//     "pum+j": 365,
//     "pdyc": 297,
//     "sain": 274,
//     "ph": 270,
//     "uce": 204
//   },
//   {
//     "region": "Murcia",
//     "seats": 10,
//     "total votes": 740230,
//     "abstention": 239926,
//     "invalid votes": 6864,
//     "blank votes": 6679,
//     "pp": 471354,
//     "psoe": 153672,
//     "upyd": 45909,
//     "iu":41775,
//     "equo": 4446,
//     "pacma": 2608,
//     "eb": 1743,
//     "pcpe": 1125,
//     "cdl": 1121,
//     "+mas+": 788,
//     "prde": 673,
//     "cyd": 527,
//     "rps": 482,
//     "uce": 464
//   },
// ];

function seatsFromVotes(regions){
  // TODO: introduce minVotes

  // var resultsByParty = [
  //   {party: "PP", votes: 4074363},
  //   {party: "PSOE", votes:  3596324},
  //   {party: "Ciudadanos", votes:  495114},
  //   {party: "Podemos", votes: 1245948},
  //   {party: "IU", votes:  1562567},
  //   {party: "BNG", votes:  299884},
  //   {party: "Outros", votes:  176237}
  // ];
  // var seats = 350;

  options = {
    voteAccessor: function(object) {return object.votes},
    resultProperty: "seats",
    base: 1
  };
  var newSeats = [{}];
  regions.forEach(function(region){
    var resultsByParty = transformData(region);
    var result = computeDhondt(resultsByParty, region.seats, options);
    // console.log(result);

    result.forEach(function(p){
      newSeats[0][p.party] = p.seats + (newSeats[0][p.party] || 0);
    });
  });
  console.log(newSeats);
  return newSeats;

  // var newSeats =[{
  //   "PP": "110",
  //   "PSOE": "90",
  //   "Ciudadanos": "50",
  //   "Podemos": "59",
  //   "IU": "10",
  //   "BNG": "6",
  //   "Outros": "25"
  // }];
}

function transformData(region){
  var parties = Object.keys(region).filter(function(key){
    return (key != 'region'
    && key != 'seats'
    && key != 'total votes'
    && key != 'abstention'
    && key != 'invalid votes'
    && key != 'blank votes');
  });
  // console.log('parties: ' + parties);

  var data = [];
  parties.forEach(function(p){
    data.push({party: p, votes: region[p]});
  });
  // console.log(data);
  return data;
}

// // TEST
// transformData({
//   "region": "Lugo",
//   "seats": 4,
//   "total votes": 217562,
//   "abstention": 80129,
//   "invalid votes": 3899,
//   "blank votes": 3607,
//   "pp": 119886,
//   "psoe": 60162,
//   "bng": 19746,
//   "eu": 6448,
//   "upyd": 1986,
//   "pacma": 999,
//   "UCE": 588,
//   "C. XXI": 241
// });


// FOR TESTING PURPOSES
// seatsFromVotes(votesByCCAA);

// FOR TESTING PURPOSES
// seatsFromVotes(votesByCountry)
