const buttonScroll = (button, buttonsArr, slider) => {
    if (button === buttonsArr[0]) {
        slider.scrollLeft -= slider.offsetWidth
        buttonsArr[1].classList.remove('disable')

        if (slider.scrollLeft < (slider.offsetWidth + 1)) {
            buttonsArr[0].classList.add('disable')
        }
         
    } else if (button === buttonsArr[1]) {
        slider.scrollLeft += slider.offsetWidth
        buttonsArr[0].classList.remove('disable')

        if (slider.scrollLeft > (slider.scrollWidth - slider.clientWidth) - (slider.offsetWidth + 1)) {
            buttonsArr[1].classList.add('disable')
        }
    }
}

export {
    buttonScroll
}