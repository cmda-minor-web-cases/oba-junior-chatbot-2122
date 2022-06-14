const text = document.querySelector('#text')
const firstChoices = document.querySelector('#firstChoices')
const zelfLezen = document.querySelector('#zelfLezen')
const typewriter = new Typewriter(text, {
    loop: false,
    delay: 50
})    
const speech = new SpeechSynthesisUtterance()

speech.lang = 'nl'
speech.rate = .75
speech.volume = 1
speech.pitch = 1.5

const welcome = () => {
    typewriter
    .callFunction(() => {
        speech.text = 'Wil je zelf gaan lezen of wil je dat iemand het voor je voorleest?'

        speechSynthesis.speak(speech)
    })
    .typeString('Wil je zelf gaan lezen of wil je dat iemand het voor je voorleest?')
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

export {
    welcome,
    chooseZelf
}