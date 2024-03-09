/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circle = svg.append("circle")
    .attr('cx', 100)
    .attr('cy', 250)
    .attr('r', 70)
    .attr('fill', 'blue');

var circle2 = svg.append("circle")
    .attr('cx', 100)
    .attr('cy', 250)
    .attr('r', 35)
    .attr('fill', 'white')
    .attr('stroke', 'black');

var rect = svg.append('rect')
.attr('x', 0)
.attr('y', 20)
.attr('width', 40)
.attr('height', 20)
.attr('fill', 'red');

var rect2 = svg.append('rect')
.attr('x', 40)
.attr('y', 20)
.attr('width', 40)
.attr('height', 20)
.attr('rx', 5)
.attr('ry', 5)
.attr('fill', 'red');

var rect3 = svg.append('rect')
.attr('x', 80)
.attr('y', 20)
.attr('width', 40)
.attr('height', 20)
.attr('rx', 5)
.attr('ry', 5)
.attr('fill', 'red')
.attr('stroke', 'black');

var rect4 = svg.append('rect')
.attr('x', 120)
.attr('y', 20)
.attr('width', 200)
.attr('height', 200)
.attr('fill', 'red')
.attr('stroke', 'black')
.attr('stroke-linejoin', 'bevel');