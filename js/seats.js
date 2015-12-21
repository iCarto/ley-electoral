// reusable chart component based on http://bost.ocks.org/mike/chart/
function seatsChart(){

  //// chart dimensions
  //// margins conventions based on http://bl.ocks.org/mbostock/3019563
  // var margin = {top: 20, right: 50, bottom: 10, left: 50};
  // var width = 460 - margin.left - margin.right;
  // var height = 60 - margin.top - margin.bottom;
  // var width = 460;
  // var height = 60;
  // var barHeight = 40;

  // scales
  var xScale = d3.scale.linear();
  var colorScale = d3.scale.ordinal();

  function chart(selection){
    selection.each(function(data){

      // TODO: parties and colors are global variables, pass them as variables

      // set scales
      xScale.rangeRound([0, chart.width()]);
      colorScale.domain(parties).range(colors);

      // assign names to colors
      colorScale.domain(d3.keys(data[0]));

      // seats has the start-end points for each range of value
      data.forEach(function(d) {
        var x0 = 0;
        d.seats = colorScale.domain().map(function(name) { return {name: name, x0: x0, x1: x0 += +d[name]}; });
        d.total = d.seats[d.seats.length - 1].x1;
      });
      data.sort(function(a, b) { return b.total - a.total; });

      xScale.domain([0, d3.max(data, function(d) { return d.total; })]);

      // select svg if exists
      var svg = d3.select(this).selectAll("svg").data(data);

      // create, if svg still not exists
      var gEnter = svg.enter().append("svg");

      // update outer dimensions
      // svg.attr("width", chart.width() + margin.left + margin.right)
      //    .attr("height", chart.height() + margin.top + margin.bottom);
      svg.attr("width", chart.width())
          .attr("height", chart.height());

      var seats = svg.selectAll(".seatsBar").data(data);
      var gSeats = seats.enter().append("g")
                      .attr("class", "seatsBar");

      var rects = seats.selectAll("rect")
          .data(function(d) { return d.seats; });

      rects.enter().append("rect");
      rects.attr("width", function(d) {
        return xScale(d.x1) - xScale(d.x0);
      })
          .attr("x", function(d) {
            return xScale(d.x0);
          })
          .attr("height", chart.height())
          .style("fill", function(d) {
            return colorScale(d.name);
          });

    });
  }

  chart.width = function(_){
    if(!arguments.length) return width;
    width = _;
    // width = _ - margin.left - margin.right;
    return chart;
  }

  chart.height = function(_) {
    if (!arguments.length) return height;
    // height = _ - margin.top - margin.bottom;
    height = _;
    return chart;
  };

  return chart;
}
