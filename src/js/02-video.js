import throttle from "lodash.throttle";
const iframe = document.querySelector("#vimeo-player");

const player = new Vimeo.Player(iframe);

//save time
function saveCurrentPlayerTime(date) {
    localStorage.setItem("videoplayer-current-time", Math.round(date.seconds));
  console.log(Number(localStorage.getItem("videoplayer-current-time")));
}
//play time
player.on('timeupdate', throttle(saveCurrentPlayerTime, 500));

function setCurrentPlayerTime() {
    player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")))
}

window.onload = setCurrentPlayerTime;
