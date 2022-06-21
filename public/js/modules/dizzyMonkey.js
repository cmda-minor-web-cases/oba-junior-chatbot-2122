const head = document.querySelector('.character .head')
const eyes = document.querySelectorAll('.character .eyes_area div')
const speech = new SpeechSynthesisUtterance()

speech.lang = 'BE-nl'
speech.rate = .75
speech.volume = .7
speech.pitch = 1

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