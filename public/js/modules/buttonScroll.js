const buttonScroll = (button, buttonsArr, slider) => {
    if (button === buttonsArr[0]) { // check if it's the button to the left
        slider.scrollLeft -= slider.offsetWidth // scroll the width of the element to the left
        buttonsArr[1].classList.remove('disable') // let the user know that the 'to right button' is available

        if (slider.scrollLeft < (slider.offsetWidth + 1)) { // if the scroll is to the far left
            buttonsArr[0].classList.add('disable') // then let the user know that the 'to the left' button is unavailable
        }
         
    } else if (button === buttonsArr[1]) { // if it's the button to the right
        slider.scrollLeft += slider.offsetWidth // then scroll the width of the element to the right
        buttonsArr[0].classList.remove('disable') // and let the user know that the 'to the left button' is available

        if (slider.scrollLeft > (slider.scrollWidth - slider.clientWidth) - (slider.offsetWidth + 1)) { // if the scroll is to the right
            buttonsArr[1].classList.add('disable') // then let the user know that the 'to the right' button is unavailable
        }
    }
}

export {
    buttonScroll
}