const body = document.querySelector("body"),
    cover = body.querySelector(".cover");

const IMG_NUMBER = 3;

function handleImgLoad() {
    console.log("finished loading");
}

function paintImage(imgNumber) {
    const image = new Image(), 
        imageWrap = document.createElement('div');
    image.src = `/images/background/${imgNumber + 1}.jpg`;
    imageWrap.classList.add("bgImage");
    imageWrap.appendChild(image);
    cover.appendChild(imageWrap);
    image.addEventListener("loadend", handleImgLoad);
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