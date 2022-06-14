const text = document.querySelector('#text')
const firstChoices = document.querySelector('#firstChoices')
const zelfLezen = document.querySelector('#zelfLezen')
const detectives = document.querySelector('#detectives')
const detectiveKeuzes = document.querySelectorAll('#detectives button')
const typewriter = new Typewriter(text, {
    loop: false,
    delay: 50
})    
const speech = new SpeechSynthesisUtterance()

import { getData } from './getData.js'

speech.lang = 'nl'
speech.rate = .75
speech.volume = 1
speech.pitch = 1.5

const welcome = () => {
    typewriter
    .callFunction(() => {
        speech.text = 'Wil je zelf gaan lezen of wil je dat iemand gaat voorlezen?'

        speechSynthesis.speak(speech)
    })
    .typeString('Wil je zelf gaan lezen of wil je dat iemand gaat voorlezen?')
    .start()
}

const chooseZelf = () => {
    typewriter
        .deleteAll(1)
        .callFunction(() => {
            speech.text = 'Wat leuk dat je zelf gaat lezen! Waar wil je over gaan lezen?'

            speechSynthesis.speak(speech)
        })
        .typeString('Wat leuk dat je zelf gaat lezen! Waar wil je over gaan lezen?')
        .start()

    firstChoices.classList.remove('choices')
    firstChoices.classList.add('hidden')
    zelfLezen.classList.remove('hidden')
    zelfLezen.classList.add('choices')
}

const chooseDetective = () => {
    typewriter
        .deleteAll(1)
        .callFunction(() => {
            speech.text = 'Detectives, spannend hoor! Wat wil je gaan lezen over detectives?'

            speechSynthesis.speak(speech)
        })
        .typeString('<b>Detectives</b>, spannend hoor! Wat wil je gaan lezen over detectives?')
        .start()
    
    zelfLezen.classList.remove('choices')
    zelfLezen.classList.add('hidden')
    detectives.classList.remove('hidden')
    detectives.classList.add('choices')  
}

detectiveKeuzes.forEach(keuzes => {
    keuzes.addEventListener('click', (e) => {
        let p = e.target.querySelector('p')
        
        typewriter
            .deleteAll(1)
            .callFunction(() => {
                speech.text = `Wat leuk! Dit is wat ik kan vinden over ${p.textContent}!`
                speechSynthesis.speak(speech)
            })
            .typeString(`Wat leuk! Dit is wat ik kan vinden over <b>${p.textContent}</b>!`)
            .start()
    })
})

export {
    welcome,
    chooseZelf,
    chooseDetective
}