let deadCounter = 0;
let lostCounter = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function refreshStatus() {
  document.getElementById("dead").textContent = deadCounter;
  document.getElementById("lost").textContent = lostCounter;
}

function onHit() {
    if (this.classList.contains("hole_has-mole")) {
      deadCounter++;
      this.classList.remove("hole_has-mole");
    } else {
      lostCounter++;
    }
    refreshStatus();
    if (deadCounter === 10) {
      alert("Победа!");
      resetCounters();
    } else if (lostCounter === 5) {
      alert("Поражение!");
      resetCounters();
    }
  }

function resetCounters() {
  deadCounter = 0;
  lostCounter = 0;
  refreshStatus();
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = onHit;
}