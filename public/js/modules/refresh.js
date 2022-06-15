const allSpan = document.querySelectorAll('.inner-chatbot span')
const resultList = document.querySelector('#results')

const refreshFunc = () => {
    allSpan.forEach(span => {
        span.classList.remove('choices')
        span.classList.add('hidden')
    })

    resultList.innerHTML = ''

    allSpan[0].classList.remove('hidden')
    allSpan[0].classList.add('choices')
}

export {
    refreshFunc
}