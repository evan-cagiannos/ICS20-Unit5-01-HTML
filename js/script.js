// Created by Evan Cagiannos
// ICS2O-UNIT2-02-HTML
// Created on: 2022-March-10
//This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates volume of pyramid.
 */
function doMathClicked() {
  // this function does basic math
  // input
  const radius = parseInt(document.getElementById("radius-of-sphere").value);

  // process
  const volume = 4 / 3(Math.PI * radius ** 3);

  // output
  document.getElementById("volume").innerHTML =
    "Volume is: " + volume.toFixed(2) + " cm3";
}
