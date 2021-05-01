"use strict";

document.getElementById("current-year").innerHTML = getCurrentYear();

function getCurrentYear() {
  var d = new Date();
  return d.getFullYear();
}

let map;
const loc = { lat: 43.653225, lng: -79.383186 };

function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: loc,
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}
