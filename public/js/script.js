const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')
const zelf = document.querySelector('#zelf')
const detective = document.querySelector('#detective')
const head = document.querySelector('.head')
const eyes = document.querySelectorAll('.eyes_area div')
const speech = new SpeechSynthesisUtterance()

speech.lang = 'nl'
speech.rate = .75
speech.volume = 1
speech.pitch = 4

import { welcome, chooseZelf, chooseDetective } from './modules/chatbot.js'

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

head.addEventListener('click', () => {

    head.classList.add('wobbly')

    const words = ['he!', 'au!', 'niet doen!', 'stop daarmee!']
    const randomNumb = Math.floor(Math.random() * words.length)

    speech.text = words[randomNumb]

    speechSynthesis.speak(speech)

    eyes.forEach(eye => {
        eye.classList.add('dizzy')

        setTimeout(() => {
            eye.classList.remove('dizzy')
            head.classList.remove('wobbly')
        }, 2000)
    })
})

window.addEventListener('load', welcome)
zelf.addEventListener('click', chooseZelf)
detective.addEventListener('click', chooseDetective)








