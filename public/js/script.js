const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')
const chatbot = document.querySelector('.chatbutton')
const talk = document.querySelector('#talk')
const text = document.querySelector('#text')
const zelf = document.querySelector('#zelf')

const typewriter = new Typewriter(text, {
    loop: false,
    delay: 50
})
    
let speech = new SpeechSynthesisUtterance()
speech.lang = 'nl'
speech.rate = .75
speech.volume = 1
speech.pitch = 1.5

window.addEventListener('load', () => {
    speech.text = 'Hoi! Wil je zelf gaan lezen of wil je dat iemand het voor je voorleest?'

    speechSynthesis.speak(speech)

    typewriter
    .typeString('Hoi! Wil je zelf gaan lezen of wil je dat iemand het voor je voorleest?')
    .start()
})

zelf.addEventListener('click', () => {
    typewriter
        .deleteAll(1)
        .typeString('Wat leuk dat je zelf gaat lezen! Waar wil je over gaan lezen?')
        .start()

    setTimeout(() => {
        speech.text = 'Wat leuk dat je zelf gaat lezen! Waar wil je over gaan lezen?'

        speechSynthesis.speak(speech)
    }, 1000)
})

const firstChoices = document.querySelectorAll('.firstChoices button')

console.log(firstChoices)

firstChoices.forEach(choice => {
    choice.addEventListener('mouseover', (e) => {
        speech.text = e.target.textContent

        window.speechSynthesis.speak(speech)
    })
})


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






