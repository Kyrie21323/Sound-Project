let nextBtn = document.getElementById('next-btn');
let prevBtn = document.getElementById('prev-btn');
const aud_file = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
let replay = document.getElementById('replay');
let earth = document.getElementById('earth');
let aboutBtn = document.getElementById('about-btn');
let about = document.getElementById('about');
let fullAudio = document.getElementById('full');
let fullAudioBtn = document.getElementById('full-audio');

let slide_num = 0;
let count = -1;
let myAudio = document.getElementById(aud_file[count + 1]);

let pause_time = 0;

fullAudio.onended = function () {
    pause_time = 0;
}
fullAudioBtn.onclick = function () {
    if (fullAudio.paused) {
        fullAudio.currentTime = pause_time;
        fullAudio.play();
    } else {
        pause_time = fullAudio.currentTime;
        fullAudio.pause();
    }
}

aboutBtn.onclick = function () {
    if (about.style.right != "0px") {
        about.style.right = "0px";
    } else {
        about.style.right = "-550px";
    }
}

earth.onclick = function () {
    slide_num = 0;
    let img_path = "img/" + slide_num + ".png";
    document.body.style.backgroundImage = "url(" + img_path + ")";
    replay.style.visibility = "hidden";
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "visible";
    nextBtn.style.left = '46vw';

    myAudio.pause();
    myAudio.currentTime = 0;

    earth.style.visibility = "hidden";

    aboutBtn.style.visibility = "visible";

    fullAudioBtn.style.visibility = "visible";

    count = -1;
}

nextBtn.onclick = function () {

    if (slide_num == 10) {
        earth.style.visibility = "visible";
    }

    if (slide_num == 0) {
        nextBtn.style.left = '60vw';
        about.style.right = '-550px';
        fullAudio.pause();
        pause_time = 0;
    }
    slide_num += 1;

    let img_path = "img/" + slide_num + ".png";
    document.body.style.backgroundImage = "url(" + img_path + ")";
    replay.style.visibility = "hidden";
    prevBtn.style.visibility = "hidden";
    nextBtn.style.visibility = "hidden";
    aboutBtn.style.visibility = "hidden";
    fullAudioBtn.style.visibility = "hidden";
    if (slide_num < 11) {
        earth.style.visibility = "hidden";
    }

    if (slide_num <= 10) {
        count += 1;
        myAudio = document.getElementById(aud_file[count]);
        myAudio.play();
        console.log(myAudio);
        myAudio.onended = function () {
            console.log("ended");
            myAudio.currentTime = 0;
            replay.style.visibility = "visible";
            prevBtn.style.visibility = "visible";
            nextBtn.style.visibility = "visible";
            earth.style.visibility = "visible";
        };
    }
    document.getElementById(aud_file[count - 1]).pause();
    document.getElementById(aud_file[count - 1]).currentTime = 0;
}

prevBtn.onclick = function () {

    if (count >= 0) {
        count -= 1;
    }

    if (slide_num == 1) {
        prevBtn.style.visibility = "hidden";
        earth.style.visibility = "hidden";
        nextBtn.style.left = '46vw';
        aboutBtn.style.visibility = "visible";
        fullAudioBtn.style.visibility = "visible";
    }

    if (slide_num > 0) {
        slide_num -= 1;
        let img_path = "img/" + slide_num + ".png";
        document.body.style.backgroundImage = "url(" + img_path + ")";
    }
    replay.style.visibility = "hidden";
    earth.style.visibility = "hidden";
    myAudio = document.getElementById(aud_file[count]);
    myAudio.play();
    myAudio.onended = function () {
        myAudio.currentTime = 0;
        replay.style.visibility = "visible";
        earth.style.visibility = "visible";
    };
    document.getElementById(aud_file[count + 1]).pause();
    document.getElementById(aud_file[count + 1]).currentTime = 0;
}

replay.onclick = function () {
    myAudio.currentTime = 0;
    myAudio.play();
}
