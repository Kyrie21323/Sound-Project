startBtn = document.getElementById('start-btn');

let slide_num = 0;

startBtn.onclick = function() {
    slide_num += 1;
    let img_path = "img/" + slide_num +".png";
    document.body.style.backgroundImage = "url(" + img_path + ")";
}