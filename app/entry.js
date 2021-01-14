'use strict';
import $ from 'jquery';
const global = Function('return this;')();
global.jQuery = $;
import bootstrap from 'bootstrap';



// Getg
const chartViewButton = $('#chart-button');

chartViewButton.click(() => {
    $.get('/chart', {}, (data) => {

    var ctx = document.getElementById("chartbox_canvas");
    new Chart(ctx, {
    type: 'bar',
 
    data: {
        labels:['2019/09', '2019/10', '2019/11', '2019/12', '2020/1', '2020/2','2020/3'],
        datasets: [{
            label: 'グラフ',
            backgroundColor: '#20B2AA',
            data: data
        }]
    }
  });
});
});

