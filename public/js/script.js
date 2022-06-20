const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')
const head = document.querySelector('.head')
const resultList = document.querySelector('#results')
const refresh = document.querySelector('.refresh')
const firstButtons = document.querySelectorAll('#firstChoices button')
const secondButtons = document.querySelectorAll('#secondChoices button')
const thirdChoices = document.querySelectorAll('#detectiveChoices, #animalChoices, #schoolChoices, #fairyChoices')
const thirdChoicesArr = [...thirdChoices]

const detectives = document.querySelector('#detectiveChoices')
const animalChoices = document.querySelector('#animalChoices')
const schoolChoices = document.querySelector('#schoolChoices')
const fairyChoices = document.querySelector('#fairyChoices')

import { utterance, finalChoice } from './modules/chatbot.js'
import { checkChoice } from './modules/checkChoice.js'
import { dizzyMonkey } from './modules/dizzyMonkey.js'
import { refreshFunc } from './modules/refresh.js'

buttons[0].classList.add('disable')
resultList.classList.add('hidden')

// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         if (Array.prototype.indexOf.call(buttons, e.target) === 0) {
//             slider.scrollLeft -= slider.offsetWidth
//             buttons[1].classList.remove('disable')

//             if (slider.scrollLeft === 0) {
//                 buttons[0].classList.add('disable')
//             }
//         } else if (Array.prototype.indexOf.call(buttons, e.target) === 1) {
//             slider.scrollLeft += slider.offsetWidth
//             buttons[0].classList.remove('disable')

//             if (slider.scrollLeft >= 2000) {
//                 buttons[1].classList.add('disable')
//             }
//         }
//     })
// })

refresh.addEventListener('click', () => {
    refreshFunc()
    utterance('Wil je zelf gaan lezen of wil je dat iemand gaat voorlezen?')
})

head.addEventListener('click', dizzyMonkey) // makes the monkey dizzy

window.addEventListener('load', () => {
    refreshFunc()
    utterance('Wil je zelf gaan lezen of wil je dat iemand gaat voorlezen?')
}) // when the window loads, monkey will start speaking

firstButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        checkChoice(e.currentTarget.id)
    })
})

secondButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        checkChoice(e.currentTarget.id)   
    })
})

thirdChoicesArr.forEach(section => {
    const buttons = section.querySelectorAll('button')
    const buttonsArr = [...buttons]

    buttonsArr.forEach(button => {
        button.addEventListener('click', (e) => {
            finalChoice(e.currentTarget.textContent, e.path[1])
        })
    })
})








