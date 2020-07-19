var counterText = document.getElementsByName("CounterText")[0];
var currentCounter = 0;
function StartCounter() {
  counterText = document.getElementsByName("CounterText")[0];
  currentCounter = 0;
  setInterval(IncreaseCounter, 20);
}

function IncreaseCounter() {
  currentCounter++;
  counterText.textContent = currentCounter;
}
