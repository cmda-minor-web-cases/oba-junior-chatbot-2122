const head = document.querySelector('.character .head')
const resultList = document.querySelector('#results')
const refresh = document.querySelector('.refresh')
const firstChoices = document.querySelector('#firstChoices')
const firstButtons = document.querySelectorAll('#firstChoices button')
const secondButtons = document.querySelectorAll('#secondChoices button')
const thirdChoices = document.querySelectorAll('#detectiveChoices, #animalChoices, #schoolChoices, #fairyChoices')
const chatbutton = document.querySelector('.chatbutton')
const thirdChoicesArr = [...thirdChoices]
const chatbotBtn = document.querySelectorAll('.close, .chatbutton')
const chatbotBtnArr = [...chatbotBtn]
const allSections = document.querySelectorAll('.slider-wrapper')
const allSectionsArr = [...allSections]

import { utterance, finalChoice } from './modules/chatbot.js'
import { checkChoice } from './modules/checkChoice.js'
import { dizzyMonkey } from './modules/dizzyMonkey.js'
import { refreshFunc } from './modules/refresh.js'
import { closeOpen } from './modules/closeOpen.js'
import { buttonScroll } from './modules/buttonScroll.js'

resultList.classList.add('hidden')

allSectionsArr.forEach(section => {
    const buttons = section.querySelectorAll('.controls li')
    const buttonsArr = [...buttons]
    const slider = section.querySelector('ul:first-of-type')

    buttonsArr.forEach(button => {
        button.addEventListener('click', (e) => {
            buttonScroll(e.currentTarget, buttonsArr, slider)
        })
    })
})

refresh.addEventListener('click', () => {
    refreshFunc()
    utterance('Wil je zelf gaan lezen of wil je dat iemand gaat voorlezen?', undefined, firstChoices)
})

head.addEventListener('click', dizzyMonkey) // makes the monkey dizzy

chatbutton.addEventListener('click', () => {
    utterance('Wil je zelf gaan lezen of wil je dat iemand gaat voorlezen?', undefined, firstChoices)
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

chatbotBtnArr.forEach(button => {
    button.addEventListener('click', (e) => {
        const currentClass = e.currentTarget.classList.value
        closeOpen(currentClass)
    })
})









