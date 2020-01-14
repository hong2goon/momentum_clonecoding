const body = document.querySelector("body"),
    cover = body.querySelector(".cover");
    bgImage = cover.querySelector(".bgImage");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
    const imageUrl = `../../images/background/${imgNumber + 1}.jpg`;
    bgImage.style.backgroundImage = `url('${imageUrl}')`;
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function bgInit() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
bgInit();