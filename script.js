let startBtn = document.getElementById('start-btn');

let slide_num = 0;

startBtn.onclick = function() {
    slide_num += 1;
    let img_path = "img/" + slide_num +".png";
    document.body.style.backgroundImage = "url(" + img_path + ")";
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('test').play();
    document.removeEventListener('click', musicPlay);
}

let replay = document.getElementById('replay');
let myAudio = document.getElementById('test')

myAudio.addEventListener("ended", function(){
    myAudio.currentTime = 0;
    replay.style.visibility = "visible";
    console.log("ended");
});

replay.onclick = function() {
    myAudio.currentTime = 0;
    myAudio.play();
}