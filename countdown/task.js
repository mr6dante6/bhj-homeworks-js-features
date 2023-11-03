let seconds = parseInt(document.getElementById("timer").textContent);

function formatTime(secs) {
  let hours = Math.floor(secs / 3600);
  let minutes = Math.floor((secs % 3600) / 60);
  let remainingSeconds = secs % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

document.getElementById("timer").textContent = formatTime(seconds);

const interval = setInterval(() => {
  if (seconds > 0) {
    seconds--;
    document.getElementById("timer").textContent = formatTime(seconds);
  } else {
    clearInterval(interval);
    let fileUrl = "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-12.2.0-amd64-netinst.iso";
    let link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'debian-12.2.0-amd64-netinst.iso';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Вы победили в конкурсе!");
  }
}, 1000);