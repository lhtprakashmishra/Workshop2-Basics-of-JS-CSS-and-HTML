const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length   //number of div used in slideRight container
// console.log(slidesLength)
let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`         //gives the default top style to so that the first slide move to -300vh;

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight       //returns the height of the container i.e slider container in pixels, can also
    // console.log(sliderHeight)                            //use manual numbers like 551px but using clientHeight property of DOM it gives
    if(direction === 'up') {                                //responsive design for different screens
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    // console.log(activeSlideIndex);

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    console.log(activeSlideIndex * sliderHeight);
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}