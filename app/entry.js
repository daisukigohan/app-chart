'use strict';
import $ from 'jquery';
const global = Function('return this;')();
global.jQuery = $;
import bootstrap from 'bootstrap';

const chartbox = $('#chartbox');

// Getg
const chartViewButton = $('#chart-button');

chartViewButton.click(() => {
    $.get('/chart', {}, (data) => {
      chartbox.text(data);
  });
});


