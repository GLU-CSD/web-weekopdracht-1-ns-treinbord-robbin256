let leaveTime = "12:00"; // Dit eerste stuk zorgt voor de verandering van de display
let minutesLeft = "30 Minuten";
const date = new Date();
setInterval(changeDisplay, 5000) // elke 5 seconden wordt het veranderd
function changeDisplay() {
  if (document.getElementById("timeLeft").innerHTML == leaveTime) {
    document.getElementById("timeLeft").innerHTML = minutesLeft
  } else {
    document.getElementById("timeLeft").innerHTML = leaveTime
  }
}

window.addEventListener('load', function () {
  var minutenEl = document.getElementById('minuten');

  for (var i = 0; i < 60; i++) { // dit plaatst de 60 stippen voor de minuten
    var minuutEl = document.createElement('div');
    minuutEl.classList.add('minuut');
    minuutEl.style.transform = 'rotate(' + Math.round(i / 60 * 360) + 'deg) translateX(60px)';
    minutenEl.appendChild(minuutEl);
  }

  setInterval(render, 1000);
  setTimeout(function () {
    document.body.classList.add('loaded');
  }, 1);

  render();
});

function render() {
  var now = new Date(); // dit vraagt de huidge datum op.
  var sec = now.getSeconds();
  var min = now.getMinutes();
  var uur = now.getHours();
  // hieronder worden de wijzers verplaatst op basis van de tijd.
  document.getElementById('wijzer-sec').style.transform = 'rotate(' + ((uur * 360 + min * 360) + (sec / 60 * 360 + 180)) + 'deg)';
  document.getElementById('wijzer-min').style.transform = 'rotate(' + ((uur * 360) + (min / 60 * 360 + 180)) + 'deg)';
  document.getElementById('wijzer-uur').style.transform = 'rotate(' + ((min / 60 * (360 / 12)) + (uur % 12) / 12 * 360 + 180) + 'deg)';
}