let currentImage = 1;

setInterval(() => {
    if (currentImage === 1) {
        document.getElementById('img1').style.opacity = 0;
        document.getElementById('img2').style.opacity = 1;
        currentImage = 2;
    } else {
        document.getElementById('img1').style.opacity = 1;
        document.getElementById('img2').style.opacity = 0;
        currentImage = 1;
    }
}, 5000); 


let currentImage1 = 1; // تعریف متغیر currentImage1

setInterval(() => {
    if (currentImage1 === 1) {
        document.querySelector('.ps-img1').style.opacity = 0;
        document.querySelector('.ps-img2').style.opacity = 0;
        document.querySelector('.ps-img3').style.opacity = 1;
        currentImage1 = 2;
    } 
    else if (currentImage1 === 2) {
        document.querySelector('.ps-img1').style.opacity = 0;
        document.querySelector('.ps-img2').style.opacity = 1;
        document.querySelector('.ps-img3').style.opacity = 0;
        currentImage1 = 3;
    }
    else if (currentImage1 === 3) {
        document.querySelector('.ps-img1').style.opacity = 1;
        document.querySelector('.ps-img2').style.opacity = 0;
        document.querySelector('.ps-img3').style.opacity = 0;
        currentImage1 = 1;
    }
}, 5000);
; 
