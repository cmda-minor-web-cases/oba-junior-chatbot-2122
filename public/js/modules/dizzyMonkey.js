const head = document.querySelector('.character .head')
const eyes = document.querySelectorAll('.character .eyes_area div')
const speech = new SpeechSynthesisUtterance()

console.log(head)

speech.lang = 'BE-nl'
speech.rate = .75
speech.volume = .7
speech.pitch = 1

const dizzyMonkey = () => {
    head.classList.add('wobbly')

    speech.text = 'HAHA! Dat kietelt!'

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