const resultList = document.querySelector('#results')

const render = (results) => { // function that renders the results of the chatbot, parameter is the results from the API

    resultList.classList.remove('hidden') // results list no longer hidden

    results.forEach(book => { // iterate over all the books
        if (book.coverimages[0] !== undefined) { // check if the cover image is not undefined
        const item = document.createElement('a') // create an a element
        item.href = `boek/${book.id}` // link to the detail page

        const img = document.createElement('img') // create image element
        img.src = book.coverimages[0] // src of the image
        img.alt = `kaft van ${book.titles[1]}` // alt property of the image

        item.appendChild(img) // append the image in to the a element
        resultList.appendChild(item) // add the a element to the result list
        }
    })
}

export {
    render
}