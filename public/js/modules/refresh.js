const allSpan = document.querySelectorAll('.inner-chatbot span')
const resultList = document.querySelector('#results')

const refreshFunc = () => { // function that refreshes the chatbot
    allSpan.forEach(span => { // iterate over all the choices spans
        span.classList.remove('choices') // remove the choices class
        span.classList.add('hidden') // make all the spans hidden
    })

    resultList.innerHTML = '' // empty the results list
}

export {
    refreshFunc
}