
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const keyPlayer = "videoplayer-current-time";

player.on('timeupdate', saveData);
setCurrentTime();

function saveData (data){
    localStorage.setItem(keyPlayer, data.seconds.toString());
}

function setCurrentTime(){
    const savedTime = localStorage.getItem(keyPlayer);
    if(!savedTime){
        return
    }
    player.setCurrentTime(savedTime)

}