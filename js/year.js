document.getElementById("current-year").innerHTML = getCurrentYear();

function getCurrentYear() {
  var d = new Date();
  return d.getFullYear();
}
