const allSpan = document.querySelectorAll('.inner-chatbot span')
const resultList = document.querySelector('#results')

const refreshFunc = () => {
    allSpan.forEach(span => {
        span.classList.remove('choices')
        span.classList.add('hidden')
    })

    resultList.innerHTML = ''
}

export {
    refreshFunc
}