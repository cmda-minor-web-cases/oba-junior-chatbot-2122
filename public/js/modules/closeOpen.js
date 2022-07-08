const chatbot = document.querySelector('.chatbot')
const hiddenElements = document.querySelectorAll('header, main')
const hiddenElArr = [...hiddenElements]
const body = document.querySelector('body')

import { refreshFunc } from "./refresh.js"

chatbot.style.display = 'none'

const closeOpen = (currentClass) => { // function that closes and opens the chatbot. Parameter is the class of the element that has been clicked
    if (currentClass === 'close') { // if the class is close
        chatbot.style.display = 'none' // then hide the chatbot
        body.style.overflowY = 'scroll' // and the scroll on the body should be back

        hiddenElArr.forEach(element => { // iterate over the header and main
            element.style.opacity = 1 // header and main should get 100% opacity again
        })

    } else if (currentClass === 'chatbutton') { // if the class is chatbutton
        chatbot.style.display = 'flex' // then give the chatbot a display flex
        body.style.overflowY = 'hidden' // make sure that the user can't scroll in the body

        hiddenElArr.forEach(element => { // iterate over the header and main
            element.style.opacity = .5 // header and main should get 50% opacity
        })

        refreshFunc() // call the refresh function
    }
}

export {
    closeOpen
}