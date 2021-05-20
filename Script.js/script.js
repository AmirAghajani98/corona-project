
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}



google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Contry', 'Mhl'],
        ['global', 55],
        ['Italy', 33],
        ['USA', 24],
        ['Iran', 15]
    ]);
    var options = {
        title: 'Global Coronavirus Statistics'
    };

    var chart = new google.visualization.BarChart(document.getElementById('myChart'));
    chart.draw(data, options);
}
