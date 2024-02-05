const sliderContainer = document.querySelector('.slider-container');
const sliderLeft = document.querySelector('.left-slider');
const sliderRight = document.querySelector('.right-slider');
const arrowUpButton = document.querySelector('.up-action');
const arrowDownButton = document.querySelector('.down-action');
const sliderLength = sliderRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(sliderLength - 1) * 100}vh`;


const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > sliderLength - 1) {
            activeSlideIndex = 0;
        }
    } else {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderLength - 1;
        }
    }

    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}

arrowUpButton.addEventListener('click', () => changeSlide('up'));
arrowDownButton.addEventListener('click', () => changeSlide('down'));