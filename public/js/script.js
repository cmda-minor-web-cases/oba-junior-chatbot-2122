const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')
const chatbot = document.querySelector('.chatbutton')

buttons[0].classList.add('disable')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (Array.prototype.indexOf.call(buttons, e.target) === 0) {
            slider.scrollLeft -= slider.offsetWidth
            buttons[1].classList.remove('disable')

            if (slider.scrollLeft === 0) {
                buttons[0].classList.add('disable')
            }
        } else if (Array.prototype.indexOf.call(buttons, e.target) === 1) {
            slider.scrollLeft += slider.offsetWidth
            buttons[0].classList.remove('disable')

            if (slider.scrollLeft >= 2000) {
                buttons[1].classList.add('disable')
            }
        }

        console.log(slider.scrollLeft)
    })
})

chatbot.addEventListener('click', () => {
    chatbot.classList.add('chatbot')
    chatbot.classList.remove('chatbutton')
})




