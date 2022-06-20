const text = document.querySelector('#text')
const detectives = document.querySelector('#detectiveChoices')
const detectiveKeuzes = document.querySelectorAll('#detectiveChoices button')
const typewriter = new Typewriter(text, {
    loop: false,
    delay: 50
})    
const speech = new SpeechSynthesisUtterance()

import { getData } from './getData.js'

speech.lang = 'BE-nl'
speech.rate = .75
speech.volume = .7
speech.pitch = 1

const utterance = (speechUtterance, firstEl, secondEl) => {
    typewriter
    .deleteAll(1)
    .callFunction(() => {
        speech.text = speechUtterance
        speechSynthesis.speak(speech)
    })
    .typeString(speechUtterance)
    .start()

    if (firstEl && secondEl) {
        firstEl.classList.remove('choices')
        firstEl.classList.add('hidden')
        secondEl.classList.remove('hidden')
        secondEl.classList.add('choices')
    }
}

const finalChoice = (choice, hiddenEl) => {
    hiddenEl.classList.remove('choices')
    hiddenEl.classList.add('hidden')

    typewriter
    .deleteAll(1)
    .callFunction(() => {
        speech.text = `Wat leuk! Dit is wat ik kan vinden over ${choice}!`
        speechSynthesis.speak(speech)
    })
    .typeString(`Wat leuk! Dit is wat ik kan vinden over <strong>${choice}</strong>!`)
    .start()

    getData(choice)
} 

export {
    utterance,
    finalChoice
}