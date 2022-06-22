const resultList = document.querySelector('#results')

const render = (results) => {

    resultList.classList.remove('hidden')

    results.forEach(book => {
        if (book.coverimages[0] !== undefined) {
        const item = document.createElement('a')
        item.href = `boek/${book.id}`

        const img = document.createElement('img')
        img.src = book.coverimages[0]
        img.alt = `kaft van ${book.titles[1]}`

        item.appendChild(img)
        resultList.appendChild(item)
        }
    })
}

export {
    render
}