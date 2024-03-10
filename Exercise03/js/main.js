d3.csv('data/ages.csv').then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
})

d3.tsv('data/ages.tsv').then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
})

d3.json('data/ages.json').then((data) => {
    data.forEach(element => {
        element.age = +element.age;
    });
    console.log(data);

    var svg = d3.select("#chart-area").append("svg")
                .attr("width", 400)
                .attr('height', 100);

    var circles = svg.selectAll("circle").data(data);

    circles.enter().append("circle")
        .attr('cx', (d, i) => {return (i * 50) + 25})
        .attr('cy', 50)
        .attr('r', (d) => {return d.age})
        .attr('fill', (d) => { return d.age > 10 ? 'red' : 'blue'});

}).catch((error) => {
    console.error(error);
})

// Error handling example
d3.json('data/ages22.json').then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
})

// Building challenge example
d3.json('data/buildings.json').then((data) => {
    data.forEach(element => {
        element.height = +element.height;
    });
    console.log(data);

    var svg = d3.select("#building-area").append("svg")
                .attr("width", 2000)
                .attr('height', 900);

    var rectangles = svg.selectAll("rect").data(data);

    rectangles.enter().append("rect")
        .attr('x', (d, i) => {return (i * 200)})
        .attr('y', (d) => {return 900 - d.height})
        .attr('width', 100)
        .attr('height', (d) => {return d.height})
        .attr('stroke', 'black')
        .attr('fill', 'gray');

}).catch((error) => {
    console.error(error);
})
