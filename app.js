const catImages = [
  "img/cat1.png", // 0
  "img/cat2.png", // 1
  "img/cat3.png", // 2
  "img/cat4.png", // 3
  "img/cat5.png", // 4
  "img/cat6.png", // 5
  "img/cat7.png", // 6
  "img/cat8.png", // 7
  "img/cat9.png", // 8
  "img/cat10.png", // 9
];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
const boxImageLeft = document.querySelector("#image-box-left");
const boxImageMiddle = document.querySelector("#image-box-middle");
const boxImageRight = document.querySelector("#image-box-right");

let imgLeft = 0;
let imgMiddle = 1;
let imgRight = 2;

function createImg( src ){
  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.classList.add("catImage");

  return img;
}

function updateImages() {
  const img1 = createImg(catImages[imgLeft]);
  boxImageLeft.innerHTML = "";
  boxImageLeft.appendChild(img1);

  const img2 = createImg(catImages[imgMiddle]);
  boxImageMiddle.innerHTML = "";
  boxImageMiddle.appendChild(img2);

  const img3 = createImg(catImages[imgRight]);
  boxImageRight.innerHTML = "";
  boxImageRight.appendChild(img3);
}

btnLeft.disabled = imgLeft === 0 ? true : false;

btnLeft.addEventListener("click", () => {
  if( imgLeft > 0 ) {
    --imgLeft;
    --imgMiddle;
    --imgRight;

    updateImages();
    btnLeft.disabled = imgLeft === 0 ? true : false;
    btnRight.disabled = imgRight === catImages.length - 1 ? true : false;
  }
});

btnRight.disabled = imgRight === catImages.length - 1 ? true : false;

btnRight.addEventListener("click", () =>  {
  if( imgRight < catImages.length - 1) {
    ++imgLeft;
    ++imgMiddle;
    ++imgRight;

    updateImages();
    btnLeft.disabled = imgLeft === 0 ? true : false;
    btnRight.disabled = imgRight === catImages.length - 1 ? true : false;
  }
});

updateImages();
