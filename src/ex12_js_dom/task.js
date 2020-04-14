"use strict"

let sliderBox = document.querySelector('.slider-wrap');
let toRightSlide = document.querySelector('.btn-to-right');
let toLeftSlide = document.querySelector('.btn-to-left');
let currentSlide = null;
let currentSlideIndex = 0;
let isPrevSlideDeleted = true;
const images = [
    "./asset/img-1.jpg",
    "./asset/img-2.jpg",
    "./asset/img-3.jpg",
    "./asset/img-4.jpg",
    "./asset/img-5.jpg",
    "./asset/img-6.jpg",
    "./asset/img-7.jpg",
    "./asset/img-8.jpg",
    "./asset/img-9.jpg"
];

function slideHandler(slideDirection) {
    currentSlide = document.getElementById(`slide-${currentSlideIndex}`);
    let newSlideId = setNewSlideId(slideDirection);
    changeSlide(newSlideId, slideDirection);
}

function setNewSlideId(slideDirection) {
    setNewSlideIndex(slideDirection);
    return `slide-${currentSlideIndex}`;
}

function setNewSlideIndex(slideDirection) {
    if (slideDirection === "right") {
        if (currentSlideIndex === images.length - 1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex += 1;
        return;
    }
    if (slideDirection === "left") {
        if (currentSlideIndex === 0) {
            currentSlideIndex = images.length - 1;
            return;
        }
        currentSlideIndex -= 1;
    }
}

function changeSlide(newSlideId, slideDirection) {
    sliderBox.insertAdjacentHTML('beforeend', `<div class="slider-item" id="${newSlideId}"></div>`);
    let newSlide = document.getElementById(newSlideId);
    newSlide.style.backgroundImage = `url("${images[currentSlideIndex]}")`;

    if (slideDirection === "right") {
        newSlide.classList.add("slider-item-next");
    } else {
        newSlide.classList.add("slider-item-prev");
    }

    setTimeout(() => {
        currentSlide.remove();
        isPrevSlideDeleted = true;
    }, 300);
}

toRightSlide.addEventListener('click', () => {
    if (isPrevSlideDeleted) {
        isPrevSlideDeleted = false;
        slideHandler("right");
    }
});

toLeftSlide.addEventListener('click', () => {
    if (isPrevSlideDeleted) {
        isPrevSlideDeleted = false;
        slideHandler("left");
    }
});