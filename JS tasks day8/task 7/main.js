const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const cBMIBtn = document.getElementById("cBMI");
const result = document.getElementById("result");
const statusSpan = document.getElementById("status");
const err = document.getElementById("err");

function calculateBMI() {
  err.innerText = "";
  result.innerText = "";
  statusSpan.innerText = "";
  statusSpan.className = "";
  var h = +heightInput.value;
  var w = +weightInput.value;

  h = h / 100;
  var r = w / (h * h);
  r = r.toFixed(2);
  var s = "";
  if (r < 18.5) {
    s = "underweight";

    statusSpan.classList.add("underweight");
  } else if (r >= 18.5 && r < 24.9) {
    s = "normal";
    statusSpan.classList.add("normal");
  } else if (r >= 25 && r < 29.9) {
    s = "overweight";
    statusSpan.classList.add("overweight");
  } else {
    s = "Obese";
  }
  //######################################################################
  try {
    if (h == 0 && w == 0) throw "check both weight and height again please -_-";
    if (isNaN(h) && isNaN(w)) throw "we can only accept numbers please =>-<=";
    if (isNaN(h))
      throw "we can only accept numbers and check if u put the height correctly please";
    if (isNaN(w))
      throw "we can only accept numbers and check if u put the weight correctly please";

    if (w == 0) throw "check the weight again please -_-";
    if (h == 0) throw "check the height again please -_-";
    if (w <= 0 && h <= 0)
      throw "how can u have less than no weight and hight? -_-";
    if (w <= 0) throw "how can u have less than no weight? -_-";
    if (h <= 0) throw "how can u have less than no height? -_-";
  } catch (e) {
    err.innerText = e;
    result.innerText = "";
    return;
  }
  //######################################################################
  result.innerText = r + " ";
  statusSpan.innerText = s;
}
