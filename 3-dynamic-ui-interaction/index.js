'use strict';
/*
* This is drop down script.
* First pass id values for open, close and menu
* If there is no value default are menuBtn, close, menu already in HTML
* This is for reusability
* Then selects each component by id and adds event listener click
* When clicked set style width according to close or open.
*/
const dropDown = ((openId, closeId, menuId) => {

    const clickDrop = () => {
        var open = "";
        var close = "";
        var menu = "";

        //Assign values to id's if null default
        openId != null ? open = openId : open = "menuBtn";
        closeId != null ? close = closeId : close = "close";
        menuId != null ? menu = menuId : menu = "menu"

        var btnOpen = document.getElementById(open);
        var btnClose = document.getElementById(close);


        btnOpen.addEventListener('click', () => {
            document.getElementById(menu).style.width = "100%";
        });

        btnClose.addEventListener('click', () => {
            document.getElementById(menu).style.width = "0%";
        });
    }

    return {
        clickDrop
    }
})();

/*
* This is slider
*/

const carouselApp = (() => {
    // First select an array of images to indicate id, src, alt and caption.
    const images = [
        {
            id: 1,
            src: './assets/img1.jpg',
            alt: 'Image 1',
            caption: 'This is image 1',
        },
        {
            id: 2,
            src: './assets/img2.jpg',
            alt: 'Image 2',
            caption: 'This is image 2',
        },
        {
            id: 3,
            src: './assets/img3.jpg',
            alt: 'Image 3',
            caption: 'this is image 3',
        },
        {
            id: 4,
            src: './assets/img2.jpg',
            alt: 'Image 4',
            caption: 'this is image 4',
        },
        {
            id: 5,
            src: './assets/img3.jpg',
            alt: 'Image 3',
            caption: 'this is image 5',
        }
    ];

    //We map each image for render all images.
    const renderImages = () => {
        document.getElementById('slide').innerHTML = images.map((img, idx) =>
            `
                <div class="mySlides fade" id=${idx}>
                    <div class="numbertext"> ${idx + 1} / ${images.length}</div>
                    <img src=${img.src} alt=${img.alt} style="width:100%">
                    <div class="text">${img.caption}</div>
                </div>
            `
        ).join('');
    }

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    //Function that goes to make an slide index.
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    //Render the dots for each selection.
    const renderDots = () => {
        document.getElementById('dots').innerHTML = images.map((image) =>
            `
                <span class="dot" onclick="carouselApp.currentSlide(${image.id})"></span>
            `
        ).join('');
    }

    //5 seconds slider
    const move = setInterval(function() {
        plusSlides(1);
      }, 5000);

    //Initialization
    const sliderInit = () => {
        renderDots();
        renderImages();
        //Slide control initialization
        showSlides(slideIndex);
        renderDots();
        move();
    }

    return {
        sliderInit,
        plusSlides
    }
})();



//Initialization.
dropDown.clickDrop();
//Slide index init at image 1
var slideIndex = 1;
carouselApp.sliderInit();
