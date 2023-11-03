let clickCount = 0;
let lastClicked = new Date();
let clickSpeed = 0;
let originalWidth = 200;

function clickCookie() {
  clickCount++;
  let now = new Date();
  let timeDiff = now.getTime() - lastClicked.getTime();
  clickSpeed = 1000 / timeDiff;
  lastClicked = now;
  document.getElementById("clicker__counter").textContent = clickCount;
  document.getElementById("clicker__speed").textContent = clickSpeed.toFixed(2);
  let cookie = document.getElementById("cookie");
  let width = parseInt(cookie.width, 10);
  width = originalWidth + 20;
  cookie.style.width = width + "px";
  setTimeout(function() {
    cookie.style.width = originalWidth + "px";
  }, 100);
}

let cookie = document.getElementById("cookie");
cookie.addEventListener("click", clickCookie);