// U22978120

var d3Script = document.createElement('script');
d3Script.src = 'https://d3js.org/d3.v6.min.js';
document.head.appendChild(d3Script);

d3Script.onload = function() {
    
    var container = document.createElement('div');
    container.id = 'container';
    container.style.position = 'relative';
    container.style.height = '200px';
    document.body.appendChild(container);

    var styles = document.createElement('style');
    styles.textContent = `
    .data-point {
        width: 20px;
        height: 20px;
        background-color: gray;
        border: 1px solid black;
        position: absolute;
        transition: background-color 0.3s;
        }
    `;
    document.head.appendChild(styles);

    d3.select('#container').selectAll('.data-point')
    .data([{x: 10, y: 10}, {x: 70, y:50}, {x: 130, y:90}])
    .enter().append('div')
    .attr('class', 'data-point')
    .style('left', d => `${d.x}px`)
    .style(`top`, d => `${d.y}px`)
    .on('mouseover', function() {
        d3.select(this).style('background-color', 'firebrick');
    })
    .on('mouseout', function() {
        d3.select(this).style('background-color', 'gray');
    });
};
        
