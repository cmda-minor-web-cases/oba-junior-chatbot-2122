const text = document.querySelector('#text')
const loader = document.querySelector('#loader')
const typewriter = new Typewriter(text, {
    loop: false,
    delay: 50
})    
const speech = new SpeechSynthesisUtterance()

import { getData } from './getData.js' // import the api call

// sync for the speechUtterance
speech.lang = 'BE-nl' // language of the chatbot
speech.rate = .75 // speed of the chatbot
speech.volume = .7 // volume of thee chatbot
speech.pitch = 1 // pitch of the chatbot

const utterance = (speechUtterance, firstEl, secondEl) => { //
    typewriter // start the typewriter function
    .callFunction(() => {
        if (firstEl) { // check if there is an firstEl
            firstEl.classList.remove('choices') // remove choices class
            firstEl.classList.add('hidden') // hide the choices section
        }

        loader.classList.add('pulse') // show the loader

    })
    .deleteAll(1) // delete all the text
    .callFunction(() => {
        speech.text = speechUtterance // text that the chatbot should say
        speechSynthesis.speak(speech) // initiate the speech
    })
    .typeString(speechUtterance) // pass along the text that should be showcased
    .callFunction(() => {
        loader.classList.remove('pulse') // hide the loader

        if (secondEl) { // check if there is an second element
            secondEl.classList.remove('hidden') // remove the hidden class
            secondEl.classList.add('choices') // show the second section
        }
    })
    .start() // start the typewriter
}

const finalChoice = (choice, hiddenEl) => { // function for the final choice
    hiddenEl.classList.remove('choices') // remove the choices class
    hiddenEl.classList.add('hidden') // hide the options

    typewriter // call the typewriter function
    .deleteAll(1) // delete the text
    .callFunction(() => { 
        speech.text = `Wat leuk! Dit is wat ik kan vinden over ${choice}!` // text that should be said
        speechSynthesis.speak(speech) // initiate the speech
    })
    .typeString(`Wat leuk! Dit is wat ik kan vinden over <strong>${choice}</strong>!`) // pass along the text that should be showcased
    .start() // start the typewriter

    getData(choice) // call the function that gets the API data
} 

export {
    utterance,
    finalChoice
}