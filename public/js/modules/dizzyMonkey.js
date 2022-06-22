const head = document.querySelector('.character .head')
const eyes = document.querySelectorAll('.character .eyes_area div')
const speech = new SpeechSynthesisUtterance()

// synchronisation of the utterance
speech.lang = 'BE-nl'
speech.rate = .75
speech.volume = .7
speech.pitch = 1

const dizzyMonkey = () => { // function that makes the monkey interactive
    head.classList.add('wobbly') // add the function wobbly to the head of the monkey, contains an animation which causes the head to tilt.

    speech.text = 'HAHA! Dat kietelt!' // text that the monkey should say

    speechSynthesis.speak(speech) // initiate the speech synthesis

    eyes.forEach(eye => { // iterate over both the eyes
        eye.classList.add('dizzy') // add dizzy class to the eyes of the monkey

        setTimeout(() => { // remove the dizzy and wobbly classes after 2 seconds so the animation stops after 2 seconds.
            eye.classList.remove('dizzy')
            head.classList.remove('wobbly')
        }, 2000)
    })
}

export {
    dizzyMonkey
}