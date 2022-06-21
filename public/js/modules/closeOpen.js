const chatbot = document.querySelector('.chatbot')
const hiddenElements = document.querySelectorAll('header, main')
const hiddenElArr = [...hiddenElements]
const body = document.querySelector('body')

import { refreshFunc } from "./refresh.js"

chatbot.style.display = 'none'

const closeOpen = (currentClass) => {
    if (currentClass === 'close') {
        chatbot.style.display = 'none'
        body.style.overflowY = 'scroll'

        hiddenElArr.forEach(element => {
            element.style.opacity = 1
        })

    } else if (currentClass === 'chatbutton') {
        chatbot.style.display = 'flex'
        body.style.overflowY = 'hidden'

        hiddenElArr.forEach(element => {
            element.style.opacity = .5
        })

        refreshFunc()
    }
}

export {
    closeOpen
}