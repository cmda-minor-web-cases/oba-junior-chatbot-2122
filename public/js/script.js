const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')
const zelf = document.querySelector('#zelf')
const detective = document.querySelector('#detective')
const head = document.querySelector('.head')
const resultList = document.querySelector('#results')

import { welcome, chooseZelf, chooseDetective } from './modules/chatbot.js'
import { dizzyMonkey } from './modules/dizzyMonkey.js'

buttons[0].classList.add('disable')
resultList.classList.add('hidden')

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
    })
})

head.addEventListener('click', dizzyMonkey) // makes the monkey dizzy
window.addEventListener('load', welcome) // when the window loads, monkey will start speaking
zelf.addEventListener('click', chooseZelf) // when pressing on "zelf lezen"
detective.addEventListener('click', chooseDetective) // when pressing on "detective"








