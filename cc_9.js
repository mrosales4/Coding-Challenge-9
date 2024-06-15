// U22978120

document.addEventListener('DOMContentLoaded', initialize);

const data = [1, 2, 3, 4, 5];

//Appends the specified data to the specified container.
function createPointElements(container, data) {
    container.selectAll('.data-point')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'data-point')
        .text (d => d)
        .on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut);
}
