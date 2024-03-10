// Building challenge example
d3.json('data/buildings.json').then((data) => {
    data.forEach(element => {
        element.height = +element.height;
    });
    var buildings = data.map((d) => {return d.name});

    var svg = d3.select("#chart-area").append("svg")
                .attr("width", 500)
                .attr('height', 500);

    var rectangles = svg.selectAll("rect").data(data);

    const x = d3.scaleBand()
                    .domain(buildings)
                    .range([0, 500])
                    .paddingInner(0.3)
                    .paddingOuter(0.3);

    const y = d3.scaleLinear().domain([0, 828]).range([0, 500]);

    const color = d3.scaleOrdinal()
                    .domain(buildings)
                    .range(d3.schemeSet3)
                    .unknown(null);

    rectangles.enter().append("rect")
        .attr('x', (d) => {return x(d.name)})
        .attr('y', (d) => {return 500 - y(d.height)})
        .attr('width', x.bandwidth())
        .attr('height', (d) => {return y(d.height)})
        .attr('fill', (d) => {return color(d.name)});

}).catch((error) => {
    console.error(error);
})
