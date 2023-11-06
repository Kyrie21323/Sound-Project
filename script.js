let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');
const aud_file = ['1','2','3','4','5','6','7','8'];
let replay = document.getElementById('replay');

let slide_num = 0;
let count = -1;
let myAudio = document.getElementById(aud_file[count+1]);


nextBtn.onclick = function() {
    slide_num += 1;
    count += 1;
    let img_path = "img/" + slide_num +".png";
    document.body.style.backgroundImage = "url(" + img_path + ")";
    replay.style.visibility = "hidden";
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "hidden";
    myAudio = document.getElementById(aud_file[count]);
    myAudio.play();
    console.log(myAudio);
    myAudio.onended = function() {
        console.log("ended");
        myAudio.currentTime = 0;
        replay.style.visibility = "visible";
        prevBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    };
    document.getElementById(aud_file[count-1]).pause();
    document.getElementById(aud_file[count-1]).currentTime = 0;
}

prevBtn.onclick = function() {
    slide_num -= 1;
    count -= 1;
    let img_path = "img/" + slide_num +".png";
    document.body.style.backgroundImage = "url(" + img_path + ")";
    replay.style.visibility = "hidden";
    myAudio = document.getElementById(aud_file[count]);
    myAudio.play();
    myAudio.onended = function() {
        myAudio.currentTime = 0;
        replay.style.visibility = "visible";
    };
    document.getElementById(aud_file[count+1]).pause();
    document.getElementById(aud_file[count+1]).currentTime = 0;
}

replay.onclick = function() {
    myAudio.currentTime = 0;
    myAudio.play();
}