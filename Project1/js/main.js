d3.json("data/revenues.json").then((data) => {
    data.forEach((d) => {
        d.profit = +d.profit;
        d.revenue = +d.revenue;
    });

    const months = data.map((d) => {return d.month});
    const revenues = data.map((d) => {return d.revenue});

    const margin = {left : 300, top : 20, right : 20, bottom : 100};
    const width = 600;
    const height = 400;

    // Scales
    const y = d3.scaleLinear()
                .domain([10000, d3.max(revenues)])
                .range([height, 0]);

    const x = d3.scaleBand()
                .domain(months)
                .range([0, width])
                .paddingInner(0.3)
                .paddingOuter(0.3);

    // Chart area
    var g = d3.select("body").append("svg")
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
            .append("g")
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Bar data
    var rects = g.selectAll("rect").data(data);

    rects.enter().append("rect")
            .attr('x', (d) => {return x(d.month)})
            .attr('y', (d) => {return y(d.revenue)})
            .attr('width', x.bandwidth())
            .attr('height', (d) => {return height - y(d.revenue)})
            .attr('fill', 'orange');

    g.append("g")
        .attr('class', 'left axis')
        .call(d3.axisLeft(y).ticks(8).tickFormat((d) => {return d/1000 + "$K"}))
    .selectAll("text")
        .style('fill', 'white')
    .selectAll("line")
        .style("stroke", "white");
    g.append("text")
        .attr('class', 'y-axis axis-label')
        .attr('x', -(height / 2))
        .attr('y', -50)
        .attr('font-size', '5rem')
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .style('fill', 'white')
        .text("Revenues");

    g.append("g")
        .attr('class', 'bottom axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x))
    .selectAll("text")
        .style('fill', 'white')
    .selectAll("line")
        .style("stroke", "white");
    g.append("text")
        .attr('class', 'x-axis axis-label')
        .attr('x', (width/2))
        .attr('y', height + margin.bottom - margin.top)
        .attr('font-size', '4rem')
        .attr('text-anchor', 'middle')
        .style('fill', 'white')
        .text('Star Brewery Monthly Revenues');


}).catch((error) => {
    console.error(error);
})