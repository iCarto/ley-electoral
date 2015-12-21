
function svgOld(parties, colors){

// http://bl.ocks.org/mbostock/3019563
var margin = {top: 0, right: 50, bottom: 30, left: 50},
    width = document.getElementById('seats-old').offsetWidth - margin.left - margin.right,
    height = 10 - margin.top - margin.bottom,
    barHeight = 40;

// scales
// var y = d3.scale.ordinal()
//     .rangeRoundBands([height, 0]);

var x = d3.scale.linear()
    .rangeRound([0, width]);

// TODO: asignar colores os que terian escanho en outras situacions
var color = d3.scale.ordinal()
    .domain(parties)
    .range(colors);
    //'cs' #F86D2B
    // 'podemos': #5F2D60

// // axis
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("bottom");
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left")
//     .tickFormat(d3.format(".2s"));

var svg = d3.select("#seats-old").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/data.csv", function(error, data) {
  if (error) throw error;

  // assign the 7 names to the 7 colors (takes key values - the "State" one)
  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "State"; }));

  // ages has the start-end points for each range of value
  data.forEach(function(d) {
    var x0 = 0;
    d.ages = color.domain().map(function(name) { return {name: name, x0: x0, x1: x0 += +d[name]}; });
    d.total = d.ages[d.ages.length - 1].x1;
  });

  data.sort(function(a, b) { return b.total - a.total; });

  // y.domain(data.map(function(d) { return d.State; }));
  x.domain([0, d3.max(data, function(d) { return d.total; })]);

  // svg.append("g")
  //     .attr("class", "x axis")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(xAxis);

  // svg.append("g")
  //     .attr("class", "y axis")
  //     .call(yAxis)
  //   .append("text")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", 6)
  //     .attr("dy", ".71em")
  //     .style("text-anchor", "end")
  //     .text("Population");

  var state = svg.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "g");
      // .attr("transform", function(d) { return "translate(" + y(d.State) + ",0)"; });

  state.selectAll("rect")
      .data(function(d) { return d.ages; })
    .enter().append("rect")
      .attr("width", function(d) { return x(d.x1) - x(d.x0); })
      .attr("x", function(d) { return x(d.x0); })
      .attr("height", barHeight)
      .style("fill", function(d) { return color(d.name); });

  // // TODO: make legend bigger
  // var legend = svg.selectAll(".legend")
  //     .data(color.domain().slice())
  //   .enter().append("g")
  //     .attr("class", "legend")
  //     // .attr("transform", function(d, i) { return "translate("+i*40+", "+barHeight*2+")"; });
  //     .attr("transform", function(d, i) { return "translate(0," + ((i * 20) + barHeight*2)+ ")"; });
  //
  // legend.append("rect")
  //     .attr("x", width - 18)
  //     .attr("width", 18)
  //     .attr("height", 18)
  //     .style("fill", function(d){ return color(d);});
  //
  // legend.append("text")
  //     .attr("x", width -3)
  //     .attr("y", 9)
  //     .attr("dy", ".35em")
  //     .style("text-anchor", "end")
  //     .style("fill", "white")
  //     .text(function(d) { return 42; }); // TODO: how to assign data here
  //
  // legend.append("text")
  //     .attr("x", width - 24)
  //     .attr("y", 9)
  //     .attr("dy", ".35em")
  //     .style("text-anchor", "end")
  //     .text(function(d) { return d; });

});
}
