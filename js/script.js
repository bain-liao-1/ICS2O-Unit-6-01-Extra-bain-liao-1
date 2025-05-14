// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function conducts multiplication with addition.
 */
function multiplyThroughAddition() {
  const factor = parseInt(document.getElementById("factor").value)
  let multiplier = parseInt(document.getElementById("multiplier").value)
  let product = 0

  while (multiplier > 0) {
    product = product + factor
    multiplier = multiplier - 1
  }

  // Display result
  document.getElementById("result").innerText = "The product is " + product + "."
}
