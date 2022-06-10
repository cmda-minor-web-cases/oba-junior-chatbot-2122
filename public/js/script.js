const buttons = document.querySelectorAll('#controls li i')
const slider = document.querySelector('.slider-wrapper ul:first-of-type')
const chatbot = document.querySelector('.chatbutton')
const talk = document.querySelector('#talk')


let speech = new SpeechSynthesisUtterance()
speech.lang = 'nl'
speech.rate = .8
speech.volume = 1
speech.pitch = 1.5

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






