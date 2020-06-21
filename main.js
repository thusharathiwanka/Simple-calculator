function calculate() {
  var value1 = parseInt(document.querySelector("#value1").value);
  var value2 = parseInt(document.querySelector("#value2").value);
  var operator = document.querySelector("#operator").value;
  var result;

  if (operator == "add") {
    result = value1 + value2;
  } else if (operator == "minus") {
    result = value1 - value2;
  } else if (operator == "divide") {
    result = value1 / value2;
  } else if (operator == "multiply") {
    result = value1 * value2;
  }

  document.querySelector("#result").innerHTML = "Result " + result;
  console.log(result);
}
