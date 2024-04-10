// Created by: Clara Tyman
// Created on: Apr 2024
// This file contains the JS functions for index.html

'use strict'

/**
 * This function converts fahrenheit to celsius
 */
function calculate() {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('conversion').innerHTML = fahrenheit + '°F converted to celsius is ' + celsius.toFixed(2) + ' °C'
}