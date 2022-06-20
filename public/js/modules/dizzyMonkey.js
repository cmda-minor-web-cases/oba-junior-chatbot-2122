const head = document.querySelector('.head')
const eyes = document.querySelectorAll('.eyes_area div')
const speech = new SpeechSynthesisUtterance()

speech.lang = 'BE-nl'
speech.rate = .75
speech.volume = 1
speech.pitch = 4

const dizzyMonkey = () => {
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
}

export {
    dizzyMonkey
}